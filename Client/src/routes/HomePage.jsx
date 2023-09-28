//import libaries
import React from 'react';
import '../styles/Home.css';

//import components
import TitleComponent from '../titleComponent';
import CardComponent from '../cardComponent';
import ShowMoreButtonComponent from '../showMoreButtonComponent';
import NewsletterComponent from '../newsLetterComponent';
import FooterTopComponent from '../footerTopComponent';
import FooterBottomComponent from '../footerBottomComponent';

//import images
import freelancer1 from '../images/freelancer-1.png';
import freelancer2 from '../images/freelancer-2.png';
import freelancer3 from '../images/freelancer-3.png';
import customer1 from '../images/customer-1.png';
import customer2 from '../images/customer-2.png';
import customer3 from '../images/customer-3.png';


//import images
import wallpaper from '../images/wallpaper.jpg'
function  HomePage() {
  const cardData1 = [
    {
      title: 'Khaled Arabzadeh',
      content: 'React Developer',
      image: freelancer1,
      reviewScore: 5,
    },
    {
      title: 'John Deo',
      content: 'Java Developer',
      image: freelancer2,
      reviewScore: 5,
    },
    {
      title: 'Sushant Gupta',
      content: 'Android Developer',
      image: freelancer3,
      reviewScore: 5,
    },
  ];

  const cardData2 = [
    {
      title: 'Shabana Rexhepi',
      content: 'Director at Real Estate Xpert',
      image: customer1,
      reviewScore: 5,
    },
    {
      title: 'Metin Aziret',
      content: 'Sales Associate at hockingstuart',
      image: customer2,
      reviewScore: 5,
    },
    {
      title: 'Paul Organtzidis',
      content: 'Director and OIEC at Ray White',
      image: customer3,
      reviewScore: 4.9,
    },
  ];

    return (<div>
      <div className="img-header">
        <img src={wallpaper} alt="Cover" />
      </div>
      <div className="card-container-1">
        <div className="content-1">
          <TitleComponent title="Featured Freelancers" />
          <div className="cards-1">
            {cardData1.map((card, index) => (
            <CardComponent key={index} title={card.title} content={card.content} image={card.image} reviewScore={card.reviewScore} />
            ))}
          </div>
            <ShowMoreButtonComponent buttonText="See more" /> 
        </div>
      </div>
      <div className="card-container-2">
        <div className="content-2">
          <TitleComponent title="Featured Customers" />
          <div className="cards-2">
            {cardData2.map((card, index) => (
              <CardComponent key={index} title={card.title} content={card.content} image={card.image} reviewScore={card.reviewScore} />
            ))}
          </div>
          <ShowMoreButtonComponent buttonText="See all customers" /> 
        </div>
      </div>
      <NewsletterComponent />
      <FooterTopComponent />
      <FooterBottomComponent />
    </div>

    
    );
}
export default HomePage;