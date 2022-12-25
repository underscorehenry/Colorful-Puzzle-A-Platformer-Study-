let player = document.getElementById('player');
let playerX = 650;
let playerY = 300;
let move = 5;
let inventory = [];
let block = {
        x: 500,
        y: 100,
        w: 50,
        h: 50,
        element: document.getElementById('block')
}

let redBlock = {
        x: parseInt(document.getElementById('redBlock').style.left),
        y: parseInt(document.getElementById('redBlock').style.top),
        w: parseInt(document.getElementById('redBlock').style.width),
        h: parseInt(document.getElementById('redBlock').style.height),
        element: document.getElementById('redBlock'),
        color: "rgb(219, 1, 1)",
        altColor: "rgb(124, 1, 1)"
}

let blueBlock = {
        x: parseInt(document.getElementById('blueBlock').style.left),
        y: parseInt(document.getElementById('blueBlock').style.top),
        w: parseInt(document.getElementById('blueBlock').style.width),
        h: parseInt(document.getElementById('blueBlock').style.height),
        element: document.getElementById('blueBlock'),
        color: "rgb(1, 88, 219)",
        altColor: "rgb(2, 37, 90)"
}

let purpleBlock = {
        x: parseInt(document.getElementById('purpleBlock').style.left),
        y: parseInt(document.getElementById('purpleBlock').style.top),
        w: parseInt(document.getElementById('purpleBlock').style.width),
        h: parseInt(document.getElementById('purpleBlock').style.height),
        element: document.getElementById('purpleBlock'),
        color: "rgb(113, 0, 141)",
        altColor: "rgb(61, 0, 77)"
}


document.addEventListener('keydown', event => {
        document.getElementById('log').style.display = 'none';
     let name = event.key
     if(name === 'ArrowRight') {
        movePlayerToRight();
     }

     else if(name === 'ArrowLeft') {
        movePlayerToLeft();
     }

     else if(name === 'ArrowDown') {
        movePlayerDown();
     }

     else if(name === 'ArrowUp') {
        movePlayerUp();
     }

     else if(name === 'c') {
        putDownBlock(inventory[0], inventory[1]);
        inventory.shift();
        inventory.shift();
     }

     if(playerX > block.x - block.w -1 && playerX < block.x + block.w +1 && playerY > block.y - block.h -1 && playerY < block.y + block.h +1
        || playerX > redBlock.x - redBlock.w -1 && playerX < redBlock.x + redBlock.w +1 && playerY > redBlock.y - redBlock.h -1 && playerY < redBlock.y + redBlock.h +1
        || playerX > blueBlock.x - blueBlock.w -1 && playerX < blueBlock.x + blueBlock.w +1 && playerY > blueBlock.y - blueBlock.h -1 && playerY < blueBlock.y + blueBlock.h +1
        || playerX > purpleBlock.x - purpleBlock.w -1 && playerX < purpleBlock.x + purpleBlock.w +1 && playerY > purpleBlock.y - purpleBlock.h -1 && playerY < purpleBlock.y + purpleBlock.h +1) {
        move = move * -3;
     }
     else {
        move = 5;
     }

     if(playerX > block.x - block.w -20 && playerX < block.x + block.w +20 && playerY > block.y - block.h -20 && playerY < block.y + block.h +20) {
        document.getElementById('block').style.backgroundColor = 'rgb(0, 80, 14)';
        document.addEventListener('keydown', event1 => {
                if(event1.key === 'x') {
                        pickUpBlock(block.element, block);  
                }
        });
     }
     else {
        document.getElementById('block').style.backgroundColor = 'rgb(0, 141, 24)';
        
     }

     if(playerX > redBlock.x - redBlock.w -20 && playerX < redBlock.x + redBlock.w +20 && playerY > redBlock.y - redBlock.h -20 && playerY < redBlock.y + redBlock.h +20) {
        document.getElementById('redBlock').style.backgroundColor = redBlock.altColor;
        document.addEventListener('keydown', event1 => {
                if(event1.key === 'x') {
                        pickUpBlock(redBlock.element, redBlock);  
                }
        });
     }
     else {
        document.getElementById('redBlock').style.backgroundColor = redBlock.color;
        
     }

     if(playerX > blueBlock.x - blueBlock.w -20 && playerX < blueBlock.x + blueBlock.w +20 && playerY > blueBlock.y - blueBlock.h -20 && playerY < blueBlock.y + blueBlock.h +20) {
        document.getElementById('blueBlock').style.backgroundColor = blueBlock.altColor;
        document.addEventListener('keydown', event1 => {
                if(event1.key === 'x') {
                        pickUpBlock(blueBlock.element, blueBlock);  
                }
        });
     }
     else {
        document.getElementById('blueBlock').style.backgroundColor = blueBlock.color;
        
     }

     if(playerX > purpleBlock.x - purpleBlock.w -20 && playerX < purpleBlock.x + purpleBlock.w +20 && playerY > purpleBlock.y - purpleBlock.h -20 && playerY < purpleBlock.y + purpleBlock.h +20) {
        document.getElementById('purpleBlock').style.backgroundColor = purpleBlock.altColor;
        document.addEventListener('keydown', event1 => {
                if(event1.key === 'x') {
                        pickUpBlock(purpleBlock.element, purpleBlock);  
                }
        });
     }
     else {
        document.getElementById('purpleBlock').style.backgroundColor = purpleBlock.color;
        
     }



})

