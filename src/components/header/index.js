import { Link, navigate } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import DarkLogo from './logo-dark'
import LightLogo from './light-logo'
import './header.less'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuActive: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handle_click = this.handle_click.bind(this);
    this.menu_nav = this.menu_nav.bind(this);
  }

  componentDidMount = () => {
    setTimeout(() => {
      document.body.classList.add('remove-initial');
    }, 200);
    setTimeout(() => {
      document.body.classList.remove('cover-initial', 'remove-initial');
    }, 800);
  }

  handle_click = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.location.pathname !== '/') {
      document.body.classList.add('cover');
      setTimeout(() => {
        navigate("/")
      }, 700);
    }
  }

  menu_nav = (e, val) => {
    document.body.classList.add('cover');
    setTimeout(() => {
      navigate(val)
    }, 700);
  }

  handleClick = () => {
		this.setState({
			menuActive: !this.state.menuActive
    })
    !this.state.menuActive ? document.body.classList.add('stop-scroll') : document.body.classList.remove('stop-scroll');
	}
  render() {
    return (
      <header>
        <div className={!this.state.menuActive ? "hide-menu menu-slider" : "menu-slider"}>
					<div>
						<h4>WORK</h4>
						<h1 onClick={ (e) => this.menu_nav(e, '/projects')}>Featured projects</h1>
					</div>
					<div>
						<h4>STUDIO</h4>
						<h1 onClick={ (e) => this.menu_nav(e, '/who-we-are')}>Who we are</h1>
					</div>
					<div>
						<h4>CONTACT</h4>
						<h1 onClick={ (e) => this.menu_nav(e, '/lets-talk')}>Let's talk</h1>
					</div>
				</div>
        {
          (window.location.pathname === '/')

          ?

          <Link to="/" onClick={(e) => this.handle_click(e)}>
          <LightLogo opacity={this.props.opacity}/>
        </Link>

        :
        <Link to="/" onClick={(e) => this.handle_click(e)}>
          <DarkLogo opacity={this.props.opacity}/>
        </Link>
        
        }
        
        <button 
          className="menu-button uk-button-link" 
          onClick={() => this.handleClick()}>
          <span className={this.state.menuActive ? "top-bar-x" : "top-bar-menu"}></span>
          <span className={this.state.menuActive ? "hide" : "show"}></span>
          <span className={this.state.menuActive ? "bottom-bar-x" : "bottom-bar-menu"}></span>
        </button>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  opacity: PropTypes.number,
  handler: PropTypes.func,
  menuTop: PropTypes.number
}

Header.defaultProps = {
  siteTitle: ``,
  opacity: 1,
  menuTop: -100
}

export default Header
