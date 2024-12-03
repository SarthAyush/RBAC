
import { Navigate, Route,Routes } from "react-router-dom";
import User from "./components/User";
import Home from "./components/Home";
import Admin from "./components/Admin";
import "./App.css"
import Navbar from "./components/Navbar";
import Userprofile from "./components/Userprofile";

const USER_TYPES = {
  PUBLIC: "Public User",
  NORMAL_USER: "Normal User",
  ADMIN_USER : "Admin User"
}
const CURRENT_USER_TYPE = USER_TYPES.ADMIN_USER

function App() {
 
  return (
    <>
      <Navbar />
      <AppRoutes/>
    </>
  );
}

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <PublicElement>
          <Home />
          </PublicElement>
        }></Route>
        <Route path="/user" element={
          <UserElement>
            <User />
          </UserElement>
        } ></Route>
        <Route path="/userprofile" element={
          <UserElement>
            <Userprofile />
          </UserElement>
        } ></Route>
        <Route path="/admin" element={
          <AdminElement>
            <Admin />
          </AdminElement>
        }></Route>
        <Route path="*" element={<div>Page Not Found!!</div>}></Route>
      </Routes>
    </div>
  );
}
function PublicElement({ children }) {
  return <>
    {children}
  </>
}
function UserElement({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER || CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER) {
    return <>
      {children}
    </>
  }
  else {
    return <Navigate to={"/"}/>
  }
}
function AdminElement({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) {
    return <>
      {children}
    </>
  }
  else {
    return <div>You Do not have this Acccess!!</div>
  }
}
export {
  App,
  CURRENT_USER_TYPE
}
