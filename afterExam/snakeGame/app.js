const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');

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

        if (this.direction === 'left') {
            newX = headX - 1;
            newY = headY;
            if (newX * ss < 0) {
                gameOver = true
            }
        } else if (this.direction === 'up') {
            newX = headX;
            newY = headY - 1;
            if (newY * ss < 0) {
                gameOver = true;
            }
        } else if (this.direction === 'down') {
            newX = headX;
            newY = headY + 1;
            if (newY * ss > H) {
                gameOver = true;
            }
        } else {
            newX = headX + 1;
            newY = headY;
            if (newX * ss > W) {
                gameOver = true;
            }
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
// draw

function draw() {
    if (gameOver) {
        pen.font = '40px sans-serif';
        pen.fillStyle = 'red';
        pen.fillText('Game Over', 50, 100);
        clearInterval(id);
        return;
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


// New Game

let id;
const btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', () => {
    // reset
    pen.clearRect(0, 0, W, H);
    snake.cells.length = 0;
    score = 0;
    gameOver = false;
    snake.direction = 'right';
    // new game start 

    init();
    id = setInterval(gameloop, 200);
})

