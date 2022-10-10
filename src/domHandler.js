// put the tasks into display
import plus from "./plus.svg";
import delet from "./delete.svg";
import details from "./details.svg";
import edit from "./edit.svg";
import { createToDo } from "./toDo";
import { projects as arrayOfProjects } from "./index.js";
import { createProject } from "./projectHandler.js";
import { populateStorage } from "./storage.js";
//populates the #display
function createDisplay(currentProject) {
  const display = document.getElementById("display");
  display.appendChild(createTitle(currentProject));
  display.appendChild(createAddTask());
  display.appendChild(createTasks(currentProject));
  taskListener(currentProject);
  listenForDone(currentProject);
  iconsListener(currentProject);
}
//create div with title of projects name
function createTitle(currentProject) {
  let title = document.createElement("div");
  title.classList.add("task-title");
  title.innerText = currentProject.name;
  return title;
}
//creates a div with the current project Todos in display
function createTasks(currentProject) {
  let tasks = document.createElement("div");
  tasks.setAttribute("id", "tasks");
  for (let i = 0; i < currentProject.project.length; i++) {
    let label = document.createElement("div");
    let text = document.createTextNode(
      `${currentProject.project[i].title} due date:${currentProject.project[i].dueDate}`
    );
    let input = document.createElement("input");
    input.type = "checkbox";
    label.append(input, text);
    input.setAttribute("data", i);
    label.setAttribute("data", i);
    label.appendChild(createIcons(i));
    label.classList.add("task");
    tasks.appendChild(label);
    if (currentProject.project[i].isDone) {
      label.classList.add("done");
      input.checked = true;
    }
  }
  return tasks;
}
//set event listener for a task to check if its been marked as done, and if so it changes the task to be linethrough
function listenForDone(currentTaskList) {
  const tasks = document.querySelectorAll("input[type='checkbox']");
  const labels = document.getElementsByClassName("task");
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].addEventListener("change", function (e) {
      let index = tasks[i].getAttribute("data");
      if (e.target.checked) {
        currentTaskList.project[index].isDone = true;
        labels[index].classList.toggle("done");
      } else {
        currentTaskList.project[index].isDone = false;
        labels[index].classList.toggle("done");
      }
    });
  }
  populateStorage(arrayOfProjects);
}
//creates the div with add new task button
function createAddTask() {
  let div = document.createElement("div");
  let plusImg = document.createElement("img");
  plusImg.src = plus;
  plusImg.setAttribute("id", "add-button");
  plusImg.setAttribute("data-bs-toggle", "modal");
  plusImg.setAttribute("data-bs-target", "#myModal");
  div.appendChild(plusImg);
  let text = document.createTextNode("add a new task");
  div.classList.add("add-task");
  div.appendChild(text);
  return div;
}
// loads the projects in a side bar
export function loadProjects(projects) {
  const div = document.getElementById("projects");

  for (let i = 0; i < projects.length; i++) {
    let element = document.createElement("div");
    element.classList.add("project-item");
    element.innerText = projects[i].name;
    element.setAttribute("data", i);
    div.appendChild(element);
  }
  div.appendChild(createAddProject());
  newProjectListener();
}
//clear an element
function clear(elementName) {
  const content = document.getElementById(elementName);
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}
//when a project is clicked it changes the project in display
export function CreateEventListeners(projects) {
  let projectItems = document.getElementsByClassName("project-item");
  for (let i = 0; i < projectItems.length; i++) {
    projectItems[i].addEventListener("click", function (e) {
      e.stopPropagation();
      // e.stopImmediatePropagation()
      let index = projectItems[i].getAttribute("data");
      toogleOld();
      projectItems[i].classList.toggle("selected");
      clear("display");
      createDisplay(projects[index]);
    });
  }
}
//remove marked from the oldest one(project)
function toogleOld() {
  const items = document.getElementsByClassName("project-item");
  const addProjectDiv = document.getElementById("add-project");
  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains("selected")) {
      items[i].classList.toggle("selected");
      return;
    }
  }
  if (addProjectDiv.classList.contains("selected")) {
    addProjectDiv.classList.toggle("selected");
    addProjectDiv.style.background = "#FFFFFF";
  }
}
//listens for a add task click, calls the form and create new task
function taskListener(project) {
  const button = document.getElementById("add-button");
  button.addEventListener("click", function (e) {
    e.stopPropagation();
    createForm();
    createNewTask(project);
  });
}
//turns data from the form into a new todo object
function createNewTask(project) {
  const button = document.getElementById("add-new-task");
  const form = document.getElementById("add-task-form");
  const close = document.getElementsByClassName("btn-close")[0];
  button.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    e.preventDefault();

    const formData = new FormData(form);
    let newToDo = createToDo(
      formData.get("title"),
      formData.get("description"),
      formData.get("dueDate"),
      formData.get("priority")
    );
    project.add(newToDo);
    project.order();
    if (project.name !== "inbox") {
      arrayOfProjects[0].add(newToDo);
    }
    form.reset();
    close.click();
    clear("display");
    createDisplay(project);
    populateStorage(arrayOfProjects);
  });
}

