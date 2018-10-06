import Head from 'next/head'
import css, { select } from 'next/css'

export default () => {
  return (
    <div className={containerStyle}>
      <Head>
        <title>Micah Roberson – Software Engineer</title>
        <meta property="og:title" content="Micah Roberson – Software Engineer" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" type="image/png" href="/static/favicon.png" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <meta name="author" content="Micah Roberson" />
        <meta name="description" content="A software engineer in San Francisco, specializing in rich JavaScript applications." />
        <meta property="og:description" content="A software engineer in San Francisco, specializing in rich JavaScript applications." />
        <link rel="canonical" href="https://micahroberson.com" />
        <meta property="og:url" content="https://micahroberson.com" />
      </Head>
      <section className={sectionStyle}>
        <h1 className={h1Style}>Micah Roberson</h1>
        <h2 className={h2Style}>A software engineer in San Francisco, specializing in rich JavaScript applications.</h2>
        <ul className={linksListStyle}>
          <li><a href="mailto:micah.roberson@gmail.com" target="_blank">Email</a></li>
          <li><span>•</span></li>
          <li><a href="https://github.com/micahroberson" target="_blank">GitHub</a></li>
          <li><span>•</span></li>
          <li><a href="https://twitter.com/micahroberson" target="_blank">Twitter</a></li>
          <li><span>•</span></li>
          <li><a href="/static/Micah Roberson Resume.pdf" target="_blank">Download Résumé</a></li>
        </ul>
      </section>
      <section className={sectionStyle}>
        <h3 className={h3Style}>About</h3>
        <p>I’m an experienced full-stack software engineer and self-directed owner, with a passion for delivering beautiful, intuitive user experiences.</p>
        <p>Having worked at both large, established corporations and small, early-stage startups, I've experienced a variety of engineering cultures and environments. Through this, I’ve developed the perspective and skills necessary to effectively communicate and collaborate cross-functionally.</p>
        <p>I’ve started, contributed to, shipped and maintained projects and products across the spectrum: from monolithic Rails apps to large-scale, service-oriented architectures.</p>
      </section>
      <section className={sectionStyle}>
        <h3 className={h3Style}>Work Experience</h3>
        <ol className={workListStyle}>
          <li className={workListItemStyle}>
            <span className={workRowCompanyNameStyle}>Dropbox&nbsp;&nbsp;</span>
            <span className={workRowTitleStyle}>/&nbsp;&nbsp;Software Engineer</span>
            <span className={workRowDateStyle}>Mar 2017 - Present</span>
          </li>
          <li className={workListItemStyle}>
            <span className={workRowCompanyNameStyle}>Delectable&nbsp;&nbsp;</span>
            <span className={workRowTitleStyle}>/&nbsp;&nbsp;Software Engineer</span>
            <span className={workRowDateStyle}>Jan 2015 - Mar 2017</span>
          </li>
          <li className={workListItemStyle}>
            <span className={workRowCompanyNameStyle}>RAD Development&nbsp;&nbsp;</span>
            <span className={workRowTitleStyle}>/&nbsp;&nbsp;Co-Founder & CTO</span>
            <span className={workRowDateStyle}>May 2012 - Jan 2015</span>
          </li>
          <li className={workListItemStyle}>
            <span className={workRowCompanyNameStyle}>Arkad&nbsp;&nbsp;</span>
            <span className={workRowTitleStyle}>/&nbsp;&nbsp;Co-Founder & Lead Engineer</span>
            <span className={workRowDateStyle}>April 2012 - May 2013</span>
          </li>
          <li className={workListItemStyle}>
            <span className={workRowCompanyNameStyle}>Bloomberg&nbsp;&nbsp;</span>
            <span className={workRowTitleStyle}>/&nbsp;&nbsp;Financial Software Developer</span>
            <span className={workRowDateStyle}>May 2011 - May 2012</span>
          </li>
          <li className={workListItemStyle}>
            <span className={workRowCompanyNameStyle}>American Express&nbsp;&nbsp;</span>
            <span className={workRowTitleStyle}>/&nbsp;&nbsp;Technical Analyst</span>
            <span className={workRowDateStyle}>June 2010 - April 2011</span>
          </li>
        </ol>
      </section>
      <footer className={footerStyle}>
        <section className={sectionStyle}>
          <div className={footerNameAndTitleStyle}>
            <span>Micah Roberson</span>
            <span className={titleStyle}>Software Engineer</span>
          </div>
          <ul className={linksListStyle}>
            <li><a href="mailto:micah.roberson@gmail.com" target="_blank">Email</a></li>
            <li><span>•</span></li>
            <li><a href="https://github.com/micahroberson" target="_blank">GitHub</a></li>
            <li><span>•</span></li>
            <li><a href="https://twitter.com/micahroberson" target="_blank">Twitter</a></li>
            <li><span>•</span></li>
            <li><a href="/static/Micah Roberson Resume.pdf" target="_blank">Download Résumé</a></li>
          </ul>
        </section>
      </footer>
    </div>
  )
}

