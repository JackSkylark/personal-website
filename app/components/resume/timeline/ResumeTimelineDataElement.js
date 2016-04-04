import React from "react";
import styles from "./styles.css";

export default class ResumeTimelineDataElement extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this);

      var {timelineYearStart, timelineYearEnd, yearStart, yearEnd} = this.props;
      var {containerWidth} = this.props;

      var timelineDist = (timelineYearEnd - timelineYearStart);
      var elementDist = (yearEnd - yearStart);

      var proportion = (elementDist / timelineDist);
      var startOffset = (yearStart - timelineYearStart) / timelineDist;
      var borderBottomSize = containerWidth * proportion;
      var offset = containerWidth * startOffset;



      console.log(containerWidth);
      console.log(proportion);
      console.log(borderBottomSize);
      console.log(offset);

      var elementStyle = {
        "left": (offset) + "px",
        "borderBottomWidth": (elementDist * 60) + "px",
        "borderLeftWidth": (borderBottomSize / 2)+ "px",
        "borderRightWidth": (borderBottomSize / 2)+ "px"
      }

      return (
        <div className={styles.dataItem} style={elementStyle}>
          <h5 className={styles.title}>{this.props.title}</h5>
          <h6 className={styles.subTitle}>{this.props.subTitle}</h6>
          <span className={styles.title_arrow}>&nbsp;</span>
        </div>
      );

  }
}
