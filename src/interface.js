window.addEventListener(`DOMContentLoaded`, () => {
  var storyhandler = new StoryHandler();

  renderNews();

  window.addEventListener('hashchange', function () {
    var id = window.location.hash.slice('#').substr(1);
    var contenthandler = new Content(id);

    renderContent(contenthandler);
  });

  function renderNews() {
    storyhandler.stories.then(function (allStories) {
      console.log(allStories);
      renderHeadlines(allStories);
      renderThumbnails(allStories);
      renderSections(allStories);
    });
  }
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
      ).innerHTML = `<a href='#${allStories[i].id}'><img src='${allStories[i].thumbnail}' class="img-responsive"></img></a>`;
    }
  }

  function renderContent(contenthandler) {
    contenthandler.content.then(function (sentences) {
      storyhandler.findStoryById(contenthandler.id).then(function (story) {
        
        document.getElementById(
          `page`
        ).innerHTML = `<div class='row fh5co-post-entry single-entry'><article class='col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0'><h2 class="headline" >${story.headline}</h2><figure><img class = "main_image" src='${story.thumbnail}' class='img-responsive'></figure><div class='col-md-12'><p>${sentences}</p></div></article></div>`;
      });
    });
  }
});
