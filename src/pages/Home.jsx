import AppLayout from './../layouts/AppLayout';
import { HomeIcon, ChartBarIcon, ArrowTrendingUpIcon, SparklesIcon } from '@heroicons/react/24/solid';
import RedirectButton from './../components/RedirectButton';

const Home = () => {
    return (
        <AppLayout>
            <section className='bg-white h-fit space-y-8 py-12 flex flex-col justify-center items-center'>
                <div className='space-y-4 max-w-3xl text-center'>
                    <h1 className='text-4xl font-bold text-black'>Welcome to Fitness Goal Tracker!</h1>
                    <p className='text-xl text-black'>Start your fitness journey with a simple and effective way to set, track, and reach your daily goals — whether it's walking more, drinking enough water, or staying active.</p>
                </div>
                <div className='space-y-4 max-w-3xl text-center'>
                    <div className='flex items-center justify-center gap-2'>
                        <SparklesIcon className="h-8 w-8 text-black" />
                        <h2 className='text-3xl font-bold text-black'>No sign-up required!</h2>
                    </div>
                    <p className='text-xl text-black'>All your data is saved directly in your browser. It's fast, private, and always available.</p>
                </div>
            </section>

            <section className='bg-black text-white min-h-fit space-y-8 py-14 flex flex-col justify-center items-center'>
                <h2 className='text-3xl font-bold'>Welcome to Fitness Goal Tracker!</h2>
                <ul className='space-y-4 text-lg'>
                    <li className='flex items-center gap-2'>
                        <ChartBarIcon className="h-6 w-6" />
                        Set your own personalized fitness goals
                    </li>
                    <li className='flex items-center gap-2'>
                        <ArrowTrendingUpIcon className="h-6 w-6" />
                        Record your daily progress with ease
                    </li>
                    <li className='flex items-center gap-2'>
                        <SparklesIcon className="h-6 w-6" />
                        View your achievements at a glance
                    </li>
                    <li className='flex items-center gap-2'>
                        <HomeIcon className="h-6 w-6" />
                        Stay consistent and motivated over time
                    </li>
                </ul>
            </section>

            <section className='bg-white min-h-fit space-y-8 py-14 flex flex-col justify-center items-center'>
                <p className='text-xl font-semibold text-black'>Get Started Now!</p>
                <div className='flex gap-4'>
                    <RedirectButton label={'Start a goal'} href='/new' />
                    <RedirectButton label={'Track your goals'} href='/dashboard' />
                </div>
            </section>
        </AppLayout >
    )
}

export default Home;