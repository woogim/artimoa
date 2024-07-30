import React from 'react';
import { ArrowDown, Brain, Book, Cog, Search, Zap, RefreshCw } from 'lucide-react';

class Slide3 {
  static title = "AI를 어디에 써야 하는가? (다른버전)";
  static chapterNumber = "1.2";

  static Content() {
    const DiagramBox = ({ title, children, color }) => (
        <div className={`border-2 ${color} rounded-lg p-4 flex flex-col items-center justify-center w-full h-auto`}>
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          {children}
        </div>
      );
    
      const DetailItem = ({ icon, text, color }) => (
        <div className={`flex items-center mt-2 ${color}`}>
          {icon}
          <span className="text-xs ml-1">{text}</span>
        </div>
      );
    
      const IconCircle = ({ icon: Icon, label }) => (
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white mb-2">
            <Icon size={32} className="text-blue-500" />
          </div>
          <span className="text-xs text-center">{label}</span>
        </div>
      );
    
      const mainAreas = [
        { 
          title: "1. 정보처리, 자동화",
          description: "핵심역량에 집중, AI로 비핵심 부분 대체",
          icon: RefreshCw,
          color: "border-blue-500"
        },
        { 
          title: "2. 능력",
          description: "AI의 능력을 활용해 새로운 시도",
          icon: Zap,
          color: "border-green-500"
        },
        { 
          title: "3. 광범위한 지식 접근",
          description: "다양한 분야의 전문 지식 활용",
          icon: Search,
          color: "border-purple-500"
        }
      ];
    
      const coreElements = [
        { 
          title: "1. 능력",
          description: "학습 없이 특정 작업 수행 (전문 기술)",
          icon: Brain,
          color: "border-red-500"
        },
        { 
          title: "2. 지식",
          description: "필요 시 빠른 정보 검색 및 개념 변환 (광범위한 지식)",
          icon: Book,
          color: "border-yellow-500"
        },
        { 
          title: "3. 처리",
          description: "지시에 따른 정보 가공 및 정리 (정보 처리)",
          icon: Cog,
          color: "border-blue-500"
        }
      ];
    
      return (
        <div className="rounded-xl">
          <div className="mb-8">
            <div className="grid grid-cols-3 gap-6">
              {mainAreas.map((area, index) => (
                <DiagramBox key={index} title={area.title} color={area.color}>
                  <IconCircle icon={area.icon} label={area.title} />
                  <p className="text-sm text-center">{area.description}</p>
                </DiagramBox>
              ))}
            </div>
          </div>
    
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">AI 활용의 3요소</h3>
            <div className="grid grid-cols-3 gap-6">
              {coreElements.map((element, index) => (
                <DiagramBox key={index} title={element.title} color={element.color}>
                  <IconCircle icon={element.icon} label={element.title} />
                  <p className="text-sm text-center mb-4">{element.description}</p>
                  <DetailItem 
                    icon={<element.icon size={16} />} 
                    text={element.description} 
                    color="text-gray-700" 
                  />
                </DiagramBox>
              ))}
            </div>
          </div>
        </div>
      );
    
  }
}

export default Slide3;
 