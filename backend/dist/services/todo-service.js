export class TodoService {
    // Dependency injection
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    // Get all todos
    getAllTodos() {
        return this.todoRepository.getAllTodos();
    }
    // Get a todo by id
    getTodoById(id) {
        return this.todoRepository.getTodoById(id);
    }
    // Create a todo
    createTodo(data) {
        return this.todoRepository.createTodo(data);
    }
    // Update a todo
    updateTodo(id, data) {
        return this.todoRepository.updateTodo(id, data);
    }
    // Delete a todo
    deleteTodo(id) {
        return this.todoRepository.deleteTodo(id);
    }
}
