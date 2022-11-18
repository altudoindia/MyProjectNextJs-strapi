import React from "react";
import Link from "next/link";
import Styles from "./LinkList.module.scss";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/" passHref>
          <a className={Styles.logo + " navbar-brand"} href="#">
            <img src="./logo.png" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-row-reverse"
          id="navbarSupportedContent"
        >
          <form className="d-flexs d-none">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav mb-2 mb-lg-0 me-3">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link" href="#" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="about">
                <a className="nav-link" href="#">
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/our-locations">
                <a className="nav-link" href="#">
                  Our Locations
                </a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Education
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link href="/wellness-and-education">
                    <a className="dropdown-item" href="#">
                      Wellness and Education
                    </a>
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Webinars
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/news-and-stories">
                <a
                  className="nav-link"
                  href=""
                  aria-disabled="true"
                >
                  News and Stories
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact-us">
                <a
                  className="nav-link"
                  href=""
                  aria-disabled="true"
                >
                  Contact
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login">
                <a
                  className="nav-link"
                  href=""
                  aria-disabled="true"
                >
                  Log In
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
