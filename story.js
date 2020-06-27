class Story {
  constructor(id, headline, thumbnail) {
    this.id = id;
    this.headline = headline;
    this.thumbnail = thumbnail
  }

  wrapHeadlineHtml() {
    return `<img src="${this.thumbnail}" ><li>${this.headline}</li>`;
  }
}
