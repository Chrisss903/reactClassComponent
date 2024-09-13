import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import HomePage from './Task2_SemanticElements/HomePage';
import About from './ExampleRoute/About';
import Dashboard from './ExampleRoute/Dashboard';
import User1 from './ExampleRoute/User1';
import User2 from './ExampleRoute/User2';
import PrivateRoute from './PrivateRoute';
import Error from './Error'
// import DisplayUser from './task4_Redux/displayUser';
// import FormUser from './task4_Redux/FormUser'


function App() {
  return (
    <div className="Field">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/User/:Userinfo" element={<User1 />} />
            <Route path="/User/:Userinfo" element={<User2 />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
