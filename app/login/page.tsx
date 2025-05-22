import { Button } from '@/components/ui/button';
import { login } from './actions'

export default function LoginPage() {
    return (
        <section className="w-full flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
            <a href="http://localhost:3000" className="text-2xl font-semibold text-gray-900 mb-4 block">
            CodeGPT
            </a>
            <h1 className="text-xl font-bold text-gray-900 mb-6">
            Sign in to your account
            </h1>

            <form className="space-y-6">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                Your email
                </label>
                <input
                type="email"
                name="email"
                id="email"
                placeholder="any@email.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-black focus:border-black block w-full p-3"
                required
                />
            </div>

            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-1">
                Password
                </label>
                <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-black focus:border-black block w-full p-3"
                required
                />
            </div>

            <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-500">
                <input
                    type="checkbox"
                    className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                />
                Remember me
                </label>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline">
                Forgot password?
                </a>
            </div>

            <Button
                formAction={login}
                className="w-full text-white bg-black hover:bg-black/80 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-3 text-center"
            >
                Sign in
            </Button>

            <p className="text-sm text-gray-500 text-center">
                Don’t have an account yet?{' '}
                <a href="/register" className="font-medium text-primary-600 hover:underline">
                Sign up
                </a>
            </p>
            </form>
        </div>
        </section>
    );
}