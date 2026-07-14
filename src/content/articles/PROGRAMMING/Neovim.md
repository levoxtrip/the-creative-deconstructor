# Neovim
To start neovim from the shell type `nvim FILENAME`
`ESC + u` - undo

## Help
`ENTER` on links opens linked help section
`K` on anyword to find its  documentation

`:q` to close help window

`:help` to open the help window

## Moving the cursor
To move the cursor you can press different keys
`k` move up
`j`move down
`h` move left
`l` move right

## Exiting Neovim
With `Esc + :q!` you can quit the editor and discard any changes you have made

## Text editing
### Deletion
`x` to delete character under the cursor

### Insertion
use `:wq` to write a file and quit.

## Deletion commands
Move cursor to  the beginning of a word that needs deleted and type `dw`

Type `d$` to delete to the end of the line

## On operators and motions
Many commmands that change text are made from *operator* and *motion*

`d` delete oprator
`w` motion - until the start of the next word
`e` motion - to the end of the current word, including last character
`$` motion - to the end of the line, including last character
`w` move cursor to the beginning of the word
`b` motion - to the beginning of the current word, including first character
`e` move to the end of the current word

### using count for a motion
Typing a number before a motion repeats it that many times.

`2w` moves the cursor two words forward
`3e` moves the cursor to the end of the third word.
`0` move to the start of the line 

### using count to delete more
`Typing a number with an operator repeats it that many times`

`d number motion`
`d 2 w` delete the two words

### operating on line
`dd` to delete a whole line

`2dd` to delete 2 lines

## Undo command
`u` to undo last command, `U` to undo all changes on a line

`ctrl+r` redo command

## Put command
So if you delete a line with `dd` is is put into a register and
`p` puts previously deleted text *after* the cursor

`P` puts the deleted line *before* the cursor

## Replace command
With `rx` you replace the character under the cursor by `x`. This works for every character.

## Change Operator
To change until the end of the word type `ce` and the correct following letters. It deletes the word and places you in *insert* mode.

The *change* operator works with same way as delete
c   number  motion

`w` word
`$` end of line

## Cursor location and file status
Type `Ctrl+g` to show location in a file and the file status

Type `{Count}G` to move to line *count* in the file.

`G` to move to the bottom of the file
`gg` to move to the start of the file

Type number of line you were on and `G`. This will return you to the line your were on when you pressed `Ctrl+g`.

## Search command
`/` by phrase to search for
To search for phrase in backward direction `?`
Hit `Enter` afterwards so you can search for the same phrase again type `n`, to search in the opposite direction `N`

To go back to where you cam from press `Ctrl+o`
`Ctrl+i` goas forward

## Matching parentheses search
Type `%` fo find a matchin ),],} - super useful in debugging a program with unmatched parenthesis

## Substitute command
Type `:s/old/new/g` to substitute "new" for "old"

`:/old/new/` only substitutes the first match of the word. Adding the `g`flag means to substitute globally in the line.

To change every occurence of a character string between two lines
type `:#,#s/old/new/g` with `#` the line number of the range of lines where you want to substitute.
`:1,4s/old/new/g`

Type `:%s/old/new/gc` to find every occurence in the whole file, with a prompt whether to substitute or not.

## Execute external command
`:!` followed by external command to execute (shell) command

`:ls!`

## More on writing files
To save the changes to the text type `:w`

to get a listing of your directory type `:!dir`

To save a file that not exists `:w FILENAME`

To delete a file `:!del FILENAME`

## Selecting text to write

To save a selected part of the file into a new file type `v motion :w FILENAME`

Pressing `v` starts visual selection, where you can move the cursor around to change the size of the selection.
With `V` you can select the whole line.
You then can for example delete the selected text with `d`

## Retrieving and merging files
To retrieve contents of a file type `:r FILENAME`

To read the output of an external command `:r !dir` reads the output of the ls commond and puts it below the cursor.

## The open command
Type `o` to open a line below the cursor and place you in *Insert* mode.
Type `O` to open a line above the cursor.

## Append command
Type `a` to insert text AFTER the cursor.

`a`,`i` and `A` all go to the same Insert mode but position the character differently

## Another way to replace
Type `R` to replace more than one character

## Copy and Paste Text
Start visual mode with `v`, move the cursor to the position and type
`y` to copy text
With `yw` you can yank one word.

`p` to put it
`P` puts the yanked word *before* the cursor instead of after.

## Set Option

# Explorer View
## Create new directory
`d`

## Delete Directory/File
`D`

## Rename
`R`

## Write new File in Explorer view
`% Filename`




---------------------------------------------------------------------
To go to the normal mode : `ESC`
Close it `:qa`
Write/Save file `:w`
Insert mode `i`

Open Config
`:e $MYVIMRC`

Paste Something
`"+p`


Delete a whole line in normal mode `dd`

`dG` from cursor to end of file
`dgg`from cursor to start of file

delete specific line by number
`:5d`

`:5,10d` delete a range of lines

delete from cursor back to start of line
`ctrl+u`

delete word just before the cursor
`ctrl+w`

Jump to line `: linenumber`

Jump  to bottom of File `G`

undo changes
`u`

redo `ctrl+r`

end of line `$`


