import React from 'react';
import { AlertTriangle, Brain, User, MessageSquare, Scale, HelpCircle, CheckCircle, XCircle, Zap, Eye, Cpu, Compass, Lightbulb, Shield } from 'lucide-react';

class Slide8 {
  static title = "AI의 한계와 주의점, AI 사용의 철학과 접근법 ";
  static chapterNumber = "1.8";

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
            <h2 className="text-xl font-semibold mb-3 flex items-center text-red-600">
              <AlertTriangle className="mr-2" /> AI의 한계
            </h2>
            <ul className="space-y-2 text-sm">
              <ListItem icon={Eye}><HighlightText>객관적 판단 불가능:</HighlightText> LLM은 주관적 판단만 가능</ListItem>
              <ListItem icon={Cpu}><HighlightText>할루시네이션 현상:</HighlightText> 없는 정보를 만들어낼 수 있음 (역이용 가능성 있음)</ListItem>
              <ListItem icon={Compass}><HighlightText>현실 맥락 부족:</HighlightText> AI는 현실을 모르므로 맥락 제공 필요</ListItem>
              <ListItem icon={Scale}><HighlightText>가치 판단의 한계:</HighlightText> AI에게 가치 판단을 맡기지 말 것</ListItem>
              <ListItem icon={MessageSquare}><HighlightText>촌철살인 능력 부족:</HighlightText> 검열로 인한 표현의 한계 (예: 신경가소성, 주입식 교육 등의 언급 어려움)</ListItem>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-3 flex items-center text-green-600">
              <Brain className="mr-2" /> 효과적인 AI 사용법
            </h2>
            <ul className="space-y-2 text-sm">
              <ListItem icon={User}><HighlightText>보조자 역할:</HighlightText> AI를 항상 '보조자'로 인식</ListItem>
              <ListItem icon={MessageSquare}><HighlightText>명확한 목적 전달:</HighlightText> 매번 목적을 명확히 전달 (감정지지/코칭/팩트체크 등)</ListItem>
              <ListItem icon={Compass}><HighlightText>맥락 제공:</HighlightText> 현실적 맥락을 AI에게 상세히 설명</ListItem>
              <ListItem icon={Scale}><HighlightText>균형잡힌 접근:</HighlightText> 맹신(맹신이)과 균형(균형이) 사이의 적절한 사용</ListItem>
              <ListItem icon={Lightbulb}><HighlightText>사용자 판단력:</HighlightText> AI 제안에 대한 비판적 평가 필요</ListItem>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded shadow col-span-2">
            <h2 className="text-xl font-semibold mb-3 flex items-center text-purple-600">
              <User className="mr-2" /> 사용자의 역할과 주의사항
            </h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold text-green-500 mb-2 flex items-center">
                  <CheckCircle className="mr-2" /> 올바른 사용법
                </h3>
                <ul className="space-y-1">
                  <ListItem icon={MessageSquare}>매번 목적을 명확히 전달 (예: "이번엔 팩트체크를 원합니다")</ListItem>
                  <ListItem icon={Compass}>현실적 맥락과 상세 정보 제공</ListItem>
                  <ListItem icon={Lightbulb}>AI 제안을 비판적으로 평가</ListItem>
                  <ListItem icon={Shield}>자신의 전문 분야에서 AI 솔루션 효율성 판단</ListItem>
                  <ListItem icon={User}>AI를 보조 도구로 활용, 최종 판단은 사용자가</ListItem>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-500 mb-2 flex items-center">
                  <XCircle className="mr-2" /> 피해야 할 것
                </h3>
                <ul className="space-y-1">
                  <ListItem icon={Eye}>AI의 답변을 무조건적으로 신뢰</ListItem>
                  <ListItem icon={Scale}>중요한 가치 판단을 AI에게 위임</ListItem>
                  <ListItem icon={MessageSquare}>목적 설명 없이 AI 사용 (AI가 고민 상담으로 오해할 수 있음)</ListItem>
                  <ListItem icon={Shield}>비전문 분야에서 AI 제안을 맹신</ListItem>
                  <ListItem icon={User}>AI에 감정적 의존 (AI는 사용자의 비위 맞추기만 할 수 있음)</ListItem>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-3 flex items-center text-blue-600">
            <HelpCircle className="mr-2" /> 주요 고려사항
          </h2>
          <ul className="space-y-2 text-sm">
            <ListItem icon={MessageSquare}><HighlightText>목적 명확화:</HighlightText> 매번 원하는 바를 명확히 전달 (감정적 지지, 정확한 코칭, 팩트체크 등)</ListItem>
            <ListItem icon={Lightbulb}><HighlightText>근거 요청:</HighlightText> 주장 뒷받침을 위한 근거 요청 시 명확히 전달</ListItem>
            <ListItem icon={AlertTriangle}><HighlightText>할루시네이션 인식:</HighlightText> AI의 오류 가능성을 항상 염두에 둘 것</ListItem>
            <ListItem icon={Brain}><HighlightText>AI의 한계 이해:</HighlightText> 촌철살인, 현실적 맥락 이해 등에서의 한계 인지</ListItem>
          </ul>
        </div>
        
        <div className="mt-6 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-3 flex items-center text-yellow-600">
            <Zap className="mr-2" /> AI 사용의 균형
          </h2>
          <p className="text-sm">
            <HighlightText>맹신이 vs 균형이:</HighlightText> '맹신이'처럼 AI를 맹목적으로 믿지 말고, '균형이'처럼 AI를 도구로 활용하되 비판적 사고를 유지하세요.
            사용자의 변별력이 있는 분야에서는 AI 제안의 효율성을 판단하고 개선할 수 있지만, 그렇지 않은 분야에서는 AI 솔루션의 질을 판단하기 어려울 수 있습니다.
          </p>
        </div>
  
        <div className="mt-6 text-center text-sm text-gray-600">
          <p className="flex items-center justify-center">
            <Scale className="mr-2" /> AI 활용의 핵심은 균형 잡힌 접근과 비판적 사고입니다
          </p>
        </div>
      </div>
    );
    }
}

export default Slide8;