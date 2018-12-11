import React, { Component } from 'react';
import CommentCard from './CommentCard.jsx';

class AnswerCard extends Component {
  render() {
    return (
      <div className="answer">
        <div className="answer-box">
          <div className="justify-content-start">
            <div>
              <img src="./assets/images/girl.png" className="avatar" />
            </div>
            <div className="ml-1 answer-input">
              <textarea className="box" placeholder="Answer" />
              <button className="button ripple" type="button">Post</button>
            </div>
          </div>
        </div>

        <div className="answer-count">
          <h1>2 Answers</h1>
        </div>
        <div className="mt-1 answer-block py-1">
          <div className="justify-content-start">
            <div className="card-user">
              <img className="avatar" src="./assets/images/girl.png" />
            </div>
            <div className="card-user__job flex">
              <span className="pl-2">Lorem ipsum dolor sit amet.</span>
              <span>
                <small className="text-grey">Answered 1 minute ago</small>
              </span>
            </div>
          </div>
          <div className="answer-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nisi consectetur nobis consequatur numquam reiciendis
                necessitatibus accusamus dolore,
                dolor laborum enim corrupti et vel praesentium similique
                veniet iste dicta dolorem! Repellendus.</p>
          </div>

          <div className="justify-content-start">
            <div className="card-upvote">
              <div className="card-reaction-icons" title="click to like">
                <i className="fa fa-thumbs-up" /> Like
              </div>
            </div>
            <div className="card-views pl-1">
              <div className="card-reaction-icons"
                title="click to add your comment">
                <i className="fa fa-comments-o" /> Comment
              </div>
            </div>
          </div>
          <CommentCard />
        </div>
      </div>
    );
  }
}

export default AnswerCard;
