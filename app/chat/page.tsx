import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import LogoutButton from "@/components/ui/logoutButton"

export default async function ChatPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    return (
        <div className="flex flex-col items-center justify-center h-100">
            <h1>Hello {user.email}</h1>
            <LogoutButton />
        </div>
    )
}