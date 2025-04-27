
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import Authentication from "./components/Authetication";
import CallBack from "./components/CallBack";
import TasksPage from "./components/TaskPage";


const App: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/profile" element={<Authentication component={ProfilePage} />} />
        <Route path="/callback" element={<CallBack />} />
      </Routes>
    </>
  );
};

export default App;