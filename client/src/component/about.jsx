import React from 'react';
import Main from './Main';

function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">

      <Main/>

      <div className="bg-white shadow-lg rounded-lg p-8 mt-10 w-4/5">
        <h1 className="text-3xl font-bold text-gray-800 text-center">About Our Project</h1>
        
        <p className="text-gray-600 mt-6 text-center">
          Welcome to VITO, a voting platform developed as a project by a student from 
          <strong> St John College of Humanities and Science</strong>.
        </p>
        
        <h2 className="text-2xl mt-8 font-semibold text-gray-800">Project Developer</h2>
        <ul className="list-disc list-inside mt-4 text-gray-600">
          <li><strong>Punit Kumar</strong> – Roll No: 35</li>
        </ul>

        <h2 className="text-2xl mt-8 font-semibold text-gray-800">Technologies Used</h2>
        <p className="text-gray-600 mt-4 text-center">
          This project demonstrates modern web development skills using 
          <strong> React</strong> with <strong>Vite</strong> and <strong>Tailwind CSS</strong> for the frontend, 
          creating a responsive and user-friendly interface. The backend is developed with 
          <strong> Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong> to provide a scalable 
          and efficient system.
        </p>

        <h2 className="text-2xl mt-8 font-semibold text-gray-800">Our Vision</h2>
        <p className="text-gray-600 mt-4 text-center">
          The aim of this project is to design a simple and efficient digital voting system 
          that allows users to participate easily and securely in the voting process. 
          The platform focuses on transparency, accessibility, and ease of use.
        </p>
        
      </div>
    </div>
  );
}

export default About;
