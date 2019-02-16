import React from 'react'
import { Link, navigate } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import './index.less'

import Eras from '../images/projects/eras.jpg'
import EDI from '../images/projects/edi.jpg'
import Arcurve from '../images/projects/arcurve.jpg'

class IndexPage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			projects_bg: 'black',
			scrollHeight: 0
		}
		
	}

	handle_click = (e) => {
        e.preventDefault();
        document.body.classList.add('cover');
        setTimeout(() => {
            navigate("/who-we-are")
        }, 700);
    }


	handle_mouse_enter = (color) => {
		this.setState({ projects_bg: color })
	}

	handle_mouse_leave = () => {
		this.setState({ projects_bg: 'black' })
	}

	componentDidMount = () => {
		document.body.classList.add('remove');
		document.body.classList.remove('stop-scroll');
		setTimeout(() => {
			document.body.classList.remove('cover', 'remove');
		}, 600);

		window.onscroll = () => {
			const { scrollHeight } = this.state;
			const newScrollHeight = window.scrollY;
			if(scrollHeight !== newScrollHeight) {
				this.setState({
					scrollHeight: newScrollHeight
				})
			}
		}
	}

	

	render() {
		const logoOpacity = ( this.state.scrollHeight < 350 ) ? Math.min(8 / this.state.scrollHeight, 1) : 0;
		const opacity = ( this.state.scrollHeight < 350 ) ? Math.min(50 / this.state.scrollHeight, 1) : 0;

		return(

		<Layout menuTop={this.state.scrollHeight} opacity={logoOpacity}>
			<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
			<section className="home hero" data-uk-scrollspy="cls:uk-animation-fade">
				<div className="uk-container uk-flex uk-flex-center uk-flex-middle" data-uk-height-viewport="expand: true">
					<h1 style={{opacity: opacity}} className="uk-text-center">
						We are a User Experience
					<br />
						and Web Development Studio
				</h1>
				</div>
			</section>

			<section className="home intro">
				<div className="uk-container">
					<div className="text">
						<p>
							Branding is like a battlefield with inadequately-armed soldiers: mediocrity rules. Can you succeed if you only have the basic equipment? No way, Jose. Only when you know who you are can you become whatever you want.
						</p>
						<p>
							Stuurmen strips companies down and exposes the DNA right down to the hair follicles. We turn burning ambition into brand strategy and arm you with digital awesomeness. Kill off the average – mediocrity is way too boring. <span role="img" aria-label="Enso">🙌🏻🔥</span>
						</p>
					</div>
				</div>
			</section>

			<section className="home projects">
				<div className="uk-container-expand">
					<ul className="featured-projects">
						<li className="project-item">
							<Link className="inner" to="/projects?id=1">
								<div className="content">
									<h2>ERAS Cardiac</h2>
									<img src={Eras} alt="ERAS" />
								</div>
							</Link>
						</li>
						<li className="background" style={{ background: '#000EE1' }}></li>
						<li className="project-item">
							<Link className="inner" to="/projects?id=2">
								<div className="content">
									<h2>Everyday Icing</h2>
									<img src={EDI} alt="Everyday Icing" />
								</div>
							</Link>
						</li>
						<li className="background" style={{ background: '#008EAA' }}></li>
						<li className="project-item last">
							<Link className="inner" to="/projects?id=3">
								<div className="content">
									<h2>Arcurve</h2>
									<img src={Arcurve} alt="Arcurve" />
								</div>
							</Link>
						</li>
						<li className="background" style={{ background: '#961A1F' }}></li>
					</ul>
				</div>
			</section>
			<section className="feature-projects-bottom">
				<div>
					<Link to="/who-we-are"><span onClick={this.handle_click}>Who we are</span></Link>
				</div>
			</section>
		</Layout>
		)
	}
}

export default IndexPage
