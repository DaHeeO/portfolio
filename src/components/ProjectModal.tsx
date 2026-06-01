import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { Project, ProjectDetailBullet, ProjectDetailImage, ProjectDetailSection } from '../data/projects';

type ProjectModalProps = {
    project: Project | null;
    onClose: () => void;
};

function ProjectDetailBulletList({ bullets }: { bullets: ProjectDetailBullet[] }) {
    return (
        <ul className="space-y-3 pl-6 text-[#5f6068]">
            {bullets.map((bullet) => (
                <li className="list-disc leading-7" key={bullet.text}>
                    <span>{bullet.text}</span>
                    {bullet.children?.length ? (
                        <ul className="mt-2 space-y-1.5 pl-5 text-[15px] text-[#777880]">
                            {bullet.children.map((child) => (
                                <li className="list-[circle] leading-7" key={child}>
                                    {child}
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </li>
            ))}
        </ul>
    );
}

function getProjectDetailImages(section: ProjectDetailSection): ProjectDetailImage[] {
    if (section.images) {
        return section.images;
    }

    if (!section.image) {
        return [];
    }

    return [
        {
            src: section.image,
            alt: section.imageAlt,
            caption: section.imageCaption,
        },
    ];
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
    useEffect(() => {
        if (!project) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose, project]);

    if (!project) {
        return null;
    }

    return createPortal(
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/35 px-5 py-8 backdrop-blur-sm">
            <button
                className="absolute inset-0 cursor-default border-0 bg-transparent"
                type="button"
                aria-label="프로젝트 상세 닫기"
                onClick={onClose}
            />
            <section
                className="scrollbar-hidden relative max-h-[min(760px,calc(100vh-64px))] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-7 text-left shadow-2xl max-md:p-5"
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
            >
                <div className="mb-6 flex items-start justify-between gap-5">
                    <div>
                        <p className="mb-2 text-sm font-extrabold text-blue-600">{project.role}</p>
                        <h2 id="project-modal-title" className="text-3xl leading-tight font-extrabold text-[#19191d]">
                            {project.title}
                        </h2>
                        <p className="mt-3 whitespace-pre-line leading-7 text-[#5f6068]">{project.subtitle}</p>
                    </div>
                    <button
                        className="shrink-0 rounded-full border border-[#e8e8ec] bg-white px-3 py-2 text-sm font-bold text-slate-500 hover:text-slate-950"
                        type="button"
                        onClick={onClose}
                    >
                        닫기
                    </button>
                </div>

                <div className="mb-6 space-y-2 border-y border-[#eef0f4] py-4">
                    <p className="text-sm">
                        <strong className="mr-4 text-[#19191d]">제작 기간</strong>
                        <span className="text-[#777880]">{project.period}</span>
                    </p>
                    <p className="text-sm">
                        <strong className="mr-4 text-[#19191d]">제작 인원</strong>
                        <span className="text-[#777880]">{project.team}</span>
                    </p>
                </div>

                <div className="mb-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            className="rounded-full border border-[#dedfe4] bg-white px-3 py-1.5 text-[13px] font-medium text-[#777880]"
                            key={tag}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <section>
                    <h3 className="mb-5 text-xl font-extrabold text-[#19191d]">상세 내용</h3>
                    <div className="space-y-8">
                        {project.detailSections.map((section, index) => (
                            <article key={section.title}>
                                <h4 className="mb-3 text-lg leading-7 font-extrabold text-[#19191d]">
                                    {index + 1}. {section.title}
                                </h4>
                                <ProjectDetailBulletList bullets={section.bullets} />
                                {getProjectDetailImages(section).length ? (
                                    <div className="mt-5 space-y-4">
                                        {getProjectDetailImages(section).map((image) => (
                                            <figure
                                                className="overflow-hidden rounded-lg border border-[#eef0f4] bg-[#f8f9fb]"
                                                key={image.src}
                                            >
                                                {image.title ? (
                                                    <figcaption className="border-b border-[#eef0f4] px-4 py-3 text-sm font-extrabold text-[#19191d]">
                                                        {image.title}
                                                    </figcaption>
                                                ) : null}
                                                <img
                                                    className="max-h-110 w-full object-contain"
                                                    src={image.src}
                                                    alt={image.alt ?? `${section.title} 이미지`}
                                                />
                                                {image.caption ? (
                                                    <figcaption className="border-t border-[#eef0f4] px-4 py-3 text-sm leading-6 text-[#777880]">
                                                        {image.caption}
                                                    </figcaption>
                                                ) : null}
                                            </figure>
                                        ))}
                                    </div>
                                ) : null}
                                {section.links?.length ? (
                                    <div className="mt-5 space-y-3">
                                        {section.links.map((link) => (
                                            <a
                                                className="block rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-bold text-blue-700 no-underline transition-colors duration-200 hover:border-blue-200 hover:bg-blue-100"
                                                href={link.href}
                                                key={link.href}
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                <span className="block">{link.label}</span>
                                                {link.description ? (
                                                    <span className="mt-1 block font-medium leading-6 text-blue-600/80">
                                                        {link.description}
                                                    </span>
                                                ) : null}
                                            </a>
                                        ))}
                                    </div>
                                ) : null}
                            </article>
                        ))}
                    </div>
                </section>
            </section>
        </div>,
        document.body,
    );
}
