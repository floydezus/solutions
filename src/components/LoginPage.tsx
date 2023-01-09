import React, { useEffect, useRef, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks';

interface Props {
}

const LoginPage: React.FC<Props> = () => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const auth = useAuth();
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // mock authentication check
    if (username.trim() && password.trim()) {
      localStorage.setItem('userId', username);
      auth?.logIn();
      const { from } = location.state || { from: { pathname: '/' } };
      navigate(from);
    } else {
      
      // display error message
      setError('Username and password cannot be empty');
      inputRef?.current?.select();
    }
  };

  const handleClear = () => {
    setError('');
  }

  return (
    <div className="row justify-content-center">
      <Card as={Form} className="col-5 mt-4 p-4 shadow-sm" onSubmit={handleLogin}>
        <Form.Group className="mb-2" controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            ref={inputRef}
            placeholder='Enter username'
            isInvalid={!!error}
            type="text"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
              handleClear();
            }}
          />
        </Form.Group>
        <Form.Group  className="mb-2" controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            placeholder='Enter password'
            isInvalid={!!error}
            type="password"
            autoComplete="currentPassword"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
              handleClear();
            }}
          />
        </Form.Group>
        {error && <div className="text-danger">{error}</div>}
        <Button  className='ms-auto mt-3 btn-lg' variant="primary" type="submit">Login</Button>
      </Card>
    </div>
  );
};

export default LoginPage;
