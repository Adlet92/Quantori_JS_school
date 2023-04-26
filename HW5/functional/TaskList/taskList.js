export async function deleteTodo(id) {
    await fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'DELETE'
    });

    state.todos = state.todos.filter((todo) => todo.id !== id);
    state.completed = state.completed.filter((todo) => todo.id !== id);
    renderTasks();
  }
  
  export async function toggleCompletedTodo(id, title, completed, dateValue) {
    const todo = { id, title, completed, dateValue };

    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    state.todos = state.todos.filter((t) => t.id !== id);
    state.completed = state.completed.filter((t) => t.id !== id);
  
    if (completed) {
      state.completed.push(todo);
    } else {
      state.todos.push(todo);
    }
  
    renderTasks();
  }
