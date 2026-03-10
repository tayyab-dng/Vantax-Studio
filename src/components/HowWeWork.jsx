import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const slides = [
    {
        id: '01',
        title: "Climate Educator\nTraining Programme",
        description: "Equipping teachers with knowledge and tools to integrate climate education into their curriculum. We train educators on environmental sustainability, climate action, and ecological awareness to prepare students for a changing world.",
        image: "/images/programmes/slide1.webp"
    },
    {
        id: '02',
        title: "ECD School\nIspinji, Chipursan",
        description: "Operating an early childhood development center in one of Pakistan's most remote valleys. We provide quality early education, play-based learning, and developmental support for children aged 3-6 years.",
        image: "/images/programmes/slide2.webp"
    },
    {
        id: '03',
        title: "Libraries for\nPublic Schools",
        description: "Transforming empty classrooms into vibrant learning hubs. We establish colorful, well-stocked libraries with books, digital resources, and reading spaces that inspire curiosity and imagination.",
        image: "/images/programmes/slide3.webp"
    },
    {
        id: '04',
        title: "Saheli\nCircles",
        description: "Creating mentorship circles for young women in remote communities. Through regular meetings, workshops, and peer support, we foster leadership skills, confidence, and community bonds among girls.",
        image: "/images/programmes/slide4.webp"
    },
    {
        id: '05',
        title: "Tech Sahelis\nProgramme",
        description: "Bridging the digital divide by teaching computer literacy, coding basics, and technology skills to young women. We empower participants with tools to access online opportunities and digital careers.",
        image: "/images/programmes/slide5.webp"
    },
    {
        id: '06',
        title: "Community Films\n& Storytelling",
        description: "Documenting the voices, stories, and experiences of mountain communities through film. We produce documentaries that showcase local culture, preserve oral histories, and amplify unheard narratives.",
        image: "/images/programmes/slide6.webp"
    },
    {
        id: '07',
        title: "Annual Summer\nCamp",
        description: "An immersive multi-week experience combining education, arts, outdoor adventure, and creativity. Students engage in hands-on learning, make new friends, and build confidence through experiential activities.",
        image: "/images/programmes/slide7.webp"
    }
];

