// put the tasks into display
import plus from "./plus.svg"
import delet from "./delete.svg"
import details from "./details.svg"
import edit from "./edit.svg"
import { createToDo } from "./toDo"
import { projects as arrayOfProjects } from "./index.js"
import { createProject } from "./projectHandler.js"
//populates the #display 
function createDisplay(currentProject){
    currentProject.order()
    const display = document.getElementById("display")
    display.appendChild(createTitle(currentProject))
    display.appendChild(createAddTask())
    display.appendChild(createTasks(currentProject))
    taskListener(currentProject)
    listenForDone(currentProject)
    iconsListener(currentProject)

    


}
//create div with title of projects name
function createTitle(currentProject){
    let title = document.createElement("div")
    title.classList.add("task-title")
    title.innerText = currentProject.name
    return title
}
//creates a div with the current project Todos in display
function createTasks(currentProject){
    let tasks = document.createElement("div")
    tasks.setAttribute("id","tasks")
    for (let i = 0; i < currentProject.project.length; i++) {
        let label = document.createElement("div")
        let text = document.createTextNode(`${currentProject.project[i].title} due date:${currentProject.project[i].dueDate}`)
        let input = document.createElement("input")
        input.type="checkbox"
        label.append(input,text)
        input.setAttribute("data",i)
        label.setAttribute("data",i)
        label.appendChild(createIcons(i))
        label.classList.add("task")
        tasks.appendChild(label)
        if(currentProject.project[i].isDone){
            label.classList.add("done")
            input.checked=true
        }
    }
    return tasks
}
//set event listener for a task to check if its been marked as done, and if so it changes the task to be linethrough 
function listenForDone(currentTaskList){
    const tasks = document.querySelectorAll("input[type='checkbox']");
    const labels = document.getElementsByClassName("task")
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].addEventListener("change",function(e){
            let index = tasks[i].getAttribute("data")
            if (e.target.checked){
                currentTaskList.project[index].isDone = true
                labels[index].classList.toggle("done")

            }else{
                currentTaskList.project[index].isDone = false
                labels[index].classList.toggle("done")
            }
        })
        
    }

}
//creates the div with add new task button
function createAddTask(){
    let div = document.createElement("div")
    let plusImg = document.createElement("img")
    plusImg.src=plus
    plusImg.setAttribute("id","add-button")
    div.appendChild(plusImg)
    let text = document.createTextNode("add a new task")
    div.classList.add("add-task")
    div.appendChild(text)
    return div
}
// loads the projects in a side bar
export function loadProjects(projects){
    const div = document.getElementById("projects")

    for (let i = 0; i < projects.length; i++) {
        let element = document.createElement("div")
        element.classList.add("project-item")
        element.innerText = projects[i].name
        element.setAttribute("data",i)
        div.appendChild(element)

        
    }
    div.appendChild(createAddProject())
    newProjectListener()
}
//clear an element
function clear(elementName){
    const content = document.getElementById(elementName)
     while(content.firstChild){
        content.removeChild(content.firstChild);
}
}
//when a project is clicked it changes the project in display
export function CreateEventListeners(projects){
    let projectItems = document.getElementsByClassName("project-item")
    for (let i = 0; i < projectItems.length; i++) {
        projectItems[i].addEventListener("click",function(e){
            e.stopPropagation()
            let index = projectItems[i].getAttribute("data")
            toogleOld()
            projectItems[i].classList.toggle("selected")
            clear("display")
            createDisplay(projects[index])
            
            

        })
        
        
    }

}
//remove marked from the oldest one(project)
function toogleOld(){
    const items = document.getElementsByClassName("project-item")
    const addProjectDiv = document.getElementById("add-project")
    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains("selected")){
            items[i].classList.toggle("selected")
            return
        }
        
    }
    if(addProjectDiv.classList.contains("selected")){
        addProjectDiv.classList.toggle("selected")
        // const element = document.getElementById("expand")  comentado pra tentar tirar a funcao expand
        // element.classList.toggle("hidden")
        addProjectDiv.style.background = "#FFFFFF"
    }
}
//listens for a add task click, calls the form and create new task
function taskListener(project){
    const button = document.getElementById("add-button")
    const display = document.getElementById("display")
    button.addEventListener("click",function(e){
        e.stopPropagation()
        display.appendChild(createForm())
        createNewTask(project)
    })
}
//turns data from the form into a new todo object
function createNewTask(project){
    const button = document.getElementById("submit")
    const form = document.getElementById("add-task-form")
    button.addEventListener("click",(e) => {
        e.preventDefault()
        const formData = new FormData(form)
        let newToDo = createToDo(formData.get("title"),formData.get("description"),formData.get("dueDate"),formData.get("priority")) 
        project.add(newToDo)
        if(project.name !== "inbox"){
            arrayOfProjects[0].add(newToDo)
        }
        form.reset()
        clear("display")
        createDisplay(project)
    })

    
}
//create the form to get tittle,description,duedate and priority
function createForm(){
    const form = document.createElement("form")
    form.setAttribute("id","add-task-form")
    let title = document.createElement("input")
    title.setAttribute("type", "text")
    title.setAttribute("name", "title")
    title.required= true
    form.appendChild(createLabel("Title:",title))
    form.appendChild(document.createElement("br"))

    //create and add description input
    let description = document.createElement("TEXTAREA")
    description.setAttribute("type", "text")
    description.setAttribute("name", "description")
    form.appendChild(createLabel("Description:",description,true))
    form.appendChild(document.createElement("br"))
    //create and add due date input
    let dueDate = document.createElement("input")
    dueDate.setAttribute("type", "date")
    dueDate.setAttribute("name", "dueDate")
    dueDate.required = true
    form.appendChild(createLabel("Due date:",dueDate))
    form.appendChild(document.createElement("br"))
    //creates select element for priority
    let priority = document.createElement("select")
    priority.setAttribute("id","priority")
    priority.setAttribute("name", "priority")
    let low = new Option('low','2')
    let medium = new Option('medium','1')
    let high = new Option("high","0")
    priority.add(low,undefined)
    priority.add(medium)
    priority.add(high)
    form.appendChild(createLabel("Priority:",priority))
    let button = document.createElement("button")
    button.type = "submit"
    button.id = "submit"
    button.innerText= "submit"
    form.appendChild(document.createElement("br"))
    form.appendChild(button)
    return form

}
//creates a label 
function createLabel(text,input,lineBreak = false){
    let label = document.createElement("label")
    let labelText = document.createTextNode(text)
    label.appendChild(labelText)
    if(lineBreak){
        label.appendChild(document.createElement("br"))
    }
    label.appendChild(input)
    return label
}
//creates the div with add project function
function createAddProject(){
    
    let div = document.createElement("div")
    div.innerText= "add project +"
    div.id = "add-project"
    div.setAttribute("data-bs-toggle","modal")
    div.setAttribute("data-bs-target","#myModal")
    // div.appendChild(expandAdd())
    return div
}

