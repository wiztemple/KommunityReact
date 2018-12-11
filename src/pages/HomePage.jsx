import React, { PureComponent } from 'react';
import Navbar from '../components/containers/Navbar/Navbar.jsx';
import Banner from '../components/Regular/Banner.jsx';
import Card from '../components/containers/Cards/Card.jsx';
import LeftCard from '../components/containers/Cards/LeftCard.jsx';

class HomePage extends PureComponent {
  render() {
    return (
      <div className="app">
        <div className="header">
          <Navbar />
          <Banner />
        </div>
        <section>
          <div className="shelter">
            <div className="columns">
              <div className="col-2">
                <LeftCard />
              </div>
              <div className="col-7">
                <div className="carded p-1 mt-1">
                  <span>Recent Questions</span>
                </div>
                <Card />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default HomePage;
