import { Cursor } from "./cursor.js";
import { Navigation} from "./navigation.js";

let topDisplayScreen = document.querySelector('.top-display-screen');
let cursor = new Cursor(topDisplayScreen);
let navigator = new Navigation(cursor, topDisplayScreen);
let buttons = document.querySelectorAll('button');
let directions = ['left','right','up','down'];
let threeLetterFunctions = ['cos(','sin(','tan(','log('];
let twoLetterFunctions   = ['ln('];
let simpleSymbols = [...'0123456789.','x10'];
let operators     = ['+','*','/','-','='];
let calcfunctions = ['del','clear','off','shift','mode','ans'];
let nav = ['left','right','up','down'];


buttons.forEach((button)=>{
    button.addEventListener("click",(event)=>{
        let input = event.target.value;
        if(directions.includes(input)){
            navigator.navigate(input);
        }
        if([...operators,...simpleSymbols].includes(input)){
            cursor.stopBlinking()
            let screenContent = topDisplayScreen.innerText;
            let screenContentList = [...screenContent];
            screenContentList.splice(cursor.cursorIndex, 0, input);
            topDisplayScreen.innerHTML = screenContentList.join('');
            cursor.cursorIndex += 1;
            cursor.blink();
        }
    });
});