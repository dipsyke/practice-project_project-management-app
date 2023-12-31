import {useState} from "react";

export default function Project({project, addTask, clearTask}) {
    const [descriptionOfNewTask, setDescriptionOfNewTask] = useState("")

    const taskList = project.tasks.map((task) => {
        return <li>
            {task.description}
            <button id="clearButton" onClick={()=>{clearTask(task.description)}}>Clear</button>
        </li>

    })


    return (
        <div className="main ">
            <h2>{project.title}</h2>
            <p>{project.dueDate}</p>
            <p>{project.description}</p>
            <br/>
            <hr/>
            <br/>
            <h2>Tasks</h2>
            <br/>

            <input type="text" value={descriptionOfNewTask} onChange={(event) => {
                setDescriptionOfNewTask(event.target.value)
            }}></input>
            <button onClick={() => {
                addTask({
                    description: descriptionOfNewTask
                })
                setDescriptionOfNewTask("")
            }}>Add Task
            </button>
            <br/>
            <br/>
            <ul>
                {taskList}
            </ul>

        </div>
    )
}