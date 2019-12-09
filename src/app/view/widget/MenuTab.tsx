import React from "react";
import { Link } from "react-router-dom";

interface MenuTabProps {
  pathName?: string;
  tabImg?: any;
  tabName?: string;
}
const MenuTab: React.FunctionComponent<MenuTabProps> = props => {
  return (
    <div className="tab">
      <img src={props.tabImg} />
      <a href={`${props.pathName}`} className="tab-description">
        {props.tabName}
      </a>
    </div>
  );
};

export default MenuTab;
