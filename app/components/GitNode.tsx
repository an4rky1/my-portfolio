"use client";

import { useState } from "react";

interface GitNodeProps {
  branch: string;
  commit: string;
  title: string;
  company: string;
  desc: string;
  icon: string;
  id?: string;
  head?: boolean;
  edu?: boolean;
  tags?: string[];
  last?: boolean;
}

export default function GitNode({
  branch,
  commit,
  title,
  company,
  desc,
  icon,
  head,
  edu,
  tags,
  last,
  id,
}: GitNodeProps) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1000);
  };

  return (
    <div
      id={id}
      className={`git-node relative ${!last ? "mb-10" : ""} cursor-pointer`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <div
        className="git-node-circle absolute -left-6 sm:-left-[26px] top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-bg-light shadow-neo-sm z-10 flex items-center justify-center"
        style={{
          border: clicked ? "3px solid #00FF66" : "3px solid #1A1A1A",
          backgroundColor: clicked ? "#00FF66" : "",
          boxShadow: clicked ? "0 0 12px #00FF66" : "",
        }}
      >
        <i className={`fas ${icon} text-[8px] sm:text-[10px]`}></i>
      </div>
      <div className="ml-8 sm:ml-14">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-[10px] font-bold text-text-dark/40">
            commit {commit}
          </span>
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 border border-text-dark/20 bg-bg-light text-[10px] font-bold text-text-dark/40 leading-tight shadow-neo-sm">
            <i className="fas fa-code-branch text-[8px]"></i>
            {branch}
          </span>
        </div>
        <div
          className="neo-card mt-2 bg-bg-light p-5"
          style={{
            border: hovered ? "3px solid #00FF66" : "3px solid #1A1A1A",
            boxShadow: hovered
              ? "6px 6px 0px 0px #00FF66"
              : "4px 4px 0px 0px #1A1A1A",
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            {head && (
              <span className="inline-block px-2 py-0.5 border-2 border-text-dark text-[10px] font-bold bg-acid-green shadow-neo-sm leading-tight">
                HEAD
              </span>
            )}
            {edu && (
              <span className="inline-block px-2 py-0.5 border-2 border-text-dark text-[10px] font-bold bg-acid-yellow shadow-neo-sm leading-tight">
                EDUCATION
              </span>
            )}
            <h3 className="text-base sm:text-lg font-bold">{title}</h3>
          </div>
          <p className="text-sm text-acid-green font-bold mb-1">{company}</p>
          <p className="text-sm text-text-dark/70 mb-3">{desc}</p>
          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 border-2 border-text-dark text-[10px] font-bold bg-bg-light"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
