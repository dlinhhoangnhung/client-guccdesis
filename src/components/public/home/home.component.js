import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import Navbar from "../../navbar.component"

import UserService from "../../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  // componentDidMount() {
  //   UserService.getPublicContent().then(
  //     response => {
  //       this.setState({
  //         content: response.data
  //       });
  //     },
  //     error => {
  //       this.setState({
  //         content:
  //           (error.response && error.response.data) ||
  //           error.message ||
  //           error.toString()
  //       });
  //     }
  //   );
  // }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}