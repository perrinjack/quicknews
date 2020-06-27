
window.addEventListener(`DOMContentLoaded`, () => {
  var storyhandler = new StoryHandler();
  renderHeadlines();

  function renderHeadlines() {
    storyhandler.stories.then(function (allStories) {
      document.getElementById('app').innerHTML = storyhandler.wrapHeadlines(
        allStories
      );
    });
  }
});

