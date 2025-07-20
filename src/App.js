import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Folder, ArrowRight, MapPin, Mail, GraduationCap, ChevronDown, Download } from 'lucide-react';
import { portfolioData } from './data';
import useTypewriter from './hooks/useTypewriter';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

// --- Reusable Components ---

const Typewriter = ({ text }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const animatedText = useTypewriter(text, 25, isInView);
    const isAnimationComplete = animatedText.length === text.length;

    return (
        <p ref={ref} className="leading-relaxed text-gray-600 dark:text-gray-400 text-lg text-center max-w-2xl mx-auto">
            {animatedText}
            {!isAnimationComplete && (
                <span className="inline-block w-px h-5 ml-1 bg-gray-600 dark:bg-gray-400 animate-pulse" aria-hidden="true"></span>
            )}
        </p>
    );
};

const AccordionItem = ({ edu }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 dark:border-gray-800">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-5 px-6 text-left"
            >
                <div className="flex items-center gap-4">
                    <GraduationCap className="w-5 h-5 text-gray-500" />
                    <div>
                        <h3 className="font-bold text-gray-800 dark:text-gray-100">{edu.degree}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{edu.institution}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                     <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
                     <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                    />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-5 pl-14 space-y-1">
                            {edu.details.map((detail, index) => (
                                <p key={index} className="text-gray-600 dark:text-gray-400">{detail}</p>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- Main App Component ---
export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="bg-[#F5F5F5] dark:bg-[#1A1A1A] text-gray-600 dark:text-gray-400 antialiased selection:bg-gray-300 dark:selection:bg-gray-700 font-sans min-h-screen flex flex-col">
      <Header theme={theme} handleThemeSwitch={handleThemeSwitch} />
      
      <main className="container mx-auto px-6 pt-32 flex-grow w-full max-w-screen-xl">
        <section id="about" className="py-16 md:py-24 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">{portfolioData.name}</h1>
            <h2 className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-8">{portfolioData.title}</h2>
            <Typewriter text={portfolioData.about} />
            <div className="mt-12">
                <AnimatedSection>
                    <a 
                        href="Resume_Aanchal_Gupta.pdf" // NOTE: Place your resume in the `public` folder
                        download="Aanchal-Gupta-Resume.pdf"
                        className="inline-flex items-center gap-2 bg-gray-800 hover:bg-black text-white dark:bg-gray-200 dark:hover:bg-white dark:text-black font-bold py-3 px-8 rounded-md transition-colors"
                    >
                        <Download size={20} />
                        Download Resume
                    </a>
                </AnimatedSection>
            </div>
        </section>

        <section id="experience" className="py-16 md:py-24">
            <AnimatedSection>
                <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl text-center mb-12">Experience</h2>
                <div className="relative border-l-2 border-gray-200 dark:border-gray-800 max-w-2xl mx-auto">
                    {portfolioData.experience.map((exp, index) => (
                        <div key={index} className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full -left-3 ring-8 ring-white dark:ring-[#1A1A1A] dark:bg-gray-700">
                                <svg className="w-2.5 h-2.5 text-gray-800 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"/><path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/></svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{exp.role} at <span className="text-gray-600 dark:text-gray-400 ml-2">{exp.company}</span></h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{exp.period}</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </section>

        <section id="skills" className="py-16 md:py-24">
            <AnimatedSection>
                <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl text-center">My Skills</h2>
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
                    {portfolioData.skills.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center p-4 rounded-lg bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 hover:shadow-xl dark:hover:border-gray-700 transition-all transform hover:-translate-y-1">
                        <div className="text-gray-800 dark:text-gray-200"> {skill.icon} </div>
                            <p className="mt-2 font-semibold text-gray-700 dark:text-gray-300">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </section>
        
        <section id="education" className="py-16 md:py-24">
            <AnimatedSection>
                <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl text-center">Education</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-4 text-center">My academic background and qualifications</p>
                <div className="mt-8 max-w-2xl mx-auto border border-gray-200 dark:border-gray-800 rounded-lg bg-white/50 dark:bg-black/50">
                    {portfolioData.education.map((edu, index) => (
                        <AccordionItem key={index} edu={edu} />
                    ))}
                </div>
            </AnimatedSection>
        </section>

        <section id="projects" className="py-16 md:py-24">
            <AnimatedSection>
                <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl text-center mb-12">Projects</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {portfolioData.projects.map((project, index) => (
                    <li key={index} className="mb-2">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block p-6 rounded-lg bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-black/80 hover:shadow-xl transition-all border border-gray-200 dark:border-gray-800 group">
                        <div className="flex items-center justify-between mb-4">
                            <Folder className="text-gray-800 dark:text-gray-200" size={32}/>
                            <ArrowRight className="text-gray-500 group-hover:text-black dark:group-hover:text-white transition-transform ease-in-out duration-200 transform group-hover:translate-x-1" size={20}/>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 group-hover:text-black dark:group-hover:text-white transition-colors">{project.title}</h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.tags.map(tag => (
                            <div key={tag} className="flex items-center rounded-full bg-gray-500/10 px-3 py-1 text-xs font-medium leading-5 text-gray-600 dark:text-gray-300 ">{tag}</div>
                            ))}
                        </div>
                        </a>
                    </li>
                    ))}
                </ul>
            </AnimatedSection>
        </section>
        
        <section id="contact" className="py-16 md:py-24 text-center">
            <AnimatedSection>
                <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl">Get In Touch</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-4">Interested in connecting? Feel free to reach out</p>
                <div className="mt-8 max-w-3xl mx-auto p-8 border border-gray-200 dark:border-gray-800 rounded-lg bg-white/50 dark:bg-black/50">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3 text-left">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">LET'S CONNECT</h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">Fill in the form to start a conversation.</p>
                            <div className="flex items-center gap-3 mt-6">
                                <div className="w-5 h-5 flex-shrink-0">
                                    <MapPin className="w-full h-full text-gray-800 dark:text-gray-200"/>
                                </div>
                                <span className="text-gray-700 dark:text-gray-300">{portfolioData.contact.location}</span>
                            </div>
                            <div className="flex items-center gap-3 mt-4">
                                <div className="w-5 h-5 flex-shrink-0">
                                    <Mail className="w-full h-full text-gray-800 dark:text-gray-200"/>
                                </div>
                                <a href={`mailto:${portfolioData.contact.email}`} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">{portfolioData.contact.email}</a>
                            </div>
                        </div>
                        <form className="md:w-2/3 space-y-4 text-left">
                            <input type="text" placeholder="Name" className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white" />
                            <input type="email" placeholder="Email" className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white" />
                            <input type="text" placeholder="Subject" className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white" />
                            <textarea placeholder="Hi! Let's talk about..." rows="5" className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"></textarea>
                            <button type="submit" className="bg-gray-800 hover:bg-black text-white dark:bg-gray-200 dark:hover:bg-white dark:text-black font-bold py-2 px-6 rounded-md transition-colors">Send Message</button>
                        </form>
                    </div>
                </div>
            </AnimatedSection>
        </section>
      </main>

      <Footer />
    </div>
  );
}
