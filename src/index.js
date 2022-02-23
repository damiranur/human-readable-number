module.exports = function toReadable(number) {
  const ones = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  let numberStr = number.toString();
  if (number === 0) return 'zero';
  if (number < 20) {
    return ones[number];
  }
  if (numberStr.length === 2) {
    if (!ones[numberStr[1]]) {
      return tens[numberStr[0]];
    }
    return tens[numberStr[0]] + ' ' + ones[numberStr[1]];
  }
  if (numberStr.length === 3) {
    if (numberStr[1] === '0' && numberStr[2] === '0')
      return ones[numberStr[0]] + ' hundred';
    else
      return (
        ones[numberStr[0]] +
        ' hundred ' +
        toReadable(+(numberStr[1] + numberStr[2]))
      );
  }
  if (numString.length === 4) {
    const end = +(numberStr[1] + numberStr[2] + numberStr[3]);
    if (end === 0) return ones[numberStr[0]] + ' thousand';
    if (end < 100) return ones[numberStr[0]] + ' thousand' + toReadable(end);
    return ones[numberStr[0]] + ' thousand ' + toReadable(end);
  }
};
