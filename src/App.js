import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Import, Menu } from 'lucide-react';
import Slide from './components/Slide';
import Sidebar from './components/Sidebar';
import Slide1_1 from './slides/slide1';
import Slide1_2 from './slides/slide2';
import Slide3 from './slides/slide3';
import Slide4 from './slides/slide4';
import Slide5 from './slides/slide5';
import Slide6 from './slides/slide6';
import Slide7 from './slides/slide7';
import Slide8 from './slides/slide8';
import Slide9 from './slides/slide9';

const IntegratedPresentation = () => {
  const slides = [Slide9, Slide1_1, Slide3, Slide1_2, Slide4, Slide5, Slide6, Slide7, Slide8];
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
            Content={slides[currentSlide].Content}
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
