const marvel_heros=["thor","Ironman","Captain America"]
const dc_heros=["flash","Superman","Batman"]
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
const all_heros=marvel_heros.concat(dc_heros)
console.log(all_heros);
const newArr=[1,2,3,[4,5,6],7,[8,9]]
const real_newArr=newArr.flat(Infinity);
console.log(real_newArr);
console.log(Array.isArray("Sidhant"));
console.log(Array.from("Sidhant"));
console.log(Array.from({name: "Sidhant"}));
let score=100
let score1=200
let score2=300
console.log(Array.of(score,score1,score2));

