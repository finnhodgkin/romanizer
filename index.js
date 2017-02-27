'use strict';

// write your code here

function romanizer (num){
  var remainderFromTen = num % 10;
  var remainderFromHund = num % 100;
  var remainderFromThous = num % 1000;
  var remainderFromTenThous = num % 10000;


  var result = '';

  if (remainderFromThous >= 500 && remainderFromThous < 900) {
    result += 'D';
    var numberOfCs = Math.floor((remainderFromThous - 500) / 100);
    while (numberOfCs) {
      result += 'C';
      numberOfCs--;
    }
  }

  while (remainderFromThous >= 100 && remainderFromThous < 400) {
    result += 'C';
    remainderFromThous -= 100;
  }

  if (remainderFromThous >= 400 && remainderFromThous <500) {
    result += 'CD';
  }

  if (remainderFromHund >= 90) {
    result += 'XC';
  }

  if (remainderFromHund >= 50 && remainderFromHund < 90) {
    result += 'L';
    var numberOfXs = Math.floor((remainderFromHund - 50) / 10);
    while (numberOfXs) {
      result += 'X';
      numberOfXs--;
    }
  }

  if (remainderFromHund >= 40 && remainderFromHund < 50) {
    result += 'XL';
  }

  while (remainderFromHund >= 10 && remainderFromHund < 40) {
    result += 'X';
    remainderFromHund -= 10;
  }

  if (remainderFromTen === 9) {
    result += 'IX';
  }
  if (remainderFromTen === 8) {
    result += 'VIII';
  }
  if (remainderFromTen === 7) {
    result += 'VII';
  }
  if (remainderFromTen === 6) {
    result += 'VI';
  }
  if (remainderFromTen === 5) {
    result += 'V';
  }
  if (remainderFromTen === 4) {
    result += 'IV';
  }
  if (remainderFromTen === 3) {
    result += 'III';
  }
  if (remainderFromTen === 2) {
    result += 'II';
  }
  if (remainderFromTen === 1) {
    result += 'I';
  }

  return result;
}
