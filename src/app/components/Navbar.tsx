"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/highlights">Highlights</Link>
            </li>
            <li>
              <a>Categories</a>
            </li>
            <li>
              <a>Archive</a>
            </li>
          </ul>
        </div>

        <ul className="hidden lg:flex menu menu-vertical lg:menu-horizontal rounded-box">
          <li>
            <Link href="/highlights">Highlights</Link>
          </li>
          <li>
            <a>Categories</a>
          </li>
          <li>
            <a>Opinion</a>
          </li>
          <li>
            <a>Archive</a>
          </li>
        </ul>
      </div>
      <div className="navbar-center">
        <Link href={"/"} className="text-xl">
          The Gazelle Times
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
