
window.addEventListener(`DOMContentLoaded`, () => {
  var storyhandler = new StoryHandler();
  renderHeadlines();

  function renderHeadlines() {
    storyhandler.stories.then(function (allStories) {
      document.getElementById('article1').innerHTML = allStories[0].headline;
      document.getElementById('article2').innerHTML = allStories[1].headline
    });
  }
});

