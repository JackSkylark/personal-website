import React from "react";
import FontAwesome from "react-fontawesome";
import styles from "./styles.css";

export default class HexIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={styles.hexagonIcon}>
        <FontAwesome name={this.props.iconName} size={this.props.iconSize}/>
      </div>
    );
  }
}
