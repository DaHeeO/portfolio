import type { ProjectProcess as ProjectProcessItem } from '../data/projects';
import { SectionHeading } from './SectionHeading';

type ProjectProcessProps = {
    process: ProjectProcessItem[];
};

export function ProjectProcess({ process }: ProjectProcessProps) {
    return (
        <section className="mx-auto w-[min(calc(100%-40px),1120px)] py-24 max-md:w-[calc(100%-28px)] max-md:py-18">
            <SectionHeading
                eyebrow="Process"
                title="문제 정의에서 구현 포인트까지 한 흐름으로 보여줄 수 있게 구성했어요"
            />
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
                {process.map((item) => (
                    <article
                        className="rounded-lg border border-[#e8e8ec] bg-white p-7 text-center max-sm:p-6"
                        key={item.label}
                    >
                        <span className="mb-3.5 block text-[13px] font-extrabold text-blue-600">{item.label}</span>
                        <h3 className="mb-4 text-[21px] leading-snug font-extrabold tracking-normal text-[#19191d]">
                            {item.title}
                        </h3>
                        <p className="mb-0 leading-7 text-[#5f6068]">{item.body}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
