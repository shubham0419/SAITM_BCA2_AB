const canvas = document.getElementById('canvas')
const pen = canvas.getContext('2d');

// pen.fillRect(x-cordinate,y-cordinate,width,height);
// pen.fillRect(10, 10, 67, 67);
// pen.fillStyle = 'yellow';

// let startX;
// let startY;
// // initialse

// function init() {
//     startX = 10;
//     startY = 10;
//     pen.fillRect(startX, startY, 67, 67);
// }
// init();
// // draw
// function draw() {
//     pen.fillRect(startX, startY, 67, 67);
// }

// // update
// function update() {
//     startX += 67;
// }

// // loop
// function gameLoop() {
//     pen.clearRect(0, 0, 1200, 750);
//     update();
//     draw();
// }

// setInterval(gameLoop, 200);

const H = 750;
const W = 1200;
const ss = 67; //snake size
const food = {
    x: null,
    y: null
};
let gameOver = false;
let score = 0;

pen.fillStyle = 'yellow';

const snake = {
    initLen: 4,
    direction: 'right',
    cells: [],

    createSnake: function () {
        for (let i = 0; i < this.initLen; i++) {
            this.cells.push({ x: i, y: 0 });
        }
    },

    drawSnake: function () {
        for (let i = 0; i < this.cells.length; i++) {
            pen.fillRect(this.cells[i].x * ss, this.cells[i].y * ss, ss - 1, ss - 1);
        }
    },

    moveSnake: function () {
        let headX = this.cells[this.cells.length - 1].x;
        let headY = this.cells[this.cells.length - 1].y;

        let newX;
        let newY;
        // food check,score 
        if (headX === food.x && headY === food.y) {
            makeFood();
            score++;
            pen.fillRect(food.x * ss, food.y * ss, ss, ss);
        } else {
            this.cells.shift();
        }
        // --------Game over Check
        if (headX > W || headX < 0) {
            gameOver = true;
        }
        if (headY < 0 || headY > H) {
            gameOver = true;
        }

        if (this.direction === 'left') {
            newX = headX - 1;
            newY = headY;
        } else if (this.direction === 'up') {
            newX = headX;
            newY = headY - 1;
        } else if (this.direction === 'down') {
            newX = headX;
            newY = headY + 1;
        } else {
            newX = headX + 1;
            newY = headY;
        }

        this.cells.push({ x: newX, y: newY });

    }
}

function makeFood() {
    let rx = parseInt((Math.random() * (W - ss)) / ss);
    let ry = parseInt((Math.random() * (H - ss)) / ss);
    food.x = rx;
    food.y = ry;
}


document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        snake.direction = "right";
    } else if (e.key === 'ArrowLeft') {
        snake.direction = 'left';
    } else if (e.key === 'ArrowUp') {
        snake.direction = 'up';
    } else if (e.key === 'ArrowDown') {
        snake.direction = 'down';
    }
})

// initailisation
function init() {
    snake.createSnake();
    makeFood();
}
init();
// draw

function draw() {
    if (gameOver) {
        pen.font = '40px sans-serif';
        pen.fillStyle = 'red';
        pen.fillText('Game Over', 50, 100);
        clearInterval(id);
    }
    pen.clearRect(0, 0, W, H);

    pen.font = '40px sans-serif';
    pen.fillStyle = 'blue';
    pen.fillText(`Score: ${score}`, 50, 50);

    pen.fillStyle = 'yellow';
    snake.drawSnake();

    pen.fillStyle = 'blue';
    pen.fillRect(food.x * ss, food.y * ss, ss, ss);
}
// update

function update() {
    snake.moveSnake();
}

// loop
function gameloop() {
    draw();
    update();
}

const id = setInterval(gameloop, 200);