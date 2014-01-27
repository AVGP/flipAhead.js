describe("flipAhead", function() {
  it("should be exported to the window scope", function() {
    expect(window.FlipAhead).toBeTruthy();
  });
  
  it("should react to two-finger swipe right", function() {
    document.head.innerHTML += "<link rel='prev' href='prev.html' /><link rel='next' href='next.html' />";

    var testWnd = {
      location:{
        href: "http://www.website.com?varName=foo"
      }
    },
    testFlipAhead = flipAhead(testWnd);
    
    testFlipAhead.handle({
      type: "touchstart",
      touches: [
        {
          clientX: 100,
          clientY: 100
        },
        {
          clientX: 120,
          clientY: 200
        }
      ],
      preventDefault: function() {}
    });
    
    testFlipAhead.handle({
      type: "touchend",
      changedTouches: [
        {
          clientX: 200,
          clientY: 100
        },
        {
          clientX: 220,
          clientY: 200
        }
      ],
      preventDefault: function() {}
    });
    
    expect(testWnd.location.href).toBe(window.location.href.replace("context.html","prev.html"));
  });
  
  it("should react to two-finger swipe left", function() {
    document.head.innerHTML += "<link rel='prev' href='prev.html' /><link rel='next' href='next.html' />";

    var testWnd = {
      location:{
        href: "http://www.website.com?varName=foo"
      }
    },
    testFlipAhead = flipAhead(testWnd);
    
    testFlipAhead.handle({
      type: "touchstart",
      touches: [
        {
          clientX: 250,
          clientY: 100,
          identifier: 1
        },
        {
          clientX: 150,
          clientY: 200,
          identifier: 2
        }
      ],
      preventDefault: function() {}
    });
    
    testFlipAhead.handle({
      type: "touchend",
      changedTouches: [
        {
          clientX: 200,
          clientY: 100,
          identifier: 1
        },
        {
          clientX: 100,
          clientY: 200,
          identifier: 2
        }
      ],
      preventDefault: function() {}
    });
    
    expect(testWnd.location.href).toBe(window.location.href.replace("context.html","next.html"));
  });
  
  it("should not do anything on a single finger swipe", function() {
    document.head.innerHTML += "<link rel='previous' href='prev.html' /><link rel='next' href='next.html' />";

    var testWnd = {
      location:{
        href: "http://www.website.com?varName=foo"
      }
    },
    testFlipAhead = flipAhead(testWnd);
    
    testFlipAhead.handle({
      type: "touchstart",
      touches: [
        {
          clientX: 250,
          clientY: 100
        }
      ],
      preventDefault: function() {}
    });
    
    testFlipAhead.handle({
      type: "touchend",
      changedTouches: [
        {
          clientX: 200,
          clientY: 100
        }
      ],
      preventDefault: function() {}
    });
    
    expect(testWnd.location.href).not.toBe(window.location.href.replace("context.html","next.html"));
  });
  
  it("should not do anything on a swipe with more than 2 fingers", function() {
    document.head.innerHTML += "<link rel='previous' href='prev.html' /><link rel='next' href='next.html' />";

    var testWnd = {
      location:{
        href: "http://www.website.com?varName=foo"
      }
    },
    testFlipAhead = flipAhead(testWnd);
    
    testFlipAhead.handle({
      type: "touchstart",
      touches: [
        {
          clientX: 250,
          clientY: 100
        },
        {
          clientX: 250,
          clientY: 130
        },
        {
          clientX: 250,
          clientY: 160
        },

      ],
      preventDefault: function() {}
    });
    
    testFlipAhead.handle({
      type: "touchend",
      changedTouches: [
        {
          clientX: 200,
          clientY: 100
        }
      ],
      preventDefault: function() {}
    });
    
    expect(testWnd.location.href).not.toBe(window.location.href.replace("context.html","next.html"));
  });
  
  it("should not cancel touchend with less than two started gesture points", function() {
    document.head.innerHTML += "<link rel='previous' href='prev.html' /><link rel='next' href='next.html' />";

    var testWnd = {
      location:{
        href: "http://www.website.com?varName=foo"
      }
    },
    testFlipAhead = flipAhead(testWnd);
    
    var event = {
      type: "touchend",
      changedTouches: [
        {
          clientX: 250,
          clientY: 100
        }
      ],
      preventDefault: function() {}
    };
    
    spyOn(event, "preventDefault");
    testFlipAhead.handle(event);
    
    expect(event.preventDefault).not.toHaveBeenCalled();
  });
  
  
});