css.global('body', {
  margin: 0,
  padding: 0,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
  backgroundColor: '#111111',
  color: '#ffffff',
  fontSize: 16,
  textRendering: 'optimizelegibility',
  WebkitFontSmoothing: 'antialiased',
})

css.global('p', {
  margin: '0 auto 30px',
  padding: '0',
  lineHeight: '30px',
  fontSize: '20px',
  fontWeight: 400,
})


const containerStyle = css({
  margin: '0 auto',
  padding: '274px 0 185px',
  '@media (max-width: 600px)': {
    padding: '100px 0 100px',
  },
}, select('> section:nth-child(1), > section:nth-child(3)', {
  marginBottom: '154px',
  '@media (max-width: 600px)': {
    marginBottom: '100px',
  },
}), select('> section:nth-child(2)', {
  marginBottom: '100px',
  '@media (max-width: 600px)': {
    marginBottom: '80px',
  },
}))

const sectionStyle = css({
  maxWidth: 780,
  margin: '0 auto',
  padding: '0 20px',
})

const h1Style = css({
  fontSize: 36,
  lineHeight: 1,
  margin: '0 0 51px',
  '@media (max-width: 600px)': {
    fontSize: 30,
    marginBottom: 42,
  }
})

const h2Style = css({
  fontSize: 28,
  fontWeight: 400,
  lineHeight: '44px',
  maxWidth: 600,
  margin: '0 0 42px',
  '@media (max-width: 600px)': {
    fontSize: 22,
    lineHeight: '38px',
    marginBottom: 36,
  }
})

const h3Style = css({
  fontSize: 14,
  lineHeight: '44px',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.4)',
  margin: '0 0 21px',
  padding: '0 0 20px',
  borderBottom: '1px solid rgba(255,255,255,0.12)',
  '@media (max-width: 600px)': {
    lineHeight: '38px',
  }
})

const footerStyle = css({
  margin: '21px 0 0',
  padding: '61px 0 0',
  borderTop: '1px solid rgba(255,255,255,0.12)',
}, select('> section', {
  ':after': {
    content: '""',
    display: 'table',
    clear: 'both',
  },
}), select('> section > ul', {
  float: 'right',
  marginTop: '23px',
  '@media (max-width: 600px)': {
    float: 'left',
  },
}))

const footerNameAndTitleStyle = css({
  float: 'left',
  lineHeight: '30px',
}, select('> span', {
  display: 'block',
}))

const titleStyle = css({
  color: 'rgba(255,255,255,0.4)',
})

const linksListStyle = css({
  lineHeight: '44px',
  margin: 0,
  padding: 0,
  '@media (max-width: 600px)': {
    fontSize: 14,
    lineHeight: '38px',
  },
}, select('> li', {
  display: 'inline-block',
}), select('> li > span', {
  padding: '0 5px',
  color: 'rgba(255,255,255,0.7)',
  fontSize: 10,
  verticalAlign: 'bottom',
}), select('> li > a', {
  color: 'rgba(255,255,255,0.7)',
  textDecoration: 'underline',
  '@media (min-width: 769px)': {
    ':active': {
      color: 'rgba(255,255,255,0.7)',
    },
    ':hover': {
      color: 'rgba(255,255,255,1.0)',
    }
  },
}))

const workListStyle = css({
  listStyle: 'none',
  margin: 0,
  padding: 0,
})

const workListItemStyle = css({
  fontSize: 20,
  padding: '0 0 21px',
  marginBottom: '21px',
  borderBottom: '1px solid rgba(255,255,255,0.12)',
  ':last-child': {
    borderBottom: 0,
  },
  ':after': {
    content: '""',
    display: 'table',
    clear: 'both',
  },
  '@media (max-width: 600px)': {
    fontSize: 16,
  }
})

const workRowCompanyNameStyle = css({
  float: 'left',
  lineHeight: '30px',
})

const workRowTitleStyle = css({
  float: 'left',
  opacity: 0.4,
  lineHeight: '30px',
})

const workRowDateStyle = css({
  float: 'right',
  fontSize: 14,
  lineHeight: '30px',
  fontFamily: 'monospace',
  opacity: 0.4,
  '@media (max-width: 600px)': {
    float: 'left',
  }
})
