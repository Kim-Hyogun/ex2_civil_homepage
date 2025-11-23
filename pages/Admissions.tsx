import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { CONSULTATION_BG } from '../constants';
import { FAQItem } from '../types';

const Admissions: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      alert('상담 신청이 완료되었습니다! 담당 교수가 곧 연락드립니다.');
    }, 1500);
  };

  const faqs: FAQItem[] = [
    {
      question: "수학을 못하는데 수업을 따라갈 수 있을까요?",
      answer: "네, 가능합니다. 1학년 과정에 기초수학 특강이 포함되어 있으며, 교수님들의 밀착 지도로 기초부터 차근차근 배울 수 있습니다. 실제 문과 출신 학생들도 우수한 성적으로 졸업하고 있습니다."
    },
    {
      question: "여학생도 취업이 잘 되나요?",
      answer: "네, 최근 건설 설계, 공무, 안전진단 분야 등에서 여성 엔지니어 수요가 급증하고 있습니다. 섬세함이 요구되는 설계 및 내업 분야로 활발히 진출하고 있습니다."
    },
    {
      question: "등록금 장학 혜택은 어떤가요?",
      answer: "신입생 특별 장학금, 성적 장학금, 국가 장학금 등 다양한 혜택이 마련되어 있습니다. 상담 신청 시 상세히 안내해 드립니다."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral pb-20">
      {/* Header Image */}
      <div className="relative h-64 bg-slate-900 overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${CONSULTATION_BG})` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">입학 안내 & 상담</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Info & FAQ */}
          <div>
            {/* Schedule */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border-l-4 border-accent">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Calendar className="mr-2 text-accent" /> 모집 일정
                </h2>
                <ul className="space-y-3 text-sm">
                    <li className="flex justify-between border-b pb-2">
                        <span className="font-medium">수시 1차</span>
                        <span className="text-gray-600">2024. 9. 11(월) ~ 10. 5(목)</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                        <span className="font-medium">수시 2차</span>
                        <span className="text-gray-600">2024. 11. 10(금) ~ 11. 24(금)</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="font-medium">정시 모집</span>
                        <span className="text-gray-600">2025. 1. 3(수) ~ 1. 15(월)</span>
                    </li>
                </ul>
            </div>

            {/* FAQ */}
            <h2 className="text-2xl font-bold mb-6">자주 묻는 질문 (FAQ)</h2>
            <div className="space-y-4">
              {faqs.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-bold text-dark">{item.question}</span>
                    {openFaqIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4 bg-gray-50">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Direct Links */}
            <div className="mt-8 flex space-x-4">
                <a href="#" className="flex-1 bg-yellow-400 text-dark py-3 rounded-lg font-bold flex items-center justify-center hover:bg-yellow-500 transition-colors">
                    <MessageCircle className="mr-2" /> 카카오톡 상담
                </a>
                <a href="#" className="flex-1 bg-primary text-white py-3 rounded-lg font-bold flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Phone className="mr-2" /> 입학처 전화연결
                </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 h-fit sticky top-24">
            <h2 className="text-2xl font-bold mb-2">입학 상담 신청</h2>
            <p className="text-gray-500 mb-6 text-sm">
                궁금한 점을 남겨주시면 학과 교수님이 직접 전화를 드려 상세히 안내해 드립니다.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                    <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="홍길동" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                    <input type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="010-0000-0000" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">출신 고교</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="학교명 입력" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">궁금한 점</label>
                    <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="예: 기숙사 신청은 어떻게 하나요?"></textarea>
                </div>
                <div className="pt-2">
                    <button 
                        type="submit" 
                        disabled={formStatus === 'submitting' || formStatus === 'success'}
                        className={`w-full py-3 rounded-lg font-bold text-white transition-all ${
                            formStatus === 'success' 
                            ? 'bg-green-500 hover:bg-green-600' 
                            : 'bg-primary hover:bg-blue-700 shadow-md hover:shadow-lg'
                        }`}
                    >
                        {formStatus === 'submitting' ? '처리중...' : formStatus === 'success' ? '신청 완료' : '상담 신청하기'}
                    </button>
                </div>
                <p className="text-xs text-gray-400 text-center mt-4">
                    개인정보는 상담 목적으로만 활용되며, 이후 파기됩니다.
                </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Admissions;