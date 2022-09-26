// sets a object with the projects name and an array for the todo objects
export function createProject(name){
    let project = []
    return {name,
        project,
        add(todo){
            project.push(todo)
        },
        remove(todo){
            let index = project.indexOf(todo)
            if(index > -1 ){
                project.splice(index,1)
            }
        }
    }
}
// gets all tasks and put in a single list/project
export function grabInbox(projects){
    for (let i = 1; i < projects.length; i++) {
        for (let j = 0; j < projects[i].project.length; j++) {
            projects[0].add(projects[i].project[j])    
        }
        
        
    }
}