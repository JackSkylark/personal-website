import React from "react";
import styles from "./styles.css";
import Dimensions from "./../../dimensions/dimensions";

export default class ResumeTimeline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var {yearStart, yearEnd} = this.props;

    return (
      <div className={styles.timeline}>
        <ResumeTimelineDataDimensions timelineYearStart={yearStart} timelineYearEnd={yearEnd}>
          {this.props.children}
        </ResumeTimelineDataDimensions>
        <hr/>
        <ResumeTimelineYears yearStart={yearStart} yearEnd={yearEnd}/>
      </div>
    );

  }
}

class ResumeTimelineData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props);

    return (
      <div className={styles.data}>
        {
          React.Children.map(this.props.children, child => {
            return React.cloneElement(child,
              {
                containerWidth:this.props.containerWidth,
                containerHeight:this.props.containerHeight,
                timelineYearStart:this.props.timelineYearStart,
                timelineYearEnd:this.props.timelineYearEnd
              }
            );
          })
        }
      </div>
    );
  }
}

var ResumeTimelineDataDimensions = Dimensions()(ResumeTimelineData); // Dimensions enhanced component


class ResumeTimelineYears extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var {yearStart, yearEnd} = this.props;

    var middotElements = [];
    for(var i = yearStart, tot=yearEnd; i <= tot; i++) {
      middotElements.push(<li key={`middot-${i}`}>.</li>);
    }

    var yearListElements = [];
    for(var i = yearStart, tot=yearEnd; i <= tot; i++) {
      yearListElements.push(<li key={`year-${i}`}>{i}</li>);
    }

    return (
      <div className={styles.yearsContainer}>
        <ul className={styles.middot}>
          {middotElements}
        </ul>
        <ul className={styles.yearsList}>
          {yearListElements}
        </ul>
      </div>
    );
  }
}
