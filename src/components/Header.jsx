import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { portfolioData } from '../data';

const Header = ({ theme, handleThemeSwitch }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = ["about", "experience", "skills", "education", "projects", "contact"];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80; // Offset for fixed header
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <header className="bg-[#F5F5F5]/80 dark:bg-[#1A1A1A]/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    {portfolioData.name}
                </a>
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map(link => (
                        <button key={link} onClick={() => scrollToSection(link)} className="capitalize text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                            {link}
                        </button>
                    ))}
                    <button onClick={handleThemeSwitch} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                        {theme === 'dark' ? <Sun size={20} className="text-white"/> : <Moon size={20} />}
                    </button>
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="text-gray-800 dark:text-gray-100" /> : <Menu className="text-gray-800 dark:text-gray-100" />}
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-[#F5F5F5] dark:bg-[#1A1A1A]"
                    >
                        <div className="px-6 pt-2 pb-4 flex flex-col space-y-4">
                            {navLinks.map(link => (
                                <button key={link} onClick={() => scrollToSection(link)} className="capitalize text-left text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                                    {link}
                                </button>
                            ))}
                             <button onClick={handleThemeSwitch} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                                {theme === 'dark' ? <Sun size={20} className="text-white"/> : <Moon size={20} />}
                                <span>Switch Theme</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
