class StoryHandler {
  constructor(guardianUrl = 'https://content.guardianapis.com/search') {
    this.GUARDIANURL = guardianUrl;
    this.QUERY_STRING = `?page-size=4&api-key=8d81f046-2efd-4510-b987-0772a9c57adb&show-fields=thumbnail`;
    this.URL = this.GUARDIANURL + this.QUERY_STRING;
    this.stories = this.createStoryObjects();
  }

  ////stories data received.
  async getStoriesData() {
    let response = await fetch(this.URL);
    let json = await response.json();
    // console.log(json);
    return json.response.results;
  }
  ///create objects of the stories.
  async createStoryObjects() {
    var data = await this.getStoriesData();
    console.log(data);
    var storiesArray = data.map(
      (story) =>
        new Story(
          story.id,
          story.webTitle,
          story.fields.thumbnail,
          story.sectionName
        )
    );

    return storiesArray; ///returns a list of stories wrapped in a promise
  }
  //Take the stories as an argument. and wrapHeadline method on each one.
  wrapHeadlines(stories) {
    var hello = stories.map((x) => x.wrapHeadlineHtml());
    console.log(hello);
    return hello.join();
  }

  async findStoryById(id) {
    var stoz = await this.stories;

    if (stoz[2].id === id) {
      var story = stoz[2];
    }
    return story;
  }
}
