import React, { useContext, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import {
  BiHeart,
  BiLocationPlus,
  BiMenu,
  BiSearch,
  BiUser,
} from "react-icons/bi";
import { Button, Offcanvas } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import { IoBagOutline } from "react-icons/io5";
import { SearchContext } from "../Context/Search";

const Navigation = () => {
  // OffCanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { count } = useContext(CartContext);
  const { search, setSearch } = useContext(SearchContext);
  const navigate = useNavigate();

  const HandleSearchChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.trim()) {
      navigate("/aeroProducts");
    }
  };

  const NavLinkStyle = {
    textDecoration: "none",
    color: "#2e3133",
    fontSize: "1.2rem",
    fontWeight: "500",
    zIndex: "999",
  };
  const OffcanvasNavLinkStyle = {
    width: "100%",
    display: "block",
    borderBottom: "1px solid #E6E6E6",
    textDecoration: "none",
    color: "#2e3133",
    fontSize: "1.5rem",
    fontWeight: "500",
    textAlign: "center",
    padding: "10px",
    marginTop: "30px",
  };

  return (
    <div>
      <div className="Navbar d-none d-sm-none d-md-none d-lg-none d-xl-flex d-xxl-flex align-items-center ">
        <div className="NavPagesMove">
          <NavLink style={{ ...NavLinkStyle }}>Women</NavLink>
          <NavLink style={{ ...NavLinkStyle }}>Men</NavLink>
          <NavLink style={{ ...NavLinkStyle }}>Jeans</NavLink>
          <NavLink style={{ ...NavLinkStyle }} to={"/productsPage"}>
            Aero For All
          </NavLink>
          <NavLink style={{ ...NavLinkStyle }}>Clearance</NavLink>
        </div>

        <div className="WebLogo position-absolute">
          <NavLink to={"/"}>
            <img
              src="https://1000logos.net/wp-content/uploads/2022/07/Aeropostale-logo.png"
              alt=""
              height={120}
              width={250}
            />
          </NavLink>
        </div>

        <div className="NavIcons">
          <span>
            <input
              type="text"
              placeholder="Search"
              className="SearchInput"
              value={search}
              onChange={(e) => HandleSearchChange(e)}
            />
            <BiSearch className="SearchIcon" />{" "}
          </span>
          <NavLink
            style={{ ...NavLinkStyle, fontSize: "1.8rem" }}
            to={"/wishList"}
          >
            {" "}
            <BiHeart />{" "}
          </NavLink>
          <NavLink style={{ ...NavLinkStyle, fontSize: "1.8rem" }}>
            {" "}
            <BiLocationPlus />{" "}
          </NavLink>
          <NavLink
            style={{ ...NavLinkStyle, fontSize: "1.8rem" }}
            to={"/login"}
          >
            {" "}
            <BiUser />{" "}
          </NavLink>
          <div>
            <NavLink
              style={{
                ...NavLinkStyle,
                fontSize: "1.8rem",
                position: "relative",
              }}
              to={"/cartPage"}
            >
              {" "}
              <IoBagOutline />
              <span
                className="counter position-relative"
                style={{ right: "50%", fontSize: "16px" }}
              >
                {count}
              </span>{" "}
            </NavLink>
          </div>
        </div>
      </div>

      <div className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-none d-xxl-none justify-content-around justify-context-sm-between justify-context-md-around justify-context-lg-none justify-context-xl-none justify-context-xxl-none">
        <NavLink to={"/"}>
          <img
            src="https://1000logos.net/wp-content/uploads/2022/07/Aeropostale-logo.png"
            alt=""
            height={120}
            width={250}
          />
        </NavLink>

        <Button
          onClick={handleShow}
          style={{ fontSize: "26px" }}
          variant="none"
        >
          <BiMenu />
        </Button>
      </div>
      <span className="d-block d-sm-block d-md-block d-lg-block d-xl-none d-xxl-none">
        <input
          type="text"
          placeholder="Search"
          className="SearchInput"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <BiSearch className="SearchIcon" />{" "}
      </span>

      <hr />
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {" "}
            <div className="OffCanvasLogo">
              <NavLink to={"/"}>
                <img
                  src="https://1000logos.net/wp-content/uploads/2022/07/Aeropostale-logo.png"
                  alt=""
                  height={120}
                  width={250}
                />
              </NavLink>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="NavPagesMove d-flex flex-column m-auto w-100">
            <NavLink style={{ ...OffcanvasNavLinkStyle }}>Women</NavLink>
            <NavLink style={{ ...OffcanvasNavLinkStyle }}>Men</NavLink>
            <NavLink style={{ ...OffcanvasNavLinkStyle }}>Jeans</NavLink>
            <NavLink to={"/productsPage"} style={{ ...OffcanvasNavLinkStyle }}>
              Aero For All
            </NavLink>
            <NavLink style={{ ...OffcanvasNavLinkStyle }}>Clearance</NavLink>
          </div>
          <div className="NavIcons d-block text-center w-100 mt-4">
            <NavLink
              style={{ ...NavLinkStyle, fontSize: "1.5rem" }}
              to={"/wishList"}
            >
              {" "}
              <BiHeart />{" "}
            </NavLink>
            <NavLink style={{ ...NavLinkStyle, fontSize: "1.5rem" }}>
              {" "}
              <BiLocationPlus />{" "}
            </NavLink>
            <NavLink
              style={{ ...NavLinkStyle, fontSize: "1.5rem" }}
              to={"/login"}
            >
              {" "}
              <BiUser />{" "}
            </NavLink>
            <NavLink
              style={{
                ...NavLinkStyle,
                fontSize: "1.8rem",
                position: "relative",
              }}
              to={"/cartPage"}
            >
              {" "}
              <IoBagOutline />
              <span
                className="counter position-relative"
                style={{ right: "5%", fontSize: "16px" }}
              >
                {count}
              </span>{" "}
            </NavLink>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Navigation;
