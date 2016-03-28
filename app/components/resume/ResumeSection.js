import React from "react";
import styles from "./styles.css";
import HexIcon from "./../hexagon/HexIcon";

export default class ResumeSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
              <HexIcon iconName={this.props.iconName} iconSize={"2x"} />
              <h3 className={styles.sectionHeaderTitle}>{this.props.title}</h3>
          </div>
          <div className={styles.sectionContent}>
              {this.props.children}
          </div>
        </section>
      );
  }
}
