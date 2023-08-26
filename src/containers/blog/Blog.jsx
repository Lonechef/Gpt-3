import React from 'react';
import {Article}  from  '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us explore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Nov 11, 2021" text="Is this truly the era for AI now? What advantages does it bring compared to human capabilities?" />
        <Article imgUrl={blog03} date="Dec 20, 2021" text="What are the LAWS for AI? And improvement's required." />
        <Article imgUrl={blog04} date="Oct 5, 2021" text="Data!! Is the new Age Crude and AI will help to extract it." />
        <Article imgUrl={blog05} date="Aug 12 2021" text="AI will  change the way of your browsing and will become the integral part of your daily life." />
      </div>
    </div>
  </div>
);

export default Blog;