# WebSocket Routing with URL Parameters

## The Problem

You have one web app. You need it to control multiple separate installations. Each installation should only receive its own messages.

Think of it like a TV remote. One remote design, but each remote only controls its own TV. The question is: how does the TV know which remote is talking to it?

## The Solution: URL Parameters

A URL parameter is extra information tacked onto a web address. You've seen them before:

```
https://youtube.com/watch?v=abc123
                         ↑
                    This is a parameter
```

The `?` marks the start. Then `key=value` pairs follow. Multiple parameters use `&`:

```
https://site.com/page?id=1&color=blue
```

We use this same trick for WebSocket routing.

## How It Works

### One Address, Multiple Destinations

Your WebSocket server has one address:

```
wss://your-server.herokuapp.com
```

But you add a parameter to identify which installation:

```
wss://your-server.herokuapp.com/?installation=1
wss://your-server.herokuapp.com/?installation=2
wss://your-server.herokuapp.com/?installation=3
```

Same server. Different channels.

### The Flow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Web App        │     │  Server         │     │  TouchDesigner  │
│  ?id=1          │────▶│  Routes by      │────▶│  ?installation=1│
│                 │     │  installation   │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘

┌─────────────────┐            │               ┌─────────────────┐
│  Web App        │────────────┼──────────────▶│  TouchDesigner  │
│  ?id=2          │            │               │  ?installation=2│
└─────────────────┘            │               └─────────────────┘

┌─────────────────┐            │               ┌─────────────────┐
│  Web App        │────────────┴──────────────▶│  TouchDesigner  │
│  ?id=3          │                            │  ?installation=3│
└─────────────────┘                            └─────────────────┘
```

Messages from `?id=1` only reach `?installation=1`. Complete isolation.

## Implementation

### Step 1: The Web App (React)

Your web app reads the URL parameter and connects with it:

```javascript
useEffect(() => {
  // Read ?id= from the URL
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || '1';  // Default to '1' if not specified
  
  // Connect with the installation parameter
  connect(`wss://your-server.herokuapp.com/?installation=${id}`);
}, []);
```

When you visit:
- `https://yoursite.com/?id=1` → connects as installation 1
- `https://yoursite.com/?id=2` → connects as installation 2
- `https://yoursite.com/?id=3` → connects as installation 3

Every message you send includes which installation it's from:

```javascript
function handleButtonClick(name) {
  send({ 
    type: 'button', 
    installation: installationId,  // Always include this
    name: name 
  });
}
```

### Step 2: The Server (Node.js)

The server reads the parameter from the connection URL and groups clients:

```javascript
const installations = {
  '1': new Set(),
  '2': new Set(),
  '3': new Set()
};

wss.on('connection', (ws, req) => {
  // Extract ?installation= from the URL
  const params = new URLSearchParams(req.url.split('?')[1]);
  const installationId = params.get('installation') || '1';
  
  // Add this client to the right group
  ws.installationId = installationId;
  installations[installationId].add(ws);
  
  ws.on('message', (data) => {
    const message = JSON.parse(data);
    
    // Only send to clients in the same installation
    broadcastToInstallation(installationId, message);
  });
});

function broadcastToInstallation(installationId, message) {
  installations[installationId].forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
}
```

The server acts as a router. It looks at which installation each client belongs to and only delivers messages to that group.

### Step 3: TouchDesigner (Receiver)

In TouchDesigner, connect as a client with the installation parameter:

**WebSocket DAT settings:**
- Network Address: `wss://your-server.herokuapp.com/?installation=1`
- Connection Type: Client
- Active: On

For installation 2, use `?installation=2`. For 3, use `?installation=3`.

**DAT Execute callback to handle messages:**

```python
def onReceive(dat, rowIndex, message, bytes, peer):
    import json
    
    data = json.loads(message)
    
    if data['type'] == 'button':
        print(f"Button pressed: {data['name']}")
        
    elif data['type'] == 'slider':
        print(f"Slider value: {data['value']}")
        
    elif data['type'] == 'color':
        print(f"Color - H: {data['h']}, S: {data['s']}")
```

## Your Setup

For your specific project:

**Web App URLs:**
```
https://leonhybrid.github.io/Websocket/?id=1
https://leonhybrid.github.io/Websocket/?id=2
https://leonhybrid.github.io/Websocket/?id=3
```

**TouchDesigner WebSocket addresses:**
```
wss://hybrid-websocket-df7faa7008b8.herokuapp.com/?installation=1
wss://hybrid-websocket-df7faa7008b8.herokuapp.com/?installation=2
wss://hybrid-websocket-df7faa7008b8.herokuapp.com/?installation=3
```

## Why This Works

The URL parameter is just text. It travels with the connection request. The server reads it once when the connection opens, then remembers which group that client belongs to.

No extra servers. No extra deployments. No extra ports. One address, infinite channels.

The parameter acts like a room number in a hotel. Everyone enters through the same lobby, but messages only go to your room.

## Common Mistakes

**Forgetting the `?`**
```
❌ wss://server.com/installation=1
✅ wss://server.com/?installation=1
```

**Using `&` for the first parameter**
```
❌ wss://server.com/&installation=1
✅ wss://server.com/?installation=1
```

**Mismatched parameter names**
```
Web app:      ?id=1
Server:       ?installation=1  ← These must match on server side
TouchDesigner: ?installation=1
```

Your server needs to handle both or use consistent naming.

## Testing

1. Open two browser tabs
2. Tab 1: `https://yoursite.com/?id=1`
3. Tab 2: `https://yoursite.com/?id=2`
4. Open browser console (F12) in both
5. Click buttons in Tab 1 → Only Tab 1's TouchDesigner should respond
6. Click buttons in Tab 2 → Only Tab 2's TouchDesigner should respond

If both respond to both, your server isn't routing correctly.

## Summary

| Component | URL | Purpose |
|-----------|-----|---------|
| Web App | `yoursite.com/?id=1` | Sends messages tagged with installation ID |
| Server | `server.com` | Routes messages to correct installation group |
| TouchDesigner | `server.com/?installation=1` | Receives only messages for its installation |

One deployment. Multiple isolated channels. The `?parameter=value` pattern makes it possible.
