type SectionHeadingProps = {
    eyebrow?: string;
    title?: string;
    description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
    return (
        <div className="mb-10 text-center">
            <p className="mb-4 mx-auto max-w-3xl text-3xl leading-[1.3] font-semibold tracking-normal text-slate-900">
                {eyebrow}
            </p>
            <h2 className="text-md font-bold text-slate-800">{title}</h2>
            {description ? <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-700">{description}</p> : null}
        </div>
    );
}
