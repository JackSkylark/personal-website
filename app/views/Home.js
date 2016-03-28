import React from "react";
import {HexIcon} from "./../components/hexagon/HexIcon";

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>This is the home page!</p>
        <HexIcon iconName="rocket" iconSize="2x"/>
      </div>
    );
  }
}
