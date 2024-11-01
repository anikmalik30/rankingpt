import React, { useState } from "react"
import { Link } from "gatsby"

import Logo from "../../assets/images/logo.png"
import whiteLogo from "../../assets/images/white-logo.png"
import LanguageSwitcher from "../LanguageSwitcher"


const Navbar = () => {
  const [menu, setMenu] = React.useState(true)

  const toggleNavbar = () => {
    setMenu(!menu)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("navbar")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
  })

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false")
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal)
  }

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false")
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal)
  }

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link to="/" className="navbar-brand">
                <img src={Logo} alt="logo" className="main-logo" />
                <img src={whiteLogo} alt="logo" className="white-logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      to="/seoanalysis"
                      activeClassName="active"
                      className="nav-link"
                    >
                      SEO Analysis <i className="nav-link bx"></i>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="#"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      Web Services <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/custom-ecommerce-development"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Custom Ecommerce Development
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/web-development"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Web Development
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/hosting-migration"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Hosting Migration
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/website-maintenance-packages"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Website Maintenance Packages
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/wordpress-maintenance-packages"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Wordpress Maintenance Packages
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="#"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      SEO Solutions <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/International-SEO"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Internacional SEO
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/Ecommerce-SEO"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          ECommerce SEO
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/Local-SEO"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Local SEO
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="#"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      Pay Per Click <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/tiktok-ads"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Tiktok Ads
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/google-ads"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Google Ads
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/facebook-ads"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Facebook Ads
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/instagram-ads"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Instagram Ads
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/youtube-ads"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Youtube Ads
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="#"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      Social Media <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/blue-check-instagram-facebook-tiktok"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Blue Check Instagram/Facebook/Tiktok
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/blog"
                      activeClassName="active"
                      onClick={toggleNavbar}
                      className="nav-link"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <LanguageSwitcher /> */}

              <div className="others-option d-flex align-items-center">
                <div className="option-item">
                  <div className="search-box" onClick={handleToggleSearchModal}>
                    <i className="flaticon-search"></i>
                  </div>
                </div>

              </div>

            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      {/* End Search Form */}



    </>
  )
}

export default Navbar
