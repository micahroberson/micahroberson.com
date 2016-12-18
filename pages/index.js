import Head from 'next/head'
import css from 'next/css'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default () => {
  return (
    <div>
      <Head>
        <title>Micah Roberson</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <section>
        <img src="/static/headshot.png" className={headshotStyle} />
        <p>Hey there, I’m a software engineer in San Francisco, specializing in rich JavaScript applications. Currently, I’m working at <a href="https://delectable.com" target="_blank">Delectable</a> on, most notably, the <a href="https://shopbanquet.com" target="_blank">shopbanquet.com</a> product suite.</p>
        <p>Previously, I founded a consulting firm, RAD Development, and spent some time building software in the financial world at Bloomberg and American Express.</p>
      </section>
      <Footer />
    </div>
  )
}

const headshotStyle = css({
  display: 'block',
  margin: '0 auto 30px',
  maxWidth: '72px',
  userSelect: 'none',
})