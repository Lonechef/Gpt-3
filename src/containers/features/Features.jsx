import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
//Instead of  creating features tag again and again we will just add the features data in a array
const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Enhancing and addressing doubts promptly.Swiftly address and improve any existing distrust.Rapidly acknowledge and actively improve end distrusts.',
  },
  {
    title: 'Become the tended active',
    text: 'Shift into a proactive mode.Transition into an engaged state of activity and attentiveness.',
  },
  {
    title: 'Message or am nothing',
    text: 'Yaa I know I look attractive but seeing me wont work you have to type something so go get an access to see magic',
  },
 
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {/* Mapping on our feature's data */}
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;