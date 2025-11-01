// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const Home: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Failed to load projects:', err));
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* TopNavBar */}
      <header className="sticky top-0 z-50 w-full border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between whitespace-nowrap px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-xl font-bold tracking-tighter">Pratap Singh</h2>
          </div>
          <div className="flex items-center gap-4">
            <a
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-colors"
              href="https://pratapsingh.me"
            >
              <span className="truncate">Main site</span>
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto flex-grow px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl text-text-light dark:text-text-dark">
            Projects ShowCase
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-light/70 dark:text-text-dark/70">
            A selection of my recent work. I build things for the web.
          </p>
        </div>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <Link key={project.id} to={`/project/${project.id}`} className="block">
              <article className="flex flex-col overflow-hidden rounded-2xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark shadow-md transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                  style={{ backgroundImage: `url("${project.image}")` }}
                />
                <div className="flex-grow p-6">
                  <h2 className="text-xl font-bold leading-normal text-text-light dark:text-text-dark">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-base font-normal leading-normal text-text-light/70 dark:text-text-dark/70">
                    {project.subtitle}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </section>
      </main>

      <footer className="w-full border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
        <div className="container mx-auto flex flex-col items-center gap-6 px-5 py-10 text-center sm:flex-row sm:justify-between">
          <p className="text-sm text-text-light/60 dark:text-text-dark/60">
            © 2024 Pratap Singh. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-6">
            <a className="text-text-light/60 dark:text-text-dark/60 hover:text-primary dark:hover:text-primary transition-colors" href="#" aria-label="Code">
              <span className="material-symbols-outlined">code</span>
            </a>
            <a className="text-text-light/60 dark:text-text-dark/60 hover:text-primary dark:hover:text-primary transition-colors" href="#" aria-label="LinkedIn">
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a className="text-text-light/60 dark:text-text-dark/60 hover:text-primary dark:hover:text-primary transition-colors" href="#" aria-label="Twitter">
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;