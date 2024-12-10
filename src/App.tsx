import "./App.css";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import LoginPage from "./pages/login/page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<LoginPage />} />
    </>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
