import React, { Component } from 'react';

class Header extends Component {
	state = {};
	render() {
		return (
			<header id="home">
				<div className="intro">
					<div id="particles" />
					<div className="intro-text">
						<img src="img/profilepic.jpg" alt="Kelvin" className="profilepic fade-in" />

						<h1 className="intro-title fade-in">Kelvin Chua</h1>

						<h3 className="fade-in">Software Developer</h3>

						<ul className="social fade-in">
							<li>
								<a href="https://facebook.com/kelvinzter" target="_blank">
									<i className="fab fa-facebook" />
								</a>
							</li>
							<li>
								<a href="https://twitter.com/Kelvinzter" target="_blank">
									<i className="fab fa-twitter" />
								</a>
							</li>
							<li>
								<a href="https://instagram.com/kelvinzter" target="_blank">
									<i className="fab fa-instagram" />
								</a>
							</li>

							<li>
								<a href="https://linkedin.com/in/kelvinchuafoolong" target="_blank">
									<i className="fab fa-linkedin" />
								</a>
							</li>

							<li>
								<a href="https://kelvinchuafoolong.wixsite.com/portfolio" target="_blank">
									<i className="fas fa-globe" />
								</a>
							</li>
						</ul>

						<div className="contact fade-in">
							<a href="../res/KelvinChuaFooLongResume.pdf" className="btn btn-default" target="_blank">
								Download CV
							</a>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
