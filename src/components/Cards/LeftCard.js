import React from 'react';
import { Link } from 'react-router-dom';

const LeftCard = () => (
    <div className="left-side">
        <h1>Activity</h1>
        <div className="left-side__item active2">
            <Link className="side-link" to="/"><span className="pr-1"><i className="fa fa-pencil"></i></span> Questions</Link>
        </div>
        <div className="left-side__item">
            <Link className="side-link" to="/"><span className="pr-1"><i className="fa fa-book"></i></span> Answers</Link>
        </div>
    </div>
)

export default LeftCard;
