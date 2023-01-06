const user= {username:'gndx', age: 34, country:'CO'};
const {username, ...values} = user; // decirle a ese objeto qeu lo demas vaya a values.
console.log(username);
console.log(values);