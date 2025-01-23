import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { Leaf, LogIn } from 'lucide-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="min-h-screen bg-[#F5F5F0] dark:bg-green-950 flex items-center justify-center px-4 py-12">
            <Head title="Log in to Curebase" />

            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <div className="flex justify-center mb-6">
                        <Leaf 
                            className="h-16 w-16 text-green-700 dark:text-green-500" 
                            strokeWidth={1.5} 
                        />
                    </div>
                    <h2 className="text-3xl font-bold text-green-900 dark:text-green-100">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-sm text-green-600 dark:text-green-300">
                        Log in to continue your wellness journey
                    </p>

                    {status && (
                        <div className="mt-4 text-sm font-medium text-green-600 bg-green-50 p-3 rounded-lg">
                            {status}
                        </div>
                    )}
                </div>

                <form 
                    onSubmit={submit} 
                    className="bg-white dark:bg-green-900 shadow-xl rounded-xl p-8 space-y-6"
                >
                    <div>
                        <InputLabel 
                            htmlFor="email" 
                            value="Email" 
                            className="text-green-800 dark:text-green-200"
                        />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full border-green-300 focus:border-green-500 focus:ring-green-500 rounded-md shadow-sm"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel 
                            htmlFor="password" 
                            value="Password" 
                            className="text-green-800 dark:text-green-200"
                        />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full border-green-300 focus:border-green-500 focus:ring-green-500 rounded-md shadow-sm"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData('remember', e.target.checked)
                                }
                                className="text-green-600 focus:ring-green-500"
                            />
                            <span className="ms-2 text-sm text-green-700 dark:text-green-300">
                                Remember me
                            </span>
                        </div>

                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-sm text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200"
                            >
                                Forgot password?
                            </Link>
                        )}
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
                        >
                            <LogIn className="mr-2 h-5 w-5" />
                            Log in
                        </button>
                    </div>

                    <div className="text-center">
                        <p className="mt-2 text-sm text-green-600 dark:text-green-300">
                            Don't have an account?{' '}
                            <Link 
                                href={route('register')} 
                                className="font-medium text-green-700 hover:text-green-900 dark:text-green-400 dark:hover:text-green-200"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </form>

                <div className="text-center text-sm text-green-600 dark:text-green-400">
                    © {new Date().getFullYear()} Curebase. All rights reserved.
                </div>
            </div>
        </div>
    );
}