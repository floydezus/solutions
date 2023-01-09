import { uniqueId } from "lodash";
import { useState } from "react";
import { Button, Container, Form, ListGroup, ListGroupItem } from "react-bootstrap";

interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

const TodoList: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([
    { id: uniqueId(), text: 'Solve "Price Check"', isCompleted: true },
    { id: uniqueId(), text: 'Create a "A very simple ToDo app"', isCompleted: false },
    { id: uniqueId(), text: 'Build a "Price Widget"', isCompleted: false },
  ]);

  const [newTodoText, setNewTodoText] = useState('');  

  const handleToggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      }),
    );
  };

  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodos([
    ...todos,
    {
      id: uniqueId(),
      text: newTodoText,
      isCompleted: false,
    },
    ]);
    setNewTodoText('');
  };

  return (
    <Container className="mt-5">
      <div className='row justify-content-center'>
        <div className="col-6">
          <h1 
          className="mb-4 text-center" 
          style={{
            backgroundImage: `linear-gradient(to right, red, blue)`,
            color: `transparent`, 
            backgroundClip: `text`,
            WebkitBackgroundClip: "text"
          }}>
            ToDo List
          </h1>
          <Form className="my-4 row justify-content-center" onSubmit={handleAddTodo}>
            <Form.Group className="col-5">
              <Form.Control
                type="text"
                placeholder="Add new todo"
                value={newTodoText}
                onChange={(event) => setNewTodoText(event.target.value)}
              />
            </Form.Group>
            <Button  className="col-1" variant="primary" type="submit">
              Add
            </Button>
          </Form>
          <ListGroup>
            {todos.map((todo) => (
              <ListGroupItem key={todo.id}>
                <Form.Check
                  type="checkbox"
                  id={`todo-${todo.id}`}
                  label={todo.text}
                  checked={todo.isCompleted}
                  onChange={() => handleToggleComplete(todo.id)}
                />
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </div>
    </Container>
  )

}

export default TodoList;