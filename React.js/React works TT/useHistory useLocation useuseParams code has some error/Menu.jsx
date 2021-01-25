import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
    <div className="menu_style">
       {/*no refresh at all*/}
      <NavLink exact activeClassName="active_class" to="/">About-Us NavLink </NavLink>
      <NavLink exact activeClassName="active_class" to="/contact">Contact-Us NavLink </NavLink>
      <NavLink exact activeClassName="active_class" to="/services">Service NavLink </NavLink>
      <NavLink exact activeClassName="active_class" to="/user/:fname">user NavLink </NavLink>
     </div>
        <br />
        <br /> 
      {/* using anchor tag is not a wise idea its take reloading */}
      {/* so we use NavLink */}
      <a href="/">About-us </a>
      <a href="/contact">Contact</a>
    </>
  );
};

export default Menu;
