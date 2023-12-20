var allTd = document.querySelectorAll('#container td');

var screen = document.querySelector('#container input')

for (let i = 0; i < allTd.length; i++) {
    allTd[i].addEventListener('click', (e) => {
        var text = e.target.innerText;

        if (text === '=') {
            try {
                screen.value = eval(screen.value);
            } catch (e) {
                alert('Invalid operation')
                screen.value = '';
            }

        } else if (text === 'x') {
            screen.value += '*';
        }
        else if (text === 'C') {
            screen.value = '';
        } else if (text === 'x2') {
            screen.value += '**'
        } else {
            screen.value += text;
        }
    })
}

