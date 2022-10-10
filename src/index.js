import "./style.css"
import {loadProjects, CreateEventListeners} from "./domHandler.js"
import {createProject, grabInbox} from "./projectHandler.js"
import {checkForStorage} from "./storage.js" 
let inbox = createProject("inbox")

export let projects = [inbox]

projects = checkForStorage(projects)
if(!localStorage.length > 0){
    grabInbox(projects)
}
loadProjects(projects)
CreateEventListeners(projects) 


 
