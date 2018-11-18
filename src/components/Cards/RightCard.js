import React from 'react'

const RightCard = () => (
    <div className="right-card mt-1">
        <span>Top Contributors</span>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <div className="top-contributor">
            <div>
                <img className="avatar-sm" src="./assets/images/girl.png" />
            </div>
            <span className="flex">Edwin Ada</span>
            <div className="flex">
                <span><i className="fa fa-comment-o"></i> 439</span>
            </div>
        </div>
        <div className="top-contributor">
            <div>
                <img className="avatar-sm" src="./assets/images/boy.png" />
            </div>
                <span className="flex">Sullivan</span>
            <div className="flex">
                <span> <i className="fa fa-comment-o"></i> 439</span>
            </div>
        </div>
        <div className="top-contributor">
            <div>
                <img className="avatar-sm" src="./assets/images/girl.png" />
            </div>
            <span className="flex">Henzem</span>
            <div className="flex">
                <span> <i className="fa fa-comment-o"></i> 439</span>
            </div>
        </div>
    </div>
)

export default RightCard;