//sets a event listener for the submit button and creates a new project/ reloads projects sidebar
function addProject(){
    const btn = document.getElementById("add-project-btn")
    btn.addEventListener("click", (e) =>{
        e.preventDefault()
        e.stopPropagation()
        const name = document.getElementById("project-name").value
        if(name !== ""){
            arrayOfProjects.push(createProject(name))  
            clear("projects")
            loadProjects(arrayOfProjects)
            CreateEventListeners(arrayOfProjects)
        }
        
    })
}
//returns a div with a form to grab a new project name
function expandAdd(){
    let input = document.createElement("input")
    let btn = document.createElement("button")
    let div = document.createElement("div")
    btn.type="submit"
    btn.innerText = "add"
    btn.id = "add-project-btn"
    input.setAttribute("type", "text")
    input.setAttribute("name", "projectName")
    input.id = "project-name"
    let text= document.createTextNode("name") 
    div.append(text,input,document.createElement("br"),btn)
    div.id = "expand"
    div.classList.add("hidden")
    return div
}
function newProjectListener(){
    const btn = document.getElementById("add-project")

    btn.addEventListener("click",(e) => {
        e.stopPropagation()
        toogleOld()
        clear("display")
        btn.classList.toggle("selected")
        btn.style.background = "#757575"
        // const aux = document.getElementById("expand")
        // aux.classList.toggle("hidden")
        // addProject()
        newForm()
        
    })
    
}

