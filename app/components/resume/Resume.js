import React from "react";
import styles from "./styles.css";
import ResumeSection from "./ResumeSection";
import ResumeTimeline from "./timeline/ResumeTimeline";
import ResumeTimelineDataElement from "./timeline/ResumeTimelineDataElement";

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className={styles.resume}>
          <div className={styles.profileWrapper}>
            <div className={styles.profile}>
              <h2>John David Slaughter</h2>
              <h3>Software Developer</h3>

              <ResumeSection title="Profile" iconName="file-text">
                <p>This is a section test</p>
              </ResumeSection>
              <ResumeSection title="Profile" iconName="file-text">
                <p>This is a section test</p>
              </ResumeSection>
              <ResumeSection title="Profile" iconName="user">
                <ResumeSection title="What happens when I do this" iconName="rocket">
                </ResumeSection>
              </ResumeSection>
            </div>
          </div>
          <div className={styles.experienceWrapper}>
            <div className={styles.experience}>
              <ResumeTimeline title={"Experience"} yearStart={"2010"} yearEnd={"2016"}>
                <ResumeTimelineDataElement title={"Markit"} yearStart={"2011"} yearEnd={"2015"}/>
                <ResumeTimelineDataElement subTitle={"Product Research and Development"} yearStart={"2012"} yearEnd={"2015"}/>
                <ResumeTimelineDataElement subTitle={"EDM Consultant"} yearStart={"2013"} yearEnd={"2015"}/>
                <ResumeTimelineDataElement title={"Sureshot Media Marketing"} yearStart={"2014"} yearEnd={"2016"}/>
                <ResumeTimelineDataElement title={"Freelance"} yearStart={"2009"} yearEnd={"2012"}/>
              </ResumeTimeline>
              <ResumeTimeline title={"Education"} yearStart={"2008"} yearEnd={"2011"}>
                <ResumeTimelineDataElement title={"University of Texas at Dallas"} yearStart={"2008"} yearEnd={"2011"}/>
              </ResumeTimeline>
              <ResumeTimeline title={"Education"} yearStart={"2008"} yearEnd={"2011"}>
                <ResumeTimelineDataElement title={"University of Texas at Dallas"} yearStart={"2008"} yearEnd={"2011"}/>
              </ResumeTimeline>
              <ResumeTimeline title={"Education"} yearStart={"2008"} yearEnd={"2011"}>
                <ResumeTimelineDataElement title={"University of Texas at Dallas"} yearStart={"2008"} yearEnd={"2011"}/>
              </ResumeTimeline>
            </div>
          </div>
        </div>
      );
  }
}
