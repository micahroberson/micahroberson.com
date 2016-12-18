import Head from 'next/head'
import css, { select } from 'next/css'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default () => {
  return (
    <div>
      <Head>
        <title>Micah Roberson - Work</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <section>
        <div className={sectionStyle}>
          <h3 className={headerStyle}>Delectable - Senior Software Engineer</h3>
          <small className={dateStyle}>Jan 2015 - Present</small>
          <p>• Worked with CEO and CTO as part of the management team on vision, direction, business and software development process improvements.<br/>• Built Banquet, a marketplace for wine, and grew to $130k monthly GMV in 9 months with 60+ merchants across the US.<br/>• Owned and managed the development of multiple isomorphic React/Node apps, and backing JSON APIs utilized by mobile engineering teams.</p>
        </div>
        <div className={sectionStyle}>
          <h3 className={headerStyle}>RAD Development - Co-founder & CTO</h3>
          <small className={dateStyle}>May 2012 - Jan 2015</small>
          <p>• Established a successful software development firm that specializes in helping SMB’s develop reliable and scalable systems customized to the needs of their business.<br/>• Responsible for business development, project management, architecture, implementation planning and coding (JavaScript and Ruby).</p>
        </div>
        <div className={sectionStyle}>
          <h3 className={headerStyle}>Arkad - Co-founder & Lead Engineer</h3>
          <small className={dateStyle}>April 2012 - May 2013</small>
          <p>• Built a SaaS app for venture capital firms to collect, standardize, track and compare metrics for their portfolio companies.<br/>• Challenges included programmatically understanding and standardizing financial data provided by the companies, building the user interface and designing a granular permissions system.</p>
        </div>
        <div className={sectionStyle}>
          <h3 className={headerStyle}>Bloomberg - Financial Software Developer</h3>
          <small className={dateStyle}>May 2011 - May 2012</small>
          <p>• Lead development of JavaScript front-end, improved backend caching layer and various aspects of JSON/XML APIs serving up millions of data points.</p>
        </div>
        <div className={sectionStyle}>
          <h3 className={headerStyle}>American Express - Technical Analyst</h3>
          <small className={dateStyle}>June 2010 - April 2011</small>
          <p>• Built reporting and tracking software to drive internal projects and boost operational efficiencies.</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

const sectionStyle = css(select('> p', {
  margin: '10px auto 50px',
}))

const headerStyle = css({
  margin: '30px 0 0',
  padding: '0',
  fontWeight: 500,
})

const dateStyle = css({
  display: 'block',
  color: 'rgba(0,0,0,0.6)',
  margin: '10px 0 0',
  fontSize: 12,
})
