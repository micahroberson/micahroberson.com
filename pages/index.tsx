import Head from "next/head";
import { useTheme } from "./_app";

export default function Home() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <div className="container">
      {mounted && (
        <button
          className="themeToggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
      )}
      <Head>
        <title>Micah Roberson – Software Engineer</title>
        <meta
          property="og:title"
          content="Micah Roberson – Software Engineer"
        />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" type="image/png" href="/static/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <meta name="author" content="Micah Roberson" />
        <meta
          name="description"
          content="A software engineer in San Francisco, specializing in rich JavaScript applications."
        />
        <meta
          property="og:description"
          content="A software engineer in San Francisco, specializing in rich JavaScript applications."
        />
        <link rel="canonical" href="https://micahroberson.com" />
        <meta property="og:url" content="https://micahroberson.com" />
      </Head>
      <section className="section">
        <h1 className="h1">Micah Roberson</h1>
        <h2 className="h2">
          A software engineer in San Francisco, specializing in rich JavaScript
          applications.
        </h2>
        <ul className="links">
          <li>
            <a href="mailto:micah.roberson@gmail.com" target="_blank">
              Email
            </a>
          </li>
          <li>
            <span>•</span>
          </li>
          <li>
            <a href="https://github.com/micahroberson" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <span>•</span>
          </li>
          <li>
            <a href="/static/Micah Roberson Resume.pdf" target="_blank">
              Download Résumé
            </a>
          </li>
        </ul>
      </section>
      <section className="section">
        <h3 className="h3">About</h3>
        <p>
          I'm an experienced full-stack software engineer and self-directed
          owner, with a passion for delivering beautiful, intuitive user
          experiences.
        </p>
        <p>
          Having worked at both large, established companies and small,
          early-stage startups, I've experienced a variety of engineering
          cultures and environments. Through this, I've developed the
          perspective and skills necessary to effectively communicate and
          collaborate cross-functionally.
        </p>
      </section>
      <section className="section">
        <h3 className="h3">Work Experience</h3>
        <ol className="workList">
          <li className="workListItem">
            <span className="workRowCompanyName">Dropbox&nbsp;&nbsp;</span>
            <span className="workRowTitle">
              /&nbsp;&nbsp;Senior Software Engineer &amp; Tech Lead
            </span>
            <span className="workRowDate">Mar 2017 - Present</span>
          </li>
          <li className="workListItem">
            <span className="workRowCompanyName">Delectable&nbsp;&nbsp;</span>
            <span className="workRowTitle">/&nbsp;&nbsp;Lead Web Engineer</span>
            <span className="workRowDate">Jan 2015 - Mar 2017</span>
          </li>
          <li className="workListItem">
            <span className="workRowCompanyName">
              RAD Development&nbsp;&nbsp;
            </span>
            <span className="workRowTitle">/&nbsp;&nbsp;Co-Founder & CTO</span>
            <span className="workRowDate">May 2012 - Jan 2015</span>
          </li>
          <li className="workListItem">
            <span className="workRowCompanyName">Arkad&nbsp;&nbsp;</span>
            <span className="workRowTitle">
              /&nbsp;&nbsp;Co-Founder & Lead Engineer
            </span>
            <span className="workRowDate">April 2012 - May 2013</span>
          </li>
          <li className="workListItem">
            <span className="workRowCompanyName">Bloomberg&nbsp;&nbsp;</span>
            <span className="workRowTitle">/&nbsp;&nbsp;Software Engineer</span>
            <span className="workRowDate">May 2011 - May 2012</span>
          </li>
          <li className="workListItem">
            <span className="workRowCompanyName">
              American Express&nbsp;&nbsp;
            </span>
            <span className="workRowTitle">/&nbsp;&nbsp;Technical Analyst</span>
            <span className="workRowDate">June 2010 - April 2011</span>
          </li>
        </ol>
      </section>
      <footer className="footer">
        <section className="section">
          <div className="footerTitle">
            <span>Micah Roberson</span>
            <span className="title">Software Engineer</span>
          </div>
          <ul className="links">
            <li>
              <a href="mailto:micah.roberson@gmail.com" target="_blank">
                Email
              </a>
            </li>
            <li>
              <span>•</span>
            </li>
            <li>
              <a href="https://github.com/micahroberson" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <span>•</span>
            </li>
            <li>
              <a href="/static/Micah Roberson Resume.pdf" target="_blank">
                Download Résumé
              </a>
            </li>
          </ul>
        </section>
      </footer>
      <style jsx global>{`
        :root,
        [data-theme="dark"] {
          --bg-primary: #111111;
          --text-primary: #ffffff;
          --text-secondary: rgba(255, 255, 255, 0.7);
          --text-muted: rgba(255, 255, 255, 0.4);
          --border-color: rgba(255, 255, 255, 0.12);
        }

        [data-theme="light"] {
          --bg-primary: #ffffff;
          --text-primary: #111111;
          --text-secondary: rgba(0, 0, 0, 0.7);
          --text-muted: rgba(0, 0, 0, 0.5);
          --border-color: rgba(0, 0, 0, 0.12);
        }

        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
            Helvetica, Arial, sans-serif;
          background-color: var(--bg-primary);
          color: var(--text-primary);
          font-size: 16px;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          transition: background-color 0.2s ease, color 0.2s ease;
        }

        p {
          margin: 0 auto 30px;
          padding: 0;
          line-height: 30px;
          font-size: 20px;
          font-weight: 400;
        }
      `}</style>
      <style jsx>{`
        .themeToggle {
          position: fixed;
          top: 20px;
          right: 20px;
          background: transparent;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 8px;
          cursor: pointer;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s ease, border-color 0.2s ease;
          z-index: 100;
        }

        .themeToggle:hover {
          color: var(--text-primary);
          border-color: var(--text-muted);
        }

        .container {
          margin: 0 auto;
          padding: 274px 0 185px;
        }
        .container > section:nth-child(1),
        .container > section:nth-child(3) {
          margin-bottom: 154px;
        }
        .container > section:nth-child(2) {
          margin-bottom: 100px;
        }

        .section {
          max-width: 780px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .h1 {
          font-size: 36px;
          line-height: 1;
          margin: 0 0 51px;
        }

        .h2 {
          font-size: 28px;
          font-weight: 400;
          line-height: 44px;
          max-width: 600;
          margin: 0 0 42px;
        }

        .h3 {
          font-size: 14px;
          line-height: 44px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin: 0 0 21px;
          padding: 0 0 20px;
          border-bottom: 1px solid var(--border-color);
        }

        .footer {
          margin: 21px 0 0;
          padding: 61px 0 0;
          border-top: 1px solid var(--border-color);
        }

        .footer > section:after {
          content: "";
          display: table;
          clear: both;
        }

        .footer > section > ul {
          float: right;
          margin-top: 23px;
        }

        .footerTitle {
          float: left;
          line-height: 30px;
        }

        .footerTitle > span {
          display: block;
        }

        .title {
          color: var(--text-muted);
        }

        .links {
          line-height: 44px;
          margin: 0;
          padding: 0;
        }

        .links > li {
          display: inline-block;
        }

        .links > li > span {
          padding: 0 5px;
          color: var(--text-secondary);
          font-size: 10px;
          vertical-align: bottom;
        }

        .links > li > a {
          color: var(--text-secondary);
        }
        .workList {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .workListItem {
          font-size: 20px;
          padding: 0 0 21px;
          margin-bottom: 21px;
          border-bottom: 1px solid var(--border-color);
        }

        .workListItem:last-child {
          border-bottom: 0;
        }

        .workListItem:after {
          content: "";
          display: table;
          clear: both;
        }

        .workRowCompanyName {
          float: left;
          line-height: 30px;
        }

        .workRowTitle {
          float: left;
          opacity: 0.4;
          line-height: 30px;
        }

        .workRowDate {
          float: right;
          font-size: 14px;
          line-height: 30px;
          font-family: monospace;
          opacity: 0.4;
        }

        @media (max-width: 600px) {
          .container {
            padding: 100px 0 100px;
          }

          .container > section:nth-child(1),
          .container > section:nth-child(3) {
            margin-bottom: 100px;
          }

          .container > section:nth-child(2) {
            margin-bottom: 80px;
          }

          .h1 {
            font-size: 30px;
            margin-bottom: 42px;
          }

          .h2 {
            font-size: 22px;
            line-height: 38px;
            margin-bottom: 36px;
          }

          .h3 {
            line-height: 38px;
          }

          .footer > section > ul {
            float: left;
          }

          .links {
            font-size: 14px;
            line-height: 38px;
          }

          .links > li > a:active {
            color: var(--text-secondary);
          }

          .links > li > a:hover {
            color: var(--text-primary);
          }

          .workListItem {
            font-size: 16px;
          }

          .workRowDate {
            float: left;
          }
        }
      `}</style>
    </div>
  );
}
