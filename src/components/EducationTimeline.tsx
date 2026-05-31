type EducationItem = {
    type: 'university' | 'course';
    title: string;
    status: string;
    organization: string;
    location: string;
    period: string;
    startedAt: string;
    description?: string[];
};

const educationItems: EducationItem[] = [
    {
        type: 'course',
        title: 'JAVA 전공반 수료 ',
        status: '수료',
        organization: '삼성 청년 SW 아카데미 9기',
        location: '대전',
        period: '2023.01 - 2023.12',
        startedAt: '2023-01',
        description: [
            '웹 프로그래밍 기초 학습',
            '팀 프로젝트를 통해 기획부터 배포까지의 개발 흐름 경험',
            'Java, 자료구조, 알고리즘 등 기초 CS 지식 학습',
            '내부 스터디에서 총 5번의 최우수 스터디로 선정',
            '자율 프로젝트 우수상 수상',
        ],
    },
    {
        type: 'university',
        title: '수학과',
        status: '졸업',
        organization: '충남대학교',
        location: '대전',
        period: '2021.03 - 2023.02',
        startedAt: '2021-03',
        description: [
            '수학과 전공 과정에서 통계와 데이터 분석의 기초를 학습',
            '빅데이터 관련 과목을 수강하며 Python, R 기반 데이터 분석 경험',
            'Pandas, NumPy를 활용한 데이터 처리와 분석 흐름 학습',
        ],
    },
    {
        type: 'university',
        title: '응용수학과',
        status: '중퇴',
        organization: '공주대학교',
        location: '충남',
        period: '2018.03 - 2021.02',
        startedAt: '2018-03',
        description: ['이산수학, 선형대수학 등 전공 기초 과목 학습'],
    },
];

const typeLabel = {
    course: '교육',
    university: '대학교',
} satisfies Record<EducationItem['type'], string>;

function EducationCard({ item }: { item: EducationItem }) {
    return (
        <article className="relative rounded-lg border border-[#e8e8ec] bg-white px-6 py-6 text-left hover:bg-slate-50 max-sm:px-5 max-sm:py-5">
            <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-extrabold text-blue-600">
                    {typeLabel[item.type]}
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600">
                    {item.status}
                </span>
            </div>

            <h3 className="mb-1.5 text-[22px] font-semibold text-slate-900">{item.organization}</h3>
            <p className="mb-3.5 text-[15px] font-medium text-slate-700">{item.title}</p>

            <div className="mb-6 flex flex-wrap gap-x-3 gap-y-1.5 text-sm font-medium text-slate-500">
                <span>{item.location}</span>
                <span>{item.period}</span>
            </div>

            {item.description?.length ? (
                <div>
                    <h4 className="mb-2.5 text-sm font-extrabold text-slate-900">주요 활동</h4>
                    <ul className="grid gap-2">
                        {item.description.map((description) => (
                            <li className="flex gap-2.5 text-sm leading-6 text-slate-600" key={description}>
                                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                <span>{description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </article>
    );
}

export function EducationTimeline() {
    const sortedItems = [...educationItems].sort((a, b) => b.startedAt.localeCompare(a.startedAt));

    return (
        <div className="relative mx-auto max-w-4xl">
            <div className="absolute top-0 bottom-0 left-4 w-px bg-blue-200 max-md:left-3" />
            <div className="grid gap-8">
                {sortedItems.map((item) => (
                    <div className="group relative pl-14 max-md:pl-10" key={`${item.type}-${item.startedAt}`}>
                        <span className="absolute top-7 left-2.5 z-10 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-blue-50 transition-colors duration-200 group-hover:bg-blue-700 group-hover:ring-blue-100 max-md:left-1.5" />
                        <EducationCard item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}
