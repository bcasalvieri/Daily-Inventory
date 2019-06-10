import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import UserContext from '../utils/UserContext';
import TwelveSteps from '../components/TwelveSteps';
import EightPrinciples from '../components/EightPrinciples';
import SerenityPrayer from '../components/SerenityPrayer';

class Resources extends Component {

  state = {
    resource: ""
  }

  handleTwelveSteps = () => {
    this.setState({
      resource: 'Twelve Steps'
    });
  };

  handleEightPrinciples = () => {
    this.setState({
      resource: 'Eight Principles'
    });
  };

  handleSerenityPrayer = () => {
    this.setState({
      resource: 'Serenity Prayer'
    });
  };
  

  render() {
    let resource;

    if (this.state.resource === 'Twelve Steps') {
      resource = <TwelveSteps />
    } else if (this.state.resource === 'Eight Principles') {
      resource = <EightPrinciples />
    } else if (this.state.resource === 'Serenity Prayer') {
      resource = <SerenityPrayer />
    }

    return (
      <React.Fragment>
        <div className='wrapper'>
          <Jumbotron className='resources-jumbotron'>
            <Container className='d-flex flex-column justify-content-center align-items-center'>
              <h1 className='mb-4'>Resources</h1>
              <ButtonGroup className='resources-buttons col-6' aria-label='resources buttons'>
                <Button onClick={this.handleTwelveSteps}>12 Steps</Button>
                <Button onClick={this.handleEightPrinciples}>8 Principles</Button>
                <Button onClick={this.handleSerenityPrayer}>Serenity Prayer</Button>
              </ButtonGroup>
            </Container>
          </Jumbotron>
          <Container className='py-5'>
            <Row>
              <Col md={4} lg={3}>
                <Sidebar />
              </Col>
              <Col md={8} lg={9}>
                <h2 className='resources-header text-center mb-4'>{this.state.resource}</h2>
                {resource}
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

Resources.contextType = UserContext;

export default Resources
