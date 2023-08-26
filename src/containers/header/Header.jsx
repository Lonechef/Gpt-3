import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
//Working on header including welocme text ai image and people image
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>Arrange a comfortable bed for any required travel assistance, even if it's not particularly pleasing. All thoughts should focus on the positive aspects of exercise and blessings. Alterations that bring joy to everything should be embraced, including lively attachments. Over the years, we should be open to granting the requests of others during gatherings.</p>
      {/* Creating Place holder  */}
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
      {/* Adding People Image */}
      <div className="gpt3__header-content__people">
        
        <img src={people} alt='people' />
        <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
        </div>
        
        {/* AI Image */}
        
        
        <div className="gpt3__header-image">
        <img src={ai} alt='AI' />
        </div>   
        </div>
     
  )
}

export default Header