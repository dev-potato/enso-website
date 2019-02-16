import React from 'react'
import { Link, navigate } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import './who-we-are.less'

import Image1 from '../images/who-we-are/who-we-are-1.png'
import Image2 from '../images/who-we-are/who-we-are-2.png'
import Image3 from '../images/who-we-are/who-we-are-3.png'
import Image4 from '../images/who-we-are/who-we-are-4.png'
import Image5 from '../images/who-we-are/who-we-are-5.png'

let img_left = 0
let text_style = { transform: "translateX(0px)" }
let text_left = 0
let scrollDirection = 'down'

class SecondPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			current: 1,
			img_left: '0',
			scrollY: 0,
			scroll_text_position_start: 0,
			scroll_text_position_end: 0,
			text_width: 0,
			text_container_height: this.window_h(),
			heading: 'hidden'
		}
	}

	
	handle_scroll = (e) => {

		this.setState({
			scrollY: window.pageYOffset
		})

		if (this.prevScroll > window.scrollY) {
			scrollDirection = 'up'
		}
		else if (this.prevScroll < window.scrollY) {
			scrollDirection = 'down'
		}
		this.prevScroll = window.scrollY;

	}

	window_h = () => { return typeof window !== 'undefined' ? window.innerHeight : 0}
	window_w = () => { return typeof window !== 'undefined' ? window.innerWidth : 0}

	componentDidMount = () => {
		document.body.classList.remove('stop-scroll')
		window.addEventListener("scroll", this.handle_scroll, false);

		this.prevScroll = window.scrollY

		let text_length = 0
		if (document.getElementById('text_scroll_container')) {
			text_length = document.getElementById('text_scroll_container').offsetWidth - this.window_w()
		}

		text_length = text_length > 0 ? text_length : 0;

		this.setState({
			scroll_text_position_start: document.getElementById('text_scroll') ? document.getElementById('text_scroll').offsetTop : 0,
			scroll_text_position_end: document.getElementById('text_scroll') ? document.getElementById('text_scroll').offsetTop + text_length : 0,
			text_container_height: text_length + this.window_h()
		})

		document.body.classList.add('remove');
		setTimeout(() => {
			document.body.classList.remove('cover', 'remove');
		}, 700);
		setTimeout(() => {
			this.setState({heading: 'visible'})
		}, 800);
	}

	componentWillUnmount = () => {
		window.removeEventListener("scroll", this.handle_scroll, false);
	}

	handle_click = (e) => {
		e.preventDefault();
		document.body.classList.add('cover');
		setTimeout(() => {
			navigate("/lets-talk")
		}, 700);
	}
	
	render() {

		let text_scroll = false

		if (this.window_h() * 2 > this.state.scrollY && this.state.scrollY < this.window_h() * 3) {
			if (scrollDirection === 'up') {
				img_left = img_left - 0.1
			}
			if (scrollDirection === 'down') {
				img_left = img_left + 0.1
			}
		}

		if (this.state.scrollY > this.state.scroll_text_position_end) {
			text_style = { transform: `translateX(-${text_left}px)`, top: 'auto', bottom: '0' };
			text_scroll = false;
		}
		else if (this.state.scrollY >= this.state.scroll_text_position_start) {
			text_left = this.state.scrollY - this.state.scroll_text_position_start;
			text_style = { transform: `translateX(-${text_left}px)` };
			text_scroll = true;
		}

		return <Layout>
			<SEO title="Who we are" />

			<section className="who-we-are hero" id="hero">
				<h1 className={this.state.heading}>
				We are creative agents of change
				<br /><Link to="/lets-talk" onClick={this.handle_click} className="temp-link">Let's talk</Link>
				</h1>
			</section>

			<section className="who-we-are image-scroll">
				<div className="image-container" style={{ transform: `translateX(-${img_left}%)`}}>
					<img src={Image1} alt="" />
					<img src={Image2} alt="" />
					<img src={Image3} alt="" />
					<img src={Image4} alt="" />
					<img src={Image5} alt="" />
				</div>
			</section>

			<section className="who-we-are text-scroll black-bg" id="text_scroll" style={{ height: `${this.state.text_container_height}px`}}>
				<div className={text_scroll ? "inner fixed" : 'inner'} id="text_scroll_container" style={ text_style }>
					<blockquote className="white-text">
						We envision, design and build modern digital experiences.
					</blockquote>
				</div>
			</section>

			<div className="who-we-are-intro-text black-bg custom-paddings">
				<div className="uk-container">
					<div className="uk-grid">
						<div className="uk-width-1-1">
							<p className="max-width white-text">
								We are a proud Canadian digital agency with a strong entrepreneurial spirit. Inspired by minimalist Japanese aesthetics and having outstanding customer service in our DNA, our mission is to create beautifully designed digital products that generate striking brands.
							</p>
						</div>
					</div>
				</div>
			</div>

			<section className="we-build custom-paddings">
				<div className="uk-container">
					<div className="uk-grid uk-flex">
						<div className="uk-width-1-1">
							<h1>We Build Products</h1>
						</div>

						<div className="uk-width-2-3@s content">
							<p>Websites, web applications and interactive environments deliver best-in-class user experiences on connected platforms and devices of all shapes and sizes.</p>
						</div>

						<div className="uk-width-1-3@s">
							<ul className="nav">
								<li>Web Apps</li>
								<li>Websites</li>
								<li>User Experience Design</li>
								<li>User Interface Design</li>
							</ul>
						</div>

					</div>
				</div>
			</section>

			<section className="feature-projects-bottom">
			  <div>
				<Link to="/lets-talk" onClick={this.handle_click.bind('hello')}><span>Let's Talk</span></Link>
			 </div>
			</section>

		</Layout>
	}
}

export default SecondPage
