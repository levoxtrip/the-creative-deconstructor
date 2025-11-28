import { useEffect,useRef } from "react";
import p5 from 'p5'

function P5Sketch({code}){
    const containerRef = useRef(null);
    const sketchRef = useRef(null);

    useEffect(()=>{
        //clean up previous sketch
        if(sketchRef.current){
            sketchRef.current.remove()
        }

        //create new sketch
        try{
            const sketch = (p) => {
                const userCode = new Function('p',code)
                userCode(p)
            }
            sketchRef.current = new p5(sketch,containerRef.current)
        } catch (error) {
            console.error('Sketch error:',error)
        }

        //clean up on unmount
        return () => {
            if(sketchRef.current){
                sketchRef.current.remove()
            }
        }
    },[code])

    return (
        <div className="p5-container" ref={containerRef}></div>
    )
}
export default P5Sketch