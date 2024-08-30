import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import Slide from './components/Slide';
import Sidebar from './components/Sidebar';

import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';

const IntegratedPresentation = () => {
  const slides = [Slide1, Slide2, Slide3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const changeSlide = (direction) => {
    setCurrentSlide(prevSlide => 
      Math.max(0, Math.min(slides.length - 1, prevSlide + direction))
    );
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-100 min-h-screen">
      <Sidebar
        slides={slides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        isOpen={isSidebarOpen}
      />
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="p-4">
          <button
            className="mb-4 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu size={24} />
          </button>
          <Slide
            Content={slides[currentSlide]}
            title={slides[currentSlide].title}
            chapterNumber={slides[currentSlide].chapterNumber}
          />
          <div className="flex justify-center mt-6">
            {[[-1, ChevronLeft], [1, ChevronRight]].map(([direction, Icon], index) => (
              <button
                key={index}
                className="mx-2 p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
                onClick={() => changeSlide(direction)}
                disabled={currentSlide === (direction === -1 ? 0 : slides.length - 1)}
              >
                <Icon size={24} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegratedPresentation;