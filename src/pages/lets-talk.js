import React from 'react'
import { Link, navigate } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import './lets-talk.less'

class SecondPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            box1: 'hidden',
            box2: 'hidden',
            box3: 'hidden'
        }
    }

    handle_click = (e) => {
        e.preventDefault();
        document.body.classList.add('cover');
        setTimeout(() => {
            navigate("/who-we-are")
        }, 700);
    }


    componentDidMount = () => {
        document.body.classList.add('remove');
        setTimeout(() => {
            document.body.classList.remove('cover', 'remove');
        }, 600);
        setTimeout(() => { this.setState({ box1: 'visible' }) }, 1000);
        setTimeout(() => { this.setState({ box2: 'visible' }) }, 1500);
        setTimeout(() => { this.setState({ box3: 'visible' }) }, 2000);
        document.body.classList.remove('scroll-stop');
    }

    render() {

        return <Layout>
            <SEO title="Let's Talk" />

            <section className="contact hero" id="hero">

                <div className="uk-container">
                    <div className="contact-content">
                        <div className={"section " + this.state.box1}>
                            <span>General Inquiries & New Business</span>
                            <p><a href="mailto:hello@ensodigital.ca">hello@ensodigital.ca</a></p>
                            <p><a href="tel:+14039922740">(403) 992-2740</a></p>
                        </div>

                        <div className={"section " + this.state.box2}>
                            <span>Location</span>
                            <address>
                                630 8 Ave SW #600<br />
                                Calgary, AB
                            </address>
                        </div>

                        <div className={"section " + this.state.box3}>
                            <span>Follow us</span>
                            <p><a href="https://www.instagram.com/ensodigital" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                            <p><a href="https://www.facebook.com/ensodigital.ca" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                            <p><a href="https://www.linkedin.com/company/ensodigital" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
                            <Link to="/who-we-are" onClick={this.handle_click.bind('hello')} className="temp-link">who we are</Link>
                        </div>
                    </div>
                </div>

            </section>



        </Layout>
    }
}

export default SecondPage
