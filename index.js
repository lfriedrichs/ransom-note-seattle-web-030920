function buildHistogram(array) {
  const histogram = {}
  return histogram
}

function canBuildNote(array, note) {
  const histogram = buildHistogram(array);
  const noteContent = buildHistogram(note.split(''));
  for (var key in noteContent) {
    if (histogram[key]) {
      if (histogram[key] === 0) {
        return false
      } else {
        histogram[key] -= 1;
      }
    }
  }
  return histogram
}
