---
layout: default
sid: "usage"
title: "Usage"
---

```javascript
import React from 'react';
import Popover from '@terebentina/react-popover';

import '@terebentina/react-popover/lib/styles.css';

class MyComponent extends React.Component {
 render() {
    return (
      <div>
        If you want to see a nice popover 
        <Popover position="bottom" className="awesome" trigger="click me">
          here I am in all my glory!
        </Popover>
      </div>
    );
```

Importing the default styles is optional. You can either import them from here or from your sass files and overwrite or not import them at all and implement them yourself. The html structure is very [simple and clear](#htmlstruct).
