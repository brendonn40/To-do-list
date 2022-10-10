// import { projects as arrayOfProjects } from "./index.js"
import { createProject } from "./projectHandler.js";
import { createToDo } from "./toDo.js";

// put all the projects into localstorage
export function populateStorage(projects) {
  for (let i = 0; i < projects.length; i++) {
    let serialized = JSON.stringify(projects[i]);
    let name = projects[i].name;
    localStorage.setItem(name, serialized);
  }
}
//gets whats saved from localstorage and return a array of objects
function grabFromLocal() {
  let projects = [];
  for (let i = 0; i < localStorage.length; i++) {
    let name = localStorage.key(i);
    projects.push(JSON.parse(localStorage.getItem(name)));
  }
  let objects = convertToObj(projects);
  return objects;
}
//check if there is local, if so grab those values, if not save the default values there
export function checkForStorage(projects) {
  if (localStorage.length > 0) {
    projects = grabFromLocal();
    return projects;
    //Items are stored in local storage
  } else {
    populateStorage(projects);
    return projects;
    //Local storage is empty
  }
}

//requires a array of parsed objects and returns a array of respective objects
function convertToObj(array) {
  let projects = [];
  for (let i = 0; i < array.length; i++) {
    projects.push(createProject(array[i].name));
    for (let j = 0; j < array[i].project.length; j++) {
      let newToDo = createToDo(
        array[i].project[j].title,
        array[i].project[j].description,
        array[i].project[j].dueDate,
        array[i].project[j].priority
      );
      projects[i].add(newToDo);
    }
  }
  //makes sure inbox is always first element in the array
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].name === "inbox") {
      let inbox = projects.splice(i, 1);
      projects.unshift(inbox[0]);
    }
  }
  return projects;
}
