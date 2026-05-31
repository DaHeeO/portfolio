import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProjectCard } from '../components/ProjectCard';
import { EducationTimeline } from '../components/EducationTimeline';
import { ProjectModal } from '../components/ProjectModal';
import { SectionHeading } from '../components/SectionHeading';
import { SkillTabs } from '../components/SkillTabs';
import { projects, type Project } from '../data/projects';

const contactLinks = [
    {
        label: 'Email',
        value: 'dhekgml1234@gmail.com',
        href: 'mailto:dhekgml1234@gmail.com',
        icon: 'mail',
    },
    {
        label: 'Blog',
        value: 'velog.io/@jenny9909/posts',
        href: 'https://velog.io/@jenny9909/posts',
        icon: 'book',
    },
    {
        label: 'GitHub',
        value: 'github.com/DaHeeO',
        href: 'https://github.com/DaHeeO',
        icon: 'github',
    },
] as const;

type ContactIconType = (typeof contactLinks)[number]['icon'];
type ProjectFilter = 'All' | 'Frontend' | 'Infra' | 'Backend';

const projectFilters: { label: string; value: ProjectFilter }[] = [
    { label: '전체', value: 'All' },
    { label: 'Frontend', value: 'Frontend' },
    { label: 'Infra', value: 'Infra' },
    { label: 'Backend', value: 'Backend' },
];

const isProjectFilter = (value: string | null): value is ProjectFilter =>
    projectFilters.some((filter) => filter.value === value);

const getProjectFilterFromSearch = (search: string): ProjectFilter => {
    const filter = new URLSearchParams(search).get('filter');

    return isProjectFilter(filter) ? filter : 'All';
};

function ContactIcon({ type }: { type: ContactIconType }) {
    const iconProps = {
        className: 'h-4.5 w-4.5',
        fill: 'none',
        stroke: 'currentColor',
        strokeLinecap: 'round' as const,
        strokeLinejoin: 'round' as const,
        strokeWidth: 1.8,
        viewBox: '0 0 24 24',
    };

    if (type === 'mail') {
        return (
            <svg {...iconProps} aria-hidden="true">
                <path d="M4 6h16v12H4z" />
                <path d="m4 7 8 6 8-6" />
            </svg>
        );
    }

    if (type === 'book') {
        return (
            <svg {...iconProps} aria-hidden="true">
                <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H20v17H8.5A3.5 3.5 0 0 0 5 22z" />
                <path d="M5 5.5V22" />
            </svg>
        );
    }

    return (
        <svg {...iconProps} aria-hidden="true">
            <path d="M9 19c-4 1.5-4-2-5-2.5" />
            <path d="M15 22v-3.5c0-1 .3-1.7-.6-2 3-.3 6.1-1.5 6.1-6.6a5.1 5.1 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.7 12.7 0 0 0-6.6 0C6.1 1.9 5 2.2 5 2.2a4.8 4.8 0 0 0-.1 3.6 5.1 5.1 0 0 0-1.4 3.6c0 5.1 3.1 6.3 6.1 6.6-.4.3-.7.9-.8 1.7V22" />
        </svg>
    );
}

