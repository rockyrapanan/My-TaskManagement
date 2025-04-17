
//App.tsx
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
// Removed duplicate import of CallBack
import { useAuth0 } from "@auth0/auth0-react";
import ProfilePage from "./components/ProfilePage";
import Authentication from "./components/Authetication";
import CallBack from "./components/CallBack";
import TaskList from "./components/TaskList";


const App: React.FC = () => {

  const {isLoading} = useAuth0();
  
  if(isLoading) return (<div>Loading...</div>)

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasks" element={<TaskList />} />

      <Route
        path="/profile"
        element={<Authentication component={ProfilePage} />}
      />
      
      <Route path="/callback" element={<CallBack />} />
      
    </Routes>
  );
};

export default App