function movePlayerToRight() {
        playerX = playerX + move;
        player.style.left = (playerX) + "px";
        if(playerX > 1300) {
                playerX = playerX - move;
        }
}

function movePlayerToLeft() {
        playerX = playerX - move;
        player.style.left = (playerX) + "px";
        if(playerX < 1) {
                playerX = playerX + move;
        }
}

function movePlayerDown() {
        playerY= playerY + move;
        player.style.top = (playerY) + "px";

        if(playerY > 600) {
                playerY = playerY - move;
        }
}

function movePlayerUp() {
        playerY = playerY - move;
        player.style.top = (playerY) + "px";
        if(playerY < 1) {
                playerY = playerY + move;
        }
}

function pickUpBlock(coloredBlock, blockObject) {
        if(inventory.length === 0) {

                if(playerX > blockObject.x - blockObject.w -20 && playerX < blockObject.x + blockObject.w +20 && playerY > blockObject.y - blockObject.h -20 && playerY < blockObject.y + blockObject.h +20) {
                        coloredBlock.style.display = 'none'
                        blockObject.x = 0;
                        blockObject.y = 0;
                        blockObject.w = 0;
                        blockObject.h = 0;
                        inventory.push(coloredBlock);
                        inventory.push(blockObject);
                     }

        }

        else {

        }
}

function putDownBlock(coloredBlock, blockObject) {
        coloredBlock.style.top = (playerY) + 'px';
        coloredBlock.style.left = (playerX + 50) + 'px';

        blockObject.x = parseInt(coloredBlock.style.left);
        blockObject.y = parseInt(coloredBlock.style.top);
        blockObject.w = parseInt(coloredBlock.style.width);
        blockObject.h = parseInt(coloredBlock.style.height);

        coloredBlock.style.display = 'inline';

        if(redBlock.x > 500 && redBlock.x < 500 + 400 && redBlock.y > 358 && redBlock.y < 359 + 298 
                && purpleBlock.x > 0 && purpleBlock.x < 0 + 1366 && purpleBlock.y > 0 && purpleBlock.y < 0 + 360 
                && blueBlock.x > 900 && blueBlock.x < 900 + 466 && blueBlock.y > 358 && blueBlock.y < 358 + 298 
                && block.x > 900 && block.x < 900 + 466 && block.y > 358 && block.y < 358 + 298) {
                        document.getElementById('log').style.display = 'inline';
                        document.getElementById('log').innerHTML = "Congratulations you won!";
                       let props = document.querySelectorAll('.prop');
                       for(let i = 0; i < props.length; i++) {
                        props[i].style.display = 'none';
                       }
                }
}


