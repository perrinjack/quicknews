class Story {
  constructor(id, headline, thumbnail, sectionName) {
    this.id = id;
    this.headline = headline;
    this.thumbnail = thumbnail;
    this.sectionName = sectionName;
  }

  wrapHeadlineHtml() {
    return `<a href = 'http://guardian.co.uk/${this.id}'><img src="${this.thumbnail}" ><<li>${this.headline}</li></a>`;
  }
}
