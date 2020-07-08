function buildHistogram(array) {
  histogram = {}
  return histogram
}

function canBuildNote(array, note) {
  const histogram = buildHistogram(array);
  const noteContent = buildHistogram(note.split(''));
  noteContent.each(key, value => {
    if (histogram[key]) {
      if (histogram[key] === 0) {
        return false
      } else {
        histogram[key] -= 1;
      }
    }
  })
  return histogram
}
