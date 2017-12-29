function sayHello(user){
  return `welcome:${user}back`;
}

function sayGoodbye(user){
  return `${user} goodbye`;
}

module.exports.sayHello = sayHello;
module.exports.sayGoodbye = sayGoodbye;