//returns the div with add project
function createAddProject() {
  let div = document.createElement("div");
  div.innerText = "add project +";
  div.id = "add-project";
  div.setAttribute("data-bs-toggle", "modal");
  div.setAttribute("data-bs-target", "#myModal");
  return div;
}

//sets a event listener for the submit button and creates a new project/ reloads projects sidebar
function addProject() {
  const btn = document.getElementById("add-new-project");
  const close = document.getElementsByClassName("btn-close")[0];
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    const name = document.getElementById("projectname").value;
    if (name !== "") {
      close.click();
      arrayOfProjects.push(createProject(name));
      populateStorage(arrayOfProjects);
      clear("projects");
      loadProjects(arrayOfProjects);
      CreateEventListeners(arrayOfProjects);
    }
  });
  const name = document.getElementById("projectname");
  name.value = "";
}

function newProjectListener() {
  const btn = document.getElementById("add-project");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toogleOld();
    clear("display");
    btn.classList.toggle("selected");
    btn.style.background = "#757575";
    projectForm();
    addProject();
  });
}

function createIcons(number) {
  let editImg = document.createElement("input");
  let deletImg = document.createElement("input");
  let detailsImg = document.createElement("input");
  let buttons = document.createElement("div");
  editImg.type = "image";
  deletImg.type = "image";
  detailsImg.type = "image";
  editImg.src = edit;
  editImg.setAttribute("data-bs-toggle", "modal");
  editImg.setAttribute("data-bs-target", "#myModal");
  deletImg.src = delet;
  detailsImg.src = details;
  editImg.id = "edit";
  deletImg.id = "delete";
  detailsImg.id = "details";
  editImg.classList.add("icon");
  deletImg.classList.add("icon");
  detailsImg.classList.add("icon");
  editImg.setAttribute("data", number);
  deletImg.setAttribute("data", number);
  detailsImg.setAttribute("data", number);
  detailsImg.setAttribute("data-bs-toggle", "modal");
  detailsImg.setAttribute("data-bs-target", "#myModal");
  buttons.append(detailsImg, editImg, deletImg);
  buttons.style.display = "inline";
  return buttons;
}
//set event listeners for delete,edit,info
function iconsListener(currentProject) {
  function search(todo, projects) {
    for (let i = 1; i < projects.length; i++) {
      for (let j = 0; j < projects[i].project.length; j++) {
        if (projects[i].project[j] === todo) {
          projects[i].remove(todo);
        }
      }
    }
  }
  let icons = document.getElementsByClassName("icon");
  for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener("click", function (e) {
      e.stopPropagation();
      switch (icons[i].id) {
        case "details":
          let aux = icons[i].getAttribute("data");
          let todo = currentProject.project[aux];
          getDetails(todo);
          break;
        case "edit":
          let aux2 = icons[i].getAttribute("data");
          let todo2 = currentProject.project[aux2];
          doEdit(todo2, currentProject);
          //todo
          break;
        case "delete":
          let index = icons[i].getAttribute("data");
          let deleted = currentProject.project[index];
          if (currentProject.name !== "inbox") {
            currentProject.remove(deleted);
            arrayOfProjects[0].remove(deleted);
            clear("display");
            createDisplay(currentProject);
            break;
          } else {
            currentProject.remove(deleted);
            search(deleted, arrayOfProjects);
            clear("display");
            createDisplay(currentProject);
            break;
          }
      }
    });
  }
}
function doEdit(todo, project) {
  createForm();
  const close = document.getElementsByClassName("btn-close")[0];
  const form = document.getElementById("add-task-form");
  const title = document.querySelector('[name="title"]');
  const dueDate = document.querySelector('[name="dueDate"]');
  const description = document.querySelector('[name="description"]');
  const priority = document.querySelector('[name="priority"]');
  const button = document.getElementById("add-new-task");
  title.value = todo.title;
  dueDate.value = todo.dueDate;
  description.value = todo.description;
  priority.value = todo.priority;
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    project.remove(todo);
    if (project.name !== "inbox") {
      arrayOfProjects[0].remove(todo);
      arrayOfProjects[0].order();
    }
    const formData = new FormData(form);
    let newToDo = createToDo(
      formData.get("title"),
      formData.get("description"),
      formData.get("dueDate"),
      formData.get("priority")
    );
    project.add(newToDo);
    project.order();
    if (project.name !== "inbox") {
      arrayOfProjects[0].add(newToDo);
      arrayOfProjects[0].order();
    }
    form.reset();
    close.click();
    clear("display");
    createDisplay(project);
    populateStorage(arrayOfProjects);
  });
}

