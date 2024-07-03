export class Cursor{
    constructor(){
        this.cursor = '|';
        this.cursorIndex = 0;
        this.cursorInterval;
        this.displayScreen = document.querySelector('.top-display-screen');
        this.blink();
    }

    changeCursor(){
        this.cursor = this.cursor ? "": "|";
    }

    putCursorToIndex(text){
        let myText = [...text];
        myText.splice(this.cursorIndex,1,this.cursor);
        return myText.join('');
    }

    blink(){ 
        this.cursorInterval = setInterval(()=>{
            this.displayScreen.innerHTML = this.putCursorToIndex(this.displayScreen.innerText);
            this.changeCursor();
        },850);
    }

    stop_blink(){
        clearInterval(this.cursorInterval);
    }
}