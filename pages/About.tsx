import React from 'react';
import { MapPin } from 'lucide-react';
import { PROFESSOR_IMG_1, PROFESSOR_IMG_2, PROFESSOR_IMG_3, LAB_IMG_1, LAB_IMG_2, LAB_EQUIPMENT } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       {/* Hero/Intro */}
       <div className="bg-neutral py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-bold tracking-wide uppercase">Department Intro</span>
          <h1 className="text-4xl font-bold mt-2 mb-6 text-dark">학과 소개 & 시설</h1>
          <p className="max-w-2xl mx-auto text-graytext leading-relaxed">
            토목환경과는 자연과 문명의 조화를 추구하며, <br/>
            안전하고 쾌적한 국토 건설을 주도할 창의적인 전문 기술인을 양성합니다.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Chair Message */}
        <div className="mb-20 flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3">
                <img src={PROFESSOR_IMG_1} alt="Dept Chair" className="rounded-lg shadow-lg w-full object-cover aspect-square" />
            </div>
            <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">학과장 인사말</h2>
                <h3 className="text-xl text-primary font-medium mb-4">"토목은 문명의 기초입니다."</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    안녕하십니까, 토목환경과 학과장입니다. <br/>
                    우리 학과는 4차 산업혁명 시대에 발맞춰 스마트 건설 기술을 선도할 인재를 키우고 있습니다.
                    단순한 지식 전달을 넘어, 현장에서 문제를 해결할 수 있는 실무 능력을 배양하는 데 최선을 다하겠습니다.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    여러분의 꿈이 현실이 되는 곳, 경남정보대 토목환경과에서 최고의 엔지니어로 거듭나시길 바랍니다.
                </p>
            </div>
        </div>

        {/* Professors */}
        <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">교수진 소개</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { img: PROFESSOR_IMG_1, name: "김철수 교수", area: "구조공학 / 공학박사" },
                    { img: PROFESSOR_IMG_2, name: "박영희 교수", area: "토질및기초 / 기술사" },
                    { img: PROFESSOR_IMG_3, name: "이민호 교수", area: "측량및지형공간정보" },
                ].map((prof, idx) => (
                    <div key={idx} className="text-center group">
                        <div className="overflow-hidden rounded-lg mb-4">
                            <img src={prof.img} alt={prof.name} className="w-full object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <h3 className="font-bold text-lg">{prof.name}</h3>
                        <p className="text-gray-500 text-sm">{prof.area}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Facilities */}
        <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">첨단 실습 시설</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group overflow-hidden rounded-xl">
                    <img src={LAB_EQUIPMENT} alt="Lab 1" className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white font-bold text-lg">토질 실험실</span>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-xl">
                    <img src={LAB_IMG_1} alt="Lab 2" className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white font-bold text-lg">CAD/BIM 실습실</span>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-xl md:col-span-2">
                    <img src={LAB_IMG_2} alt="Lab 3" className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white font-bold text-lg">측량 실습장</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Location */}
        <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
                <MapPin className="mr-2 text-secondary" /> 오시는 길
            </h2>
            <div className="bg-gray-200 w-full h-96 rounded-xl flex items-center justify-center text-gray-500">
                {/* Normally an Iframe map would go here */}
                [Daum/Google Map Placeholder]
                <br/>부산광역시 사상구 주례로 45
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;