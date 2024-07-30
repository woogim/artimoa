// src/slides/Slide1_2.js
import React from 'react';
import { ArrowRight, Clock, ThumbsUp, Repeat, Shield, BarChart, DollarSign, Book, Zap, BookOpen, Package } from 'lucide-react';

class Slide1_2 {
  static title = "학습 vs 솔루션 구매 비교";
  static chapterNumber = "1.3";

  static DiagramBox({ title, children, color }) {
    return (
      <div className={`border-2 ${color} rounded-lg p-4 flex flex-col items-center justify-center w-72 h-auto`}>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        {children}
      </div>
    );
  }

  static DiagramArrow() {
    return (
      <div className="flex items-center justify-center w-16">
        <ArrowRight className="text-gray-500" />
      </div>
    );
  }

  static DetailItem({ icon, text, color }) {
    return (
      <div className={`flex items-center mt-2 ${color}`}>
        {icon}
        <span className="text-xs ml-1">{text}</span>
      </div>
    );
  }

  static IconCircle({ children, label }) {
    return (
      <div className="flex flex-col items-center justify-center mr-6">
        <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white mb-2">
          {children}
        </div>
        <span className="text-xs text-center">{label}</span>
      </div>
    );
  }

  static Content() {
    return (
      <div className="flex flex-col items-center rounded-xl">
        <h2 className="text-2xl font-bold mb-6">학습 vs 솔루션 구매 비교</h2>
        <div className="flex flex-col space-y-8">
          <div className="flex items-center">
            <Slide1_2.IconCircle label="강의">
              <BookOpen size={32} className="text-blue-500" />
            </Slide1_2.IconCircle>
            <div className="flex-grow">
              <Slide1_2.DiagramBox title="학습을 통한 해결" color="border-blue-500">
                <div className="flex items-center mb-2">
                  <DollarSign className="text-green-500 mr-2" />
                  <Book className="text-blue-500 mr-2" />
                  <ArrowRight className="text-gray-500 mr-2" />
                  <span className="text-purple-500 font-bold">지식</span>
                </div>
                <p className="text-sm text-center">지식 습득 후 직접 해결</p>
                <Slide1_2.DetailItem icon={<Clock size={16} />} text="긴 학습 시간 필요" color="text-red-500" />
                <Slide1_2.DetailItem icon={<BarChart size={16} />} text="초기 생산성 낮음" color="text-red-500" />
                <Slide1_2.DetailItem icon={<Repeat size={16} />} text="반복적인 연습 필요" color="text-orange-500" />
              </Slide1_2.DiagramBox>
            </div>
            <Slide1_2.DiagramArrow />
            <Slide1_2.DiagramBox title="결과" color="border-blue-500">
              <span className="text-blue-500 text-2xl mb-2">🛠️</span>
              <p className="text-sm text-center">문제 해결 능력 향상</p>
              <p className="text-sm text-center">장기적 이점</p>
              <Slide1_2.DetailItem icon={<ThumbsUp size={16} />} text="구매 설득력 낮음" color="text-orange-500" />
              <Slide1_2.DetailItem icon={<Clock size={16} />} text="투자 대비 효과 지연" color="text-red-500" />
            </Slide1_2.DiagramBox>
          </div>
          <div className="flex items-center">
            <Slide1_2.IconCircle label="솔루션">
              <Package size={32} className="text-green-500" />
            </Slide1_2.IconCircle>
            <div className="flex-grow">
              <Slide1_2.DiagramBox title="솔루션 구매" color="border-green-500">
                <div className="flex items-center mb-2">
                  <DollarSign className="text-green-500 mr-2" />
                  <ArrowRight className="text-gray-500 mr-2" />
                  <span className="text-green-500 font-bold">솔루션</span>
                </div>
                <p className="text-sm text-center">외부 솔루션으로 즉시 해결</p>
                <Slide1_2.DetailItem icon={<Clock size={16} />} text="즉각적인 적용 가능" color="text-green-500" />
                <Slide1_2.DetailItem icon={<Shield size={16} />} text="전문가에 의해 검증됨" color="text-blue-500" />
                <Slide1_2.DetailItem icon={<BarChart size={16} />} text="빠른 생산성 향상" color="text-green-500" />
              </Slide1_2.DiagramBox>
            </div>
            <Slide1_2.DiagramArrow />
            <Slide1_2.DiagramBox title="결과" color="border-green-500">
              <Zap className="text-yellow-500 mb-2" size={32} />
              <p className="text-sm text-center">빠른 문제 해결</p>
              <p className="text-sm text-center">효율성 증대</p>
              <Slide1_2.DetailItem icon={<ThumbsUp size={16} />} text="구매 설득력 높음" color="text-green-500" />
              <Slide1_2.DetailItem icon={<DollarSign size={16} />} text="비용 대비 빠른 ROI" color="text-green-500" />
              <Slide1_2.DetailItem icon={<Repeat size={16} />} text="지속적인 업데이트/지원" color="text-blue-500" />
            </Slide1_2.DiagramBox>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide1_2;