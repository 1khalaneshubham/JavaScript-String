let msg = "  hello   ";
let newmsg = msg.trim();
console.log("after trim :", newmsg);
newmsg = newmsg.toUpperCase();
console.log("after Uppercase :",newmsg);

let oldmsg = msg.trim().toUpperCase();
console.log("after methd chining: ", newmsg);