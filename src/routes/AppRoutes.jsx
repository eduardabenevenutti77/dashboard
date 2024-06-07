import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Inicial from "../pages/Inicial";
import Body from "../layout/Body";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {}
        <Route path="/" element={<Body />} >
          <Route path="/" element={<Login />} />
          <Route path="/inicial" element={<Inicial/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
