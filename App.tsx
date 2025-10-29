
import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Results from './components/Results';
import CareTips from './components/CareTips';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import AILab from './components/AILab';
import FAQ from './components/FAQ';

const AnimatedSection: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div ref={ref} className={`${className || ''} transition-opacity duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {children}
        </div>
    );
};


const App: React.FC = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <div className="bg-[#f9f6f2] text-[#3a322c]">
            <Header />
            <main>
                <Hero />
                <AnimatedSection><Services /></AnimatedSection>
                <AnimatedSection><Team /></AnimatedSection>
                <AnimatedSection><Results /></AnimatedSection>
                <AnimatedSection><AILab /></AnimatedSection>
                <AnimatedSection><CareTips /></AnimatedSection>
                <AnimatedSection><FAQ /></AnimatedSection>
                <AnimatedSection><CTA /></AnimatedSection>
                <AnimatedSection><Contact /></AnimatedSection>
            </main>
            <Footer />
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="bg-[#745b47] text-white rounded-full p-4 shadow-lg hover:bg-[#5f493a] transition transform active:scale-95 flex items-center gap-2"
                    aria-label="Abrir chat com assistente virtual"
                >
                    <i className="fa-solid fa-headset text-xl"></i>
                    <span className="font-medium hidden sm:inline">Fale Conosco</span>
                </button>
            </div>
            {isChatOpen && <ChatBot onClose={() => setIsChatOpen(false)} />}
        </div>
    );
};

export default App;