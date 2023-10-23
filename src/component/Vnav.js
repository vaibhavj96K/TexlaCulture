import React from "react";
import img1 from "../Images/Cicon.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { ReactComponent as Arrow_down } from "../icons/ic_chevron_down.svg";
import { ReactComponent as Arrow_right } from "../icons/ic_chevron_right.svg";
import { ReactComponent as Dashboard } from "../icons/ic_dashboard.svg";
import { ReactComponent as Bank } from "../icons/ic_banking.svg";
import "../index.css";
const Vnav = () => {
  const initialState = {
    Dashboard: false,
    "Companies & Tickets": false,
    Support: false,
    "User Admins": false,
  };
  let icons = [<Bank />, <Dashboard />, <Dashboard />, <Dashboard />];
  let idx = 0;

  const [elementState, setElementState] = useState(initialState);

  // Setting the initial state for the "Dashboard" element to true
  useEffect(() => {
    setElementState((prev) => ({
      ...prev,
      Dashboard: true,
    }));
  }, []);

  const handleClick = (name) => {
    setElementState((prev) => {
      const updatedState = {};
      Object.keys(prev).forEach((key) => {
        updatedState[key] = key === name;
      });
      return updatedState;
    });
  };

  return (
    <nav className="vnav">
      <div>
        <img className="com_logo" src={img1} alt="compnay_logo" />
      </div>

      <div className="vnavigation">
        <p className="general">GENERAL</p>
        <div className="ullist">
          {Object.keys(elementState).map((name) => (
            <NavLink to={`/`} key={name} onClick={() => handleClick(name)}>
              <p className="list">
                <div className="icon">
                  <span>{icons[idx++]}</span>
                  <span>{name}</span>
                </div>
                <span>
                  {elementState[name] ? <Arrow_down /> : <Arrow_right />}
                </span>
              </p>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Vnav;
