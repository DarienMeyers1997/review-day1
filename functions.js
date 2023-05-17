const returnEmptyString = function () {
  return "";
};

const returnZeroNumber = function () {
  return 0;
};

const returnEmptyArray = function () {
  return [];
};

const returnEmptyObject = function () {};

const returnAbcString = function (value) {
  value = ["a", "b", "c"];
  return value;
};

const returnSumOfTwo = function (arg1, arg2) {
  return arg1 + arg2;
};

const subtraction = function (arg1, arg2) {
  return arg1 - arg2;
};

const multiplication = function (arg1, arg2) {
  return arg1 * arg2;
};

const division = function (arg1, arg2) {
  return arg1 / arg2;
};

const returnArray = function (arg1) {
  arg1 = ["five", "six", "seven"];
  return arg1;
};

const returnFirstIndex = function (arg1) {
  arg1 = ["ind1", "ind2", "ind3", "ind4"];
  arg1.find(arg1.indexOf(1));
};

const returnSecondIndex = function (arg1) {
  arg1 = ["ind1", "ind2", "ind3", "ind4"];
  return arg1.find(arg1.indexOf(2));
};

const returnArrayLength = function (arg1) {
  arg1 = ["ind1", "ind2", "ind3", "ind4"];
  return arg1.length;
};

const arraySum = function (arg1, sum) {
  sum = 0;
  arg1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < arg1.length; i++) {
    return (sum += arg1[i]);
  }
};

const arraySubtraction = function (arg1, sum) {
  sum = 0;
  arg1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < arg1.length; i++) {
    return (sum -= arg1[i]);
  }
};

const multiplicationArray = function (arg1) {
  sum = 0;
  arg1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < arg1.length; i++) {
    return (sum *= arg1[i]);
  }
};

const divisionArray = function (arg1, sum) {
  sum = 0;
  arg1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < arg1.length; i++) {
    return (sum /= arg1[i]);
  }
};

const oddArray = function (arg1) {
  arg1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arg1.filter((arg1) => {
    return arg1 % 2 === 1;
  });
};

const evenArray = function (arg1) {
  arg1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arg1.filter((arg1) => {
    return arg1 % 2 !== 1;
  });
};

const returnFruits = function (arg1) {
  arg1[("fruits", "grains", "dairy", "meats")];
  return arg1.splice("fruits");
};
