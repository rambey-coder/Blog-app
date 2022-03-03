import React from 'react';

const Section = () => {
  return (
      <div className="container flex">

          <div className="flex1">
              <img src="Assets/Article 1 Image.png " alt="" srcset="" className='Article1'/>

              <h1  className='header'>7 Tips for Organic Traffic</h1>
              <p className='graphs'>
                  From SEO integrating with paid  Advertising, this article covers it all.
              </p>

              <div className="ava">
                    <img src="Assets/User Avatar-1.png" alt="" srcset="" className='avatar' />

                    <div className="text">
                        <h6 className='cuts-name'>Spencer David</h6> <br />
                        <p className='tag-name'>SEO Specialist</p>
                    </div>
                </div>
          </div>

          <div className="flex2">
              <img src="Assets/Article 2 Image.png" alt="" srcset="" className='Article2'/>

              <h1 className='header'>How To Start Your Own Business</h1>

              <p className='graphs'>
                  Starting your own business in 2021 has never been easier
              </p>

              <div className="ava">
                    <img src="Assets/User Avatar-2.png" alt="" srcset="" className='avatar' />

                    <div className="text">
                        <h6 className='cuts-name'>Sara Frey</h6> <br />
                        <p className='tag-name'>Business Leader</p>
                    </div>
                </div>
          </div>

          <div className="flex3">
              <img src="Assets/Article 3 Image.png" alt="" srcset="" className='Article3' />

              <h1 className='header'>5 Tips for Better Branding</h1>

              <p className='graphs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

              <div className="ava">
                    <img src="Assets/User Avatar-3.png" alt="" srcset="" className='avatar' />

                    <div className="text">
                        <h6 className='cuts-name'>David Suns</h6> <br />
                        <p className='tag-name'>Brand Manager</p>
                    </div>
                </div>
          </div>
      </div>
  );
};

export default Section;