function createIcons(number){
    let editImg = document.createElement("input")
    let deletImg = document.createElement("input")
    let detailsImg = document.createElement("input")
    let buttons = document.createElement("div")
    editImg.type= "image"
    deletImg.type= "image"
    detailsImg.type = "image"
    editImg.src = edit
    deletImg.src = delet
    detailsImg.src = details
    editImg.id = "edit"
    deletImg.id = "delete"
    detailsImg.id = "details"
    editImg.classList.add("icon")
    deletImg.classList.add("icon")
    detailsImg.classList.add("icon")
    editImg.setAttribute("data",number)
    deletImg.setAttribute("data",number)
    detailsImg.setAttribute("data",number)
    detailsImg.setAttribute("data-bs-toggle","modal")
    detailsImg.setAttribute("data-bs-target","#myModal")
    buttons.append(detailsImg,editImg,deletImg)
    buttons.style.display="inline"
    return buttons
}
//set event listeners for delete,edit,info
function iconsListener(currentProject){

    function search(todo,projects){
        for (let i = 1; i < projects.length; i++) {
            for (let j = 0; j < projects[i].project.length; j++) {
                if(projects[i].project[j] === todo){
                    projects[i].remove(todo)
                }
                
            }
            
        }
    }
    let icons = document.getElementsByClassName("icon")
    for (let i = 0; i < icons.length; i++) {
        icons[i].addEventListener("click",function(e){
            e.stopPropagation()
            switch (icons[i].id) {
                case "details":
                    let aux = icons[i].getAttribute("data")
                    let todo = currentProject.project[aux]
                    getDetails(todo)
                    break;
                case "edit":
                    console.log("edit")
                    //todo
                    break;
                case "delete":
                    let index = icons[i].getAttribute("data")
                    let deleted = currentProject.project[index]
                    if(currentProject.name !== "inbox"){
                        currentProject.remove(deleted)
                        arrayOfProjects[0].remove(deleted)
                        clear("display")
                        createDisplay(currentProject)
                        break;
                    }else{
                        currentProject.remove(deleted)
                        search(deleted,arrayOfProjects)
                        clear("display")
                        createDisplay(currentProject)
                        break;
                    }
                    
                    
                    
            }

        })
        

    }
}

// put details of the todo into the modal
function getDetails(todo){
    const modal = document.getElementsByClassName("modal-body")
    const form = document.getElementById("modalform")
    const body = document.querySelector("body")
    if(!form.classList.contains("hidden")){
        form.classList.toggle("hidden")
    }
    body.appendChild(form)
    modal[0].innerHTML = ""
    let div = document.createElement("div")
    div.append(document.createTextNode(`Title:${todo.title}\n`),document.createElement("br"))
    div.append(document.createTextNode(`Due date:${todo.dueDate}`),document.createElement("br"))
    div.append(document.createTextNode(`Description:${todo.description !== "" ? todo.description :"None"}`),document.createElement("br")) 
    switch (todo.priority) {
        case "0":
            div.append(document.createTextNode(`Priority: low`),document.createElement("br")) 
            break;
        case "1":
            div.append(document.createTextNode(`Priority: medium`),document.createElement("br")) 
            break;
        case "2":
            div.append(document.createTextNode(`Priority: high`),document.createElement("br")) 
            break;
        default:
            priority.innerText = `Priority: not defined`
            break;
    }
    modal[0].appendChild(div)
}

export function newForm(){
    const add = document.getElementById("add-project")
    const form  = document.getElementById("modalform")
    form.classList.toggle("hidden")
    document.getElementsByClassName("modal-body")[0].innerHTML=""
    document.getElementsByClassName("modal-body")[0].appendChild(form)
    document.getElementsByClassName("modal-title")[0].innerText = "New Task"
   
    
}
// clear modal body document.getElementsByClassName("modal-body")[0].innerHTML=""