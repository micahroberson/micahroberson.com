import 'glamor/reset'
import React from 'react'
import css, { merge, select } from 'next/css'
import Link from 'next/link'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      burgerMenuIsOpen: false
    }
  }

  handleOnClickBurgerMenu(e) {
    e.stopPropagation()
    e.preventDefault()
    this.setState({ burgerMenuIsOpen: !this.state.burgerMenuIsOpen })
  }

  render() {
    let { burgerMenuIsOpen } = this.state
    let burgerMenuProps = {
      className: burgerMenuIsOpen ? burgerMenuOpenStyle : burgerMenuClosedStyle,
      height: '30',
      viewBox: '0 0 20 12',
      width: '24',
      onClick: this.handleOnClickBurgerMenu.bind(this),
    }

    return (
      <nav className={navStyle}>
        <svg {...burgerMenuProps} >
          <line className={burgerMenuLineOneStyle} x1="0" x2="24" y1="0" y2="0" />
          <line className={burgerMenuLineTwoStyle} x1="0" x2="24" y1="6" y2="6" />
          <line className={burgerMenuLineThreeStyle} x1="0" x2="24" y1="12" y2="12" />
        </svg>
        <h1 className={nameStyle}><Link href="/">Micah Roberson</Link></h1>
        <div className={socialIconsStyle}>
          <a href="https://twitter.com/micahroberson" target="_blank"><img src="/static/twitter.svg" className={twitterIconStyle} /></a>
          <a href="https://github.com/micahroberson" target="_blank"><img src="/static/github.svg" className={githubIconStyle} /></a>
        </div>
        <div className={burgerMenuIsOpen ? menuOpenStyle : menuClosedStyle}>
          <ul className={listStyle}>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/work">Work</Link></li>
            <li><a href="/static/Micah Roberson Resumé.pdf">Resumé</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

css.global('body', {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif'
})

css.global('section', {
  maxWidth: 620,
  margin: '0 auto',
  padding: '0 20px 80px',
  minHeight: 600,
})

css.global('a', {
  color: '#26A8ED',
  textDecoration: 'none',
  ':active': {
    color: '#26A8ED',
  },
  ':hover': {
    color: '#0D8FD4',
  }
})

css.global('p', {
  margin: '0 auto 20px',
  padding: '0',
  lineHeight: '1.6',
  fontSize: '16px',
  fontWeight: 400,
})

css.global('strong', {
  fontWeight: '500 !important',
})

const navStyle = css({
  padding: '15px 20px',
  marginBottom: '100px',
  '@media (max-width: 600px)': {
    marginBottom: '30px',
  },
})

const nameStyle = css({
  textTransform: 'uppercase',
  textAlign: 'center',
  fontSize: '24px',
  fontWeight: '500',
  margin: 0,
  lineHeight: '1',
  userSelect: 'none',
}, select('> a', {
  color: '#000000',
}))

const burgerMenuStyle = {
  position: 'absolute',
  top: 14,
  left: 20,
  cursor: 'pointer',
}

const burgerMenuOpenStyle = css(
  burgerMenuStyle,
  select('> line:nth-child(1)', {
    transform: 'translateX(1.5px) rotate(45deg)',
  }),
  select('> line:nth-child(2)', {
    opacity: 0,
  }),
  select('> line:nth-child(3)', {
    transform: 'translateX(-7px) translateY(8.5px) rotate(-45deg)',
  })
)

const burgerMenuClosedStyle = css({
  ...burgerMenuStyle,
})

const burgerMenuLineStyle = {
  stroke: '#000000',
  strokeWidth: '2px',
  transition: 'transform .2s ease',
}

const burgerMenuLineOneStyle = css({
  ...burgerMenuLineStyle,
})

const burgerMenuLineTwoStyle = css({
  ...burgerMenuLineStyle,
})

const burgerMenuLineThreeStyle = css({
  ...burgerMenuLineStyle,
})

const menuStyle = {
  position: 'absolute',
  top: 60,
  left: '-120%',
  width: '100%',
  height: '100%',
  backgroundColor: '#ffffff',
  transition: 'transform 0.3s ease-in',
}

const menuOpenStyle = css({
  ...menuStyle,
  transform: 'translateX(120%)',
})

const menuClosedStyle = css({
  ...menuStyle,
})

const listStyle = css({
  listStyle: 'none',
  margin: '3px 0 0',
  padding: '20px 70px',
}, select('> li a', {
  display: 'inline-block',
  fontSize: 24,
  lineHeight: '1.6',
  color: '#000000',
  userSelect: 'none',
  ':hover': {
    color: '#000000',
    opacity: '0.7',
  },
}))

const socialIconsStyle = css({
  position: 'absolute',
  top: 18,
  right: 20,
})

const twitterIconStyle = css({
  width: 12,
  margin: '0 15px 0 0',
  ':hover': {
    opacity: '0.7',
  }
})

const githubIconStyle = css({
  width: 12,
  margin: 0,
  ':hover': {
    opacity: '0.7',
  }
})

const pdfIconStyle = css({
  height: 16,
  marginLeft: 6,
})