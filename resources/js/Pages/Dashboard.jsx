import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { 
    Activity, 
    Leaf, 
    HeartPulse, 
    ClipboardList, 
    BookOpen, 
    Stethoscope 
} from 'lucide-react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-green-900 dark:text-green-100">
                        Welcome Back
                    </h2>
                    <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
                        <Leaf className="h-6 w-6" />
                        <span className="text-sm font-medium">Wellness Journey</span>
                    </div>
                </div>
            }
        >
            <Head title="Curebase Dashboard" />

            <div className="py-12 bg-[#F5F5F0] dark:bg-green-950 min-h-screen">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-8">
                    {/* Wellness Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-green-900 shadow-xl rounded-xl p-6 flex items-center space-x-4">
                            <HeartPulse className="h-12 w-12 text-green-600 dark:text-green-400" />
                            <div>
                                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
                                    Health Status
                                </h3>
                                <p className="text-sm text-green-600 dark:text-green-300">
                                    Good overall condition
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-green-900 shadow-xl rounded-xl p-6 flex items-center space-x-4">
                            <Activity className="h-12 w-12 text-green-600 dark:text-green-400" />
                            <div>
                                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
                                    Recent Progress
                                </h3>
                                <p className="text-sm text-green-600 dark:text-green-300">
                                    3 goals completed this week
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-green-900 shadow-xl rounded-xl p-6 flex items-center space-x-4">
                            <ClipboardList className="h-12 w-12 text-green-600 dark:text-green-400" />
                            <div>
                                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
                                    Upcoming Tasks
                                </h3>
                                <p className="text-sm text-green-600 dark:text-green-300">
                                    2 pending assessments
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-green-900 shadow-xl rounded-xl p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">
                                    Your Wellness Resources
                                </h3>
                                <BookOpen className="h-8 w-8 text-green-600 dark:text-green-400" />
                            </div>
                            <ul className="space-y-3">
                                <li className="text-sm text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-200 transition">
                                    • Nutrition Guide
                                </li>
                                <li className="text-sm text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-200 transition">
                                    • Mental Wellness Toolkit
                                </li>
                                <li className="text-sm text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-200 transition">
                                    • Exercise Recommendations
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-green-900 shadow-xl rounded-xl p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">
                                    Next Steps
                                </h3>
                                <Stethoscope className="h-8 w-8 text-green-600 dark:text-green-400" />
                            </div>
                            <div className="space-y-3">
                                <button className="w-full text-left text-sm bg-green-50 dark:bg-green-800 p-3 rounded-lg text-green-700 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-700 transition">
                                    Schedule Wellness Check
                                </button>
                                <button className="w-full text-left text-sm bg-green-50 dark:bg-green-800 p-3 rounded-lg text-green-700 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-700 transition">
                                    Complete Health Assessment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}