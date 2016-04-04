import React from "react";

class Form extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        formData: this.props.formData
      }
    }

    static defaultProps = {
      formData: {},
      onUpdate: () => null,
      onSubmit: () => null


    }

    componentWillReceiveProps(nextProps) {

    }

    // Event Handlers
    handleValueChange(name, value) {
      var formData = this.state.formData;
      formData[name] = value;

      console.log(formData);

      this.setState({
          formData: formData
      }, this.props.onUpdate.bind(null, formData));
    }

    handlePanelChange(panelId, preventHistory) {

    }

    handleSubmit() {

    }


    render() {

      return (
        <form>
          {
            React.Children.map(this.props.children, child => {
              return React.cloneElement(child, {
                formData: this.state.formData,
                onValueChange: this.handleValueChange.bind(this),
                onPanelChange: this.handlePanelChange.bind(this),
                onSubmit: this.handleSubmit.bind(this)
              });
            })
          }
        </form>
      );

    }
}

class Panel extends React.Component {
  constructor(props) {
    super(props);
  }

  handleValueChange(name, value) {
    this.props.onValueChange(name, value);
  }

  render() {
      return(
        <div>
          {
            React.Children.map(this.props.children, child => {
              return React.cloneElement(child, {
                data: this.props.formData[child.props.name],
                onValueChange: this.handleValueChange.bind(this)
              });
            })
          }
        </div>
      );
  }
}

class Button extends React.Component {

}

class InputGroup extends React.Component {
  static defaultProps = {
    data:{},
    name:"",
  }

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.data || {}
    }
  }

  handleValueChange(name, value) {
    console.log(this.state);
    var groupValue = this.state.value;
    groupValue[name] = value;

    this.setState({
        value: groupValue
    }, this.props.onValueChange.bind(null, this.props.name, groupValue));
  }

  render() {
    return (
      <div>
        {
          React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
              data: this.state.value[child.props.name] || undefined,
              onValueChange: this.handleValueChange.bind(this)
            });
          })
        }
      </div>
    );
  }


}

class TextInput extends React.Component {
  static defaultProps = {
    name:"",
    data:""
  }

  constructor(props) {
    super(props);

    this.state = {
      value: props.data
    }
  }

  handleValueChange(e) {
    this.setState({
      value: e.target.value
    }, this.props.onValueChange.bind(null, this.props.name, e.target.value));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.data
    });
  }

  render() {
    return (
      <input type="text"
        name={this.props.id}
        placeholder={this.props.placeholder}
        value={this.state.value}
        onChange={this.handleValueChange.bind(this)} />
    );
  }
}

class SelectInput extends React.Component {
  static defaultProps = {
    options: []
  }

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value
    };
  }

  handleValueChange(e) {
    this.setState({
      value: e.target.value
    }, this.props.onValueChange.bind(null, this.props.name, e.target.value));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.data
    });
  }

  componentDidMount() {
    console.log(this.refs.select.value);

    this.handleValueChange({
      value: this.refs.select.value
    });
  }

  render() {
    var options = this.props.options.map(opt =>
      <option key={this.props.name + "-" + opt.value}
        value={opt.value}>
        {opt.text}
      </option>
    );

    return (
      <select name={this.props.name}
        value={this.state.value}
        ref="select"
        onChange={this.handleValueChange.bind(this)}>
        {options}
      </select>
    );
  }
}

export class SampleForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

      var options = [
        {value: "", text: ""},
        {value: "test", text: "Test"}
      ];

      return(
        <Form>
          <Panel id={"Panel-1"}>
            <InputGroup name={"sampleName"} ObjectNesting={true}>
              <TextInput name={"test"} placeholder={"placeholder test"} />
              <SelectInput name={"wow"} options={options} />
            </InputGroup>
            <TextInput name={"test2"} placeholder={"placeholder test 2"} />
          </Panel>
        </Form>

      );
  }
}

// Inputs
