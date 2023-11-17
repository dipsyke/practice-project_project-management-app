import SideBar from "./components/SideBar.jsx";
import {useState} from "react";
import CreateProject from "./components/CreateProject.jsx";
import Home from "./components/Home.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import Project from "./components/Project.jsx";

function App() {


    const [lastProjectTitle, setLastProjectTitle] = useState(null)

    const [pageIdToDisplay, setPageIdToDisplay] = useState("Home")


    const [projects, setProjects] = useState(
        [{
            title: "Example 1",
            description: "Example 1",
            dueDate: "Example 1"
        }]
    )

    function handleOnSave(newProject) {
        setPageIdToDisplay("NoProjectSelected")

        setProjects((prevState) => {
                return [
                    ...prevState,
                    newProject
                ]
            }
        )
    }

    function showProject(projectTitle) {
        setLastProjectTitle(projectTitle)
        setPageIdToDisplay("ShowProject")
    }

    let pageToDisplay = <Home/>
    if (pageIdToDisplay === "CreateProject") {
        pageToDisplay =
            <CreateProject onSave={handleOnSave} onCancel={() => setPageIdToDisplay("Home")}></CreateProject>
    } else if (pageIdToDisplay === "NoProjectSelected") {
        pageToDisplay =
            <NoProjectSelected onCreateNewProject={() => setPageIdToDisplay("CreateProject")}></NoProjectSelected>
    } else if(pageIdToDisplay === "ShowProject"){
        const projectToDisplay = projects.find((it) => it.title === lastProjectTitle)

        pageToDisplay = <Project project={projectToDisplay}></Project>
    }

    return (
        <>
            <SideBar showProject={showProject} projects={projects}
                     onAddProject={() => setPageIdToDisplay("CreateProject")}></SideBar>

            {pageToDisplay}

        </>
    );
}

export default App;
