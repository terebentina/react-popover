import React from 'react';
import ReactDOM from 'react-dom';
import { PopoverWrapper, Popover } from '../lib/index.js';

import '../src/Popover.scss';

class App extends React.Component {
	menuClick(e) {
		e.preventDefault();
		console.log('menu item clicked');
	}

	render() {
		return (
			<PopoverWrapper className="box">
				<p>Your "trigger" can be anything you want: a simple text or html: <Popover trigger="open above" position="top">lorem ipsum...</Popover></p>
				<div>You can use complex html for the popover content:
					<Popover className="menu" trigger={<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28"><path d="M24 21v2q0 0.406-0.297 0.703t-0.703 0.297h-22q-0.406 0-0.703-0.297t-0.297-0.703v-2q0-0.406 0.297-0.703t0.703-0.297h22q0.406 0 0.703 0.297t0.297 0.703zM24 13v2q0 0.406-0.297 0.703t-0.703 0.297h-22q-0.406 0-0.703-0.297t-0.297-0.703v-2q0-0.406 0.297-0.703t0.703-0.297h22q0.406 0 0.703 0.297t0.297 0.703zM24 5v2q0 0.406-0.297 0.703t-0.703 0.297h-22q-0.406 0-0.703-0.297t-0.297-0.703v-2q0-0.406 0.297-0.703t0.703-0.297h22q0.406 0 0.703 0.297t0.297 0.703z"></path></svg>} position="bottom">
						<a href="#" onClick={this.menuClick}>Profile</a>
						<a href="#" onClick={this.menuClick}>Settings</a>
						<a href="#" onClick={this.menuClick}>Log Out</a>
					</Popover>
				</div>

				<p>The popover component comes with minimal styling by default but you can style it however you want:
					<Popover trigger={<span>web 2.0 nostalgia</span>} position="right" className="web20">
						I am oh so pretty :)
						<span className="beta">beta</span>
					</Popover>
				</p>
			</PopoverWrapper>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('react'));
