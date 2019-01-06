import React, { Component } from 'react';
import Navbar from '../components/containers/Navbar/Navbar';

class Profile extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <section className="py-5">
          <div className="shelter">
            <div className="ddd">
              <div className="columns">
                <div className="col-4">
                  <div className="profile-card p-1">
                    <div className="profile-card__image">
                      <img src="./assets/images/boy.png"
                        className="img-circle" />
                    </div>
                    <div className="profile-card__user">
                      <h2 className="text-center">Sullivan Wisdom</h2>
                    </div>
                    <div className="profile-card__user-details">
                      <span>Email: wiztemple@gmail.com</span>
                    </div>
                    <div className="profile-card__user-details">
                      <span>Number of Question asked:</span> <span>100</span>
                    </div>
                    <div className="profile-card__user-details">
                      <span>Number of Question answered:</span> <span>130</span>
                    </div>
                    <div className="profile-card__user-details">
                      <span>Questions asked with most answers:</span>
                      <span>10</span>
                    </div>

                  </div>
                </div>
                <div className="col-7">
                  <div className="card p-1">
                    <span className="text-grey">Recent Questions</span>
                  </div>
                  <div className="card p-1">
                    <a href="#">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Quibusdam, magnam.?</a>
                  </div>
                  <div className="card p-1">
                    <a href="#">Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Quibusdam, magnam.?</a>
                  </div>
                  <div className="card p-1">
                    <a href="#">Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Quibusdam, magnam.?</a>
                  </div>
                  <div className="card p-1">
                    <a href="#">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Quibusdam, magnam.?</a>
                  </div>
                  <div className="card p-1">
                    <a href="#">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Quibusdam, magnam.?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
