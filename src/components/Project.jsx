import {useState} from "react";

export default function Project({project}) {
    const [tasks, setTasks] = useState([{name: "task1"}])

    const [inputTaskName, setInputTaskName] = useState("")

    function addTask(newTask) {
        setTasks((prevState) => {
            return [
                ...prevState,
                newTask
            ]
        })

        setInputTaskName("")


    }


    const taskList = tasks.map((task) => {
        return <li>
            {task.name}
        </li>

    })


    return (
        <div className="main">
            <h1>{project.title}</h1>
            <p>{project.dueDate}</p>
            <p>{project.description}</p>
            <br/>
            <hr/>
            <br/>
            <h2>Tasks</h2>
            <div>
                <input type="text" value={inputTaskName} onChange={(event)=>{setInputTaskName(event.target.value)}}></input>
                <button onClick={() => addTask({
                    name: inputTaskName
                })}>Add Task</button>
            </div>
            <ul>
                {taskList}
            </ul>

        </div>
    )
}