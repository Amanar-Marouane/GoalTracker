import { HomeIcon, UserIcon } from '@heroicons/react/24/solid';

const Header = () => {
    return (
        <header className="bg-white border-b border-black py-4 px-16">
            <nav className="flex justify-between items-center">
                <a href="/home" className="flex items-center gap-2">
                    <HomeIcon className="h-8 w-8 text-black" />
                    <h1 className="text-3xl font-bold text-black">Goals Tracker</h1>
                </a>
                <div>
                    <ul className="flex gap-6">
                        <li>
                            <a href="/home" className="flex items-center gap-2 font-semibold text-lg text-black hover:opacity-80">
                                <HomeIcon className="h-5 w-5" />
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard" className="flex items-center gap-2 font-semibold text-lg text-black hover:opacity-80">
                                <UserIcon className="h-5 w-5" />
                                Dashboard
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;