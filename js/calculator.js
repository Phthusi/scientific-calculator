import { Cursor } from "./cursor.js";
import { Navigation} from "./navigation.js";

let topDisplayScreen = document.querySelector('.top-display-screen');
let cursor = new Cursor(topDisplayScreen);
let navigator = new Navigation(cursor, topDisplayScreen);
let buttons = document.querySelectorAll('button');
let directions = ['left','right','up','down'];
let threeLetterFunctions = ['cos(','sin(','tan(','log('];
let twoLetterFunctions   = ['ln('];
let simpleSymbols = [...'0123456789.','*10**'];
let operators     = ['+','*','/','-','='];
let calcfunctions = ['del','clear','off','shift','mode','ans'];
let nav = ['left','right','up','down'];


buttons.forEach((button)=>{
    button.addEventListener("click",(event)=>{
        let input = event.target.value;
        // console.log(input);
        if(directions.includes(input)){
            navigator.navigate(input);
        }else if([...operators,...simpleSymbols].includes(input)){
            cursor.stopBlinking()
            let screenContent = topDisplayScreen.innerHTML;
            let screenContentList = [...screenContent];
            screenContentList.splice(cursor.cursorIndex, 0, input);
            topDisplayScreen.innerHTML = screenContentList.join('');
            cursor.cursorIndex += 1;
            cursor.blink();
        }else if(input==='del'){
            if(cursor.cursorIndex>0){
                cursor.stopBlinking();
                let screenContent = topDisplayScreen.innerHTML;
                let screenContentList = [...screenContent];
                screenContentList.splice(cursor.cursorIndex-1, 1);            
                cursor.cursorIndex -= 1;   
                topDisplayScreen.innerHTML = screenContentList.join('');
                cursor.blink();
            }
        }else if(input==='clear'){
            cursor.stopBlinking()
            topDisplayScreen.innerHTML = "";
            cursor.cursorIndex = 0;  
            cursor.blink();
        }

    });
});