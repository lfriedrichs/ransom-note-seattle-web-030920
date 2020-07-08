function buildHistogram(array) {
  const histogram = {}
  array.forEach
  return histogram
}

function canBuildNote(array, note) {
  const histogram = buildHistogram(array);
  const noteContent = buildHistogram(note.split('').filter(letter => letter !== ' '));
  let answer = true;
  for (var key in noteContent) {
    if (histogram[key]) {
      if (histogram[key] === 0) {
        asnwer = false
      } else {
        histogram[key] -= 1;
      }
    } else {
      answer = false
    }
  }
  return answer
}
