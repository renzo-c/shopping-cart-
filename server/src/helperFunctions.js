export const generateOrderNumber = (num) => {
  let numToStr = num.toString().split('');
  for (let i = numToStr.length; i < 4; i++) {
    numToStr.unshift(0);
  }
  numToStr.unshift('P');
  return numToStr.join('');
};
