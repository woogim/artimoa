import React from 'react';
import { Brain, Lightbulb, Rocket, Cpu, Music, Code, Users, Database, Zap, Target, Book, Briefcase, Globe, Lock } from 'lucide-react';

class Slide6 {
  static title = "AI 시대의 새로운 능력과 미래 전망";
  static chapterNumber = "1.6";

  static Content() {
    const IconCard = ({ icon, title, description, example }) => (
      <div className="bg-gray-50 rounded-md p-4 shadow-md flex flex-col items-center text-center">
        {icon}
        <h2 className="text-lg font-semibold mt-2 mb-3">{title}</h2>
        <p className="text-sm mb-2">{description}</p>
        <p className="text-xs italic">{example}</p>
      </div>
    );
    
    const KeyPoint = ({ icon, text }) => (
      <div className="flex items-center">
        {icon}
        <span className="ml-1 font-semibold">{text}</span>
      </div>
    );
  
    return (
      <div className="min-h-full flex flex-col">
        <div className="flex-1 grid grid-cols-3 gap-6">
          <IconCard 
            icon={<Brain className="w-12 h-12 text-blue-500" />} 
            title="핵심 능력" 
            description="AI 시대에는 암기보다 응용력과 정보력이 중요해집니다." 
            example="예: '물이 반이나 있네?'와 '물이 반밖에 없네?'의 관점 차이 이해하기"
          />
          <IconCard 
            icon={<Lightbulb className="w-12 h-12 text-yellow-500" />} 
            title="AI 혁신" 
            description="AI는 'Why?'에서 'Aha!'로 가는 속도를 가속화합니다." 
            example="예: GPT를 이용한 빠른 아이디어 생성 및 문제 해결"
          />
          <IconCard 
            icon={<Rocket className="w-12 h-12 text-red-500" />} 
            title="미래 전망" 
            description="AI 활용 능력이 미래 경쟁력의 핵심이 될 것입니다." 
            example="예: AI를 활용한 개인화된 학습 경로 설계"
          />
          <IconCard 
            icon={<Cpu className="w-12 h-12 text-green-500" />} 
            title="AI 잠재력" 
            description="AI는 무한한 확장성과 즉각적인 대응 능력을 제공합니다." 
            example="예: 전 세계 동시 다발적 AI 서비스 제공"
          />
          <IconCard 
            icon={<Music className="w-12 h-12 text-indigo-500" />} 
            title="창의적 응용" 
            description="AI는 다양한 창의적 분야에서 혁신을 가져옵니다." 
            example="예: 왁타버스의 AI 생성 국가(버스터콜) 사용"
          />
          <IconCard 
            icon={<Code className="w-12 h-12 text-pink-500" />} 
            title="실용적 활용" 
            description="AI는 코딩, 언어 장벽 극복 등 실용적인 문제를 해결합니다." 
            example="예: AI를 이용한 Scriptable 앱용 위젯 자동 생성"
          />
          <IconCard 
            icon={<Database className="w-12 h-12 text-orange-500" />} 
            title="데이터와 AI" 
            description="AI는 데이터 활용 방식을 혁신적으로 변화시킵니다." 
            example="예: 대량의 비정형 데이터에서 인사이트 추출"
          />
          <IconCard 
            icon={<Zap className="w-12 h-12 text-yellow-600" />} 
            title="미래 기술" 
            description="AI는 지속적으로 발전하며 새로운 기술과 융합됩니다." 
            example="예: 멀티모달 AI, 양자 컴퓨팅과의 결합"
          />
          <IconCard 
            icon={<Globe className="w-12 h-12 text-teal-500" />} 
            title="글로벌 영향" 
            description="AI는 지식의 민주화와 교육 혁신을 가져옵니다." 
            example="예: AI 튜터를 통한 개인화된 글로벌 교육"
          />
        </div>
        
        <div className="mt-6 flex justify-around items-center text-sm">
          <KeyPoint icon={<Book className="w-5 h-5 text-blue-600" />} text="지속적 학습" />
          <KeyPoint icon={<Book className="w-5 h-5 text-green-600" />} text="AI 리터러시" />
          <KeyPoint icon={<Briefcase className="w-5 h-5 text-red-600" />} text="새로운 직업" />
          <KeyPoint icon={<Lock className="w-5 h-5 text-purple-600" />} text="데이터 보안" />
        </div>

        <div className="mt-6 text-center text-sm text-gray-600 flex items-center justify-center">
          <Users className="w-5 h-5 mr-2 text-blue-500" />
          <span>"AI, 인류의 지능형 동반자"</span>
        </div>
        
        <div className="mt-2 text-center text-sm text-gray-500 flex items-center justify-center">
          <Target className="w-5 h-5 mr-2 text-red-500" />
          <span>"인간 창의성과 AI의 결합이 핵심"</span>
        </div>
      </div>
    );
  }
}

export default Slide6;