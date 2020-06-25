class StoryHandler {
  constructor(guardianUrl = 'https://content.guardianapis.com/search') {
    this.GUARDIANURL = guardianUrl;
    this.QUERY_STRING = `?q=sport&api-key=8d81f046-2efd-4510-b987-0772a9c57adb`;
    this.URL = this.GUARDIANURL + this.QUERY_STRING;
  }

  ////stories received.
  async getStories() {
    let response = await fetch(this.URL);
    let json = await response.json();
    let results = json.response.results;
    console.log(results);
    var storiesArray;
    storiesArray = results.map((x) => new Story(x.id, x.webTitle));
    console.log(storiesArray);
    return storiesArray;
  }
}
