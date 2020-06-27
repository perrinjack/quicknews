window.addEventListener(`DOMContentLoaded`, () => {
  var storyhandler = new StoryHandler();
  renderHeadlines(storyhandler);

  function renderHeadlines(input) {
    input.stories.then(function (allStories) {
      document.getElementById('app').innerHTML = input.wrapHeadlines(
        allStories
      );
    });
  }
});
