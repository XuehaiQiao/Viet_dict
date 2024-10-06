import { NavbarProps } from "../App";

const NavBar: React.FC<NavbarProps> = ({ clickEffect, setClickEffect }) => {
  return (
    <>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a
            onClick={() => {
              if (clickEffect) {
                setClickEffect(false);
              } else {
                setClickEffect(true);
              }
            }}
            className="nav-link active"
            aria-current="page"
            href="#"
          >
            {clickEffect ? "Play Sound Mode" : "Search Word Mode"}
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
