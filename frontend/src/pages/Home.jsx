

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate('/contact');
  };

  const handleClick2 = () => {
    navigate('/ourService');
  };

  return (
    <>
      <section className='home'>
        <div className='content'>
          <div className='title'>
            <h1>LET'S</h1>
            <h1>GET</h1>
            <h1>MOVING</h1>
          </div>
          <div className='sub-title'>
            <p>Your Journey to Fitness Starts Here</p>
            <p>Unleash Your Potential</p>
          </div>
          <div className='buttons'>
            <button onClick={handleClick1}>Start Your Journey</button>
            <button onClick={handleClick2}>Discover Your Plan</button>
          </div>
        </div>
      </section>

      <div className='home-part1'>
        <div className='part1'>
          <h3>Experienced & Internationally Certified Personal Trainers</h3>
        </div>
        <div>
          <span className='span'>THE BEST FITNESS EXPERIENCE</span>
        </div>
      
        <div className='boxes'>
          <div className='box'>
            <img src='/part1.jpg' alt='Body Composition Assessment' />
            <h5>Body Composition Assessment</h5>
          </div>

          <div className='box'>
            <img src='/part5.jpg' alt='Open 7 Days A Week' />
            <h5>Open 7 Days A Week</h5>
          </div>

          <div className='box'>
            <img src='/part3.jpg' alt='Complimentary Valet Parking' />
            <h5>Complimentary Valet Parking</h5>
          </div>

          <div className='box'>
            <img src='/part4.jpg' alt='Clean, Comfortable and Safe' />
            <h5>Clean, Comfortable and Safe</h5>
          </div>
        </div>

        <button className='btn'>Join Now</button>
      </div>

      <div className='home-part3'>
        <div className='part3-one'>
          <video width="80%" controls autoPlay loop muted>
            <source src="/video1.mp4" type='video/mp4' />
          </video>
        </div>
        <div className='part3-two'>
          <div>
            <span className='spern'>
              <h1>CLUB</h1>
            </span>
          </div>
          <div>
            <p>
              A wellbeing haven created to support our clients' busy lifestyles.
              Replicating the eclectic streets of Manhattan’s Soho with a serene spa vibe, 
              the club offers a café and workspaces. Whether it's a business meeting over 
              a post-workout shake or just a catch up with a friend, our space will quickly 
              become an extension of your healthy lifestyle.
            </p>
          </div>
          <div>
            <button className='buyBtn'>BUY CLASS</button>
          </div>
        </div>
      </div>

      <div className='home-part2'>
        <div className='part2-one'>
          <div>
            <span>Private Studio Room:</span>
          </div>
          <div>
            <p>One on One Private Sessions</p>
          </div>
          <div>
            <p>Duet Sessions</p>
          </div>
        </div>

        <div className='part2-two'>
          <video width="80%" controls autoPlay loop muted>
            <source src="/video.mp4" type='video/mp4' />
          </video>
        </div>
      </div>
    </>
  );
};

export default Home;
