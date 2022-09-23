import "./style.css"
import {createToDo} from"./toDo.js"

let novaTarefa = createToDo("cortar cabelo","ir ate o batata e cortar o cabelo","25/09/2022","medium")

console.table(novaTarefa)
// novaTarefa.isDone = true
novaTarefa.toogle()
novaTarefa.setPriority("low")
console.table(novaTarefa)