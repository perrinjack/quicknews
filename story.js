class Story {
  constructor(id, headline) {
    this.id = id;
    this.headline = headline;
  }

  wrapHeadlineHtml() {
    return `<li>${this.headline}</li>`;
  }
}
