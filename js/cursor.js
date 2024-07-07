export class Cursor{
    constructor(topDisplayScreen){
        this.cursor = '|';
        this.displayScreen = topDisplayScreen;
        this.cursorIndex = 0;
        this.cursorInterval;
        this.displayScreen = document.querySelector('.top-display-screen');
        this.blink();
    }

    changeCursor(){
        this.cursor = this.cursor ? "": "|";
    }

    putCursorToIndex(text){
        let myText = [...text.replace('|','')];
        if(this.cursor) 
            myText.splice(this.cursorIndex,0,'|')
        return myText.join('')
    }

    blink(){ 
        this.cursorInterval = setInterval(()=>{
            this.displayScreen.innerHTML = this.putCursorToIndex(this.displayScreen.innerText);
            this.changeCursor();
        },600);
    }

    stopBlinking(){
        clearInterval(this.cursorInterval);
    }

    
}