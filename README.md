flipAhead.js
============

[![Build Status](https://drone.io/github.com/AVGP/flipAhead.js/status.png)](https://drone.io/github.com/AVGP/flipAhead.js/latest)

I like [flip ahead browsing](http://msdn.microsoft.com/en-us/library/ie/jj883726.aspx) for websites like magazines or blogs. 
Unluckily it's only supported in Internet Explorer, so I made this tiny lib to give it to all browsers. Swipe with two fingers to navigate between pages.

To enable your page for flip ahead, just add one or both of the following link tags to your page's ``<head>``:

```html 
    <link rel="next" href="nextpage.html" />
    <link rel="prev" href="prevpage.html" />
```

where ``prevpage.html`` and ``nextpage.html`` shall be replaced by the URL to the previous, respectively next, content. 

Say you use this on your blog then it would make sense to use the blog posts before and after the currently displayed one. 

To allow the two finger scroll in every modern browser, include flipAhead.js and initialise it like this:

```Javascript 
    document.body.addEventListener("touchstart", FlipAhead.handle);
    document.body.addEventListener("touchend", FlipAhead.handle);
```

Check out [a live demo here](http://avgp.github.io/flipAhead.js/demo)
