import { useState } from 'react';
import HTML5Icon from '../assets/HTML5Icon';
import CSS3Icon from '../assets/CSS3Icon';
import JavaScriptIcon from '../assets/JavaScriptIcon';
import TypeScriptIcon from '../assets/TypeScriptIcon';
import ReactIcon from '../assets/ReactIcon';
import VueIcon from '../assets/VueIcon';
import TailwindCSSIcon from '../assets/TailwindCSSIcon';
import JavaIcon from '../assets/JavaIcon';
import SpringIcon from '../assets/SpringIcon';
import MySQLIcon from '../assets/MySQLIcon';
import DockerIcon from '../assets/DockerIcon';
import JenkinsIcon from '../assets/JenkinsIcon';
import FigmaIcon from '../assets/FigmaIcon';
import ZustandIcon from '../assets/ZustandIcon';
import FastAPIIcon from '../assets/FastAPIIcon';
import AWSIcon from '../assets/AWSIcon';
import NginxIcon from '../assets/NginxIcon';
import GitIcon from '../assets/GitIcon';
import JiraIcon from '../assets/JiraIcon';
import NotionIcon from '../assets/NotionIcon';
import PythonIcon from '../assets/PythonIcon';
import RecoilIcon from '../assets/RecoilIcon';
import BlenderIcon from '../assets/BlenderIcon';
import ViteIcon from '../assets/ViteIcon';
import VercelIcon from '../assets/VercelIcon';

type Skill = {
    name: string;
    icon?: React.ReactNode;
    highlight?: boolean;
};

type SkillCategory = {
    title: string;
    skills: Skill[];
};

const skillCategories: SkillCategory[] = [
    {
        title: 'FrontEnd',
        skills: [
            { name: 'HTML5', icon: <HTML5Icon /> },
            { name: 'CSS3', icon: <CSS3Icon /> },
            { name: 'JavaScript', icon: <JavaScriptIcon /> },
            { name: 'TypeScript', icon: <TypeScriptIcon />, highlight: true },
            { name: 'React', icon: <ReactIcon />, highlight: true },
            { name: 'ReactNative', icon: <ReactIcon />, highlight: true },
            { name: 'Vue.js', icon: <VueIcon /> },
            { name: 'TailwindCSS', icon: <TailwindCSSIcon />, highlight: true },
            { name: 'styled-components', icon: <span aria-hidden="true">💅</span>, highlight: true },
            { name: 'Reanimated' },
            { name: 'Recoil', icon: <RecoilIcon /> },
            { name: 'Zustand', icon: <ZustandIcon />, highlight: true },
            { name: 'Vite', icon: <ViteIcon /> },
            { name: 'Vercel', icon: <VercelIcon /> },
        ],
    },
    {
        title: 'BackEnd',
        skills: [
            { name: 'Java', icon: <JavaIcon />, highlight: true },
            { name: 'Spring Data JPA', icon: <SpringIcon />, highlight: true },
            { name: 'Python', icon: <PythonIcon /> },
            { name: 'FastAPI', icon: <FastAPIIcon /> },
            { name: 'MySQL', icon: <MySQLIcon />, highlight: true },
        ],
    },
    {
        title: 'Infra',
        skills: [
            { name: 'AWS EC2', icon: <AWSIcon /> },
            { name: 'Jenkins', icon: <JenkinsIcon /> },
            { name: 'Docker', icon: <DockerIcon /> },
            { name: 'NGINX', icon: <NginxIcon /> },
        ],
    },
    {
        title: 'Others',
        skills: [
            { name: 'Git', icon: <GitIcon /> },
            { name: 'JIRA', icon: <JiraIcon /> },
            { name: 'Notion', icon: <NotionIcon /> },
            { name: 'Figma', icon: <FigmaIcon /> },
            { name: 'Blender', icon: <BlenderIcon /> },
        ],
    },
];

function SkillItem({ skill }: { skill: Skill }) {
    return (
        <article
            className={[
                'flex items-center justify-center gap-2 rounded-full border px-3 py-2 text-center transition-colors',
                skill.highlight
                    ? 'border-blue-200 bg-blue-50 text-blue-700'
                    : 'border-[#e8e8ec] bg-white text-slate-700',
            ].join(' ')}
        >
            {skill.icon ? (
                <div className="flex h-5 w-5 items-center justify-center text-lg leading-none">{skill.icon}</div>
            ) : null}
            <span className="text-xs font-extrabold">{skill.name}</span>
        </article>
    );
}

export function SkillTabs() {
    const [activeCategory, setActiveCategory] = useState(skillCategories[0]);

    return (
        <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex flex-wrap justify-center gap-7 border-b border-slate-200">
                {skillCategories.map((category) => {
                    const isActive = category.title === activeCategory.title;

                    return (
                        <button
                            className={[
                                'relative -mb-px px-1 pb-3 text-sm font-extrabold transition-colors after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:transition-colors',
                                isActive
                                    ? 'text-blue-600 after:bg-blue-600'
                                    : 'text-slate-400 after:bg-transparent hover:text-slate-900',
                            ].join(' ')}
                            key={category.title}
                            onClick={() => setActiveCategory(category)}
                            type="button"
                        >
                            {category.title}
                        </button>
                    );
                })}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
                {activeCategory.skills.map((skill) => (
                    <SkillItem key={skill.name} skill={skill} />
                ))}
            </div>
        </div>
    );
}
