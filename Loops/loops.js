console.log("All number between -10 and 19");
var num = -10;
{
  while (num <= 19) {
    console.log(num);
    num++;
  }
}
console.log("All even number between 10 and 40");
var counter = 10;
{
  while (counter <= 40) {
    console.log(counter);
    counter += 2;
  }
}
console.log("All odd numbers between 300 and 333");
var odd = 300;
{
  while (num <= 333) {
    if (odd % 2 !== 0) {
      console.log(odd);
    }
    odd += 1;
  }
}
console.log("All numbers divisible by 5 AND 3 between 5 and 50");
var counter = 5;
{
  while (counter <= 50) {
    if (counter % 5 === 0 && counter % 3 === 0) {
      console.log(counter);
    }
    counter += 1;
  }
}
