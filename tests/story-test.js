function storesId() {
  var story = new Story('testid', 'headline');
  assert.isTrue(story.id === 'testid');
}

function storesHeadline() {
  var story = new Story('testid', 'headline');
  assert.isTrue(story.headline === 'headline');
}

storesId();
storesHeadline();
