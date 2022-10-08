import "./style.css"
import {createToDo} from"./toDo.js"
import {loadProjects, CreateEventListeners} from "./domHandler.js"
import {createProject, grabInbox} from "./projectHandler.js"
let inbox = createProject("inbox")
let week = createProject("week")
let code = createProject("code")
export let projects = [inbox,week,code]
let novaTarefa = createToDo("programar","resolver os exercicios do odin project","2022-09-19","2")
let novaTarefa2 = createToDo("cortar cabelo","ir ate o batata e cortar o cabelo","2022-09-19","0")
let novaTarefa3 = createToDo("lavar louca","lavar as loucas depois da janta ","2022-10-10","1")




week.add(novaTarefa2)
code.add(novaTarefa)
projects[1].add(novaTarefa3)


grabInbox(projects)
loadProjects(projects)
CreateEventListeners(projects)
