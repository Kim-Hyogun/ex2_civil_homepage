import React, { useState } from 'react';
import { NavLink, Outlet, ScrollRestoration } from 'react-router-dom';
import { Menu, X, GraduationCap, MapPin, Phone, Mail } from 'lucide-react';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: '홈', path: '/' },
    { label: '커리큘럼', path: '/curriculum' },
    { label: '취업&진로', path: '/career' },
    { label: '학과소개', path: '/about' },
    { label: '입학상담', path: '/admissions' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col min-h-screen font-sans text-dark">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-primary tracking-tight">토목환경과</span>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? 'text-primary' : 'text-gray-600'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
              <NavLink
                to="/admissions"
                className="px-4 py-2 text-sm font-semibold text-white bg-secondary rounded-md hover:bg-yellow-500 transition-colors shadow-sm"
              >
                원서 접수하기
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'bg-blue-50 text-primary'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink
                to="/admissions"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center mt-4 px-3 py-2 rounded-md text-base font-medium bg-secondary text-white hover:bg-yellow-500"
              >
                원서 접수하기
              </NavLink>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6 text-secondary" />
                <span className="text-xl font-bold text-white">토목환경과</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                문명의 기초를 다지는 토목 엔지니어의 산실.<br />
                경남정보대학교 토목환경과에서<br />
                여러분의 꿈을 설계하세요.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">연락처</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-secondary shrink-0" />
                  <span>부산광역시 사상구 주례로 45 경남정보대학교 탐구관 4층</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-secondary shrink-0" />
                  <span>051-320-1234</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-secondary shrink-0" />
                  <span>civil@kit.ac.kr</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">바로가기</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-secondary transition-colors">대학 홈페이지</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">입학안내 홈페이지</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">학사정보시스템</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">공식 블로그</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Dept. of Civil Engineering, KIT. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;