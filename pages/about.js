import Head from 'next/head'
import css from 'next/css'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default () => {
  return (
    <div>
      <Head>
        <title>Micah Roberson - About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <section>
        <p>I'm an experienced full-stack software engineer and self-directed owner, with a knack for interdisciplinary communication.</p>
        <p>Having spent time at both large, established corporations and small, scrappy startup, I've developed the perspective and skills necesary to balance technical debt with business goals, design constraints and timely shipments. </p>
        <p>I've started, contributed to, shipped and maintained projects and products across the spectrum: from monolithic Rails apps running on Heroku to large-scale, service-oriented architectures. While a significant portion of my career hours have been spent building backend services in various languages, my real passion is rich, frontend JavaScript apps. I've spent the majority of the past two years building universal, server-rendered React web apps based on the Flux architecture, and I'm fully conviced it's the best way to build just about any immersive, UI-heavy web application.</p>
        <h2 className={headerStyle}>Interests & Hobbies</h2>
        <h4 className={subheaderStyle}>Homebrewing</h4>
        <p>I've been brewing beer with my wife for the past few years now. We certainly have room for improvement, but I'm proud to say we're yet to brew a outright "bad" batch!<br/><br/>Just bottled:<br/>• Honey Apple Cider<br/><br/>Next up:<br/>• Northeast IPA (60/40 Citra & Amarillo hops)<br/><br/>Recent brews:<br/>• Single-hopped Mosaic IPA<br/>• San Francisco Lager<br/>• Belgian Pale Ale<br/></p>
        <h4 className={subheaderStyle}>Running, Hiking & Mountain Biking</h4>
        <p>One of my favorite things about the Bay Area (in addition to the beer and tech scenes) is the proximity to so many great parks, trails, mountains and, of course, Tahoe. Whether it's just a run up to Twin Peaks or a weekend getaway to Mendocino, I relish the chance to escape the busy city and reflect. Many people claim to think best in the shower, but, for me, running, hiking or mountain biking outside seem to work wonders. And of course, there's the winter sports in Tahoe; I'm partial to snowboarding right now.</p>
      </section>
      <Footer />
    </div>
  )
}

const headerStyle = css({
  fontWeight: 500,
  fontSize: 20,
  margin: '60px 0 30px',
})

const subheaderStyle = css({
  fontWeight: 500,
  fontSize: 18,
  margin: '0 0 10px',
})

// <img src="/static/headshot.png" className={headshotStyle} />
const headshotStyle = css({
  display: 'block',
  margin: '0 auto 30px',
  maxWidth: '72px',
  userSelect: 'none',
})
