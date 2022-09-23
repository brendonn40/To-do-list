export function addToDo(toDoObject,projectName){
    projectName.push(toDoObject)
}
export function removeToDo(toDoObject,projectName){
    let index = projectName.indexOf(toDoObject)
    if(index > -1 ){
        projectName.splice(index,1)
    }
}