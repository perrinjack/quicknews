window.addEventListener('DOMContentLoaded', function (event) {
  renderHeadlines();
});

function renderHeadlines() {
  var storyhandler = new StoryHandler();
  storyhandler.getStories();

  document.getElementById('list').innerHTML = storyhandler.getStories();;
}
