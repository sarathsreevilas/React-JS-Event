import React from "react";
import {Button,Table,Accordion,Card,Navbar,Container,Nav} from "react-bootstrap";



const Header = () => {
  const clickHandler = () => {
    console.log("You clicked me");
  }

  const dbClickHandler = (name) => {
    alert("Hello " + name);
  }

  const onChangeHandler = () => {
    alert("you just typed something");
  }

  // const mouseHandle = () => {
  //   alert("you moved the mouse over");
  // }

  const onkeyDown = () => {
    alert("You pressed a key");
  }

  return (
    <>
    <h1 className="bg-danger text-warning"> Learn React Events</h1>
    <button onClick={clickHandler}> Click Me</button>
    <h1 onDoubleClick={() => dbClickHandler("Smug")}>Double Click</h1>
    <input onChange={onChangeHandler} type="text" />
    {/* <h1 onMouseOver={mouseHandle}>Mouse Over</h1> */}
    <input onKeyDown={onkeyDown} type="text"/>
    </>
  );
};

export default Header;
