import React, { Fragment, useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import AuthButton from './AuthButton';
import TodoList from './TodoList';



const TodoPage: React.FC = () => {

  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('userId');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);


  return (
    <Fragment>
      <Navbar  className='container' bg="light" expand="lg">
        <Navbar.Brand className='ms-3'>Hello, {username}</Navbar.Brand>
        <AuthButton />
      </Navbar>
      <TodoList/>
    </Fragment>
    
  );
};

export default TodoPage;
