export function domParser(topDisplayScreen){
    let parser = new DOMParser();
    let parsedContent = parser.parseFromString(topDisplayScreen.innerHTML,'text/html')
    return parsedContent.body.textContent;
}