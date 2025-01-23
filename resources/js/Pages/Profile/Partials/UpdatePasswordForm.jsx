import React, { useRef } from 'react';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { Lock, CheckCircle } from 'lucide-react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={`${className}`}>
            <div className="bg-white dark:bg-green-900 shadow-xl rounded-xl p-8">
                <header className="mb-6">
                    <div className="flex items-center mb-4">
                        <Lock className="h-8 w-8 mr-4 text-green-600 dark:text-green-400" />
                        <h2 className="text-xl font-semibold text-green-800 dark:text-green-200">
                            Update Password
                        </h2>
                    </div>

                    <p className="text-sm text-green-600 dark:text-green-300">
                        Enhance your account security with a strong, unique password.
                    </p>
                </header>

                <form onSubmit={updatePassword} className="space-y-6">
                    <div>
                        <InputLabel
                            htmlFor="current_password"
                            value="Current Password"
                            className="text-green-800 dark:text-green-200"
                        />

                        <TextInput
                            id="current_password"
                            ref={currentPasswordInput}
                            value={data.current_password}
                            onChange={(e) =>
                                setData('current_password', e.target.value)
                            }
                            type="password"
                            className="mt-1 block w-full border-green-300 focus:border-green-500 focus:ring-green-500 rounded-md shadow-sm"
                            autoComplete="current-password"
                        />

                        <InputError
                            message={errors.current_password}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <InputLabel 
                            htmlFor="password" 
                            value="New Password" 
                            className="text-green-800 dark:text-green-200"
                        />

                        <TextInput
                            id="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            type="password"
                            className="mt-1 block w-full border-green-300 focus:border-green-500 focus:ring-green-500 rounded-md shadow-sm"
                            autoComplete="new-password"
                        />

                        <InputError 
                            message={errors.password} 
                            className="mt-2" 
                        />
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirm Password"
                            className="text-green-800 dark:text-green-200"
                        />

                        <TextInput
                            id="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                            type="password"
                            className="mt-1 block w-full border-green-300 focus:border-green-500 focus:ring-green-500 rounded-md shadow-sm"
                            autoComplete="new-password"
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <PrimaryButton 
                            disabled={processing}
                            className="bg-green-600 hover:bg-green-700 focus:bg-green-700 active:bg-green-800"
                        >
                            Save Changes
                        </PrimaryButton>

                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <div className="flex items-center text-green-600 dark:text-green-300">
                                <CheckCircle className="h-5 w-5 mr-2" />
                                <p className="text-sm">
                                    Password updated successfully
                                </p>
                            </div>
                        </Transition>
                    </div>
                </form>
            </div>

            {/* Security Tips */}
            <div className="mt-6 bg-green-50 dark:bg-green-900/50 p-4 rounded-xl text-center">
                <p className="text-sm text-green-700 dark:text-green-300 italic">
                    Password Tips:
                    • Use at least 12 characters
                    • Mix uppercase, lowercase, numbers, and symbols
                    • Avoid personal information
                </p>
            </div>
        </section>
    );
}