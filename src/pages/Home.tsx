import React from 'react';
import { Link } from 'react-router-dom';

const Home :React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* TopNavBar */}
      <header className="sticky top-0 z-50 w-full border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between whitespace-nowrap px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold tracking-tighter">Pratap Singh</h2>
          </div>
          <nav className="hidden items-center gap-9 md:flex">
          
          </nav>
          <div className="flex items-center gap-4">
            <Link
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-colors"
              to="https://pratapsingh.me"
            >
              <span className="truncate">Main site</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto flex-grow px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl text-text-light dark:text-text-dark">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-light/70 dark:text-text-dark/70">
            A selection of my recent work. I build things for the web.
          </p>
        </div>

        {/* ImageGrid */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVEHolBdYQ8bS4XPECJUToeU_j8I1b8z6tdTAcfOUdpEKU1hMfNtfM59Kbk-2DwxfNER_MXMKvF24Cj31klEvKDmj1emjpRI0SFL00pE9BVKrDAPUv5rM5hNBCVW3RvHuw3niq_ziM7mKpwkNUXnU6s8bULlsFUF6-zndHrUIgVggMD33_L_f7nj7Iqi9PajlsI_0J662UMImb1TLPy9UdjXVxKnkyarn1q_F83ul_ebu6HhQ3yD-O7p5plLWU-FLvRe_qtV9Nz0A",
              title: "Project One",
              desc: "A modern UI toolkit built with React and TypeScript, designed for high-performance and accessible web applications.",
            },
            {
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWCw5-enZVZUgi7tPMpy38EO4n3MjyvG_uzGN4sev8_uCeNLPi80T-X-77X5snNX01AtlAtNkA3zYP0Tm8MS0o7j5AuqYni8c7eT4RfyuLkT1AwWaHt5CZlh6n6Qm6Ez30eq_amIaFudb-gIVT4zKxfo4RC4cRwKUN8CV61kUAnjz2Kg9-IVHAPseKBbVgDltWx9Ufc6GB_n8Wji_zmZR8pXtM0XTosAZoLBIE9VzJ_smlvx0WFhNq43kKhe65ACkddMNnU3ymE4o",
              title: "Project Two",
              desc: "An analytics dashboard providing real-time data visualization and insights, powered by D3.js and a Node.js backend.",
            },
            {
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaQNg_ocPKnI6oGrczCH_xmUJ2g6rM2o1tX0Eu_3m0gYJ5PrfWn8fX6QfsHgNwiDiQ2oLE_BhWdTnw86yQkUWcwuxytW_ep9nEEGY33BEIibW30fGLv2RTnnCi_D2L0IeCB09RDl7E6fzRl9og4ifs_JIGy17zxcWIsr2-ldrtbf1CZRx4HyothyZ_nbf9zIQ7OMX4vuvGiFQdVUjZ0Lo4U1BnkDSwJlfvW77y3dVn7h0J-otRX9Mw0KzySmi6VMT_9brkkZfwE0E",
              title: "Project Three",
              desc: "A cross-platform e-commerce app for a boutique fashion brand, built using React Native for a seamless mobile experience.",
            },
            {
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrUWH4eItlXc7sHlddO_SFLEEtytMGxfieygft-Vh1XQehlCQBBImlBy06U2GmTih1ms5yNzi-pemKPMwKO2RvkZRmCBSFM5-zMQY-YaIu6cPq-8Ymuc3fMvR05SnH2SjSZQr-wQBbCtINNYCbVKaO6nVvUMYPqlHfybs1BUzq67wAvfYn_0XKgcq_WyRpkbbFOu-DwLvTQMEZA_FG5_onzGNr-M2fiZ4Y9AKaLaGt24F5LaM5Vgr5dhIXnMJLSvz-YFaQf4d_5Ls",
              title: "Project Four",
              desc: "A portfolio website for a creative agency, featuring dynamic animations and a content management system built with Next.js.",
            },
            {
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwBT1cPur9bHL8f2nSeZc6zhoStveMImTsYCPjSjfRxasqDqX2LkCykaGlhgxXNhMlrNoKO8D4vSJ8FtXfyi-zIOhj3_1IRTeV9ZfVAzfDSYVu4M4QRRv_owQIpghec1Gley_h5OCRfOgYqrD9p5-kJ2AoayMie9sIrHN3Qvd3R7znp0nFX1Uz_RKs66GJvRVt4TUmC5mCWgkK9tKfDZ-SMEnhusPEdoBhyD_aoOFNbeJUOIFd1R7hUQTGZCiUIccK1bUFvQkhjWg",
              title: "Project Five",
              desc: "A SaaS platform for project management, helping teams organize tasks and collaborate effectively in real-time.",
            },
            {
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVyTm_ykZs2-zHitVP6tcef8tqq32INAUBCidg-KnbK8OsBVF_D0ufsepM0nFDxjMr1x0rQvsd3yTGA37bPmTJyplH5sxsxxWBf-NuU7HiRLdqxTq2-8L4Sg-Zrc6bUzxMMs8js_rk_LZ4RgWyLfssazHqr9ilNVuRD5xdYpYbH6fn35zGcT28iU0DU7y11ZpBs-npiUwyzSBbXKxxlbbv3n47w5c7NhQP8d8F9Lt6-_gsyrk9SplAVjnmm6KC6xymjYnKdP6W45U",
              title: "Project Six",
              desc: "An open-source developer tool that automates coding workflows, created with TypeScript and integrated with VS Code.",
            },
          ].map((project, idx) => (
            <article
              key={idx}
              className="flex flex-col overflow-hidden rounded-2xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark shadow-md transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl"
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                style={{ backgroundImage: `url("${project.img}")` }}
              ></div>
              <div className="flex-grow p-6">
                <h2 className="text-xl font-bold leading-normal text-text-light dark:text-text-dark">
                  {project.title}
                </h2>
                <p className="mt-2 text-base font-normal leading-normal text-text-light/70 dark:text-text-dark/70">
                  {project.desc}
                </p>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
        <div className="container mx-auto flex flex-col items-center gap-6 px-5 py-10 text-center sm:flex-row sm:justify-between">
          <p className="text-sm text-text-light/60 dark:text-text-dark/60">
            © 2024 Pratap Singh. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-6">
            <a
              className="text-text-light/60 dark:text-text-dark/60 hover:text-primary dark:hover:text-primary transition-colors"
              href="#"
              aria-label="Code"
            >
              <span className="material-symbols-outlined">code</span>
            </a>
            <a
              className="text-text-light/60 dark:text-text-dark/60 hover:text-primary dark:hover:text-primary transition-colors"
              href="#"
              aria-label="LinkedIn"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              className="text-text-light/60 dark:text-text-dark/60 hover:text-primary dark:hover:text-primary transition-colors"
              href="#"
              aria-label="Twitter"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
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