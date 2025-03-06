import React from "react";
import '../styles/About.css'
import property1 from '../assets/property1.jpg'
import property2 from '../assets/property2.jpg'
import property3 from '../assets/property3.jpg'
import property4 from '../assets/property4.jpg'
import property5 from '../assets/property5.jpg'

const newsData = [
    {
      title: "Choosing Your Next Apartment",
      author: "Mike Heiman",
      date: "Nov 1, 2035",
      image: property1,
      description: "This item is connected to a text field in your content collection...",
    },
    {
      title: "10 Tips for Students to Pay Rent",
      author: "Gregory Jems",
      date: "Sep 30, 2035",
      image: property2,
      description: "This item is connected to a text field in your content collection...",
    },
    {
      title: "Find Your Next Vacation House",
      author: "Gerry Grossman",
      date: "Aug 31, 2035",
      image: property4,
      description: "This item is connected to a text field in your content collection...",
    },
    {
      title: "5 Things to Keep in Mind When Buying a New Home",
      author: "Don White",
      date: "Jul 31, 2035",
      image: property2,
      description: "This item is connected to a text field in your content collection...",
    },
    {
        title: "Choosing Your Next Apartment",
        author: "Mike Heiman",
        date: "Nov 1, 2035",
        image: property1,
        description: "This item is connected to a text field in your content collection...",
      },
      {
        title: "10 Tips for Students to Pay Rent",
        author: "Gregory Jems",
        date: "Sep 30, 2035",
        image: property5,
        description: "This item is connected to a text field in your content collection...",
      },
     
     
  ];
const About = () =>{
    return(
    <div>
            <div className="about-container">
      <h2 className="about-header">About Us</h2>
      <p className="about-text">
        We are dedicated to providing the latest updates and insights on real estate trends.
        Our mission is to help individuals make informed decisions when choosing a home or investment property.
      </p>
      <h2 className="news-header">OUR UPDATES</h2>
      <h1 className="news-title">NEWS</h1>
      <div className="news-list">
        {newsData.map((news, index) => (
          <div key={index} className="news-card">
            <p className="news-date">{news.date}</p>
            <h3 className="news-title">{news.title}</h3>
            <p className="news-author">By {news.author}</p>
            <img src={news.image} alt={news.title} className="news-image" />
            <p className="news-description">{news.description}</p>
            <a href="#" className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </div>
</div>
    )
}



export default About