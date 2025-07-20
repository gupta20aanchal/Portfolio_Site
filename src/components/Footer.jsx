import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../data';

const Footer = () => {
    return (
        <footer className="w-full text-center py-8">
            <div className="flex justify-center items-center space-x-6 mb-4">
                <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Github size={24} /></a>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Linkedin size={24} /></a>
                <a href={`mailto:${portfolioData.contact.email}`} className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Mail size={24} /></a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} {portfolioData.name}
            </p>
        </footer>
    );
};

export default Footer;
