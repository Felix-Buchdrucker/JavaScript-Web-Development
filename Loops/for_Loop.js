console.log("ALL NUMBERS BETWEEN -10 AND 19");
for (var i = -10; i < 19; i++) {
  console.log(i);
}
console.log("ALL EVEN NUMBERS BETWEEN 10 AND 40");
for (var i = 10; i < 40; i++) {
  if (i % 2 === 0) console.log(i);
}
console.log("ALL ODD NUMBERS BETWEEN 300 AND 300");
for (var i = 300; i < 333; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
console.log("ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
for (var count = 5; count < 50; count++) {
  if (count % 5 === 0 && count % 3 === 0) {
    console.log(count);
  }
}
