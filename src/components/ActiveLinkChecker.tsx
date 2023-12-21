'use client';

 // ActiveLinkChecker.tsx
import { usePathname } from "next/navigation";

const ActiveLinkChecker = ({ pathnameToCheck }: { pathnameToCheck: string }) => {
  const full_pathname = usePathname();

  return full_pathname === pathnameToCheck ? 'active_navbar_link' : '';
};

export default ActiveLinkChecker;
