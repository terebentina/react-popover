---
layout: default
sid: "htmlstruct"
title: "Html Structure"
---

The popover is rendered with the following html:

```html
<div class="popover popover--bottom popover--active">
  <a href="#" class="popover_trigger">your trigger here</a>
  <div class="popover_content">
    your content here
  </div>
</div>
```

- `.popover--active` is added when the popover is shown (and removed when hidden).
- `.popover--top`, `.popover--bottom`, `.popover--left`, `.popover--right` the position of the content relative to the trigger.
- any class you add to the popover component is also added on `div.popover` (`<Popover className="foo" ...`). See below.
