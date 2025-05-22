import Link from "next/link";
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react";

export default function Page() {
  return (
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-3xl font-bold">CodeGPT</h1>
        <h1>by <b><a href="https://arcane-website-beta.vercel.app/">Arcane</a></b> Group</h1>

        <div className="bg-white px-4 py-4 w-full flex justify-center">
          <form className="w-full max-w-3xl flex items-center gap-4">
            <textarea
              rows={1}
              className="flex-1 resize-none rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent shadow-sm"
              placeholder="Send a message..."
              style={{ minHeight: '44px', maxHeight: '200px' }}
            />

            <button
              className="p-3 rounded-lg bg-black text-white hover:bg-black/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              <Link href="/register">
                <ArrowUp className="w-5 h-5" />
              </Link>
            </button>
          </form>
        </div>

        <div className="flex gap-2">
          <Button asChild className="px-8">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="px-8">
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
  );
}