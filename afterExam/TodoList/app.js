
var form = document.getElementById('addForm');

var taskList = document.getElementById('items');

// ------------------------------ ADD Task
form.addEventListener('submit', (e) => {
    e.preventDefault();  // to prevent loading of website
    // console.log(e.target.children[0].value);
    var task = e.target.children[0].value;

    var li = document.createElement('li');
    li.setAttribute('class', 'list-group-item');
    li.innerText = task;

    var btn = document.createElement('button');
    btn.setAttribute('class', 'btn list-btn btn-sm float-right delete');
    btn.innerText = 'X';

    li.append(btn);
    taskList.prepend(li);

    e.target.children[0].value = '';
})

// ----------------------------------- Delete Task

taskList.addEventListener('click', (e) => {
    var dlt = e.target;

    if (dlt.classList.contains('delete')) {
        dlt.parentElement.remove();
    }
})

// --------------------------------- Search Task

const filter = document.getElementById('filter');

filter.addEventListener('keyup', (e) => {
    var searchText = e.target.value;
    // Dynamic elements can't be targeted So we have to target their Parents
    var tasks = taskList.children;

    for (let task of tasks) {
        if (task.innerText.includes(searchText)) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    }
})

// ------------------------------------- Theme

const theme = document.getElementById('theme');
const body = document.getElementsByTagName('body')[0];

theme.addEventListener('click', (e) => {
    var themeColor = e.target.getAttribute('id');
    body.setAttribute('class', themeColor);

    // removing Active class
    for (let color of theme.children) {
        color.setAttribute('class', 'dropdown-item');
    }

    // Adding active Class in Li
    e.target.classList.add('active');
})

taskList.addEventListener('click', (e) => {
    if (e.target.getAttribute('id') === 'update') {
        var updateForm;
        var input;
        // putting input in form
        updateForm.append(input);
        // removing task from list 
        e.target.parentElement.innerText = '';
        // pushing forrm in list
        e.target.parentElement.prepend(updateForm);

        // event check on form
        updateForm.addEventListener('submit', () => {
            updateTask = e.target.children[0].value;
            e.target.parentElement.innerText = updateTask;
            e.target.children[0].remove();
        })
    }
})