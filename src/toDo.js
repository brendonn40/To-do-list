export const createToDo = (title, description, dueDate, priority) => {
  return {
    title,
    description,
    dueDate,
    priority,
    isDone: false,
    toogle() {
      this.isDone = !this.isDone;
    },
    setPriority(newPriority) {
      this.priority = newPriority;
    },
  };
};
