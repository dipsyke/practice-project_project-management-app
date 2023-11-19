import {useState} from "react";

export default function Project({project, addTask}) {


    const [descriptionOfNewTask, setDescriptionOfNewTask] = useState("")




    const taskList = project.tasks.map((task) => {
        return <li>
            {task.description}
        </li>

    })


    return (
        <div className="main ">
            <h1>{project.title}</h1>
            <p>{project.dueDate}</p>
            <p>{project.description}</p>
            <br/>
            <hr/>
            <br/>
            <h2>Tasks</h2>
            <div>
                <input type="text" value={descriptionOfNewTask} onChange={(event)=>{setDescriptionOfNewTask(event.target.value)}}></input>
                <button onClick={() => addTask({
                    description: descriptionOfNewTask
                })}>Add Task</button>
            </div>
            <ul>
                {taskList}
            </ul>

        </div>
    )
}