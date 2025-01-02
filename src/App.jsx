import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login /> } />
        <Route path="/SignUp" element={<SignUp /> } />
      </Routes>
    </BrowserRouter>
  )
}