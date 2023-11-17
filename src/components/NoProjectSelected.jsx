export default function NoProjectSelected({onCreateNewProject}) {
    return (
        <div className="main">
            <img src="logo.png"></img>
            <h3>No Project Selected</h3>
            <p>Select a project or get started with a new one</p>
            <button onClick={onCreateNewProject} className="button">Create new project</button>
        </div>
    )
}