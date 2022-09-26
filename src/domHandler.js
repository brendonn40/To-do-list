// put the tasks into display
import plus from "./plus.svg"
export function createDisplay(currentProject){
    const display = document.getElementById("display")
    display.appendChild(createTitle(currentProject))
    display.appendChild(createAddTask())
    display.appendChild(createTasks(currentProject))
    taskListener()
    listenForDone(currentProject)

    


}

function createTitle(currentProject){
    let title = document.createElement("div")
    title.classList.add("task-title")
    title.innerText = currentProject.name
    return title
}
function createTasks(currentProject){
    let tasks = document.createElement("form")
    tasks.setAttribute("id","tasks")
    for (let i = 0; i < currentProject.project.length; i++) {
        let label = document.createElement("label")
        let text = document.createTextNode(`${currentProject.project[i].title} due date:${currentProject.project[i].dueDate}`)
        let input = document.createElement("input")
        input.type="checkbox"
        label.appendChild(input)
        label.appendChild(text)
        input.setAttribute("data",i)
        label.setAttribute("data",i)
        tasks.appendChild(label)
        tasks.appendChild(document.createElement("br"));
        if(currentProject.project[i].isDone){
            label.classList.add("done")
            input.checked=true
        }
    }
    return tasks
}

export function listenForDone(currentTaskList){
    const tasks = document.querySelectorAll("input[type='checkbox']");
    const labels = document.querySelectorAll("label")
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

    //todo toggle done class and put that  task in the bellow part of the display
}
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
export function callProjects(projects){
    const div = document.getElementsByClassName("projects")
    

    for (let i = 0; i < projects.length; i++) {
        let element = document.createElement("div")
        element.classList.add("project-item")
        element.innerText = projects[i].name
        element.setAttribute("data",i)
        div[0].appendChild(element)

        
    }
}
export function clear(){
    const content = document.getElementById("display")
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
            clear()
            createDisplay(projects[index])

        })
        
        
    }

}
//remove marked from the oldest one(project)
function toogleOld(){
    const items = document.getElementsByClassName("project-item")
    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains("selected")){
            items[i].classList.toggle("selected")
        }
        
    }
}
//listens for a add task click
function taskListener(){
    const button = document.getElementById("add-button")
    button.addEventListener("click",function(e){
        e.stopPropagation()
        //todo bring out form to get details for the new task
        console.log("puts out modal for new task")
    })
}