import React, { useState, useEffect } from 'react';
import { assets, SoftwareData } from '@/assets/assets';
import Image from 'next/image';

const TechnologyTag = ({ tech, isActive }) => {
    const getTagColor = (technology) => {
        const colors = {
            'HTML': 'bg-rose-100 text-rose-800',
            'CSS': 'bg-rose-100 text-rose-800',
            'JavaScript': 'bg-rose-100 text-rose-800',
            'React': 'bg-rose-100 text-rose-800',
            'Node.js': 'bg-rose-100 text-rose-800',
            'Express.js': 'bg-rose-100 text-rose-800',
            'MongoDB': 'bg-rose-100 text-rose-800',
            'Bootstrap': 'bg-rose-100 text-rose-800',
            'Tailwind': 'bg-rose-100 text-rose-800',
            'Python': 'bg-rose-100 text-rose-800',
            'Flask': 'bg-rose-100 text-rose-800',
            'SQL': 'bg-rose-100 text-rose-800',
            'PostgreSQL': 'bg-rose-100 text-rose-800'
        };
        return colors[technology] || 'bg-gray-100 text-gray-800';
    };

    return (
        <span className={`px-3 py-1 text-sm rounded-full ${getTagColor(tech)}`}>
            {tech}
        </span>
    );
};

const SoftwareDevelopment = () => {
    const [activeProject, setActiveProject] = useState('meanmoney');
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const currentProject = SoftwareData.find(project => project.id === activeProject);

    // Reset image index when project changes
    useEffect(() => {
        setActiveImageIndex(0);
    }, [activeProject]);

    const handleProjectChange = (projectId) => {
        setActiveProject(projectId);
    };

    const handleImageNavigation = (index) => {
        setActiveImageIndex(index);
    };

    const navigateImage = (direction) => {
        if (direction === 'prev') {
            setActiveImageIndex(prev =>
                prev === 0 ? currentProject.images.length - 1 : prev - 1
            );
        } else {
            setActiveImageIndex(prev =>
                prev === currentProject.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    return (
        <div id="software" className="w-full px-[12%] py-10 scroll-mt-20">
            <div className="w-full max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row gap-8 mb-8">
                    {/* Title (1/5 width) */}
                    <div className="lg:w-1/5">
                        <h3>
                            Software Development
                        </h3>
                    </div>

                    {/* Description (4/5 width) */}
                    <div className="lg:w-4/5 lg:pl-8 relative">
                        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gray-200"></div>
                        <p className="text-gray-600 leading-relaxed">
                            Full-stack developer with experience building robust web apps using a wide range of technologies including JavaScript, Python, and React. Proficient in HTML and CSS, with hands-on experience with state management, component reusability, and API integration.
                        </p>
                    </div>
                </div>

                {/* Project Tabs */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-4 mb-6">
                        {SoftwareData.map((project) => (
                            <button
                                key={project.id}
                                onClick={() => handleProjectChange(project.id)}
                                className={`px-6 py-2 rounded-full transition-all duration-200 ${activeProject === project.id
                                    ? 'bg-greenCustom text-white shadow-sm'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {project.title}
                            </button>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gray-200 mb-8"></div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left Column */}
                    <div className="lg:w-3/5">
                        {/* Main Image */}
                        <div className="relative mb-4">
                            <div className="relative bg-gray-100 border rounded-xl overflow-hidden h-48 md:h-80 w-full">
                                <Image
                                    src={currentProject.images[activeImageIndex]}
                                    alt={`${currentProject.title} screenshot ${activeImageIndex + 1}`}
                                    fill
                                    className="object-cover"
                                />

                                {/* Navigation arrows */}
                                {currentProject.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={() => navigateImage('prev')}
                                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                                        >
                                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => navigateImage('next')}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                                        >
                                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Navigation Indicators */}
                        {currentProject.images.length > 1 && (
                            <div className="flex justify-center gap-2">
                                {currentProject.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleImageNavigation(index)}
                                        className={`w-3 h-3 rounded-full transition-colors ${activeImageIndex === index ? 'bg-greenCustom' : 'bg-gray-300'
                                            }`}
                                    />
                                ))}
                                <span className="ml-4 text-sm text-gray-500">
                                    {activeImageIndex + 1} / {currentProject.images.length}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-2/5">

                        {/* Technologies */}
                        <div className="mb-6">
                            <div className="flex flex-wrap gap-2">
                                {currentProject.technologies.map((tech, index) => (
                                    <TechnologyTag key={index} tech={tech} />
                                ))}
                            </div>
                        </div>

                        {/* Title */}
                        <div className="flex items-center justify-between mb-4">
                            <h4>
                                {currentProject.title}
                            </h4>
                            {currentProject.githubUrl && (
                                <a
                                    href={currentProject.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-sm text-gray-700"
                                >
                                    GitHub
                                    <Image
                                        src={assets.arrow_icon}
                                        alt="External link"
                                        width={16}
                                        height={16}
                                        className="opacity-70"
                                    />
                                </a>
                            )}
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-6">
                            {currentProject.description}
                        </p>

                        {/* Bullets */}
                        <ul className="space-y-3">
                            {currentProject.bulletPoints.map((point, index) => (
                                <li   key={index} className="flex items-start">
                                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoftwareDevelopment;