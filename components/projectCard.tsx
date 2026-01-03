"use client";

import React, { useState } from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  tech?: string[];
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
};

export default function ProjectCard({ title, description, tech = [], image, demoUrl, repoUrl }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-black bg-opacity-60 border border-gray-700 rounded-lg p-4 flex flex-col">
      {!imgError && image ? (
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full h-40 object-cover rounded-md mb-4"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-40 bg-gray-800 rounded-md mb-4 flex items-center justify-center text-gray-400">
          <span>{title}</span>
        </div>
      )}

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-3">{description}</p>

      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="text-xs bg-white bg-opacity-10 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex gap-3">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-white bg-opacity-10 rounded hover:bg-opacity-20 transition text-sm"
            aria-label={`Xem demo của ${title}`}
          >
            Demo
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-white bg-opacity-10 rounded hover:bg-opacity-20 transition text-sm"
            aria-label={`Xem repo của ${title}`}
          >
            Repo
          </a>
        )}
      </div>
    </div>
  );
}
