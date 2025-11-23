import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Quote, Briefcase, Building2, HardHat } from 'lucide-react';
import { GRADUATE_PORTRAIT } from '../constants';

const Career: React.FC = () => {
  const data = [
    { name: '2021', rate: 78 },
    { name: '2022', rate: 82 },
    { name: '2023', rate: 85 },
  ];

  const jobs = [
    { title: '공무원', desc: '토목직 9급/7급, 공사 공단', icon: <Building2 className="h-6 w-6" /> },
    { title: '건설사', desc: '대기업/중견기업 시공 및 공무', icon: <HardHat className="h-6 w-6" /> },
    { title: '엔지니어링', desc: '설계, 감리, 안전진단 전문기업', icon: <Briefcase className="h-6 w-6" /> },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">취업 & 진로</h1>
          <p className="text-slate-400 text-lg">여러분의 선배들이 증명한 놀라운 취업 성공 스토리</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Chart Section */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-2">꾸준히 상승하는 취업률</h2>
            <p className="text-graytext mb-8">체계적인 관리로 매년 높은 취업률을 기록하고 있습니다.</p>
            <div className="h-80 w-full bg-neutral rounded-xl p-4 border border-gray-100">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} domain={[0, 100]} hide />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="rate" radius={[4, 4, 0, 0]} barSize={60}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 2 ? '#f39c12' : '#0056b3'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="text-center mt-2 text-sm text-gray-500 font-medium">최근 3년 취업률 추이 (%)</div>
            </div>
          </div>

          {/* Job Fields */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-6">주요 진출 분야</h2>
            <div className="space-y-4">
              {jobs.map((job, idx) => (
                <div key={idx} className="flex items-start p-5 rounded-lg border border-gray-100 hover:border-primary/30 hover:bg-blue-50 transition-all cursor-default">
                  <div className="bg-white p-3 rounded-full shadow-sm mr-4 text-primary">
                    {job.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{job.title}</h3>
                    <p className="text-graytext">{job.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-neutral rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-center mb-10">졸업생 취업 인터뷰</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm relative">
              <Quote className="absolute top-6 right-6 text-gray-200 h-8 w-8" />
              <div className="flex items-center mb-4">
                <img src={GRADUATE_PORTRAIT} alt="Student" className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <div className="font-bold">김민수</div>
                  <div className="text-sm text-secondary font-medium">OO건설 합격 (2023 졸업)</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "교수님들의 열정적인 지도 덕분에 산업기사 자격증을 2개나 취득했습니다. 
                특히 방학 중 자격증 특강이 큰 도움이 되었고, 모의 면접 프로그램을 통해 자신감을 가지고 취업에 성공할 수 있었습니다."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm relative">
              <Quote className="absolute top-6 right-6 text-gray-200 h-8 w-8" />
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center text-gray-500 font-bold">이</div>
                <div>
                  <div className="font-bold">이영희</div>
                  <div className="text-sm text-secondary font-medium">△△공사 합격 (2022 졸업)</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "여학생이라 현장직에 대한 막연한 두려움이 있었지만, 설계 및 공무 분야로의 진로를 확실히 정해주셔서 좋았습니다.
                실무 위주의 커리큘럼 덕분에 입사 후에도 업무 적응이 빨랐습니다."
              </p>
            </div>
          </div>
        </div>

        {/* Company Logos Area */}
        <div className="mt-20 text-center">
            <h3 className="text-gray-400 font-medium mb-6 uppercase tracking-widest text-sm">주요 취업처</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholders for logos */}
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-12 bg-gray-100 rounded flex items-center justify-center font-bold text-gray-300">LOGO {i+1}</div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Career;