import React, { Component } from "react";

class DataFetcher extends Component {
  state = {
    loading: false,
    data: null
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch(this.props.url)
      .then(res => res.json())
      .then(data => this.setState({ data: data, loading: false }));
  }

  render() {
    return <div>{this.props.render(this.state)}</div>;
  }
}

export default DataFetcher;
