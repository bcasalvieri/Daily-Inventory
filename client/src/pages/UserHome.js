import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import EntriesFlipCard from '../components/EntriesFlipCard';
import Sidebar from '../components/Sidebar';
import '../assets/css/style.css';
import UserContext from '../utils/UserContext';
import TwelveSteps from '../components/TwelveSteps';
import EightPrinciples from '../components/EightPrinciples';
import SerenityPrayer from '../components/SerenityPrayer';
import MyCarousel from '../components/MyCarousel';

class UserHome extends Component {

  state = {
    isShowing: "Saved Inventories",
  }

  handleSavedInventories = () => {
    this.setState({
      isShowing: 'Saved Inventories'
    })
  }

  handleTwelveSteps = () => {
    this.setState({
      isShowing: 'Twelve Steps'
    });
  };

  handleEightPrinciples = () => {
    this.setState({
      isShowing: 'Eight Principles'
    });
  };

  handleSerenityPrayer = () => {
    this.setState({
      isShowing: 'Serenity Prayer'
    });
  };

  render() {

    const isShowing = this.state.isShowing;
    let showing;
    let header;

    if (isShowing === "Saved Inventories") {
      header = <h2 className='entries-header text-center mb-4'> {this.context.firstName}'s Saved Inventories</h2>;
      showing = <EntriesFlipCard />;
    } else if (isShowing === "Twelve Steps") {
      header = <h2 className='resources-header text-center mb-4'>{isShowing}</h2>
      showing = <TwelveSteps />
    } else if (isShowing === "Eight Principles") {
      header = <h2 className='resources-header text-center mb-4'>{isShowing}</h2>
      showing = <EightPrinciples />
    } else if (isShowing === "Serenity Prayer") {
      header = <h2 className='resources-header text-center mb-4'>{isShowing}</h2>
      showing = <SerenityPrayer />
    }

    return (
      <React.Fragment>
        <div className='wrapper'>
          <MyCarousel />
          <Container className='py-5'>
            <Row>
              <Col md={4} lg={3}>
                <Sidebar
                  steps={this.handleTwelveSteps}
                  principles={this.handleEightPrinciples}
                  prayer={this.handleSerenityPrayer}
                  saved={this.handleSavedInventories}
                />
              </Col>
              <Col md={8} lg={9}>
                {header}
                {showing}
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

UserHome.contextType = UserContext;

export default UserHome;
