import { useState } from "react";
import { NavLink } from "react-router-dom";
import LogOut from "../registration/LogOut";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Hamburger from "./mobile/Hamburger";
import Menu from "./mobile/menu";
import links from "./Links";

function Nav() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { loggin } = useContext(AuthContext);

  function handleMobileMenu() {
    setMobileMenu(!mobileMenu);
  }
  return (
    <>
      <header>
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex flex-row justify-between items-center py-5">
          <NavLink to="/">
            <div className="logo">
              <h1 className="font-serif text-lg font-bold tracking-wider text-black">
                Opinion Trip
              </h1>
            </div>
            </NavLink>
            <Hamburger onOpenMenu={handleMobileMenu} />
            <div className="hidden lg:flex lg:flex-row lg:gap-4 lg:text-base lg:font-serif lg:text-black">
              {links.map((link) => (
                <NavLink key={link.name} to={link.to}>
                  {link.name}
                </NavLink>
              ))}
            </div>
            {!loggin ? (
              <div className="hidden lg:flex lg:flex-row lg:items-center lg:gap-6">
                <NavLink
                  to="/login"
                  className="font-serif text-base text-orange-500 font-medium"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/sign-up"
                  className="bg-orange-500 px-8 py-2 rounded-lg text-base font-serif font-normal shadow-md text-white"
                >
                  Sign up
                </NavLink>
              </div>
            ) : (
              <LogOut />
            )}
          </div>
        </nav>
        {mobileMenu && <Menu onCloseMenu={handleMobileMenu} />}
      </header>
    </>
  );
}

export default Nav;