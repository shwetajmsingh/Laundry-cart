import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Register from "./components/register/Register";
import CreateCombined from "./components/CreateCombined";
import Homepage from "./components/homepage/Homepage";
import Mainpage from "./components/Mainpage/Mainpage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage></LoginPage>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route
            path="/createOrder"
            element={<CreateCombined></CreateCombined>}
          />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/mainpage" element={<Mainpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
