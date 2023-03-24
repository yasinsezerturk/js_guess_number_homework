function uret(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}
let randomNum = uret(1000, 9999);
console.log(`1000 ile 9999 arasında rasgele bir sayı üretildi: ${randomNum} `);

let guess = prompt("Lütfen 4 basamaklı sayı giriniz");

console.log(`Tahmin edilen 4 basamaklı sayı:${guess}`);

let myFunc = (num) => Number(num);

let intArr = Array.from(String(guess), myFunc);

let intArr2 = Array.from(String(randomNum), myFunc);

function myFunction(value, index) {
  if (intArr2[0] == intArr[0] && value == intArr2[index]) {
    console.log("1.sıranın hem değerini hem yerini buldunuz");
  } else if (value == intArr2[index]) {
    console.log("1.sıranın değerini buldunuz");
  } else {
    console.log("1.sıra için değer bulunamadı");
  }
}

let newArr = intArr2.map(myFunction);

function myFunction2(value, index) {
  if (intArr2[1] == intArr[1] && value == intArr2[index]) {
    console.log("2.sıranın hem değerini hem yerini buldunuz");
  } else if (value == intArr2[index]) {
    console.log("2.sıranın değerini buldunuz");
  } else {
    console.log("2.sıra için değer bulunamadı");
  }
}

let newArr2 = intArr2.map(myFunction2);

function myFunction3(value, index) {
  if (intArr2[2] == intArr[2] && value == intArr2[index]) {
    console.log("3.sıranın hem değerini hem yerini buldunuz");
  } else if (value == intArr2[index]) {
    console.log("3.sıranın değerini buldunuz");
  } else {
    console.log("3.sıra için değer bulunamadı");
  }
}

let newArr3 = intArr2.map(myFunction3);

function myFunction4(value, index) {
  if (intArr2[3] == intArr[3] && value == intArr2[index]) {
    console.log("4.sıranın hem değerini hem yerini buldunuz");
  } else if (value == intArr2[index]) {
    console.log("4.sıranın değerini buldunuz");
  } else {
    console.log("4.sıra için değer bulunamadı");
  }
}

let newArr4 = intArr2.map(myFunction4);
