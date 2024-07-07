import { Cursor } from "./cursor.js";
import { Navigation} from "./navigation.js";

let topDisplayScreen = document.querySelector('.top-display-screen');
let answerScreen = document.querySelector('.ans-screen');
let cursor = new Cursor(topDisplayScreen);
let navigator = new Navigation(cursor, topDisplayScreen);
let buttons = document.querySelectorAll('button');
let directions = ['left','right','up','down'];
let threeLetterFunctions = ['Math.cos()','Math.sin()','Math.tan()','Math.log()'];
let twoLetterFunctions   = ['ln('];
let simpleSymbols = [...'0123456789.()','*10**'];
let operators     = ['+','*','/','-'];
let calcfunctions = ['del','clear','off','shift','mode','ans'];
let nav = ['left','right','up','down'];
let history = [];
let hasError = false;


buttons.forEach((button)=>{
    button.addEventListener("click",(event)=>{
        answerScreen.innerHTML = "";
        let input = event.target.value;
        console.log(input);
        if(hasError){
            hasError = false;
        }else if(directions.includes(input)){
            navigator.navigate(input);
        }else if([...operators,...simpleSymbols].includes(input)){
            cursor.stopBlinking()
            let screenContent = topDisplayScreen.innerHTML;
            let screenContentList = [...screenContent];
            screenContentList.splice(cursor.cursorIndex, 0, input);
            topDisplayScreen.innerHTML = screenContentList.join('');
            cursor.cursorIndex += 1;
            cursor.blink();
        }else if(threeLetterFunctions.includes(input)){
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
        }else if(input === "="){
            let htmlContent = topDisplayScreen.innerHTML;
            try{
                answerScreen.innerHTML = eval(htmlContent.replace('|',""));
            }catch(Exception){
                answerScreen.innerHTML = `
                <div class='error-message'>
                    <p></p>
                    <p >${Exception}</p>
                    <p>[AC]          : Cancel</p>
                    <p>
                    [<][>]        : Goto
                    </p>
                </div>
                `;
                hasError = true;
            }
        }

    });
});