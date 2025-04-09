import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import { ArrowLeftIcon, CheckIcon } from '@heroicons/react/24/solid';

const Show = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [goals, setGoals] = useState(JSON.parse(localStorage.getItem('goals')) || []);
    const [formData, setFormData] = useState(goals.find(goal => goal.id === id));

    useEffect(() => {
        localStorage.setItem('goals', JSON.stringify(goals));
    }, [goals]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        setGoals(prevGoals => {
            const filteredGoals = prevGoals.filter(goal => goal.id !== id);
            return [...filteredGoals, formData];
        });
        navigate('/dashboard');
    };

    const handleCancel = () => {
        navigate('/dashboard');
    };

    return (
        <AppLayout>
            <div className="bg-white py-12 px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center mb-8">
                        <button
                            onClick={handleCancel}
                            className="mr-4 p-2 rounded-full hover:bg-gray-100"
                        >
                            <ArrowLeftIcon className="h-6 w-6 text-black" />
                        </button>
                        <h1 className="text-3xl font-bold text-black">Goal Details</h1>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                        placeholder="Enter goal title"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Progress Tracking</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="target" className="block text-sm font-medium text-gray-700 mb-1">
                                        Target
                                    </label>
                                    <input
                                        type="number"
                                        id="target"
                                        name="target"
                                        value={formData.target}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                        placeholder="Enter target value"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="progress" className="block text-sm font-medium text-gray-700 mb-1">
                                        Current Progress
                                    </label>
                                    <input
                                        type="number"
                                        id="progress"
                                        name="progress"
                                        value={formData.progress}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                        placeholder="Enter current progress"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                            <button
                                onClick={handleCancel}
                                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-6 py-2 bg-black text-white rounded-lg hover:bg-opacity-90 transition-colors flex items-center"
                            >
                                <CheckIcon className="h-5 w-5 mr-2" />
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Show; 