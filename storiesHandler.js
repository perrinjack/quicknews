class StoryHandler {
  constructor(guardianUrl = 'https://content.guardianapis.com/search') {
    this.GUARDIANURL = guardianUrl;
    this.QUERY_STRING = `?q=sport&page-size=1&api-key=8d81f046-2efd-4510-b987-0772a9c57adb`;
    this.URL = this.GUARDIANURL + this.QUERY_STRING;
    this.stories = this.createStoryObjects();
  }

  ////stories received.
  async getStories() {
    let response = await fetch(this.URL);
    let json = await response.json();
    console.log(json);
    return json.response.results;
  }

  async createStoryObjects() {
    var data = await this.getStories();
    var storiesArray = data.map((x) => new Story(x.id, x.webTitle));
    console.log(storiesArray);
    return storiesArray;
  }
}
