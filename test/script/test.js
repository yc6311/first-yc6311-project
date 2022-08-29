const container = document.querySelector(".image-container");
const startButton = document.querySelector(".start-button");
const gameText = document.querySelector(".game-text");
const playTime = document.querySelector(".play-time");

const tileCount = 16;
let tiles = [];
const dragged = {
    el : null,
    class: null,
    index: null,
}

setGame();

function setGame(){
    container.innerHTML = "";
    tiles = createImageTiles();

    tiles.forEach(tile => container.appendChild(tile));
    setTimeout(()=> {
        container.innerHTML = "";
       shuffle(tiles).forEach(tile => container.appendChild(tile));
    }, 3000);

}
function createImageTiles(){
    const tempArray = [];
    Array(tileCount).fill().forEach((_,i) => {
        const li = document.createElement("li");
        li.setAttribute('data-index',i);
        li.setAttribute('draggable','true');
        li.classList.add(`list${i}`);
        tempArray.push(li);
    })
    return tempArray;
}
function shuffle(array) {
    let index = array.length -1;
    while (index > 0){
        const randomIndex = Math.floor(Math.random()*(index+1));
        [array[index],array[randomIndex]] = [array[randomIndex],array[index]];
        index--;
    }
    return array;
}
// events
container.addEventListener('dragstart' , e=> {
    consol.log(e);
    const obj = e.target;
    dragged.el = obj;
    dragged.class = obj.className;
    console.log(typeof obj.parentNode.children);
    dragged.index = [ ...obj.parentNode.children].indexOf(obj);

})
container.addEventListener('dragover' , e=> {
    e.preventDefault();
})
container.addEventListener('drop' , e => {
    console.log('dropped');
    const obj = e.target;
    console.log({obj});
})