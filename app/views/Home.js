import React from "react";
import {SampleForm} from "./../components/form/form";

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>This is the home page!</p>
        <SampleForm />
      </div>
    );
  }
}
