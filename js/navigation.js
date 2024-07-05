export class Navigation{
    constructor(cursor, screenDisplayer){
        this.cursor = cursor;
        this.screenDisplayer = screenDisplayer;
    }
    
    navigate(direction){
        let screenContent = this.screenDisplayer.innerHTML;
        this.cursor.stopBlinking()
        if(direction==='left' && this.cursor.cursorIndex>0){
            this.cursor.cursorIndex -= 1;
        }else if(direction === 'right'&& this.cursor.cursorIndex<screenContent.length-1){
            this.cursor.cursorIndex += 1;
        }
        this.cursor.blink();
    }
}