import { SectionHeading } from './SectionHeading';

type ImplementationNotesProps = {
    image: string;
    notes: string[];
};

export function ImplementationNotes({ image, notes }: ImplementationNotesProps) {
    return (
        <section
            className="mx-auto w-[min(calc(100%-40px),1120px)] py-24 max-md:w-[calc(100%-28px)] max-md:py-17"
            id="system"
        >
            <SectionHeading eyebrow="Frontend" title="포트폴리오에 넣을 구현 디테일을 정리할 자리예요" />
            <div className="grid grid-cols-[1.05fr_0.95fr] items-stretch gap-6 max-md:grid-cols-1">
                <div className="overflow-hidden rounded-lg border border-[#e8e8ec] bg-blue-50">
                    <img
                        className="h-full min-h-150 w-full object-cover object-center max-md:min-h-0"
                        src={image}
                        alt="Ding-Dong 홈 화면 상세"
                    />
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border border-[#e8e8ec] bg-white p-7 text-center max-sm:p-6">
                    <h3 className="mb-6 text-[26px] leading-snug font-extrabold tracking-normal text-[#19191d] max-sm:text-2xl">
                        Implementation Notes
                    </h3>
                    <ul className="grid max-w-md list-none gap-3.5 p-0">
                        {notes.map((point) => (
                            <li
                                className="relative leading-7 text-[#5f6068] before:mr-3 before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-blue-600 before:align-middle"
                                key={point}
                            >
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
