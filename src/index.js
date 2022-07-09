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
// const nameArr = ["田中", "山田", "ジャケ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// 新しい配列を作る
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// 配列の中身をそのまま出力 以前はfor文でやっていた使い方
// nameArr.map((name) => console.log(name))

// ある条件に一致したものだけ返却して新しい配列を生成する関数
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// 配列の何番目の要素か
// const nameArr = ["田中", "山田", "ジャケ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}`);
// }
// mapの場合 2つ目の引数に順番に0から入る
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`))

// const newNameArr = nameArr.map((name) => {
//   if (name === "ジャケ") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
// const num = "1300";
// console.log(num.toLocaleString());
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください'
// console.log(formattedNum);

// return部分で使う例
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています！' : '共用範囲内です'
// }
// console.log(checkSum(50, 70));

/**
 * 論理演算子の方等の意味
 */
// ||は左側がfalseなら右側を返す　num=100とすればnumの値帰る nullはfalse判定
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
