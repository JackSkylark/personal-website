import * as React from "react";

export default class SiteNavigationView extends React.Component  {
  render() {
    var siteWrapperStyles = {
      height: "100%",
      width: "100%",
      margin: "0"
    };

    return (    
      <div className="siteWrapper" style={siteWrapperStyles}>
        {this.props.children}
      </div>
    );
  }
}
