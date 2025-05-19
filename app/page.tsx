import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main>
      <h1>Hello world!</h1>
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    </main>
  );
}