export default function HowWeWork() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    const handleNext = () => {
        gsap.to(contentRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            onComplete: () => {
                setCurrentIndex((prev) => (prev + 1) % slides.length);
                gsap.fromTo(contentRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
            }
        });
    };

    const handlePrev = () => {
        gsap.to(contentRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            onComplete: () => {
                setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
                gsap.fromTo(contentRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
            }
        });
    };

    const currentSlide = slides[currentIndex];

    // Scroll trigger entrance & continuous SVG animation
    useGSAP(() => {
        gsap.fromTo('.hww-header',
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
            }
        );

        gsap.fromTo('.hww-card',
            { opacity: 0, scale: 0.95, y: 40 },
            {
                opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2,
                scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
            }
        );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full h-auto min-h-screen py-16 md:py-24 bg-white flex flex-col items-center justify-center overflow-hidden relative">

            <div className="w-full max-w-[1440px] mx-auto flex flex-col justify-center h-full z-10 px-4 md:px-8 lg:px-12">

                {/* Header Section */}
                <div className="hww-header w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12">
                    <div className="flex flex-col items-start text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-none tracking-tight">
                            <span className="text-black block">OUR</span>
                            <span className="text-[#ffcc00] block mt-1">PROGRAMMES</span>
                        </h2>
                    </div>
                    {/* Desktop Carousel Controls */}
                    <div className="hidden md:flex gap-3 mt-6 md:mt-0">
                        <button
                            onClick={handlePrev}
                            className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#ffcc00] hover:text-black transition-all duration-300 border border-black/10 active:scale-95 shadow-sm group"
                        >
                            <svg className="w-2.5 h-4 group-hover:-translate-x-0.5 transition-transform duration-300" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 15L1.5 8L8.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#ffcc00] hover:text-black transition-all duration-300 border border-black/10 active:scale-95 shadow-sm group"
                        >
                            <svg className="w-2.5 h-4 group-hover:translate-x-0.5 transition-transform duration-300" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 1L8.5 8L1.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Slider Card Container */}
                <div className="hww-card relative w-full flex flex-col">

                    {/* The Main Dark Yellow Card Background */}
                    <div className="w-full bg-[#ffcc00] rounded-[1.5rem] md:rounded-[2.5rem] p-3 md:p-6 lg:p-8 flex flex-col border border-transparent shadow-xl relative z-10 overflow-hidden">

                        {/* Premium Noise Grain Overlay */}
                        <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

                        {/* Card Content Wrapper - Fixed min-height to ensure uniform size across all slides */}
                        <div ref={contentRef} className="flex flex-col-reverse md:flex-row w-full h-[620px] sm:h-[580px] md:h-[480px] lg:h-[540px] relative gap-6 md:gap-8 lg:gap-12">

                            {/* Text Content Area */}
                            <div className="w-full h-full md:w-1/2 flex flex-col justify-between py-2 px-4 md:px-6 md:py-8 lg:py-10 lg:pl-10 relative z-10">
                                <div>
                                    <span className="font-display text-[#3D3300]/30 text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-2 md:mb-5 block drop-shadow-sm leading-none">
                                        {currentSlide.id}
                                    </span>
                                    <h3 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-5 leading-[1.1] max-w-[95%] group-hover:text-black transition-colors duration-300">
                                        {currentSlide.title}
                                    </h3>
                                    <p className="text-gray-800 text-sm md:text-lg lg:text-xl leading-relaxed font-medium max-w-[500px] mb-6 md:mb-8 line-clamp-4 md:line-clamp-none">
                                        {currentSlide.description}
                                    </p>
                                </div>

                                {/* Learn More Button */}
                                <div className="mt-auto pb-4 md:pb-0">
                                    <button className="flex items-center gap-2 bg-black text-[#ffcc00] px-6 py-3.5 md:px-8 md:py-4 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-gray-800 transition-all duration-300 w-fit group/btn shadow-lg active:scale-95">
                                        Learn More
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover/btn:translate-x-1.5 transition-transform duration-300 md:w-[18px] md:h-[18px]">
                                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Image Section - Beautiful Leaf/Droplet Frame */}
                            <div className="w-full h-full md:w-1/2 relative aspect-video md:aspect-auto rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl md:rounded-tl-[6rem] md:rounded-br-[6rem] md:rounded-tr-2xl md:rounded-bl-2xl overflow-hidden group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border-4 md:border-8 border-white/30">
                                <div className="absolute inset-0 bg-[#e6b800]/20 flex flex-col items-center justify-center">
                                    <img
                                        src={currentSlide.image}
                                        alt={currentSlide.title}
                                        className="absolute inset-0 w-full h-full object-cover object-center z-10 transition-transform duration-[1500ms] ease-out group-hover:scale-[1.03]"
                                        onError={(e) => { e.currentTarget.style.opacity = '0'; }}
                                    />
                                    {/* Placeholder if image fails to load */}
                                    <div className="absolute inset-0 z-0 flex flex-col items-center justify-center text-[#3D3300]/60">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 opacity-60">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                            <polyline points="21 15 16 10 5 21"></polyline>
                                        </svg>
                                        <span className="font-bold text-sm tracking-widest uppercase mb-1">Upload Here</span>
                                        <span className="text-xs opacity-70 font-mono text-center px-4 leading-[1.4] block max-w-xs">{`public${currentSlide.image}`}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Slider Controls */}
                    <div className="w-full flex md:hidden justify-center gap-3 mt-6">
                        <button
                            onClick={handlePrev}
                            className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-800 hover:bg-[#ffcc00] hover:text-black transition-all duration-300 border border-black/10 active:scale-95 shadow-sm group"
                        >
                            <svg className="w-2 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-300" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 15L1.5 8L8.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-800 hover:bg-[#ffcc00] hover:text-black transition-all duration-300 border border-black/10 active:scale-95 shadow-sm group"
                        >
                            <svg className="w-2 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 1L8.5 8L1.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                </div> {/* Closes .hww-card */}

            </div> {/* Closes .max-w */}
        </section>
    );
}
