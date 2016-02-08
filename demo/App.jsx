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
			<PopoverWrapper>
				<header>
					<h1>React Popover</h1>
					<a href="https://github.com/terebentina/react-popover">https://github.com/terebentina/react-popover</a>
				</header>
				<p>Click the various triggers below and observe the different popover positions, different type of triggers as well as simple or complex popover contents.</p>
				<p>Also note how, whenever you click away from a popover, it closes as you would expect from a true popover. I hate when you need to re-click the trigger to close the popover - possibly leaving you with several open popovers on a page.</p>
				<p>But, if you truly want that, you can do that too. See the docs on github</p>

				<div className="box">
					<p>Your "trigger" can be anything you want: a simple text or html: <Popover trigger="open above" position="top">lorem ipsum...</Popover></p>
					<div>You can use complex html for the popover content:
						<Popover className="menu" trigger={<span></span>} position="bottom">
							<a href="#" onClick={this.menuClick}>Profile</a>
							<a href="#" onClick={this.menuClick}>Settings</a>
							<a href="#" onClick={this.menuClick}>Log Out</a>
						</Popover>
					</div>

					<p>The popover component comes with minimal styling by default but if you're feeling nostalgic you can style it however you want: <Popover trigger={<span>web 2.0 nostalgia</span>} position="right" className="web20">popover content</Popover></p>
				</div>
			</PopoverWrapper>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('react'));
