class Story {
  constructor(id, headline, thumbnail) {
    this.id = id;
    this.headline = headline;
    this.thumbnail = thumbnail;
  }

  wrapHeadlineHtml() {
    return `<a href = 'http://guardian.co.uk/${this.id}'><img src="${this.thumbnail}" ><<li>${this.headline}</li></a>`;
  }
}
