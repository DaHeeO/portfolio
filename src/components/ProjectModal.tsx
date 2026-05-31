import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { Project } from '../data/projects';

type ProjectModalProps = {
    project: Project | null;
    onClose: () => void;
};

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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/35 px-5 py-8 backdrop-blur-sm">
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

                <div className="space-y-8">
                    <section>
                        <h3 className="mb-3 text-lg font-extrabold text-[#19191d]">상세 내용</h3>
                        <p className="leading-7 text-[#5f6068]">{project.description}</p>
                        <ul className="mt-4 space-y-2 pl-5 text-[#5f6068]">
                            {project.implementationNotes.map((note) => (
                                <li className="list-disc leading-7" key={note}>
                                    {note}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h3 className="mb-3 text-lg font-extrabold text-[#19191d]">주요 기능 개발</h3>
                        <div className="space-y-4">
                            {project.features.map((feature, index) => (
                                <article key={feature.title}>
                                    <h4 className="font-extrabold text-[#19191d]">
                                        {index + 1}. {feature.title}
                                    </h4>
                                    <p className="mt-1 leading-7 text-[#5f6068]">{feature.description}</p>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>
            </section>
        </div>,
        document.body,
    );
}
