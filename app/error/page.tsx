'use client';

import { useSearchParams } from 'next/navigation';

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const message = searchParams.get('message') || 'Sorry, something went wrong.';

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-red-600 mb-2">Error</h1>
        <p className="text-gray-700 text-base">{message}</p>
        <a
          href="http://localhost:3000"
          className="inline-block mt-6 text-sm text-blue-600 hover:underline"
        >
          Go back to home
        </a>
      </div>
    </div>
  );
}
