import "./style.css"
import {createToDo} from"./toDo.js"
import {loadProjects,createDisplay, CreateEventListeners, listenForDone, taskListener} from "./domHandler.js"
import {createProject, grabInbox} from "./projectHandler.js"
let inbox = createProject("inbox")
let week = createProject("week")
let code = createProject("code")
export let projects = [inbox,week,code]
let novaTarefa = createToDo("programar","resolver os exercicios do odin project","25/09/2022","high")
let novaTarefa2 = createToDo("cortar cabelo","ir ate o batata e cortar o cabelo","25/10/2022","low")
let novaTarefa3 = createToDo("lavar louca","lavar as loucas depois da janta ","29/10/2022","medium")




week.add(novaTarefa2)
code.add(novaTarefa)
projects[1].add(novaTarefa3)


grabInbox(projects)
loadProjects(projects)
CreateEventListeners(projects)

