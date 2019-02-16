import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import './projects.less'

import Eras from '../images/projects/eras.jpg'
import EDI from '../images/projects/edi.jpg'
import Arcurve from '../images/projects/arcurve.jpg'

let counter1 = 0;
let counter2 = 0;
let stopped = true;

let progress = false;

let is_scrolling = false;

const key_array = [37, 38, 39, 40, 32, 13]

class Project extends React.Component {


	constructor(props) {
		super(props);

		this.state = {
			current: 1,
			total: 3
		}

	}

	get = (q) => {
		let get = {};
		if (document.location.toString().indexOf('?') !== -1) {
			var query = document.location
				.toString()
				// get the query string
				.replace(/^.*?\?/, '')
				// and remove any existing hash string (thanks, @vrijdenker)
				.replace(/#.*$/, '')
				.split('&');

			for (var i = 0, l = query.length; i < l; i++) {
				var aux = decodeURIComponent(query[i]).split('=');
				get[aux[0]] = aux[1];
			}
		}
		if (q) {
			return get[q];
		}
		return get;
	}

	wheel = (e) => {

		e.preventDefault();

		is_scrolling = true;

		counter1++

		if (stopped) {

			console.log('started')

			this.change_slide();

			stopped = false;

			this.wheelAct();
			
		}

	}

	wheelAct = () => {
		counter2 = counter1;

		setTimeout(() => {
			if (counter2 === counter1) {
				this.wheelEnd();
			} else {
				this.wheelAct();
			}
		}, 50);
	}

	wheelEnd = () => {
		console.log('end')
		stopped = true
		counter1 = 0
		counter2 = 0
	}

	change_slide = () => {

		if (progress === false) {

			progress = true;

			if (this.state.current < this.state.total) {
				let next = this.state.current;
				next++
				this.setState({ current: next })
			}
			else {
				this.setState({ current: 1 })
			}

			setTimeout(() => {
				progress = false;
				setInterval(() => {
					this.detect_scrolling()
				}, 50);
			}, 750);
		}
		
	}

	detect_scrolling = () => {
		if (!is_scrolling) {
			this.wheelEnd();
			is_scrolling = false;
		}
	}

	handleKeyDown = (event) => {
		console.log(event.keyCode)
		if (key_array.includes(event.keyCode)) {
			this.change_slide();
		}
	}

	componentDidMount = () => {
		document.body.classList.add('remove');
        setTimeout(() => {
            document.body.classList.remove('cover', 'remove');
        }, 600);
		document.addEventListener("keydown", this.handleKeyDown);

		if (this.get('id')) {
			if (this.get('id') <= this.state.total) {
				this.setState({ current: parseInt(this.get('id')) })
			}
		}
	}

	componentWillUnmount = () => {
		document.removeEventListener("keydown", this.handleKeyDown);
	}

	render() {

		return <Layout header_logo="dark" header_menu="light">
			<SEO title="Projects" keywords={[`enso projects`, `enso digital`, `craft cms`, `react`, `gatsby`]} />

			<section className="project-container" onWheel={this.wheel} data-uk-scrollspy="cls:uk-animation-fade">
				<span className="backgrounds">
					<span className={this.state.current === 1 ? "eras active" : "eras"} style={{ background: '#000EE1' }}></span>
					<span className={this.state.current === 2 ? "edi active" : "edi"} style={{ background: '#008EAA' }}></span>
					<span className={this.state.current === 3 ? "arcurve active" : "arcurve"} style={{ background: '#961A1F' }}></span>
				</span>
				<div className="uk-container">
					<div className="uk-grid uk-flex uk-flex-middle viewport">
						<div className="uk-width-3-5@m">
							<div className="uk-grid" data-uk-height-match>
								<div className="uk-width-1-6@m uk-flex uk-flex-middle">
									<p className="pagination">
										<span className="number-container">
											<span className={this.state.current === 1 ? 'active' : ''}>01</span>
											<span className={this.state.current === 2 ? 'active' : ''}>02</span>
											<span className={this.state.current === 3 ? 'active' : ''}>03</span>
										</span> - 03
									</p>
								</div>
								<div className="uk-width-5-6@m">
									<div className="text-container uk-flex uk-flex-middle viewport">
										<div className={this.state.current === 1 ? "eras active" : "eras"}>
											<h1>ERAS Cardiac</h1>
											<p className="year">2018</p>
											<a href="https://erascardiac.org" target="_blank" rel="noopener noreferrer">View Project</a>
										</div>
										<div className={this.state.current === 2 ? "edi active" : "edi"}>
											<h1>Everyday Icing</h1>
											<p className="year">2018</p>
											<a href="https://everydayicing.com" target="_blank" rel="noopener noreferrer">View Project</a>
										</div>
										<div className={this.state.current === 3 ? "arcurve active" : "arcurve"}>
											<h1>Arcurve</h1>
											<p className="year">2018</p>
											<a href="https://arcurve.com" target="_blank" rel="noopener noreferrer">View Project</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="uk-width-2-5@m">
							<div className="img-container">
								<div className="inner">
									<img src={Eras} alt="ERAS" className={this.state.current === 1 ? 'active' : ''} />
									<img src={EDI} alt="Everyday Icing" className={this.state.current === 2 ? 'active' : ''} />
									<img src={Arcurve} alt="Arcurve" className={this.state.current === 3 ? 'active' : ''} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


		</Layout>
	}
}

export default Project
