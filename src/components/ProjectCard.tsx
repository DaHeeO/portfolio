import type { Project } from '../data/projects';

type ProjectCardProps = {
    project: Project;
    onOpen: (project: Project) => void;
};

const roleTags = ['Frontend', 'Backend', 'Infra'];

function ProjectCardMeta({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-center gap-5 text-left">
            <span className="w-18 shrink-0 text-sm font-extrabold text-[#19191d]">{label}</span>
            <span className="text-sm font-medium text-[#777880]">{value}</span>
        </div>
    );
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
    const projectRoles = project.role.split('·').map((role) => role.trim());
    const techStack = project.tags.filter((tag) => !roleTags.includes(tag));
    const roleLabel = projectRoles.join(' · ');

    return (
        <article className="overflow-hidden rounded-lg border border-[#e8e8ec] bg-white">
            <button
                className="block h-full w-full cursor-pointer appearance-none border-0 bg-transparent p-0 text-left text-inherit"
                type="button"
                aria-label={`${project.title} 프로젝트 상세 보기`}
                onClick={() => onOpen(project)}
            >
                <div className="overflow-hidden bg-blue-50">
                    <img
                        className="pointer-events-none h-85 w-full object-cover object-top transition-transform duration-300 hover:scale-[1.03]"
                        src={project.heroImage}
                        alt={`${project.title} 대표 이미지`}
                        draggable={false}
                    />
                </div>
                <div className="p-7 text-left">
                    <span className="mb-3.5 block text-[13px] font-extrabold text-blue-600">{roleLabel}</span>
                    <h3 className="mb-3 text-2xl leading-snug font-extrabold tracking-normal text-[#19191d]">
                        {project.title}
                    </h3>
                    <p className="mb-0 leading-7 text-[#5f6068]">{project.description}</p>

                    <div className="mt-6 space-y-2">
                        <ProjectCardMeta label="제작 기간" value={project.period} />
                        <ProjectCardMeta label="제작 인원" value={project.team} />
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2.5">
                        {techStack.map((tag) => (
                            <span
                                className="rounded-full border border-[#dedfe4] bg-white px-3 py-1.5 text-[13px] font-medium text-[#777880]"
                                key={tag}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </button>
        </article>
    );
}
