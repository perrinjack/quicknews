window.addEventListener(`DOMContentLoaded`, () => {
  var storyhandler = new StoryHandler();

  renderHeadlines(storyhandler);

  function renderHeadlines(input) {
    input.stories.then(function (story) {
      document.getElementById('app').innerHTML = story[0].wrapHeadlineHtml();
    });
  }
});
