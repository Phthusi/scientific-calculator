export class Navigation{
    constructor(cursor, screenDisplayer){
        this.cursor = cursor;
        this.screenDisplayer = screenDisplayer;
    }
    
    navigate(direction){
        let screenContent = this.screenDisplayer.innerHTML;
        let screenContentList = [...screenContent];
        let cursor = screenContentList[this.cursor.cursorIndex];
        
        this.cursor.stopBlinking()
        if(direction==='left' && this.cursor.cursorIndex>0){
            screenContentList[this.cursor.cursorIndex] = screenContentList[this.cursor.cursorIndex-1];
            screenContentList[this.cursor.cursorIndex-1] = cursor;
            this.cursor.cursorIndex -= 1;

        }else if(direction === 'right'&& this.cursor.cursorIndex<screenContent.length-1){
            this.cursor.cursorIndex += 1;
        }
        this.screenDisplayer.innerHTML = screenContentList.join("");
        this.cursor.blink();
    }
}