import type { Project } from '../data/projects';
import { SectionHeading } from './SectionHeading';

type ProjectOverviewProps = {
    project: Project;
};

export function ProjectOverview({ project }: ProjectOverviewProps) {
    return (
        <section
            className="mx-auto w-[min(calc(100%-40px),1120px)] py-24 max-md:w-[calc(100%-28px)] max-md:py-18"
            id="role"
        >
            <SectionHeading
                eyebrow="My Role"
                title="프론트엔드 관점에서 서비스 흐름을 실제 사용 가능한 화면으로 만들었어요"
            />
            <div className="grid grid-cols-[1.3fr_repeat(3,1fr)] gap-4 max-md:grid-cols-1">
                <article className="min-h-44 rounded-lg border border-[#e8e8ec] bg-[#f7f7f8] p-7 text-center max-sm:p-6">
                    <span className="mb-3.5 block text-[13px] font-extrabold text-blue-600">Contribution</span>
                    <strong className="block text-[19px] leading-7 font-extrabold text-[#19191d]">
                        온보딩부터 커뮤니티 진입까지 핵심 플로우 구현
                    </strong>
                    <p className="mt-4 mb-0 leading-7 text-[#5f6068]">
                        디자이너의 화면 의도를 유지하면서 입력, 검증, 이동, 상태 표현이 자연스럽게 이어지도록 화면
                        단위를 정리했어요.
                    </p>
                </article>
                <article className="min-h-44 rounded-lg border border-[#e8e8ec] bg-white p-7 text-center max-sm:p-6">
                    <span className="mb-3.5 block text-[13px] font-extrabold text-blue-600">Team</span>
                    <strong className="block text-[19px] leading-7 font-extrabold text-[#19191d]">
                        {project.team}
                    </strong>
                </article>
                <article className="min-h-44 rounded-lg border border-[#e8e8ec] bg-white p-7 text-center max-sm:p-6">
                    <span className="mb-3.5 block text-[13px] font-extrabold text-blue-600">Period</span>
                    <strong className="block text-[19px] leading-7 font-extrabold text-[#19191d]">
                        {project.period}
                    </strong>
                </article>
                <article className="min-h-44 rounded-lg border border-[#e8e8ec] bg-white p-7 text-center max-sm:p-6">
                    <span className="mb-3.5 block text-[13px] font-extrabold text-blue-600">Focus</span>
                    <strong className="block text-[19px] leading-7 font-extrabold text-[#19191d]">
                        Mobile UX · Interaction · API State
                    </strong>
                </article>
            </div>
        </section>
    );
}
