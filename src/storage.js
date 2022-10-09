import { projects as arrayOfProjects } from "./index.js"
import { createProject } from "./projectHandler.js"
import { createToDo } from "./toDo.js"
import { main } from "./index.js"

export function populateStorage() {
    for (let i = 0; i < arrayOfProjects.length; i++) {
        let serialized = JSON.stringify(arrayOfProjects[i])
        let name = arrayOfProjects[i].name
        localStorage.setItem(name,serialized) 
        
    }
   
    callMain();
  } 

function callMain() {
    let projects = []
    for (let i = 0; i < arrayOfProjects.length; i++) {
        let deserialized = JSON.parse(localStorage.getItem(arrayOfProjects[i].name))
        projects.push(deserialized)
        
    }   
    
    let newArray = convertToObj(projects)
    arrayOfProjects = newArray
    main(arrayOfProjects)
    arrayOfProjects.onchange = populateStorage;
  }

export function checkForStorage(){
    if (localStorage.length > 0){
        callMain();
        //Items are stored in local storage
    }else{
        populateStorage();
        //Local storage is empty
    }
    
 } 
function convertToObj(array){
    let projects = []
    for (let i = 0; i < array.length; i++) {
        projects.push(createProject(array[i].name))
        for (let j = 0; j < array[i].project.length; j++) {
            projects[i].add(createToDo(array[i].project[j].title,array[i].project[j].description,array[i].project[j].dueDate,array[i].project[j].priority))
            
        }
        
    }
    return projects
}