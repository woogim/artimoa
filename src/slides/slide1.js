// src/slides/Slide1_1.js
import React from 'react';

class Slide1_1 {
  static title = "AI를 어디에 써야 하는가?";
  static chapterNumber = "1.1";

  static Content() {
    return (
      <>
        <section>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">AI의 주요 활용 영역</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>핵심적인 업무에 집중하고, 비핵심 업무를 AI에 위임, 자동화하여 시간 확보, 감정 절약</li>
            <li>배울 필요 없이 새로운 능력 확용</li>
            <li>어떤 분야에 전문가가 아니어도 광범위한 지식에 접근하여 필요한 지식 사용 가능</li>
          </ul>
        </section>
        <section>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">AI 활용의 3요소</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold mb-2">능력 (전문 기술)</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>배우지 않은 전문 작업 수행</li>
                <li>예: 그림, 영상제작, 번역, 코딩, 노래 제작, AI 보이스</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">지식 (광범위한 지식)</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>필요 시 빠른 정보 검색</li>
                <li>개념, 느낌을 단어로 변환, 원하는 정보 탐색</li>
                <li>(뇌용량만 제공해도 원하는 것을 찾아줄 수 있음)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">처리 (정보 처리)</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>지식에 따른 정보 정리 및 가공</li>
                <li>예: 텍스트 정리</li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Slide1_1;
