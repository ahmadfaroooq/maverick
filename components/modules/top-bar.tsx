"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { navItems } from "@/components/modules/navigation";
import { ThemeToggle } from "@/components/modules/theme-toggle";

export function TopBar() {
  const pathname = usePathname();

  const moduleName = useMemo(() => {
    const activeItem = navItems.find((item) =>
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
    );

    return activeItem?.label ?? "Maverick";
  }, [pathname]);

  return (
    <header className="flex h-16 items-center justify-between border-b px-4 md:px-6">
      <h1 className="text-lg font-semibold tracking-tight">{moduleName}</h1>
      <ThemeToggle />
    </header>
  );
}
