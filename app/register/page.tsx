import { Button } from "@/components/ui/button";
import { signup } from "./actions";

export default function Register() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <a href="http://localhost:3000" className="text-2xl font-semibold text-gray-900 mb-4 block">
          CodeGPT
        </a>
        <h1 className="text-xl font-bold text-gray-900 mb-6">
          Create an account
        </h1>

        <form className="space-y-6" action="#">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@company.com"
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
              id="password"
              name="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-black focus:border-black block w-full p-3"
              required
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-900 mb-1">
              Confirm password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-black focus:border-black block w-full p-3"
              required
            />
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <input
              id="terms"
              type="checkbox"
              required
              className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
            />
            <label htmlFor="terms">
              I accept the{" "}
              <a href="#" className="font-medium text-primary-600 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>

          <Button
            formAction={signup}
            className="w-full text-white bg-black hover:bg-black/80 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-3 text-center"
          >
            Create an account
          </Button>

          <p className="text-sm text-gray-500 text-center">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-primary-600 hover:underline">
              Login here
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
