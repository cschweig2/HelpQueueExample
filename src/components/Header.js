import React from "react";
import ticketsImage from "./../img/tickets.jpg";

function Header(){
  return(
    <>
      <h1>Help Queue</h1>
      <img src={ticketsImage} alt="An image of tickets" />
    </>
  )
}

export default Header;