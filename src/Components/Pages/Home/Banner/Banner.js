import React from 'react';
import bannerpic1 from '../../../../images/Photo(6).png'

import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">

                    <div className="col-md-6 main-banner">
                        <h1 className="title">
                            Find a doctor & <br /> book online
                        </h1>
                        <p className="text-start mt-3 paragraph">
                            A good doctor is also one who is attentive, analytical, brave, calm, cooperative, creative, decisive,   selfless, skillful, trustworthy, vigilant, and wise.
                        </p>
                    </div>
                    <div className="col-md-6 banner-pic img-fluid">
                        <img src={bannerpic1} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;