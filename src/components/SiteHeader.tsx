import { Link, NavLink } from 'react-router-dom';

const navItems = [
    { to: '/#about', label: 'About' },
    { to: '/#skills', label: 'Skills' },
    { to: '/#projects', label: 'Projects' },
    { to: '/#education', label: 'Education' },
    { to: '/#contact', label: 'Contact' },
];

export function SiteHeader() {
    return (
        <header className="fixed inset-x-0 top-0 z-20 bg-white/85 text-sm font-bold text-[#19191d] backdrop-blur-md">
            <div className="mx-auto flex w-[min(calc(100%-40px),1120px)] items-center justify-between py-6 max-md:w-[calc(100%-28px)] max-md:py-4">
                <Link className="no-underline" to="/">
                    오다희 포트폴리오
                </Link>
                <nav className="flex gap-2 max-md:hidden" aria-label="Portfolio navigation">
                    {navItems.map((item) =>
                        item.to.includes('#') ? (
                            <Link
                                className="rounded-lg bg-white px-2 py-1 text-sm text-slate-700 no-underline hover:bg-slate-100 hover:text-slate-900"
                                to={item.to}
                                key={item.label}
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <NavLink
                                className="rounded-lg bg-white px-2 py-1 text-sm text-slate-700 no-underline hover:bg-slate-100 hover:text-slate-900"
                                to={item.to}
                                key={item.label}
                            >
                                {item.label}
                            </NavLink>
                        ),
                    )}
                </nav>
            </div>
        </header>
    );
}
