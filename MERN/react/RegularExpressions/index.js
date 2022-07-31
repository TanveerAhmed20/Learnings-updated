// 
const regex1 = 'foo(a*)bar';
console.log("fooaaabar".match(regex1));

const regex2 = 'foo(b*)bar';

// regex character class [] 

const regex3 = '[abc]' // one ot the characters inside the square brackets

const regex4 = '[fcl]oo';

const regex5 = '[^mh]oo';

// combination characte class 
//joo,koo,loo,moo,zoo
const regex6 = '[jklmz]oo';