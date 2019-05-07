import './Todo.css'

var state = {
    task: '',
    tasks: []
}

tag Todo
    def add
        state:tasks.push(state:task)
        state:task = ''
    def render
        <self>
            <form.form :submit.prevent.add>
                <input.form-field[state:task] placeholder="Type here a new task..." type="text">
                <button.form-btn type="submit"> 'Add'
            <ul.list> for task in state:tasks
                <li.list-item> task

export Todo
