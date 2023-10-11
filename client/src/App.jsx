// import { useState } from "react";
import User from "./User";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
