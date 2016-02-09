---
layout: default
sid: "htmlstruct"
title: "Html Structure"
---

The popover is rendered with the following html:

{% highlight html linenos %}
<div class="popover [yourClasses] [popover--active]">
  <a href="#" class="popover_trigger">your trigger here</a>
  <div class="popover_content">
    your content here
  </div>
</div>
{% endhighlight %}

The classes that appear in square brackets are optional: `yourClasses` are classes that you might add to the Popover component
in your code and `.popover--active` is added when the popover is shown (and removed when hidden).

