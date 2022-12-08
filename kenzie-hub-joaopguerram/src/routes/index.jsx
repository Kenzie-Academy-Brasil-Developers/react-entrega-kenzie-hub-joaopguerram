import { Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/register";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import Login from "../pages/login";

export default function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
