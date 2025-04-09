import React, { useContext, useState } from 'react';
import { Context } from '../pages/Index';

const Store = () => {
    const [errors, setErrors] = useState({ title: '', target: '' });

    const [goals, setGoals] = useContext(Context);

    const Store = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        let formObject = Object.fromEntries(data.entries());

        const title = formObject.title?.trim();
        const target = parseFloat(formObject.target);

        setErrors({ title: '', target: '' });

        if (!title) {
            setErrors(prev => ({ ...prev, title: 'Please enter a valid goal title.' }));
            return;
        }

        if (isNaN(target) || target < 1) {
            setErrors(prev => ({ ...prev, target: 'Target must be a number and at least 1.' }));
            return;
        }

        const id = crypto.randomUUID();
        const goal = {
            ...formObject,
            id: id,
            progress: 0
        };
        setGoals(prevGoals => [...prevGoals, goal]);
        document.getElementById('store').style.display = 'none';
        e.target.reset();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 hidden" id="store">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-2xl font-bold text-black mb-6">Add New Goal</h2>
                <form onSubmit={Store} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="form-title" className="block text-sm font-medium text-black">Goal Title</label>
                        <input
                            type="text"
                            name="title"
                            id="form-title"
                            className={`w-full px-4 py-2 border ${errors.title ? 'border-red-500' : 'border-black'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black`}
                            placeholder="e.g., Walk 10k steps"
                        />
                        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="form-target" className="block text-sm font-medium text-black">Target Value</label>
                        <input
                            type="number"
                            name="target"
                            id="form-target"
                            className={`w-full px-4 py-2 border ${errors.target ? 'border-red-500' : 'border-black'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black`}
                            placeholder="e.g., 10000"
                        />
                        {errors.target && <p className="text-red-500 text-sm mt-1">{errors.target}</p>}
                    </div>
                    <div className="flex gap-4 pt-4">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-opacity-90 transition-colors cursor-pointer flex-1"
                        >
                            Add Goal
                        </button>
                        <button
                            type="button"
                            onClick={() => document.getElementById('store').style.display = 'none'}
                            className="px-6 py-2 border border-black text-black rounded-lg hover:bg-gray-100 transition-colors cursor-pointer flex-1"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Store;