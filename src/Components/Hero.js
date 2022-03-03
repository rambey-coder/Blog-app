import React from 'react';

const Hero = () => {
  return (
      <div className="container card">
          <div className="card1">
                <img src="Assets/Main Article Image.png" alt="" srcset="" className='hero-img' />
          </div>

          <div className="card2">
                <h2>
                    Weekly Newsletter: Tweets for Higher  Engagements
                </h2>

                <p className='parag'>
                    In this weekly newsletter, we will be covering ten types of  engaging <br /> tweets. This is the guide if you're just starting out on twitter.
                </p>

                <div className="ava">
                    <img src="Assets/User Avatar.png" alt="" srcset="" className='avatar' />

                    <div className="text">
                        <h6>Jessica Andrews</h6> <br />
                        <p>Content Manager</p>
                    </div>
                </div>
          </div>
      </div>
  );
};

export default Hero;
