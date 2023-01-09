import {Routes, Route} from 'react-router-dom';
import AuthProvider from './AuthProvider';
import LoginPage from './LoginPage';
import ProtectedRoute from './ProtectedRoute';
import TodoPage from './TodoPage';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <TodoPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/todos" 
          element={
            <ProtectedRoute>
              <TodoPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div className='text-center h2'><strong>404</strong> Not Found</div>} />
      </Routes>
    </AuthProvider>
    
  );
}

export default App;