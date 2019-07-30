function getTimestamp() {
  let d = new Date();
  return d.getTime();
}

//first = getTimestamp()
//second = getTimestamp()
//second - first

function randomDivId() {
  let d = Math.floor(Math.random() * 6) + 1;
  let n = Math.floor(Math.random() * 6) + 1;
  return `#slot-${d}${n}`;
}
//возвращает селектор для выбора случайного 
//дива из 36 располженных в разметке.
