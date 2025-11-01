// src/pages/ProjectDetails.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'; // <-- Still need this!

interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
  content: string; // <-- Add the new content field
}

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const loadProject = async () => {
      try {
        // 1. Only fetch the single JSON file
        const res = await fetch('/projects.json');
        if (!res.ok) {
          console.error('Failed to load projects.json');
          return;
        }

        const projects: Project[] = await res.json();
        
        // 2. Find the specific project from the full list
        const proj = projects.find(p => p.id === id);

        if (!proj) {
          console.error('Project not found');
          return;
        }

        // 3. Set both the project data and the markdown content
        setProject(proj);
        setContent(proj.content); // Get content directly from the project object

      } catch (err) {
        console.error('Failed to load project:', err);
      }
    };

    if (id) loadProject();
  }, [id]);

  if (!project) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <main className="flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-8 px-4 sm:px-6 lg:px-8">
          <article className="layout-content-container flex flex-col max-w-4xl flex-1 gap-8">
            <p className="text-sm font-medium leading-normal text-text-subtle-light dark:text-text-subtle-dark">
              <Link
                to="/"
                className="inline-flex items-center gap-2 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                Back to Projects
              </Link>
            </p>

            <div
              className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-[20rem] md:min-h-[24rem] lg:min-h-[28rem] border border-border-light dark:border-border-dark"
              style={{ backgroundImage: `url("${project.image}")` }}
            />

            <header className="flex flex-col gap-3">
              <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight tracking-tight text-text-light dark:text-text-dark">
                {project.title}
              </h1>
              <p className="text-lg text-text-subtle-light dark:text-text-subtle-dark">
                {project.subtitle}
              </p>
            </header>

            {/* This section stays the same and uses react-markdown */}
            <section className="prose prose-lg dark:prose-invert max-w-none text-text-light dark:text-text-dark prose-p:leading-relaxed">
              <ReactMarkdown>{content}</ReactMarkdown>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-heading font-semibold">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/20 dark:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined">open_in_new</span>
                Live Demo
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-5 py-3 text-base font-semibold text-text-light dark:text-text-dark shadow-sm transition-colors hover:bg-gray-100 dark:hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined">code</span>
                View on GitHub
              </a>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;