export function HomePage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const selectedProjectFilter = getProjectFilterFromSearch(location.search);

    const handleProjectFilterChange = (filterValue: ProjectFilter) => {
        const searchParams = new URLSearchParams(location.search);

        if (filterValue === 'All') {
            searchParams.delete('filter');
        } else {
            searchParams.set('filter', filterValue);
        }

        navigate(
            {
                pathname: location.pathname,
                search: searchParams.toString() ? `?${searchParams.toString()}` : '',
                hash: '#projects',
            },
            { replace: true },
        );
    };

    const filteredProjects = useMemo(() => {
        if (selectedProjectFilter === 'All') {
            return projects;
        }

        const filterKeyword = selectedProjectFilter.toLowerCase();

        return projects.filter((project) => {
            const projectRole = project.role.toLowerCase();
            const projectTags = project.tags.map((tag) => tag.toLowerCase());

            return projectRole.includes(filterKeyword) || projectTags.includes(filterKeyword);
        });
    }, [selectedProjectFilter]);

    return (
        <>
            <section
                className="mx-auto flex w-[min(calc(100%-40px),1120px)] scroll-mt-24 justify-center pt-24 pb-16 text-center max-md:w-[calc(100%-28px)] max-md:pt-16 max-md:pb-12"
                id="about"
            >
                <div className="relative z-10 flex max-w-2xl flex-col items-center">
                    <h1 className="mb-5 max-w-2xl text-[clamp(32px,4vw,48px)] leading-[1.22] font-extrabold tracking-normal text-slate-900">
                        안녕하세요,
                        <br />
                        프론트엔드 개발자
                        <br />
                        <span className="text-blue-600">오다희</span>
                        입니다.
                    </h1>
                    <p className="max-w-xl text-[17px] leading-7 text-slate-700 max-md:text-base">
                        React를 중심으로 웹 프론트엔드를 개발합니다.
                        <br />
                        기획부터 배포까지, 서비스의 전체 흐름을 고민하며 개발합니다.
                    </p>
                </div>
            </section>

            <section
                className="mx-auto w-[min(calc(100%-40px),1120px)] scroll-mt-24 py-24 max-md:w-[calc(100%-28px)] max-md:py-17"
                id="skills"
            >
                <SectionHeading eyebrow="Skills" description="아래 기술들을 사용해본 경험이 있습니다." />
                <SkillTabs />
            </section>

            <section
                className="mx-auto w-[min(calc(100%-40px),1120px)] scroll-mt-24 py-24 max-md:w-[calc(100%-28px)] max-md:py-17"
                id="projects"
            >
                <SectionHeading
                    eyebrow="Projects"
                    description="카드를 클릭하여 프로젝트의 상세 과정과 결과를 확인해 보세요."
                />
                <div
                    className="mb-6 flex flex-wrap justify-center gap-2"
                    role="radiogroup"
                    aria-label="Project category filter"
                >
                    {projectFilters.map((filter) => {
                        const isSelected = selectedProjectFilter === filter.value;

                        return (
                            <button
                                className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-blue-300 ${
                                    isSelected
                                        ? 'border-blue-600 bg-blue-600 text-white shadow-sm'
                                        : 'border-[#e3e5eb] bg-white text-slate-500 hover:border-blue-200 hover:text-blue-600'
                                }`}
                                type="button"
                                role="radio"
                                aria-checked={isSelected}
                                key={filter.value}
                                onClick={() => handleProjectFilterChange(filter.value)}
                            >
                                {filter.label}
                            </button>
                        );
                    })}
                </div>
                <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
                    {filteredProjects.map((project) => (
                        <ProjectCard project={project} key={project.slug} onOpen={setSelectedProject} />
                    ))}
                </div>
                {filteredProjects.length === 0 ? (
                    <p className="mt-8 rounded-lg border border-dashed border-[#d9dbe3] px-5 py-8 text-center text-sm font-semibold text-slate-500">
                        선택한 분류에 해당하는 프로젝트가 아직 없습니다.
                    </p>
                ) : null}
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            </section>

            <section
                className="mx-auto w-[min(calc(100%-40px),1120px)] scroll-mt-24 py-24 text-center max-md:w-[calc(100%-28px)] max-md:py-17"
                id="education"
            >
                <SectionHeading eyebrow="Education" description="학력 및 교육 이력입니다." />
                <EducationTimeline />
            </section>

            <section
                className="mx-auto w-[min(calc(100%-40px),1120px)] scroll-mt-24 py-16 text-center max-md:w-[calc(100%-28px)] max-md:py-12"
                id="contact"
            >
                <div className="mx-auto max-w-xl pb-30 max-md:pb-12">
                    <div className="mt-8">
                        <p className="mb-4 text-sm font-semibold tracking-wide text-slate-950">Contact</p>
                        <p className="mx-auto mt-2 mb-4 max-w-md text-sm leading-6 text-slate-500">
                            궁금하신 점이 있으시면 언제든지 편하게 연락주세요!
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                            {contactLinks.map((contact) => (
                                <a
                                    className="group inline-flex items-center gap-2.5 rounded-sm text-base font-medium text-slate-500 no-underline transition-colors duration-200 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-300 max-md:text-sm"
                                    href={contact.href}
                                    key={contact.label}
                                    rel="noreferrer"
                                    target={contact.label === 'Email' ? undefined : '_blank'}
                                >
                                    <span className="text-slate-400 transition-colors duration-200 group-hover:text-slate-700">
                                        <ContactIcon type={contact.icon} />
                                    </span>
                                    <span>{contact.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
