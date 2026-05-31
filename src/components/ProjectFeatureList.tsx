import type { ProjectFeature } from '../data/projects';
import { SectionHeading } from './SectionHeading';

type ProjectFeatureListProps = {
    features: ProjectFeature[];
};

export function ProjectFeatureList({ features }: ProjectFeatureListProps) {
    return (
        <section
            className="mx-auto w-[min(calc(100%-40px),1120px)] py-24 max-md:w-[calc(100%-28px)] max-md:py-18"
            id="features"
        >
            <SectionHeading eyebrow="Main Screens" title="핵심 화면은 이미지와 함께 구현 의도가 보이도록 배치했어요" />
            <div className="grid gap-6">
                {features.map((feature, index) => (
                    <article
                        className="grid grid-cols-[0.38fr_1fr] items-stretch gap-6 max-md:grid-cols-1"
                        key={feature.title}
                    >
                        <div className="flex min-h-64 flex-col justify-center rounded-lg border border-[#e8e8ec] bg-[#f7f7f8] p-7 text-center max-md:min-h-0 max-sm:p-6">
                            <span className="mb-3.5 block text-[13px] font-extrabold text-blue-600">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <h3 className="mb-3.5 text-[26px] leading-snug font-extrabold tracking-normal text-[#19191d] max-sm:text-2xl">
                                {feature.title}
                            </h3>
                            <p className="mb-0 leading-7 text-[#5f6068]">{feature.description}</p>
                        </div>
                        <img
                            className="h-125 w-full rounded-lg border border-[#e8e8ec] object-cover object-center max-md:h-auto max-md:max-h-140"
                            src={feature.image}
                            alt={`${feature.title} 화면 목업`}
                        />
                    </article>
                ))}
            </div>
        </section>
    );
}
