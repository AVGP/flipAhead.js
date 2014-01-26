describe("flipAhead", function() {
  it("should be exported to the window scope", function() {
    expect(window.FlipAhead).toBeTruthy();
  });
  
  it("should react to touch events", function() {
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
          clientX: 100,
          clientY: 100
        },
        {
          clientX: 120,
          clientY: 200
        }
      ]
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
      ]
    });
    
    expect(testWnd.location.href).toBe(window.location.href.replace("context.html","next.html"));
  });
  
  it("should react to touch events", function() {
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
          clientX: 150,
          clientY: 200
        }
      ]
    });
    
    testFlipAhead.handle({
      type: "touchend",
      changedTouches: [
        {
          clientX: 200,
          clientY: 100
        },
        {
          clientX: 100,
          clientY: 200
        }
      ]
    });
    
    expect(testWnd.location.href).toBe(window.location.href.replace("context.html","prev.html"));
  });
  
});