import React, { Component } from 'react';

class CommentCard extends Component {
  render() {
    return (
      <div>
        <div className="comment-box" id="commentBox">
          <div className="justify-content-start">
            <div>
              <img src="./assets/images/girl.png" className="avatar" />
            </div>
            <div className="ml-1 answer-input">
              <textarea className="box" placeholder="post comment" />
              <button className="btn btn-blue ripple"
                type="button">Post
              </button>
            </div>
          </div>
        </div>
        <div className="comment-content">
          <div className="justify-content-start">
            <span>
              <img className="avatar-sm" src="./assets/images/boy.png" />
            </span>
            <span className="commenter_name">Sullivan</span>
          </div>

          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sunt mollitia eos nisi maiores praesentium quibusdam,
                    minus error non neque velit nam sed voluptatibus s
                  imilique harum dolores? Voluptatem sit iure quo!</span>
        </div>
      </div>
    );
  }
}

export default CommentCard;
