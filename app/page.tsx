import Link from "next/link";
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react";

export default function Page() {
  return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">CodeGPT</h1>
        <h1>by <b><a href="https://arcane-website-beta.vercel.app/">Arcane</a></b> Group</h1>

        <div className="mx-auto w-full max-w-sm">      
          <form>
              <div className="flex items-center px-3 py-2 rounded-lg">           
                  <textarea id="chat" rows={1} className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Type anything to start..." />
                  <Button asChild type="submit" className="inline-flex justify-center text-white bg-black rounded-full cursor-pointer hover:bg-black/80">
                      <Link href="/register"><ArrowUp /></Link>
                  </Button>
              </div>
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