const test = 'testing...'

console.log(test);

const { time } = require('console');
const os = require('os');

//info about curent user

const user = os.userInfo()

//method return System uptime running
const uptime = os.uptime();
console.log(uptime);
console.log(`This system uptime is ${os.uptime()} in second`);

const curentOs ={
    name:os.type(),
    relase:os.release(),
    totalMem:os.totalmem(),
    feemem:os.freemem()
}
console.log(curentOs);


