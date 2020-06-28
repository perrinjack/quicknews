window.addEventListener(`DOMContentLoaded`, () => {
  var storyhandler = new StoryHandler();
  renderNews();

  window.addEventListener('hashchange', function () {
    // var id = window.location.hash.slice('#')[6];
    
    document.getElementById(`page`).innerHTML = "<div class='row fh5co-post-entry single-entry'><article class='col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0'><figure><img src='images/hello.jpg' class='img-responsive'></figure><div class='col-md-12'><p>Far far away, behind the word mountains, ff sentences fly into your mouth.</p></div></article></div>"
  });

  
						
  

  function renderNews() {
    storyhandler.stories.then(function (allStories) {
      renderHeadlines(allStories);
      renderThumbnails(allStories);
      renderSections(allStories);
    });

    function renderHeadlines(allStories) {
      var i;
      for (i = 0; i < allStories.length; i++) {
        document.getElementById(`article${i + 1}`).innerHTML =
          allStories[i].headline;
      }
    }

    function renderSections(allStories) {
      var i;
      for (i = 0; i < allStories.length; i++) {
        document.getElementById(`section${i + 1}`).innerHTML =
          allStories[i].sectionName;
      }
    }

    function renderThumbnails(allStories) {
      var i;
      for (i = 0; i < allStories.length; i++) {
        document.getElementById(
          `image${i + 1}`
        ).innerHTML = `<img src='${allStories[i].thumbnail}' class="img-responsive"></img>`;
      }
    }
  }
});
