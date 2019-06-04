import React, { Component } from 'react';
import { Jumbotron, Dropdown, DropdownButton } from "react-bootstrap";
import styled from 'styled-components';
import BackgroundImg from '../images/background-calm-clouds-747964.jpg';
import Navbar from '../components/Navbar';
import { getUserProfile } from '../utils/API';

const MyJumbotron = styled(Jumbotron)`
  min-height: 100vh;
  background-image: url('${BackgroundImg}');
  background-size: cover;
  margin: 0;
  display: flex;
  justify-content: center;
`;

class Home extends Component {
  state = {
    isLoggedIn: false,
    entries: [],
    id: "",
    firstName: "",
    email: ""
  };

  componentDidMount() {
    // read from url bar
    const userId = (this.props.location.search) ? this.props.location.search.split("=").pop() : "";
    if (userId) {
      getUserProfile(userId)
      .then(({ data: userData}) => {
        this.setState({
          id: userData._id,
          firstName: userData.firstName,
          email: userData.email,
          entries: userData.entries,
          isLoggedIn: true
        });
      });
    } else {
      this.setState({
        isLoggedIn:false
      })
    };
  };

  render() {
    return (
      <div>
        <Navbar isLoggedIn={this.state.isLoggedIn} name={this.state.firstName} />
        <MyJumbotron>
          <h1 className='display-1' style={{marginTop: 100, color: 'darkslategray'}}>Daily Inventory</h1>
        </MyJumbotron>
      </div>
    )
  };
};

export default Home;
