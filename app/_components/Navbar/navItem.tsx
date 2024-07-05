"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';

interface navProps {
  label: string;
  url: string;
}

export default function NavItem(props: navProps) {
    const pathName = usePathname();
    const isActive = (pathName === props.url);
  return (
    <li className="link menu-timeline">
      <Link
        className={` ${isActive ? 'active' : ''}`}
        // data-type="page-transition"
        href={props.url}
      >
        <div className="before-span">
          <span data-hover={props.label}>{props.label} </span>
        </div>
      </Link>
    </li>
  );
}
