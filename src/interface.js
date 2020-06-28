window.addEventListener(`DOMContentLoaded`, () => {
  var storyhandler = new StoryHandler();
  renderNews();

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
