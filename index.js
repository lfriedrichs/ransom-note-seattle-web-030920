function buildHistogram(array) {
  const histogram = {}
  array.forEach(l => {
    if (histogram[l]) {
      histogram[l] += 1;
    } else {
      histogram[l] = 1;
    }
  })
  return histogram
}

function canBuildNote(array, note) {
  const histogram = buildHistogram(array);
  const noteContent = buildHistogram(note.split('').filter(letter => letter !== ' '));
  let answer = true;
  for (var key in noteContent) {
    if (histogram[key]) {
      if (histogram[key] !== 0) {
        histogram[key] -= 1;
      } else {
        answer = false
        console.log(false)
      }
    } else {
      answer = false
    }
  }
  return answer
}
