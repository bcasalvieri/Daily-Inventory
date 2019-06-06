import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Jumbotron } from "react-bootstrap";
import styled from 'styled-components';
import BackgroundImg from '../images/background-calm-clouds-747964.jpg';
import UserContext from '../utils/UserContext';
import { getUserProfile } from "../utils/API";


const MyJumbotron = styled(Jumbotron)`
  min-height: 100vh;
  background-image: url('${BackgroundImg}');
  background-size: cover;
  margin: 0;
  display: flex;
  justify-content: center;
`;

class Home extends Component {

  componentDidMount(props) {
    // read from url bar
    const userId = (this.props.location.search)
      ? this.props.location.search.split("=").pop()
      // if user id not in search bar, use id in userContext
      : (this.context.id)
        ? this.context.id
        : "";

    if (userId) {
      getUserProfile(userId)
        .then(({ data: userData }) => {
          this.context.setLogin(userData);
        });
    } else {
      this.context.setLogout();
    };
  };

  render() {

    // if user is logged in (isLoggedIn is true), redirect to /home
    if (this.context.isLoggedIn) {
      return <Redirect to='/home' />
    };

    return (
      <div>
        <MyJumbotron></MyJumbotron>
      </div>
    )
  }
};

Home.contextType = UserContext;

export default Home;
