import React from 'react';
import './Business.css';

class Business extends React.Component
{
  constructor() {
    super()
    this.business = {
      imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
      name: 'MarginOtto Pizzeria',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
  }
}

  render() {
     return(
     <div className="Business">
      <div className="image-container">
        <img src={this.business.imageSrc} alt='' />
    </div>
  <h2>{this.business.name}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{this.business.address}</p>
      <p>{this.business.city}</p>
      <p>{this.business.state} {this.business.zipCode}</p>
    </div>
    <div className="Business-reviews">
      <h3>{this.business.category}</h3>
      <h3 className="rating">{this.business.rating}</h3>
      <p>{this.business.reviewCount}</p>
    </div>
  </div>
</div>
  )
 }
};
export default Business;
