import React from 'react';
import { Car, Bike, Train, Plane, Truck, Ship, Bus } from 'lucide-react';

const Slide1 = () => {
  const TransportCard = ({ icon: Icon, title, specs }) => (
    <div className="bg-white bg-opacity-70 p-4 rounded-lg shadow-sm mb-3 backdrop-blur-sm">
      <div className="flex items-center mb-2">
        <Icon className="mr-2" size={20} />
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      <ul className="text-xs text-gray-600 space-y-1">
        {specs.map((spec, index) => (
          <li key={index} className="flex justify-between">
            <span>{spec.name}:</span>
            <span className="font-medium">{spec.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const TransportColumn = ({ title, transports }) => (
    <div className="flex-1 min-w-[250px] max-w-[300px] bg-white bg-opacity-30 p-4 rounded-lg backdrop-blur-sm">
      <h2 className="text-lg font-semibold mb-4 text-center text-gray-800">{title}</h2>
      <div className="space-y-3">
        {transports.map((transport, index) => (
          <TransportCard key={index} {...transport} />
        ))}
      </div>
    </div>
  );

  const transports = [
    {
      icon: Car,
      title: '자동차',
      specs: [
        { name: '속도', value: '~120 km/h' },
        { name: '수용 인원', value: '4-5명' },
        { name: '연료', value: '가솔린/전기' },
      ],
    },
    {
      icon: Bike,
      title: '자전거',
      specs: [
        { name: '속도', value: '~25 km/h' },
        { name: '수용 인원', value: '1-2명' },
        { name: '연료', value: '인력' },
      ],
    },
    {
      icon: Train,
      title: '기차',
      specs: [
        { name: '속도', value: '~300 km/h' },
        { name: '수용 인원', value: '수백 명' },
        { name: '연료', value: '전기/디젤' },
      ],
    },
    {
      icon: Plane,
      title: '비행기',
      specs: [
        { name: '속도', value: '~900 km/h' },
        { name: '수용 인원', value: '수백 명' },
        { name: '연료', value: '항공유' },
      ],
    },
    {
      icon: Bike,
      title: '킥보드',
      specs: [
        { name: '속도', value: '~25 km/h' },
        { name: '수용 인원', value: '1명' },
        { name: '연료', value: '전기/인력' },
      ],
    },
    {
      icon: Bus,
      title: '버스',
      specs: [
        { name: '속도', value: '~80 km/h' },
        { name: '수용 인원', value: '40-80명' },
        { name: '연료', value: '디젤/CNG/전기' },
      ],
    },
    {
      icon: Ship,
      title: '배',
      specs: [
        { name: '속도', value: '~30 knots' },
        { name: '수용 인원', value: '수백-수천 명' },
        { name: '연료', value: '중유/디젤' },
      ],
    },
    {
      icon: Truck,
      title: '트럭',
      specs: [
        { name: '속도', value: '~90 km/h' },
        { name: '수용 인원', value: '2-3명' },
        { name: '연료', value: '디젤/가솔린' },
      ],
    },
  ];

  const columns = [
    { title: '개인 이동수단', filter: t => ['자전거', '킥보드'].includes(t.title) },
    { title: '도로 교통', filter: t => ['자동차', '버스', '트럭'].includes(t.title) },
    { title: '대중 교통', filter: t => ['기차', '비행기', '배'].includes(t.title) },
  ];

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">이동수단 비교</h1>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {columns.map((column, index) => (
          <TransportColumn
            key={index}
            title={column.title}
            transports={transports.filter(column.filter)}
          />
        ))}
      </div>
    </div>
  );
};

Slide1.title = "이동수단 비교";
Slide1.chapterNumber = "1.";

export default Slide1;