import Head from 'next/head'
import css, { select } from 'next/css'

export default () => {
  let links = (
    <ul className={linksListStyle}>
      <li><a href="mailto:micah.roberson@gmail.com" target="_blank">Email</a></li>
      <li><span>•</span></li>
      <li><a href="https://github.com/micahroberson" target="_blank">Github</a></li>
      <li><span>•</span></li>
      <li><a href="https://twitter.com/micahroberson" target="_blank">Twitter</a></li>
      <li><span>•</span></li>
      <li><a href="/static/Micah Roberson Resume.pdf" target="_blank">Download Résumé</a></li>
    </ul>
  );
  return (
    <div>
      <Head>
        <title>Micah Roberson – Software Engineer</title>
        <meta charset="utf-8" />
        <link rel="icon" type="image/png" href="/static/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="canonical" href="http://micahroberson.com" />
      </Head>
      <div className={containerStyle}>
        <h1 className={h1Style}>Micah Roberson</h1>
        <h2 className={h2Style}>A software engineer in San Francisco, specializing in rich JavaScript applications.</h2>
        {links}
        <div className={css(spacer1Style)} />
        <h3 className={h3Style}>About</h3>
        <div className={lineStyle} />
        <p>I’m an experienced full-stack software engineer and self-directed owner, with a knack for interdisciplinary communication.</p>
        <p>Having spent time at both large, established corporations and small, scrappy startups, I’ve developed the perspective and skills necesary to balance technical debt with business goals, design constraints and timely shipments.</p>
        <p>I’ve started, contributed to, shipped and maintained projects and products across the spectrum: from monolithic Rails apps running on Heroku to large-scale, service-oriented architectures on AWS. While a significant portion of my career hours have been spent building backend services in various languages, my real passion is rich, frontend JavaScript apps. I’ve spent the majority of the past two years building and scaling up universal, server-rendered React web apps based on the Flux architecture.</p>
        <div className={css(spacer2Style)} />
        <h3 className={h3Style}>Work Experience</h3>
        <div className={lineStyle} />
        <div className={workContainerStyle}>
          <div className={workRowStyle}>
            <span className={workRowCompanyNameStyle}>Delectable&nbsp;&nbsp;</span>
            <span className={workRowTitleStyle}>/&nbsp;&nbsp;Senior Software Engineer</span>
            <span className={workRowDateStyle}>Jan 2015 - Present</span>
          </div>
          <div className={lineStyle} />
          <div className={workRowStyle}>
            <span className={workRowCompanyNameStyle}>RAD Development&nbsp;&nbsp;</span>
            <span className={workRowTitleStyle}>/&nbsp;&nbsp;Co-Founder & CTO</span>
            <span className={workRowDateStyle}>May 2012 - Jan 2015</span>
          </div>
          <div className={lineStyle} />
          <div className={workRowStyle}>
            <span className={workRowCompanyNameStyle}>Arkad&nbsp;&nbsp;</span>
            <span className={workRowTitleStyle}>/&nbsp;&nbsp;Co-Founder & Lead Engineer</span>
            <span className={workRowDateStyle}>April 2012 - May 2013</span>
          </div>
          <div className={lineStyle} />
          <div className={workRowStyle}>
            <span className={workRowCompanyNameStyle}>Bloomberg&nbsp;&nbsp;</span>
            <span className={workRowTitleStyle}>/&nbsp;&nbsp;Financial Software Developer</span>
            <span className={workRowDateStyle}>May 2011 - May 2012</span>
          </div>
          <div className={lineStyle} />
          <div className={workRowStyle}>
            <span className={workRowCompanyNameStyle}>American Express&nbsp;&nbsp;</span>
            <span className={workRowTitleStyle}>/&nbsp;&nbsp;Technical Analyst</span>
            <span className={workRowDateStyle}>June 2010 - April 2011</span>
          </div>
        </div>
        <div className={css(spacer2Style)} />
      </div>
      <div className={lineStyle} />
      <div className={bottomLinksWrapper}>
        {links}
      </div>
      <div className={css(spacer1Style)} />
      <script dangerouslySetInnerHTML={{__html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-34306816-1', 'auto');
        ga('send', 'pageview');`}}></script>
    </div>
  )
}

css.global('body', {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
  backgroundColor: '#111111',
  color: '#ffffff',
  fontSize: 16,
  textRendering: 'optimizelegibility',
  WebkitFontSmoothing: 'antialiased',
})

css.global('section', {
  maxWidth: 620,
  margin: '0 auto',
  padding: '0 20px 80px',
  minHeight: 600,
})

css.global('p', {
  margin: '0 auto 30px',
  padding: '0',
  lineHeight: '30px',
  fontSize: '20px',
  fontWeight: 400,
})

css.global('strong', {
  fontWeight: '500 !important',
})

const containerStyle = css({
  maxWidth: 780,
  margin: '0 auto',
  padding: '274px 20px 185px',
  '@media (max-width: 600px)': {
    padding: '100px 20px 100px',
  }
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
  opacity: 0.4,
  '@media (max-width: 600px)': {
    fontSize: 12,
    lineHeight: '38px',
  }
})

const bottomLinksWrapper = css({
  maxWidth: 740,
  margin: '0 auto',
  padding: '0 20px',
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

const spacer1Style = css({
  height: 154,
  '@media (max-width: 600px)': {
    height: 100,
  }
})

const spacer2Style = css({
  height: 100,
  '@media (max-width: 600px)': {
    height: 80,
  }
})

const lineStyle = css({
  borderBottom: '1px solid #ffffff',
  opacity: 0.12,
  margin: '0 0 21px',
})

const workContainerStyle = css({

})

const workRowStyle = css({
  fontSize: 20,
  marginBottom: '21px',
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
