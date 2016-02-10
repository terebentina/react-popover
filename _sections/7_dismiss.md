---
layout: default
sid: "dismiss"
title: "Dismiss on click"
---

A good UX shouldn't have multiple bits of information/context menus open all over the interface in the form of popovers. 
So, ideally, only 1 popover should be open at any one time.
As a well behaving popover, this popover closes when you click anywhere on the page, including when you open another popover.
To achieve this it needs a bit of help from you: you need to add a catch-all component in your most top level component so that clicks are caught and a close event is dispatched to all popovers.
Don't worry, this is very simple. Suppose you have the following structure:

```js
// App.jsx
import SubComponent from './SubComponent.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="myAwesomeApp">
        <SubComponent />
      </div>
    );
  }
}


// SubComponent.jsx
import Popover from '@terebentina/react-popover';

class SubComponent extends React.Component {
  render() {
    return (
      <div>
        <Popover trigger="click me">popover content</Popover>
      </div>
    );
  }
}
```

With the above structure the popover would be shown when clicking on `click me` and hidden when clicking it again but it won't disappear if you'd click anywhere else on the page. If that's all you ever
 wanted from a popover then you're good. But if not, see below:

```js
// App.jsx
import SubComponent from './SubComponent.jsx';
import { PopoverWrapper } from '@terebentina/react-popover';

class App extends React.Component {
  render() {
    return (
      <PopoverWrapper className="myAwesomeApp">
        <SubComponent />
      </PopoverWrapper>
    );
  }
}


// SubComponent.jsx same as above
```

The `PopoverWrapper` component returns a `<div>` with an `onClick` event attached. When the click on the trigger bubbles up through the DOM up to `PopoverWrapper`, it is caught there and a notification is then sent to 
 all popovers to close.
 
 Obviously, you could have kept the original structure and wrapped everything in PopoverWrapper:

```js
render() {
  return (
    <PopoverWrapper>
      <div className="myAwesomeApp">
        <SubComponent />
      </div>
    </PopoverWrapper>
  );
}
```
