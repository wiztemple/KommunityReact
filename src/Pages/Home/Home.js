import React, { Component } from 'react'
import Header from '../../components/Regular/Header';
import LeftCard from '../../components/Cards/LeftCard';
import RightCard from '../../components/Cards/RightCard';
import Card from '../../components/Cards/Card';
import Paginate from '../../components/Regular/Paginate';
import Footer from '../../components/Regular/Footer';

class Home extends Component {
  render() {
    return (
        <div className="app">
            <Header />
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
                        <div className="col-3">
                            <RightCard />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Paginate />
                <Footer />
            </section>
        </div>
    )
  }
}

export default Home;
