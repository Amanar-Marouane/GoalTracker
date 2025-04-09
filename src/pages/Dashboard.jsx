import AppLayout from './../layouts/AppLayout';
import RedirectButton from './../components/RedirectButton';
import { ChartBarIcon } from '@heroicons/react/24/solid';

const Dashboard = () => {
    const current_goals = [
        {
            "id": "1",
            "title": "Walk 10k steps",
            "target": 10000,
            "progress": 8000
        },
        {
            "id": "2",
            "title": "Drink 8 glasses of water",
            "target": 8,
            "progress": 3
        },
        {
            "id": "4",
            "title": "Stretch 15 minutes",
            "target": 15,
            "progress": 10
        },
        {
            "id": "5",
            "title": "Sleep at least 7 hours",
            "target": 7,
            "progress": 5
        }
    ]

    const getPercentage = (progress, target) => {
        if (target === 0) return 0;
        return (progress / target) * 100;
    };

    return (
        <AppLayout>
            <section className='bg-white min-h-fit space-y-8 py-12 px-8'>
                <div className='max-w-6xl mx-auto'>
                    <div className='flex items-center justify-between gap-2 mb-8'>
                        <div className='flex justify-center items-center'>
                            <ChartBarIcon className="h-8 w-8 text-black" />
                            <h1 className='text-4xl font-bold text-black'>Current Goals & Progress</h1>
                        </div>
                        <RedirectButton label={'Add New Goal'} href='/new' />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {current_goals.map(goal => (
                            <div key={goal.id} className='bg-white border border-black rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow cursor-pointer'>
                                <div className='space-y-2'>
                                    <h2 className='text-2xl font-bold text-black'>{goal.title}</h2>
                                </div>
                                <div className='space-y-2'>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-sm font-medium text-gray-600'>Progress</span>
                                        <span className='text-sm font-medium text-black'>
                                            {getPercentage(5, 7).toFixed(1)}%
                                        </span>
                                    </div>
                                    <div className='w-full bg-gray-200 rounded-full h-2.5'>
                                        <div
                                            className='bg-black h-2.5 rounded-full transition-all duration-300'
                                            style={{ width: `${getPercentage(5, 7).toFixed(1)}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <RedirectButton label="Close The Goal" href={`/goal/${goal.id}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}

export default Dashboard;