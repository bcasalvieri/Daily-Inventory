import React, { Component } from 'react';
import { Jumbotron } from "react-bootstrap";
import styled from 'styled-components';
import BackgroundImg from '../images/background-calm-clouds-747964.jpg';
import UserContext from '../utils/UserContext';
import {getUserProfile} from "../utils/API";


const MyJumbotron = styled(Jumbotron)`
  min-height: 100vh;
  background-image: url('${BackgroundImg}');
  background-size: cover;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const MyHeader = styled.h1`
  margin-top: 100px;
  color: darkslategray;
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
        .then(({ data: userData}) => {
          this.context.setLogin(userData);
        });
    } else {
      this.context.setLogout();
    };
  };

  render() {
    return (
      <div>
        <MyJumbotron>
          <MyHeader className='display-1'>Daily Inventory</MyHeader>
        </MyJumbotron>
      </div>
    )
  }
};

Home.contextType = UserContext;

export default Home;
