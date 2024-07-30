import React from 'react';
import { Lightbulb, Clock, Search, Globe, Code, Users, Zap, FileText, Image, BarChart } from 'lucide-react';

class Slide9 {
  static title = "AI를 통한 가치 창출 방법";
  static chapterNumber = "1.1";

  static Content() {
    const HighlightText = ({ children }) => (
      <span className="bg-yellow-200 px-1 rounded">{children}</span>
    );
    
    const ListItem = ({ icon: Icon, children }) => (
      <li className="flex items-start mb-2">
        <Icon className="mr-2 mt-1 flex-shrink-0 text-blue-500" size={16} />
        <span>{children}</span>
      </li>
    );
    
    return (
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-3 flex items-center text-green-600">
              <Lightbulb className="mr-2" /> 효과적인 시각화와 커뮤니케이션
            </h2>
            <ul className="space-y-2 text-sm">
              <ListItem icon={BarChart}><HighlightText>도식화:</HighlightText> 복잡한 개념을 AI로 그린 다이어그램으로 표현</ListItem>
              <ListItem icon={Users}><HighlightText>설득력 향상:</HighlightText> 시각적 요소로 효과적인 생각 전달</ListItem>
              <ListItem icon={Code}><HighlightText>모델 비교:</HighlightText> llama 3.1 8b 모델의 성능 평가 결과 활용</ListItem>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-3 flex items-center text-blue-600">
              <Clock className="mr-2" /> 시간 절약과 생산성 향상
            </h2>
            <ul className="space-y-2 text-sm">
              <ListItem icon={Clock}><HighlightText>업무 효율화:</HighlightText> AI를 활용한 시간 절약 사례</ListItem>
              <ListItem icon={Users}><HighlightText>보조자 역할:</HighlightText> 의료진의 서류작업 대체로 환자 케어 시간 확보</ListItem>
              <ListItem icon={Search}><HighlightText>귀찮은 작업 위임:</HighlightText> "AI에게 시킬 수 있을까?" 접근법으로 새로운 활용 사례 발견</ListItem>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded shadow col-span-2">
            <h2 className="text-xl font-semibold mb-3 flex items-center text-purple-600">
              <Globe className="mr-2" /> 지식 접근성 향상과 언어 장벽 극복
            </h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold text-green-500 mb-2 flex items-center">
                  <Globe className="mr-2" /> 언어 장벽 극복
                </h3>
                <ul className="space-y-1">
                  <ListItem icon={Globe}>영어를 모르더라도 다양한 지식에 접근 가능</ListItem>
                  <ListItem icon={Users}>국제적 정보 교류 확대</ListItem>
                  <ListItem icon={Search}>다국어 자료의 빠른 검색과 번역</ListItem>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-500 mb-2 flex items-center">
                  <Lightbulb className="mr-2" /> 지식 확장과 사고 보조
                </h3>
                <ul className="space-y-1">
                  <ListItem icon={Search}>특정 주제에 대한 빠른 정보 검색</ListItem>
                  <ListItem icon={Lightbulb}>AI를 통한 사고 확장과 아이디어 생성</ListItem>
                  <ListItem icon={Clock}>과거 기록 내용의 빠른 검색과 시점 파악</ListItem>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-3 flex items-center text-orange-600">
            <Code className="mr-2" /> 기술 개발과 맞춤형 솔루션
          </h2>
          <ul className="space-y-2 text-sm">
            <ListItem icon={Code}><HighlightText>지속 가능한 비즈니스 모델:</HighlightText> AI가 일하는 기술 개발로 가치 창출</ListItem>
            <ListItem icon={Users}><HighlightText>광범위한 영향력:</HighlightText> 작은 AI 솔루션으로도 많은 사람들에게 도움 제공</ListItem>
            <ListItem icon={Zap}><HighlightText>맞춤형 프로그램:</HighlightText> AI 시대의 개인화된 솔루션 개발</ListItem>
            <ListItem icon={FileText}><HighlightText>자동화된 매뉴얼 생성:</HighlightText> AI를 활용한 설치 방법 등의 문서화</ListItem>
          </ul>
        </div>
        
        <div className="mt-6 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-3 flex items-center text-pink-600">
            <Image className="mr-2" /> 창의적 콘텐츠 생성
          </h2>
          <p className="text-sm">
            <HighlightText>이미지 생성 고도화:</HighlightText> comfyui를 활용한 프롬프트 벡터화와 재조합으로 새로운 이미지 생성.
            이는 AI를 통해 인간의 창의성을 증폭시키고, 기존에 불가능했던 방식의 콘텐츠 제작을 가능케 합니다.
          </p>
        </div>
  
        <div className="mt-6 text-center text-sm text-gray-600">
          <p className="flex items-center justify-center">
            <Zap className="mr-2" /> AI 활용의 핵심은 인간의 창의성과 AI의 능력을 결합하는 것입니다
          </p>
        </div>
      </div>
    );
  }
}

export default Slide9;