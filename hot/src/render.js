export default function render(str) {
    //document.write(str);
    const mainNode = document.getElementById('main');
    if(mainNode)
        mainNode.innerHTML = str; 
    console.log(str);
}