
// // template'ranking-list-template'の取得を変数にする
// const rankingTemplate = ()=> {
//   // template要素を取得
//   let template = document.getElementById('ranking-list-template');
//   // template要素の内容を複製
//   let clone = template.content.cloneNode(true);
//   // div#vcontainerの中に追加
//   document.getElementById('ranking-list').appendChild(clone);
// }
//
// // ranking-list-itemの10回繰り返し
// for (let i = 0; i < 10; i++){
//   rankingTemplate(i);
// }


let rankData = [
  {"rankNumber":"1", "rankName":"Kamiya💗"},
  {"rankNumber":"2", "rankName":"Kamiya💗"},
  {"rankNumber":"3", "rankName":"Kamiya💗"},
  {"rankNumber":"4", "rankName":"Kamiya💗"},
  {"rankNumber":"5", "rankName":"Kamiya💗"},
  {"rankNumber":"6", "rankName":"Kamiya💗"},
  {"rankNumber":"7", "rankName":"Kamiya💗"},
  {"rankNumber":"8", "rankName":"Kamiya💗Kamiya💗"},
  {"rankNumber":"9", "rankName":"Kamiya💗"},
  {"rankNumber":"10", "rankName":"Kamiya💗"},
];
// ▲本来は名前もデータを取得する。もしかしたら画像も入れられるかも。

let template = document.getElementById('ranking-list-template');

for (let i = 0; i < rankData.length; i++){
  let clone = template.content.cloneNode(true);
  clone.querySelector('.ranking-list-item__ranking__number').textContent = rankData[i].rankNumber;
  clone.querySelector('.ranking-list-item__name').textContent = rankData[i].rankName;

  document.getElementById('ranking-list').appendChild(clone);
}
