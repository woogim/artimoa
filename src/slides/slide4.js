import React from 'react';
import { ChevronRight, Lightbulb, CheckSquare, GitBranch, RefreshCw, Eye } from 'lucide-react';

class Slide4 {
  static title = "AI 테크닉";
  static chapterNumber = "1.4";

  static Content() {
    const Slide = ({ title, items }) => (
      <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-4 rounded-lg shadow-lg h-full">
        <h2 className="text-xl font-bold mb-3 text-blue-800">{title}</h2>
        <ul className="space-y-1">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <ChevronRight className="w-4 h-4 text-purple-600 mr-1 mt-1 flex-shrink-0" />
              <span className="text-sm text-gray-800">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
    
    const IconSection = ({ icon: Icon, title, description }) => (
      <div className="flex items-start mb-3">
        <Icon className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" />
        <div>
          <h3 className="text-base font-semibold text-blue-800">{title}</h3>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      </div>
    );
    
    return (
      <div className="max-w-5xl mx-auto">
       
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Slide 
            title="AI와의 효과적인 상호작용"
            items={[
              "Thinking Tag를 통한 AI의 사고 과정 파악",
              "답변이 불만족스러울 때 이전 질문 수정하기",
              "구체적인 지시와 기준 제시의 중요성",
              "Chain of Thought (CoT) 프롬프트 활용"
            ]}
          />
          <Slide 
            title="AI를 활용한 분석 및 판단"
            items={[
              "가치 판단을 위한 체크리스트 활용",
              "시각적 비교를 위한 UX 디자인 요청",
              "대화형 지식 확장 및 발굴 기법 적용",
              "다양한 관점에서의 근거 생성 요청"
            ]}
          />
        </div>
    
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-3 text-blue-800">AI 활용의 핵심 전략</h2>
          <div className="grid grid-cols-2 gap-3">
            <IconSection 
              icon={Lightbulb}
              title="창의적 활용"
              description="복잡하고 덜 일반적인 주제에 대한 탐구"
            />
            <IconSection 
              icon={CheckSquare}
              title="작업 자동화"
              description="반복적이고 귀찮은 작업의 효율적 처리"
            />
            <IconSection 
              icon={GitBranch}
              title="다각도 분석"
              description="AI의 할루시네이션을 역이용한 다양한 관점 생성"
            />
            <IconSection 
              icon={RefreshCw}
              title="반복적 개선"
              description="AI의 결과물을 바탕으로 한 지속적인 개선"
            />
            <IconSection 
              icon={Eye}
              title="목적 명확화"
              description="AI에게 원하는 상호작용 유형 명시 (감정적 지지, 코칭, 팩트체크 등)"
            />
          </div>
        </div>
      </div>
    );
    
    
  }
}

export default Slide4;
 
