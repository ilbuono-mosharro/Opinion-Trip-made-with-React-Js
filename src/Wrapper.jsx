import Nav from "./components/header/nav.jsx";
import Footer from "./components/section/Footer.jsx";
import Home from "./components/page/Home.jsx";
import CitiesList from "./components/page/CitiesList.jsx";
import AttractionsList from "./components/page/AttractionsList.jsx";
import Login from "./components/registration/Login.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./components/provider/AuthProvider";
import LogOut from "./components/registration/LogOut.jsx";
import SingleCity from "./components/page/SingleCity.jsx";
import SingleAttraction from "./components/page/SingleAtraction";
import SignUp from "./components/registration/SignUp";
import { useContext } from "react";

export default function Wrapper() {
  const { loggin } = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <main className="max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cities" element={<CitiesList />}></Route>
            <Route path="/attractions" element={<AttractionsList />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/logout" element={<LogOut />} />
            <Route path="/cities/:id" element={<SingleCity />}></Route>
            <Route
              path="/attraction/:id"
              element={<SingleAttraction />}
            ></Route>
            <Route
              path="/sign-up"
              element={loggin ? <SignUp /> : <Navigate to="/login" />}
            ></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}
