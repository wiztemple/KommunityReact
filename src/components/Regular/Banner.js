import React from 'react';
import bannerImg from '../../images/com.png';

const Banner = () =>  (
    <div className="banner mt-3">
        <div className="shelter">
            <div className="card__shadow">
                <div className="columns">
                    <div className="col-6">
                        <div className="flex">
                            <div className="welcome">
                                <h1>Ask questions, answer questions and get answers!</h1>
                                <blockquote>
                                    “To be able to ask a question clearly is two-thirds of the way to getting it answered.” ― John Ruskin
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="flex">
                            <img className="img__shelter" src={bannerImg} />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
)

export default Banner;
