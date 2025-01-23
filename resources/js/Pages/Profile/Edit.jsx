import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { User, Lock, Trash2, Leaf } from 'lucide-react';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-green-900 dark:text-green-100">
                        Profile Settings
                    </h2>
                    <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
                        <Leaf className="h-6 w-6" />
                        <span className="text-sm font-medium">Manage Your Wellness</span>
                    </div>
                </div>
            }
        >
            <Head title="Curebase - Profile Settings" />

            <div className="py-12 bg-[#F5F5F0] dark:bg-green-950 min-h-screen">
                <div className="mx-auto max-w-7xl space-y-8 sm:px-6 lg:px-8">
                    {/* Profile Information Section */}
                    <div className="bg-white dark:bg-green-900 shadow-xl rounded-xl p-8">
                        <div className="flex items-center mb-6">
                            <User className="h-8 w-8 mr-4 text-green-600 dark:text-green-400" />
                            <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">
                                Personal Information
                            </h3>
                        </div>
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    {/* Password Update Section */}
                    <div className="bg-white dark:bg-green-900 shadow-xl rounded-xl p-8">
                        <div className="flex items-center mb-6">
                            <Lock className="h-8 w-8 mr-4 text-green-600 dark:text-green-400" />
                            <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">
                                Change Password
                            </h3>
                        </div>
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    {/* Account Deletion Section */}
                    <div className="bg-white dark:bg-green-900 shadow-xl rounded-xl p-8 border-2 border-red-100 dark:border-red-900">
                        <div className="flex items-center mb-6">
                            <Trash2 className="h-8 w-8 mr-4 text-red-600 dark:text-red-400" />
                            <h3 className="text-xl font-semibold text-red-800 dark:text-red-200">
                                Delete Account
                            </h3>
                        </div>
                        <p className="text-sm text-red-600 dark:text-red-300 mb-4">
                            Permanently delete your account and all associated data. 
                            This action cannot be undone.
                        </p>
                        <DeleteUserForm className="max-w-xl" />
                    </div>

                    {/* Wellness Tip */}
                    <div className="bg-green-50 dark:bg-green-900/50 p-6 rounded-xl text-center">
                        <p className="text-green-700 dark:text-green-300 italic">
                            "Your privacy and security are our top priorities. 
                            We're committed to protecting your personal information."
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}