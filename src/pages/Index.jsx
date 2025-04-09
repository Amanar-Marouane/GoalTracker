import React, { useState, useEffect } from 'react';
import AppLayout from '../layouts/AppLayout';
import RedirectButton from '../components/RedirectButton';
import { ChartBarIcon } from '@heroicons/react/24/solid';
import Store from '../components/Store';

export const Context = React.createContext();

const Index = () => {
    const [goals, setGoals] = useState(JSON.parse(localStorage.getItem('goals')) || []);

    useEffect(() => {
        localStorage.setItem('goals', JSON.stringify(goals));
    }, [goals]);

    const getPercentage = (progress, target) => {
        if (target === 0) return 0;
        return (progress / target) * 100;
    };

    const Add = () => {
        let storeForm = document.getElementById('store');
        storeForm.style.display = 'flex';
    }

    const Delete = (id) => {
        setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id));
    }

    return (
        <AppLayout>
            <Context.Provider value={[goals, setGoals]}>
                <Store />
                <section className='bg-white min-h-fit space-y-8 py-12 px-8'>
                    <div className='max-w-6xl mx-auto'>
                        <div className='flex items-center justify-between gap-2 mb-8'>
                            <div className='flex justify-center items-center'>
                                <ChartBarIcon className="h-8 w-8 text-black" />
                                <h1 className='text-4xl font-bold text-black'>Current Goals & Progress</h1>
                            </div>
                            <button onClick={Add} className='px-6 py-2 bg-black text-white rounded-lg hover:bg-opacity-90 transition-colors cursor-pointer add-new'>
                                Add New Goal
                            </button>
                        </div>
                        {goals.length === 0 ? (
                            <div className='flex flex-col items-center justify-center py-12 space-y-4'>
                                <div className='text-6xl mb-4'>🎯</div>
                                <h2 className='text-2xl font-semibold text-gray-700'>No Goals Yet</h2>
                                <p className='text-gray-500 text-center max-w-md'>
                                    Start tracking your progress by adding your first goal. Click the "Add New Goal" button above to get started.
                                </p>
                            </div>
                        ) : (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {goals.map(goal => (
                                    <a href={`/goal/${goal.id}`} key={goal.id} className='bg-white border border-black rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow cursor-pointer'>
                                        <div className='space-y-2'>
                                            <h2 className='text-2xl font-bold text-black'>{goal.title}</h2>
                                        </div>
                                        <div className='space-y-2'>
                                            <div className='flex justify-between items-center'>
                                                <span className='text-sm font-medium text-gray-600'>Progress</span>
                                                <span className='text-sm font-medium text-black'>
                                                    {getPercentage(goal.progress, goal.target).toFixed(1)}%
                                                </span>
                                            </div>
                                            <div className='w-full bg-gray-200 rounded-full h-2.5'>
                                                <div
                                                    className='bg-black h-2.5 rounded-full transition-all duration-300'
                                                    style={{ width: `${getPercentage(goal.progress, goal.target).toFixed(1)}%` }}
                                                ></div>
                                            </div>
                                            <div className='flex justify-between items-center mt-2'>
                                                <span className='text-sm font-medium text-gray-600'>Target</span>
                                                <span className='text-sm font-medium text-black'>{goal.target}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                Delete(goal.id);
                                            }}
                                            className='px-6 py-2 bg-black text-white rounded-lg hover:bg-opacity-90 transition-colors cursor-pointer add-new'
                                        >
                                            Delete
                                        </button>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </Context.Provider>
        </AppLayout>
    )
}

export default Index;