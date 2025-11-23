import React from 'react';
import { BookOpen, Award, PenTool, Layout as LayoutIcon } from 'lucide-react';
import { TimelineItem } from '../types';

const Curriculum: React.FC = () => {
  const roadmap: TimelineItem[] = [
    {
      year: '1학년 1학기',
      title: '토목 공학의 기초',
      description: '토목개론, 응용역학 등 전공 필수 기초 이론을 습득하고 CAD 기초를 다집니다.',
      tags: ['CAD기초', '측량학', '토목재료학']
    },
    {
      year: '1학년 2학기',
      title: '측량기능사 취득',
      description: '전공 심화 학습과 함께 첫 국가기술자격증인 측량기능사 취득을 목표로 합니다.',
      tags: ['측량실습', '토질역학', '측량기능사']
    },
    {
      year: '2학년 1학기',
      title: '산업기사 집중 과정',
      description: '토목산업기사 및 건설재료시험산업기사 필기/실기 특강을 집중적으로 진행합니다.',
      tags: ['BIM설계', '콘크리트공학', '토목산업기사']
    },
    {
      year: '2학년 2학기',
      title: '취업 실무 & 현장 실습',
      description: '산업체 현장 실습과 캡스톤 디자인을 통해 실무 역량을 완성하고 취업을 확정합니다.',
      tags: ['종합설계', '현장실습', '취업준비']
    }
  ];

  return (
    <div className="bg-neutral min-h-screen pb-20">
      {/* Header */}
      <div className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">자격증 & 커리큘럼</h1>
          <p className="text-blue-100 text-lg">2년의 과정으로 평생 기술을 완성하는 체계적인 로드맵</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 border border-gray-100 rounded-lg bg-blue-50">
              <PenTool className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-1">실무형 SW 교육</h3>
              <p className="text-sm text-gray-600">AutoCAD, Civil 3D, BIM</p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg bg-yellow-50">
              <Award className="h-10 w-10 text-secondary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-1">1인 3자격증</h3>
              <p className="text-sm text-gray-600">졸업 시 평균 2.5개 취득</p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg bg-green-50">
              <LayoutIcon className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-1">최신 기자재</h3>
              <p className="text-sm text-gray-600">드론 측량기, 3D 스캐너</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center flex items-center justify-center">
            <BookOpen className="mr-2 text-primary" /> 학년별 로드맵
          </h2>
          
          <div className="relative border-l-4 border-primary/20 ml-6 md:ml-10 space-y-12">
            {roadmap.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-12">
                {/* Dot */}
                <div className="absolute -left-[14px] top-0 bg-white border-4 border-primary h-6 w-6 rounded-full"></div>
                
                {/* Content */}
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <span className="text-sm font-bold text-secondary tracking-wide uppercase mb-1 block">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-graytext mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Major Certificates */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold mb-8 text-center">취득 가능 국가기술 자격증</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['토목산업기사', '건설재료시험산업기사', '측량및지형공간정보산업기사', '콘크리트산업기사'].map((cert, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-100 hover:border-secondary transition-colors cursor-default">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-dark" />
                </div>
                <h4 className="font-bold text-gray-800">{cert}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;