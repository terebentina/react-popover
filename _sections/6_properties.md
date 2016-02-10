---
layout: default
sid: "properties"
title: "Properties"
---

- `position` one of `bottom`, `top`, `left`, `right` to specify where the content should appear relative to the trigger element. Defaults to `top` if not specified. Adds the `popover--<position>` class to the main div (e.g. `position--left`).
- `className` classes that you want added to the main div. These can help you style the trigger and content any way you like.
- `trigger` a simple string or a react node (e.g. `<Popover trigger="click me" />` or `<Popover trigger={<span>or <strong>me</strong></span>} />`). Whatever you use here is going to be wrapped into an
`<a>` element and be used as the trigger for the popover. So don't use an `<a>` here! With the examples above, this will become `<a href="#">click me</a>` and `<a href="#"><span>or <strong>me</strong></span></a>`.
 
