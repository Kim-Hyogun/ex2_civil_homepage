import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, HardHat, Award, Users } from 'lucide-react';
import { HERO_BG, CONSTRUCTION_SITE } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 z-10 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 z-10 bg-black/30" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider uppercase border border-secondary text-secondary rounded-full bg-black/20 backdrop-blur-sm">
            Future Engineer
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            흔들리지 않는 평생 직업,<br />
            <span className="text-secondary">토목환경과</span>에서 시작하세요
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-100 max-w-2xl mx-auto font-light">
            국가기술자격증 취득부터 대기업 현장 취업까지.<br />
            2년의 확실한 로드맵으로 여러분의 미래를 건설합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/admissions" 
              className="px-8 py-4 bg-secondary text-white rounded-lg font-bold hover:bg-yellow-500 transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center"
            >
              입학 상담 신청하기 <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/curriculum" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center"
            >
              자격증 로드맵 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-4">Why Civil Engineering?</h2>
            <p className="text-graytext">경남정보대 토목환경과가 특별한 3가지 이유</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-neutral rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Award className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">1인 3자격증 시대</h3>
              <p className="text-graytext leading-relaxed">
                졸업 전 토목, 측량, 건설재료시험 산업기사 등 평균 2개 이상의 국가기술자격증 취득을 목표로 합니다.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-neutral rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                <HardHat className="h-8 w-8 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">현장 중심 실무 교육</h3>
              <p className="text-graytext leading-relaxed">
                최신 드론 측량 기술과 BIM/CAD 설계를 교육과정에 도입하여 현장에서 즉시 활용 가능한 인재를 양성합니다.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-neutral rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <Users className="h-8 w-8 text-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">강력한 취업 네트워크</h3>
              <p className="text-graytext leading-relaxed">
                50년 전통의 동문 네트워크와 산학협력 기업을 통해 대기업 및 공기업 취업을 적극 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof/Image Section */}
      <section className="py-20 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              "결과로 증명합니다"
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-secondary h-6 w-6" />
                <span className="text-lg">최근 3년 평균 취업률 80% 이상 달성</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-secondary h-6 w-6" />
                <span className="text-lg">재학생 자격증 취득률 부산권 1위</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-secondary h-6 w-6" />
                <span className="text-lg">주요 대형 건설사 및 공기업 다수 배출</span>
              </div>
            </div>
            <Link to="/career" className="inline-flex items-center font-semibold border-b-2 border-secondary hover:text-secondary transition-colors pb-1">
              취업 현황 자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-secondary/20 rounded-2xl transform rotate-3"></div>
            <img 
              src={CONSTRUCTION_SITE} 
              alt="Site Engineer" 
              className="relative rounded-2xl shadow-2xl w-full object-cover h-80 md:h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">지금이 가장 빠른 시작입니다</h2>
          <p className="text-gray-600 mb-8">망설이지 말고 상담을 받아보세요. 교수님이 직접 답변해드립니다.</p>
          <Link 
            to="/admissions"
            className="inline-block px-10 py-4 bg-primary text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-blue-800 transition-all transform hover:-translate-y-1"
          >
            무료 입학 상담 신청하기
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;