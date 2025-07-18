'use client';
import React, { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Daily Overview", href: "/command-center", iconClass: "text-pink-500 dark:text-pink-300", icon: (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="shrink-0" aria-hidden><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/><path d="M10 5v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
  ) },
  { label: "Academics", href: "/academic-mission-control", iconClass: "text-blue-500 dark:text-blue-300", icon: (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="shrink-0" aria-hidden><rect x="3" y="5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M7 9h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
  ) },
  { label: "Personal Goals", href: "/personal-academic-goals-lab", iconClass: "text-green-500 dark:text-green-300", icon: (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="shrink-0" aria-hidden><path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
  ) },
  { label: "Schedule Orchestrator", href: "/schedule-orchestrator", iconClass: "text-yellow-500 dark:text-yellow-300", icon: (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="shrink-0" aria-hidden><rect x="3" y="4" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M7 2v4M13 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
  ) },
  { label: "Work & Service", href: "/work-service-central", iconClass: "text-purple-500 dark:text-purple-300", icon: (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="shrink-0" aria-hidden><path d="M4 10h12M10 4v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
  ) },
  { label: "Spanish Immersion", href: "/spanish-immersion-command", iconClass: "text-red-500 dark:text-red-300", icon: (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="shrink-0" aria-hidden><ellipse cx="10" cy="10" rx="7" ry="4" stroke="currentColor" strokeWidth="2"/><path d="M10 6v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
  ) },
  { label: "Analytics", href: "/analytics-intelligence", iconClass: "text-cyan-500 dark:text-cyan-300", icon: (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="shrink-0" aria-hidden><rect x="4" y="10" width="3" height="6" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="8.5" y="7" width="3" height="9" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="13" y="4" width="3" height="12" rx="1" stroke="currentColor" strokeWidth="2"/></svg>
  ) },
  { label: "AI Learning", href: "/ai-learning-ecosystem", iconClass: "text-orange-500 dark:text-orange-300", icon: (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="shrink-0" aria-hidden><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/><circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="2"/></svg>
  ) },
  { label: "Personal Development", href: "/character-development-tracker", iconClass: "text-fuchsia-500 dark:text-fuchsia-300", icon: (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="shrink-0" aria-hidden><circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="2"/><path d="M5 17c0-2.5 2-4.5 5-4.5s5 2 5 4.5" stroke="currentColor" strokeWidth="2"/></svg>
  ) },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className={`h-full bg-gradient-to-b from-pink-400 via-blue-400 to-green-300 dark:from-purple-900 dark:via-blue-900 dark:to-green-900 border-r-4 border-pink-500 dark:border-purple-700 transition-all duration-200 flex flex-col shadow-2xl ${collapsed ? "w-16" : "w-64"} rounded-r-3xl relative`}
    >
      <div className={`flex items-center justify-between ${collapsed ? "px-2" : "px-4"} py-4 border-b border-white/20 dark:border-black/20`}> 
        <span className={`font-extrabold text-xl tracking-tight text-white drop-shadow-lg transition-all duration-200 ${collapsed ? "hidden" : "block"}`}>Hi Chloe!</span>
        <button
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={() => setCollapsed((c) => !c)}
          className="p-2 rounded-full bg-white/30 dark:bg-black/30 hover:bg-white/50 dark:hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:focus:ring-purple-400 transition-colors shadow"
        >
          <span aria-hidden className="text-xl text-pink-600 dark:text-purple-300">{collapsed ? "→" : "←"}</span>
        </button>
      </div>
      <ul className="flex-1 flex flex-col gap-1 mt-2 px-1">
        {NAV_ITEMS.map((item) => (
          <li key={item.href} className="">
            <Link
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all whitespace-nowrap overflow-hidden text-ellipsis group font-semibold ${collapsed ? "text-xs px-2 justify-center" : "text-base"} hover:bg-white/30 hover:text-black dark:hover:bg-black/30 dark:hover:text-white focus:bg-white/40 focus:text-black dark:focus:bg-black/40 dark:focus:text-white outline-none`}
              tabIndex={0}
            >
              <span className={`inline-flex items-center justify-center text-lg transition-colors ${item.iconClass} group-hover:scale-110 group-focus:scale-110`} aria-hidden>{item.icon}</span>
              {!collapsed && <span className="transition-all duration-200 drop-shadow-sm">{item.label}</span>}
              {collapsed && <span className="sr-only">{item.label}</span>}
            </Link>
          </li>
        ))}
      </ul>
      <div className="p-4 text-xs text-center text-white/80 dark:text-white/40 border-t border-white/20 dark:border-black/20">
        {!collapsed ? "© 2025 Chloe Life Management" : "© 24"}
      </div>
      {/* Accent bar for extra color pop */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-pink-500 via-blue-500 to-green-400 dark:from-purple-700 dark:via-blue-700 dark:to-green-700 rounded-r-xl" aria-hidden />
    </nav>
  );
} 