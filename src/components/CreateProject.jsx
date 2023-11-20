import {useState} from "react";

export default function CreateProject({onCancel, onSave}) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [dueDate, setDueDate] = useState("")

    function handleSaveClick() {
        onSave({
            title: title,
            description: description,
            dueDate: dueDate,
            tasks:[]
        })
    }

    return (
        <div className="main">
            <h2>Create a new project</h2>
            <br />
            <div>
                <label>Title</label>
                <input type="text" name="title" required value={title}
                       onChange={(event) => setTitle(event.target.value)}></input>
            </div>
            <div>
                <label>Description</label>
                <input type="text" name="description" required value={description}
                       onChange={(event) => setDescription(event.target.value)}></input>
            </div>
            <div>
                <label>Due Date</label>
                <input type="text" name="date" required value={dueDate}
                       onChange={(event) => setDueDate(event.target.value)}></input>
            </div>
            <div className="saveCancel">
                <button className="saveButton" onClick={onCancel}>Cancel</button>
                <button className="saveButton" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}