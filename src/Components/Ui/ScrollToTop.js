'use client'

import ScrollToTop from "react-scroll-to-top";

export default function ClientScrollToTop() {
  return <ScrollToTop 
  smooth 
  color="#FFFFFF"
  style={{
    backgroundColor: "#003F7D",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.5s ease-in-out",
    hover: {
      opacity: 0.8
    }
  }}
/>;
}