import React from 'react';

const Slide = ({ Content, title, chapterNumber }) => (
  <div className="bg-white max-w-4xl mx-auto border border-gray-300">
    <div className="h-px bg-gray-300"></div>
    <div className="p-8">
      <div className="mb-4 pb-2 border-b border-gray-300">
        <h2 className="text-sm text-gray-600">가치창출을 위한 AI 활용법</h2>
        <h3 className="text-lg font-semibold">{chapterNumber} {title}</h3>
      </div>
      <div className="space-y-8">
        <Content />
      </div>
    </div>
    <div className="h-px bg-gray-300"></div>
  </div>
);

export default Slide;
