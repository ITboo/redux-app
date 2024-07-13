import { useSelector } from 'react-redux';
import './App.css'
import LoginPage from './pages/LoginPage/LoginPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  const state = useSelector(state => state.auth);  
  
  const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage login={state.login}/>,
  },
]);

return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
