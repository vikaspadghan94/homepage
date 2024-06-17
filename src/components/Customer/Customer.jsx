import React, { useState } from 'react';
import './Customer.css';

const testimonials = [
  {
    imgSrc: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
    name: "Willians Jhone",
    position: "CEO & Co-Founder",
    // text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”"
  },
  {
    imgSrc: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
    name: "Jane Doe",
    position: "CTO & Co-Founder",
    // text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”"
  },
  
];

const Customer = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentPage];

  return (
    <div className='customer'>
      <div className='happy-customer'>
        <p>Testimonials</p>
        <h1>Our Happy Customers Say</h1>
      </div>

      <div className='clients'>
        <div className='client-content'>
          <div className='testimonial'>
            <img src={currentTestimonial.imgSrc} alt="" />
              <h3>{currentTestimonial.name}<br /><span>{currentTestimonial.position}</span></h3>
            
          </div>
          <div className='text'>
              <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Amet nisl tincidunt adipiscing dictumst blandit hac. <br /> Lectus cras velit sed dignissim ac, <br />aliquet. Metus egestas habitant feugiat <br /> neque ultrices nunc, dolor egestas mus.”</p>
            </div>
          <div className='navigation'>
            <div className='arrow-left' onClick={handlePrev}>←</div>
            <div className='arrow-right' onClick={handleNext}>→</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
