import React from 'react';
import { Brain, Search, Code, Scale } from 'lucide-react';

class Slide5 {
  static title = "AI 모델 비교와 선택";
  static chapterNumber = "1.5";

  static Content() {
    const Section = ({ title, items, icon: Icon }) => (
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center mb-2">
          <Icon className="w-6 h-6 text-blue-500 mr-2" />
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <ul className="text-sm text-gray-600 pl-8 list-disc">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
    
    return (
        <div className="grid grid-cols-2 gap-6">
          <Section
            icon={Brain}
            title="Claude의 성능 향상 원인"
            items={[
              "앤트로픽 모델카드 분석",
              "건초더미 속 바늘찾기 능력 향상",
              "컨텍스트 유지 능력 개선",
              "선택의 폭 확장"
            ]}
          />
          <Section
            icon={Search}
            title="Perplexity의 장점"
            items={[
              "일반 LLM 대비 우수한 성능",
              "사례 기반 설명 능력",
              "정보 검색 및 통합 능력 향상"
            ]}
          />
          <Section
            icon={Code}
            title="GPT-4와 Claude 3의 특징"
            items={[
              "GPT-4: 이미지 정보의 JSON 변환",
              "Claude 3: HTML 구조 학습 및 크롤링",
              "각 모델의 고유한 장점 비교"
            ]}
          />
          <Section
            icon={Scale}
            title="AI 모델 선택 시 고려사항"
            items={[
              "원하는 데이터 유형 사전 학습 여부",
              "특정 작업에 대한 성능 비교",
              "사용 목적에 따른 최적 모델 선택"
            ]}
          />
        </div>
    );    
  }
}

export default Slide5;
 
