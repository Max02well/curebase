import React from 'react';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { User, Mail, CheckCircle } from 'lucide-react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <div className="bg-white dark:bg-green-900 shadow-xl rounded-xl p-8">
                <header className="mb-6">
                    <div className="flex items-center mb-4">
                        <User className="h-8 w-8 mr-4 text-green-600 dark:text-green-400" />
                        <h2 className="text-xl font-semibold text-green-800 dark:text-green-200">
                            Profile Information
                        </h2>
                    </div>

                    <p className="text-sm text-green-600 dark:text-green-300">
                        Update your personal details and contact information.
                    </p>
                </header>

                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <InputLabel 
                            htmlFor="name" 
                            value="Full Name" 
                            className="text-green-800 dark:text-green-200"
                        />

                        <TextInput
                            id="name"
                            className="mt-1 block w-full border-green-300 focus:border-green-500 focus:ring-green-500 rounded-md shadow-sm"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            isFocused
                            autoComplete="name"
                            icon={<User className="text-green-500 h-5 w-5" />}
                        />

                        <InputError className="mt-2" message={errors.name} />
                    </div>

                    <div>
                        <InputLabel 
                            htmlFor="email" 
                            value="Email Address" 
                            className="text-green-800 dark:text-green-200"
                        />

                        <TextInput
                            id="email"
                            type="email"
                            className="mt-1 block w-full border-green-300 focus:border-green-500 focus:ring-green-500 rounded-md shadow-sm"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            autoComplete="username"
                            icon={<Mail className="text-green-500 h-5 w-5" />}
                        />

                        <InputError className="mt-2" message={errors.email} />
                    </div>

                    {mustVerifyEmail && user.email_verified_at === null && (
                        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                            <p className="text-sm text-yellow-700 dark:text-yellow-300">
                                Your email address is unverified.{' '}
                                <Link
                                    href={route('verification.send')}
                                    method="post"
                                    as="button"
                                    className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200 underline"
                                >
                                    Click here to re-send the verification email.
                                </Link>
                            </p>

                            {status === 'verification-link-sent' && (
                                <div className="mt-2 text-sm font-medium text-green-600 dark:text-green-400">
                                    A new verification link has been sent to your email address.
                                </div>
                            )}
                        </div>
                    )}

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
                                    Profile updated successfully
                                </p>
                            </div>
                        </Transition>
                    </div>
                </form>
            </div>

            {/* Privacy & Security Tip */}
            <div className="mt-6 bg-green-50 dark:bg-green-900/50 p-4 rounded-xl text-center">
                <p className="text-sm text-green-700 dark:text-green-300 italic">
                    Your personal information is securely stored and protected. 
                    We never share your data with third parties.
                </p>
            </div>
        </section>
    );
}