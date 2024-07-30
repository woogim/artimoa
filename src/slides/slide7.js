import React from 'react';
import { CheckCircle2, Zap, Brain, MessageSquare, Laptop, Lightbulb } from 'lucide-react';

class Slide7 {
  static title = "AI 활용 사례 및 팁: 종합 분석";
  static chapterNumber = "1.7";


  static Content() {
    const categories = [
      {
        title: "개인화 및 효율성 향상",
        icon: <Zap className="text-yellow-500" size={24} />,
        items: [
          {
            title: "맞춤형 프로그램 작성",
            description: "AI로 특정 상황 프로그램 생성",
            example: "유튜브 자막 다운로드 프로그램",
            impact: "개발 시간 단축, 맞춤 솔루션"
          },
          {
            title: "과거 기록 빠른 검색",
            description: "AI 기반 정확한 정보 검색",
            example: "키워드, 날짜로 메모 즉시 찾기",
            impact: "정보 관리 효율성 증대"
          },
          {
            title: "맞춤형 스마트폰 위젯",
            description: "AI로 개인화 iOS 위젯 생성",
            example: "통합 개인 대시보드 위젯",
            impact: "정보 접근성, 생산성 향상"
          },
          {
            title: "효율적 정보 추출",
            description: "AI로 핵심 정보 빠른 추출",
            example: "긴 보고서 빠른 요약",
            impact: "정보 처리 시간 단축"
          }
        ]
      },
      {
        title: "자기 개발 및 창의성",
        icon: <Brain className="text-purple-500" size={24} />,
        items: [
          {
            title: "자기 이해 증진",
            description: "AI 대화로 행동 패턴 분석",
            example: "스트레스 대응 패턴 파악",
            impact: "자아 성찰, 정서 지능 향상"
          },
          {
            title: "혁신적 사고 개발",
            description: "AI 시대 창의적 문제 해결",
            example: "산업 혁신 AI 전략 수립",
            impact: "미래 지향적 사고력 향상"
          },
          {
            title: "협업적 창의성",
            description: "AI 브레인스토밍",
            example: "AI로 혁신 제품 아이디어 도출",
            impact: "다각도 사고 능력 개발"
          }
        ]
      },
      {
        title: "언어 및 의사소통",
        icon: <MessageSquare className="text-green-500" size={24} />,
        items: [
          {
            title: "객관적 표현 향상",
            description: "주관적 의견의 객관화",
            example: "감정적 피드백 재구성",
            impact: "의사소통 명확성 증대"
          },
          {
            title: "고급 언어 구사",
            description: "AI로 고급 외국어 표현",
            example: "학술 논문 작성 지원",
            impact: "글로벌 경쟁력 강화"
          }
        ]
      },
      {
        title: "기술 및 업무 혁신",
        icon: <Laptop className="text-blue-500" size={24} />,
        items: [
          {
            title: "업무 프로세스 현대화",
            description: "AI로 업무 디지털 전환",
            example: "AI 재고 예측 시스템",
            impact: "효율성 향상, 오류 감소"
          },
          {
            title: "맞춤 비즈니스 솔루션",
            description: "AI 기반 특화 소프트웨어",
            example: "AI 기반 CRM 시스템",
            impact: "고객 만족도, 영업 효율 상승"
          },
          {
            title: "AI 코드 최적화",
            description: "AI 활용 코드 개선",
            example: "레거시 코드 현대화",
            impact: "개발 생산성, 성능 향상"
          }
        ]
      },
      {
        title: "문제 해결 및 분석",
        icon: <Lightbulb className="text-yellow-500" size={24} />,
        items: [
          {
            title: "예측적 문제 해결",
            description: "AI로 잠재 문제 예측",
            example: "설비 고장 예측 시스템",
            impact: "유지보수 비용 절감"
          },
          {
            title: "복잡한 의사결정",
            description: "AI 지원 다변수 의사결정",
            example: "AI 공급망 최적화 도구",
            impact: "비용 절감, 효율성 증대"
          },
          {
            title: "실시간 전문 지식",
            description: "AI로 즉시 전문 정보 접근",
            example: "법률 AI 어시스턴트",
            impact: "업무 속도, 정확도 향상"
          }
        ]
      }
    ];
    
    const CategoryCard = ({ category }) => (
      <div className="bg-white bg-opacity-80 p-3 rounded-lg shadow-md w-80 flex-shrink-0">
        <div className="flex items-center mb-2">
          {category.icon}
          <h2 className="text-lg font-bold text-blue-800 ml-2">{category.title}</h2>
        </div>
        <div className="space-y-2">
          {category.items.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </div>
      </div>
    );
    
    const ItemCard = ({ item }) => (
      <div className="bg-blue-50 p-2 rounded text-xs">
        <h3 className="font-semibold text-blue-700">{item.title}</h3>
        <p className="text-gray-700">{item.description}</p>
        <p className="text-gray-600 italic">{item.example}</p>
        <p className="text-gray-800 flex items-center">
          <CheckCircle2 className="text-green-500 mr-1" size={12} />
          <span>{item.impact}</span>
        </p>
      </div>
    );
    
    return (
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 flex flex-col overflow-hidden">
          <div className="flex-grow overflow-x-auto">
            <div className="flex space-x-4 pb-4">
              {categories.map((category, index) => (
                <CategoryCard key={index} category={category} />
              ))}
            </div>
          </div>
          <div className="mt-3 text-center text-blue-800 text-base font-semibold">
            "AI: 무한한 가능성을 열어주는 지능형 협력자"
          </div>
        </div>
      );
  }
}

export default Slide7;