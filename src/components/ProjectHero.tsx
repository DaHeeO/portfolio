import type { Project } from '../data/projects';

type ProjectHeroProps = {
    project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
    return (
        <section className="mx-auto grid min-h-[calc(100svh-76px)] w-[min(calc(100%-40px),1120px)] grid-cols-[minmax(0,0.78fr)_minmax(420px,1fr)] items-center gap-12 py-20 text-center max-md:min-h-0 max-md:w-[calc(100%-28px)] max-md:grid-cols-1 max-md:gap-9 max-md:py-[18]">
            <div className="relative z-10 flex flex-col items-center">
                <p className="mb-4 text-sm font-extrabold text-blue-600">
                    {project.period} · {project.role}
                </p>
                <h1 className="whitespace-pre-line mb-5 max-w-2xl text-[clamp(32px,4vw,48px)] leading-[1.22] font-extrabold tracking-normal text-[#19191d]">
                    {project.subtitle}
                </h1>
                <p className="max-w-xl text-[17px] leading-7 text-[#5f6068] max-md:text-base">{project.description}</p>
                <div className="mt-7 flex flex-wrap justify-center gap-2.5" aria-label="Project tech stack">
                    {project.tags.map((tag) => (
                        <span
                            className="rounded-full border border-[#e8e8ec] bg-white px-3 py-2 text-[13px] font-bold text-[#19191d]"
                            key={tag}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-blue-50">
                <img
                    className="aspect-[1/1.08] w-full object-cover object-[50%_12%]"
                    src={project.heroImage}
                    alt={`${project.title} 모바일 서비스 화면`}
                />
            </div>
        </section>
    );
}
