import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login /> } />
      </Routes>
    </BrowserRouter>
  )
}