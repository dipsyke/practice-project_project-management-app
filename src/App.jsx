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
        [
            {
                title: "Example 1",
                description: "Example 1",
                dueDate: "Example 1",
                tasks: [
                    {
                        description: "descr1/1"
                    },
                    {
                        description: "descr1/2"
                    }
                ]
            },
            {
                title: "Example 2",
                description: "Example 2",
                dueDate: "Example 2",
                tasks: [
                    {
                        description: "descr2/1"
                    },
                    {
                        description: "descr2/2"
                    }
                ]
            }
        ]
    )
    console.log("projects:", projects)

    function addNewTask(newTask) {
        console.log("adding new task", newTask)
        setProjects((prevState) => {
            const newState = [...prevState]
            const openedProject = newState.find((project) => project.title === lastProjectTitle)
            if(!openedProject.tasks.includes(newTask)){
                openedProject.tasks.push(newTask)
            }
            return newState
        })
    }

    function clearTaskValami(description) {
        setProjects(prevState => {
            const newState = [...prevState]
            const openedProject = newState.find((project) => project.title === lastProjectTitle)

            const taskToClear = openedProject.tasks.find((task) => task.description === description)
            const index = openedProject.tasks.indexOf(taskToClear)
            console.log('index in clearTaskValami', index)
            if (index >= 0) {
                const removedElement = openedProject.tasks.splice(index, 1)
                console.log(`removed element: ${removedElement}`)
            }

            return newState
        })
    }

    function saveNewProject(newProject) {
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
            <CreateProject onSave={saveNewProject} onCancel={() => setPageIdToDisplay("Home")}></CreateProject>
    } else if (pageIdToDisplay === "NoProjectSelected") {
        pageToDisplay =
            <NoProjectSelected onCreateNewProject={() => setPageIdToDisplay("CreateProject")}></NoProjectSelected>
    } else if (pageIdToDisplay === "ShowProject") {
        const projectToDisplay = projects.find((it) => it.title === lastProjectTitle)

        pageToDisplay = <Project project={projectToDisplay} addTask={addNewTask} clearTask={clearTaskValami}></Project>
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
