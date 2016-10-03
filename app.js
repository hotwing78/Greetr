var g = G$('John','Doe');
console.log(g);

g.greet('formal').greet();

g.supportedLangDisplay();

document.getElementById('login').onclick = function(){
  g.setLang(document.getElementById('lang').value);
  g.loginGreet('#greeting');
};
