import React from 'react'
import './Plans.css'

const Plans = () => {
  return (
    <div className="plans-container">
      <div className='plan'>
        <h4>WHAT WE SERVE</h4>
        <h2><span className='rectangle-one'></span>
          <span className='first'>Plans  </span> 
          That <span className='second'> Always </span> 
          Make <span className='rectangle-two'></span><br />
          You Fall In <span className='third'>Love</span>
          
        </h2>
      </div>
      <div className='plan-row'>
        <div className='plan-item'>
          <img src="https://www.krasamo.com/wp-content/uploads/5739256-1024x684.png" alt="Eat Multiple Restaurants" />
          <div className='plan-content'>
            <h3>Eat Multiple Restaurants</h3>
            <p>You only need a few steps in ordering food</p>
          </div>
        </div>
        <div className='plan-item'>
          <img src="https://img.freepik.com/premium-vector/couple-sitting-table-restaurant-eating-food-drinking-wine-waiter-carrying-order-clients-flat-vector-illustration-date-service-concept-banner-website-design-landing-web-page_179970-6925.jpg?w=1060" alt="Instant Meal Service" />
          <div className='plan-content'>
            <h3>Instant Meal Service</h3>
            <p>Delivery that is always on time even faster</p>
          </div>
        </div>
        <div className='plan-item-right'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxclccwjMlKWDjjKyC80IXFMjq7FvRMuBfA&s" alt="Everyday New Meal" />
          <div className='plan-content'>
            <h3>Everyday New Meal</h3>
            <p>Not only fast for us quality is also number one</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plans
