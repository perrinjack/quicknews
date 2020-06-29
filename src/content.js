class Content {
  constructor(id) {
    this.content = this.getText(id);
    this.id = id;
  }

  async getText(id) {
    let response = await fetch(
      `https://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/${id}`
    );

    let json = await response.json();

    return json.sentences;
  }
}
