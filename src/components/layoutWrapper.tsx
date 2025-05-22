"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const hideFooterOn = ["/chat"];
  const shouldHideFooter = hideFooterOn.includes(pathname);

  return (
    <>
      <main className={shouldHideFooter ? "flex-grow" : "flex-grow flex items-center justify-center"}>
        {children}
      </main>
      {!shouldHideFooter && (
        <footer className="w-full text-center text-sm text-gray-500 py-4 border-t">
          © 2025 <span className="font-semibold">Arcane</span>. All rights reserved.
        </footer>
      )}
    </>
  );
}