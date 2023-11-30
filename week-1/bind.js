function bind2(a,z) { return a*z}
const bind1 = bind2.bind(null, 2);
console.log(bind1(4));

// link: 