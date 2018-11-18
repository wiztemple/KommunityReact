import React, { Component } from 'react'

class Card extends Component {
  render() {
    return (
        <div className="card p-1">
            <div className="card-question">
                <a href="answer.html"></a>
                <div className="card-hide">
                    <i className="fa fa-ellipsis-h"></i>
                    <div className="card-drop">
                        <a className=""><i className="fa fa-pencil"></i> Edit Question</a>
                        <a className="deleteBtn"><i className="fa fa-times"></i> Delete Question</a>
                        <a className=""><i className="fa fa-map-pin"></i> Pin Question</a>
                        <a className=""><i className="fa fa-share"></i> Share Question</a>
                    </div>
                </div>
            </div>
            <div className="justify-content-start">
                <div className="card-user">
                    <img className="avatar" src="./assets/images/alarm-clock.png" />
                </div>
                <div className="card-user__job flex">
                    <span className="pl-2">Lorem ipsum dolor sit amet.</span>
                    <span>
                        <small className="text-grey">1 minute ago</small>
                        <small className="text-grey">ter</small>
                    </span>
                </div>
            </div>
            <div className="card-description">
                <p>
                    As displayed in the above diagram, one of the most common use cases for these side effect libraries is hitting an api, showing a loading indicator, then displaying the data once it has returned from the api (or showing an error if there is an error). We will implement this exact functionality in all four libraries.
                    <a href="answer.html?" className="card-description__link">Read more <i className="fa fa-angle-double-right"></i></a>
                </p>
            </div>
            <div className="card-reaction justify-content-space-between">
                <div className="card-views">
                    <div className="card-btn"><span>63</span> <i className="fa fa-eye"></i>
                    </div>
                </div>
                <div className="card-answer ml-2">
                    <div className="card-btn"><span>63 Answers</span> <i className="fa fa-pencil"></i>
                    </div>
                </div>
                <div className="card-tag ml-2">
                    <div className="card-btn"><span>Tag</span>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Card;