// put details of the todo into the modal
function getDetails(todo) {
  const modal = document.getElementsByClassName("modal-body");
  document.getElementsByClassName("modal-title")[0].innerText = "Task info";
  modal[0].innerHTML = "";
  let div = document.createElement("div");
  div.append(
    document.createTextNode(`Title:${todo.title}\n`),
    document.createElement("br")
  );
  div.append(
    document.createTextNode(`Due date:${todo.dueDate}`),
    document.createElement("br")
  );
  div.append(
    document.createTextNode(
      `Description:${todo.description !== "" ? todo.description : "None"}`
    ),
    document.createElement("br")
  );
  switch (todo.priority) {
    case "0":
      div.append(
        document.createTextNode(`Priority: low`),
        document.createElement("br")
      );
      break;
    case "1":
      div.append(
        document.createTextNode(`Priority: medium`),
        document.createElement("br")
      );
      break;
    case "2":
      div.append(
        document.createTextNode(`Priority: high`),
        document.createElement("br")
      );
      break;
    default:
      div.append(document.createTextNode(`Priority: not defined`));
      break;
  }
  modal[0].appendChild(div);
}

function createForm() {
  document.getElementsByClassName("modal-body")[0].innerHTML = "";
  const form = document.createElement("form");
  form.setAttribute("id", "add-task-form");
  let title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.required = true;
  form.appendChild(createLabel("Title:", title));
  form.appendChild(document.createElement("br"));

  //create and add description input
  let description = document.createElement("TEXTAREA");
  description.setAttribute("type", "text");
  description.setAttribute("name", "description");
  form.appendChild(createLabel("Description:", description, true));
  form.appendChild(document.createElement("br"));
  //create and add due date input
  let dueDate = document.createElement("input");
  dueDate.setAttribute("type", "date");
  dueDate.setAttribute("name", "dueDate");
  dueDate.required = true;
  form.appendChild(createLabel("Due date:", dueDate));
  form.appendChild(document.createElement("br"));
  //creates select element for priority
  let priority = document.createElement("select");
  priority.setAttribute("id", "priority");
  priority.setAttribute("name", "priority");
  let low = new Option("low", "0");
  let medium = new Option("medium", "1");
  let high = new Option("high", "2");
  priority.add(low, undefined);
  priority.add(medium);
  priority.add(high);
  form.appendChild(createLabel("Priority:", priority));
  let button = document.createElement("button");
  button.type = "submit";
  button.id = "add-new-task";
  button.innerText = "submit";
  form.appendChild(document.createElement("br"));
  form.appendChild(button);
  document.getElementsByClassName("modal-body")[0].appendChild(form);
  document.getElementsByClassName("modal-title")[0].innerText = "New Task";
}

function projectForm() {
  const modal = document.getElementsByClassName("modal-body")[0];
  document.getElementsByClassName("modal-body")[0].innerHTML = "";
  const form = document.createElement("form");
  form.setAttribute("id", "new-project-form");
  let name = document.createElement("input");
  name.setAttribute("id", "projectname");
  name.setAttribute("type", "text");
  name.setAttribute("name", "projectname");
  name.required = true;
  form.appendChild(createLabel("Name of new project:", name));
  let button = document.createElement("button");
  button.type = "submit";
  button.id = "add-new-project";
  button.innerText = "submit";
  form.appendChild(button);
  modal.appendChild(form);
  document.getElementsByClassName("modal-title")[0].innerText = "New Project";
}
function createLabel(text, input, lineBreak = false) {
  let label = document.createElement("label");
  let labelText = document.createTextNode(text);
  label.appendChild(labelText);
  if (lineBreak) {
    label.appendChild(document.createElement("br"));
  }
  label.appendChild(input);
  return label;
}
