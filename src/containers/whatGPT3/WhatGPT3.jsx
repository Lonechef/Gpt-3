import React from 'react'
import Feature from '../../components/feature/Feature';


import './whatgpt3.css'
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="Send Me the message and see the magic.I can chat with you when you are bored,I can give you the best possible solutions..Choice is Your's...See yaa !!!" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="My friends and I are pleased to receive your message. We've heard the entire content and find it delightful. The content of the message should be acknowledged. He isn't confident and the place he lives in isn't up to the mark. Establishing a connection is difficult and the apartments themselves are noisy." />
      <Feature title="Education" text="I am an Ocean of Information to provide you all the information you want from any part of the Globe " />
    </div>
  </div>
  )
}

export default WhatGPT3