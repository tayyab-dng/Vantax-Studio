import React, { useRef, useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const programmes = [
    {
        id: 1,
        title: '1. Access to quality learning experiences in remote schools',
        category: 'Focus Area',
        description: "In mountain communities where resources are scarce and learning facilities and opportunities limited, schools need support in many ways – from improving facilities to training teachers and creating learning opportunities that address the need for 21st century skills. IEI fills this gap through it's various short-term intervention programmes and long duration school development programmes that work with teachers, students and parents in the community.",
        image: '/images/focus-areas/1.webp'
    },
    {
        id: 2,
        title: '2. Social & Emotional Well-being',
        category: 'Focus Area',
        description: "Social Emotional Wellbeing of children is at the heart of all our programmes. Children in isolated and remote mountain communities are at a higher risk of developing mental health issues due to isolation and digital disconnect, and to tackle it, we keep social emotional learning at the core of all our program designs and curriculum to ensure holistic development.\n\nWe do this by imbedding 'play', 'mindfulness' and creative arts in all our engagement with children in and outside the classrooms.",
        image: '/images/focus-areas/2.webp'
    },
    {
        id: 3,
        title: '3. Art in Education',
        category: 'Focus Area',
        description: "Art is embedded across our programme offering to encourage self-expression and foster creativity, imagination and innovation.\n\nUsing mixed mediums including painting, music and performance art, children are engage in learning through playful experiences that span multiple learning areas including science, literacy & climate education.",
        image: '/images/focus-areas/3.webp'
    },
    {
        id: 4,
        title: '4. Education for Sustainable Development',
        category: 'Focus Area',
        description: "We work with communities that are at an imminent risk of life-changing disruptions due to climate change. Therefore, one of our key focuses in education is climate action, awareness and sustainability. We integrate climate and awareness programs in the curriculum for both students and teachers, offer digital Climate Educator Training programmes and enable young climate changemakers through our Design Thinking for Environmental Solutions programme.",
        image: '/images/focus-areas/4.webp'
    },
    {
        id: 5,
        title: '5. Libraries for public schools',
        category: 'Focus Area',
        description: "Libraries are an essential element of a school's programming and many public schools don't have them. With an architect and artist duo we are creating colorful, playful spaces for children equipped with books and digital tools to improve children's learning outcomes, promote reading, digital literacy and critical thinking skills.\n\nUsing mixed mediums including painting, music and performance art, children are engage in learning through playful experiences that span multiple learning areas including science, literacy & climate education.",
        image: '/images/focus-areas/5.webp'
    },
    {
        id: 6,
        title: '6. Volunteer Programmes',
        category: 'Focus Area',
        description: "We believe Volunteerism helps in creating bridges across the diverse cultures and regions of the country, and is imperative for long term peace. It is only by building bridges, integrating & interacting that we can understand each other, grow to respect one another and appreciate what makes us beautiful: our diversity.\n\nOur volunteer programmes offer opportunities to teach and learn from children in a remote mountain village, act as a trainer or mentor and participate in school improvement to uplift the overall quality and experience of education.",
        image: '/images/focus-areas/6.webp'
    }
];

export default function FeaturedProjects() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(containerRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            }
        );
    }, { scope: containerRef });

    // Embla Carousel Setup for a single full-width card
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'center',
        containScroll: 'keepSnaps',
        dragFree: false, // Turn off dragFree to snap fully to the single card
        loop: true,
        duration: 40 // Smooth sliding over 40 frames
    });

    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback((emblaApi) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect(emblaApi);
        emblaApi.on('reInit', onSelect).on('select', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <section ref={containerRef} className="w-full h-auto min-h-screen py-16 md:py-24 bg-white flex flex-col items-center justify-center overflow-hidden">
            <div className="max-w-[1440px] w-full mx-auto flex flex-col justify-center h-full gap-4 md:gap-8 px-4 md:px-8 lg:px-12 z-10">

                {/* 1. Global Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 md:gap-4 mb-4 md:mb-8">
                    <div className="flex flex-col items-start gap-2 md:gap-3 w-full md:w-auto">
                        <div className="flex justify-between items-center w-full md:w-auto gap-4">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 m-0 flex items-center gap-2 md:gap-3">
                                Focus Areas
                                <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-[#ffcc00] rounded-full mt-1 md:mt-1.5"></div>
                            </h2>

                            {/* Mobile Navigation Controls */}
                            <div className="flex md:hidden gap-2 mt-1">
                                <button
                                    onClick={scrollPrev}
                                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#ffcc00] hover:text-black flex justify-center items-center text-gray-800 transition-all duration-300 border border-black/10 active:scale-95 disabled:opacity-30 group z-10 shrink-0 shadow-sm"
                                    disabled={prevBtnDisabled}
                                >
                                    <svg viewBox="0 0 10 16" fill="none" className="w-2 h-3.5 group-hover:-translate-x-0.5 transition-all duration-300">
                                        <path d="M8.5 15L1.5 8L8.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button
                                    onClick={scrollNext}
                                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#ffcc00] hover:text-black flex justify-center items-center text-gray-800 transition-all duration-300 border border-black/10 active:scale-95 disabled:opacity-30 group z-10 shrink-0 shadow-sm"
                                    disabled={nextBtnDisabled}
                                >
                                    <svg viewBox="0 0 10 16" fill="none" className="w-2 h-3.5 group-hover:translate-x-0.5 transition-all duration-300">
                                        <path d="M1.5 1L8.5 8L1.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm md:text-lg lg:text-xl max-w-2xl mt-0 md:mt-2">
                            Building futures through innovative educational initiatives in Gilgit-Baltistan.
                            Here are some of our key focus areas on which we work on:
                        </p>
                    </div>

                    {/* Desktop Navigation Controls */}
                    <div className="hidden md:flex gap-3 ml-auto self-end pb-1 md:pb-2">
                        <button
                            onClick={scrollPrev}
                            className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#ffcc00] hover:text-black flex justify-center items-center text-gray-800 transition-all duration-300 border border-black/10 active:scale-95 disabled:opacity-30 group z-10 shadow-sm"
                            disabled={prevBtnDisabled}
                        >
                            <svg viewBox="0 0 10 16" fill="none" className="w-2.5 h-4 group-hover:-translate-x-0.5 transition-all duration-300">
                                <path d="M8.5 15L1.5 8L8.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#ffcc00] hover:text-black flex justify-center items-center text-gray-800 transition-all duration-300 border border-black/10 active:scale-95 disabled:opacity-30 group z-10 shadow-sm"
                            disabled={nextBtnDisabled}
                        >
                            <svg viewBox="0 0 10 16" fill="none" className="w-2.5 h-4 group-hover:translate-x-0.5 transition-all duration-300">
                                <path d="M1.5 1L8.5 8L1.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* 2. Embla Carousel Track */}
                <div className="relative">
                    <div className="embla w-full overflow-hidden" ref={emblaRef}>
                        <div className="embla__container flex items-stretch -ml-4 md:-ml-8 lg:-ml-12 pt-2 md:pt-4 pb-8">

                            {programmes.map((programme) => (
                                <div key={programme.id} className="embla__slide flex-[0_0_100%] min-w-0 pl-4 md:pl-8 lg:pl-12 flex flex-col">

                                    {/* The Split Card Layout */}
                                    <div className="group w-full h-[620px] sm:h-[580px] md:h-[480px] lg:h-[540px] flex flex-col md:flex-row bg-[#ffcc00] rounded-[1.5rem] md:rounded-[2.5rem] p-3 md:p-6 lg:p-8 gap-4 md:gap-8 lg:gap-12 shadow-xl relative z-10 overflow-hidden">

                                        {/* Premium Noise Grain Overlay */}
                                        <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

                                        {/* Image Section (Left) - Matching HowWeWork Frame */}
                                        <div className="w-full h-[45%] md:w-1/2 md:h-full relative overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl md:rounded-tl-[6rem] md:rounded-br-[6rem] md:rounded-tr-2xl md:rounded-bl-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border-4 md:border-8 border-white/30 z-10 bg-[#e6b800]/20 flex-shrink-0">
                                            <img
                                                src={programme.image}
                                                alt={programme.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.03]"
                                                draggable={false}
                                            />
                                        </div>

                                        {/* Content Section (Right) */}
                                        <div className="w-full h-[55%] md:w-1/2 md:h-full py-2 flex flex-col justify-between text-left relative z-10 md:py-6 lg:py-8 md:pr-4 lg:pr-8">
                                            <div>
                                                {/* Category Tag */}
                                                <div className="mb-2 md:mb-5 w-fit flex-shrink-0">
                                                    <span className="bg-black text-[#ffcc00] px-4 py-2 md:px-5 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase shadow-md">
                                                        {programme.category}
                                                    </span>
                                                </div>

                                                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-2 md:mb-5 group-hover:text-black transition-colors duration-300 flex-shrink-0 line-clamp-2 md:line-clamp-none">
                                                    {programme.title}
                                                </h3>

                                                <div className="text-gray-800 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[1.5] md:leading-relaxed font-medium max-w-[600px] space-y-2 lg:space-y-3 line-clamp-5 xl:line-clamp-none mix-blend-multiply">
                                                    {programme.description.split('\n\n').map((paragraph, index) => (
                                                        <p key={index}>{paragraph}</p>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Learn More Button */}
                                            <div className="mt-3 flex-shrink-0">
                                                <button className="flex items-center gap-1.5 bg-black text-[#ffcc00] px-5 py-2.5 sm:px-6 sm:py-3.5 md:px-8 md:py-4 rounded-full text-[11px] sm:text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors w-fit group/btn shadow-lg active:scale-95">
                                                    Learn More
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover/btn:translate-x-1.5 transition-transform duration-300 md:w-[18px] md:h-[18px]">
                                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
