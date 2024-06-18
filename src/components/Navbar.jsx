import { SearchContact} from "../components";
import { useLocation } from "react-router-dom";
import styles from "../css/navbar.module.css";


import { BACKGROUND, PURPLE } from "../helpers/Color/Colors";

import Colorfull from "../services/Colorfull";

const Navbar = () => {
  
  const location = useLocation();

  return (
    <>
     <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
      <symbol id="check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
      </symbol>
      <symbol id="circle-half" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
      </symbol>
      <symbol id="moon-stars-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
      </symbol>
      <symbol id="sun-fill" viewBox="0 0 16 16">
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
      </symbol>
    </svg>

    <div className="dropdown position-fixed top-0 end-0 mb-3 me-3 bd-mode-toggle">
      <button className="btn styles.btn-bd-primary py-1 px-2 dropdown-toggle d-flex align-items-center"
              id="bd-theme"
              type="button"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              aria-label="Toggle theme (auto)">
        <svg className="my-1"style={{ verticalAlign: "-.125em"
    ,fill: "currentColor",width:"1em" ,height:"1em"}} ><use href="#circle-half"></use></svg>
        <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
      </button>
      <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
            <svg className="me-2 opacity-50" style={{ verticalAlign: "-.125em",
    fill: "currentColor",width:"1em",height:"1em"}} ><use href="#sun-fill"></use></svg>
            Light
            <svg className=" ms-auto d-none" style={{ verticalAlign: "-.125em",
    fill: "currentColor",width:"1em",height:"1em"}}><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
            <svg className=" me-2 opacity-50"style={{ verticalAlign: "-.125em",
    fill: "currentColor",width:"1em",height:"1em"}}><use href="#moon-stars-fill"></use></svg>
            Dark
            <svg className="ms-auto d-none" style={{ verticalAlign: "-.125em",
    fill: "currentColor",width:"1em",height:"1em"}}><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" className="dropdown-item d-flex align-items-end" data-bs-theme-value="auto" aria-pressed="true">
            <svg className=" me-2 opacity-50"style={{ verticalAlign: "-.125em",
    fill: "currentColor",width:"1em",height:"1em"}}><use href="#circle-half"></use></svg>
            Auto
            <svg class="ms-auto d-none" style={{ verticalAlign: "-.125em",
    fill: "currentColor",width:"1em",height:"1em"}}><use href="#check2"></use></svg>
          </button>
        </li>
      </ul>
    </div>


<nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg " aria-label="Offcanvas navbar large">
    <div className="container">
      <span className="navbar-brand"><i className="fa-solid fa-face-grin-stars"style={{color:"#6a1b9a"}}></i></span>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end bg-light" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
        <div className="offcanvas-header">
          <h4 className="offcanvas-title text-success" id="offcanvasNavbar2Label">مدیریت مخاطبین</h4>
          <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-start flex-grow-1" style={{paddingRight:"8rem"}}>
          <li className="nav-item">
          <a className="nav-link active"style={{  color:"#64b5f6"}} href="#">صفحه اصلی</a>
            </li>
           
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              منوی کشویی
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">گزینه1</a></li>
                <li><a className="dropdown-item" href="#">گزینه2</a></li>
              </ul>
            </li>
          </ul>
          <div>
          <SearchContact/> 
          </div>
          
          
        </div>
      </div>
    </div>
  </nav>
</>
)
}
export default Navbar;
