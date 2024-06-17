import React from 'react';
import './ChoosePlan.css';

const ChoosePlan = () => {
  return (
    <div className='choosePlan'>
      <div>
        <h5>How to work</h5>
        <h1>How Jaha Jao Waha Khao Works ?</h1>
      </div>

      <div className='process'>
        <div className='select'>
          <img src="https://www.krasamo.com/wp-content/uploads/5739256-1024x684.png" alt="" />
          <h2>CHOOSE Plan</h2>
          <p>Do you want to lose weight, exercise, adhere to a therapeutic diet? Our dietitian will help you with choosing the right program!</p>
        </div>
        <div className='choose'>
          <h2>Go to Apna Thali partner restaurant</h2>
          <p>Do you want to lose weight, exercise, adhere to a therapeutic diet? Our dietitian will help you with choosing the right program!</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Restaurant_1_clip_art.png" alt="" />
        </div>
        <div className='pay'>
          <img src="https://apnathali.com/_next/image?url=%2Fscreen.png&w=1200&q=75" alt="" />
          <h2>Scan & eat</h2>
          <p>Do you want to lose weight, exercise, adhere to a therapeutic diet? Our dietitian will help you with choosing the right program!</p>
        </div>
        <svg className="curved-line">
          <defs>
            <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5">
              <circle cx="5" cy="5" r="5" fill="tomato" />
            </marker>
          </defs>
          <path d="M 264, 260 Q 500, 350 400, 160 T 430, 90" fill="none" stroke="tomato" strokeWidth="2" stroke-dasharray="5, 5" marker-start="url(#dot)" marker-end="url(#dot)" />
        </svg>
        
      </div>
    </div>
  );
};

export default ChoosePlan;
