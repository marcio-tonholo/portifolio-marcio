import { Routes as ReactRouter, Route } from "react-router-dom";
import InitialPage from "../Pages/Initial Page";
import HomePage from "../Pages/Home";

const Routes = () => {
  return (
    <ReactRouter>
      <Route path="/" element={<InitialPage />} />
      <Route path="/home" element={<HomePage />} />
    </ReactRouter>
  );
};

export default Routes;
