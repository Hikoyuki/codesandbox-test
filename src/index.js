// const myProfile = {
//   name: "ジャケ",
//   age: 28,
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}際です。`
// console.log(message1);

// const {name,age} = myProfile;

// const message2 = `名前は${name}です。年齢は${age}際です......。`
// console.log(message2);

// const myProfile = ["ジャケえ", 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}際です.....ｓｓｓｓｓｓｓ.。`;
// console.log(message3);

// const [name, age] = myProfile

// const message2 = `名前は${name}です。年齢は${age}際です......。`
// console.log(message2);

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん!`);
// sayHello();

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);
// 順番に処理してくれる

// まとめる
// const arr2 = [1, 2, 3, 4, 5]
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// イコールでコピーすると参照先まで影響を受けてバグになる;
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "ジャケ"];
for (let index = 0, index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

const name