import React from "react";
import {
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Collapse,
} from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "../../assets/css/styles.css";

export default class NavExample extends React.Component {
	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);

		this.state = {
			collapseOpen: false,
		};
	}

	toggleNavbar() {
		this.setState({
			...this.state,
			...{
				collapseOpen: !this.state.collapseOpen,
			},
		});
	}

	render() {
		return (
			<Navbar className="navbar" type="light" expand="md">
				<NavbarBrand className="navbar-name" href="#/">
					Sajal Sharma
				</NavbarBrand>

				<NavbarToggler onClick={this.toggleNavbar} />

				<Collapse className="collapse" open={this.state.collapseOpen} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink className="navbar-link" href="#/">
								Home
							</NavLink>
						</NavItem>

						<NavItem>
							<NavLink className="navbar-link" href="#/about">
								About
							</NavLink>
						</NavItem>

						<NavItem>
							<NavLink className="navbar-link" href="#/education">
								Education
							</NavLink>
						</NavItem>

						<NavItem>
							<NavLink className="navbar-link" href="#/experience">
								Experience
							</NavLink>
						</NavItem>

						{/* <NavItem>
							<NavLink className="navbar-link" href="#/photography">
								Photography
							</NavLink>
						</NavItem> */}
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}
