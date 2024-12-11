import "./App.css";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet } from "react-router-dom";
import LoginPage from "./pages/login/page";
import HomePage from "./pages/home/page";
import { Layout } from "@/components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout><Outlet /></Layout>}>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;