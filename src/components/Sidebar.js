// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ slides, currentSlide, setCurrentSlide, isOpen }) => (
  <div className={`fixed left-0 top-0 h-full bg-white bg-opacity-90 shadow-lg transition-all duration-300 ${isOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
    <div className="p-4 w-64">
      <h2 className="text-2xl font-bold mb-4">목차</h2>
      <ul>
        {slides.map((slide, index) => (
          <li key={index} className="mb-2">
            <button
              className={`text-left w-full p-2 rounded ${currentSlide === index ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
              onClick={() => setCurrentSlide(index)}
            >
              {slide.chapterNumber} {slide.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Sidebar;
