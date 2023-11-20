import {useState} from "react";

export default function SideBar({onAddProject, projects, showProject}) {


    const projectList = projects.map((project) => {
        return <li>
            <button className="button" onClick={() => showProject(project.title)}>{project.title}</button>
        </li>

    })
    return (
        <aside className="sidenav">
            <h2>YOUR PROJECTS</h2>
            <button onClick={onAddProject}>+Add project</button>
            <div className="projectList">
            <ul>{projectList}</ul>
            </div>
        </aside>
    )
}