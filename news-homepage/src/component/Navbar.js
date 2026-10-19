import logo from "./../images/logo.svg";
import hamburger from "../images/icon-menu.svg";
import close from "../images/icon-menu-close.svg";
import "./Navbar.css";

function Navbar() {
  function openMenu(){
    let menu = document.getElementById("menu");
    if (menu.className === "menu") {
      menu.className += " openMenu";
  } else {
      menu.className = "menu";
  }
}
  
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <div className="menuDesktop">
          <a href="#a">Home</a>
          <a href="#a">New</a>
          <a href="#a">Popular</a>
          <a href="#a">Trending</a>
          <a href="#a">Categories</a>
        </div>
      <div className="hamburger icon" onClick={()=>openMenu()} >
      
      <img src={hamburger}  alt="hamburger" />
      </div>
      <div className="menu " id="menu">
        <div className="menuContainer openMenu">
         <div className="close" onClick={()=>openMenu()}>
          <img src={close}alt="close" />
         </div>
          <a href="#a">Home</a>
          <a href="#a">New</a>
          <a href="#a">Popular</a>
          <a href="#a">Trending</a>
          <a href="#a">Categories</a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
