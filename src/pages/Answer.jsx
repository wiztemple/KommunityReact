import React, { PureComponent } from 'react';
import Navbar from '../components/containers/Navbar/Navbar.jsx';
import Card from '../components/containers/Cards/Card.jsx';
import AnswerCard from '../components/containers/Cards/AnswerCard.jsx';

class AnswerPage extends PureComponent {
  render() {
    return (
      <div className="app">
        <div className="header">
          <Navbar />
        </div>
        <section>
          <div className="shelter">
            <div className="columns">
              <div className="col-2" />
              <div className="col-7">
                <Card />
                <AnswerCard />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default AnswerPage;
