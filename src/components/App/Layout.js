import React, { useEffect } from "react"
import AOS from "aos"
import GoTop from "./GoTop"
import DarkAndLightMode from "./DarkAndLightMode"
import { useI18next } from "gatsby-plugin-react-i18next"
const Layout = ({ children }) => {
  React.useEffect(() => {
    AOS.init()
  }, [])
  const { changeLanguage } = useI18next();

  useEffect(() => {
    const userLang = sessionStorage.getItem("siteLanguage") || "en";
    changeLanguage(userLang);
  }, []);

  return (
    <>
      {children}

      <GoTop />

      <DarkAndLightMode />
    </>
  )
}
export default Layout
