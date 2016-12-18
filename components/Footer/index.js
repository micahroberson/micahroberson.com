import Link from 'next/link'
import css, { select } from 'next/css'

export default () => {
  return (
    <footer className={footerStyle}>
      <Link href="/">Home</Link>
      <span>•</span>
      <Link href="/about">About</Link>
      <span>•</span>
      <Link href="/work">Work</Link>
      <span>•</span>
      <a href="/static/Micah Roberson Resumé.pdf">Resumé</a>
      <p>micahroberson.com</p>
    </footer>
  )
}

const footerStyle = css({
  textAlign: 'center',
  fontSize: 10,
  color: 'rgba(0,0,0,0.6)'
}, select('> a', {
  fontSize: 12,
  color: 'rgba(0,0,0,0.6)',
  padding: '20px 10px',
}), select('> p', {
  fontSize: 10,
  color: 'rgba(0,0,0,0.6)',
  marginTop: 10,
}))
