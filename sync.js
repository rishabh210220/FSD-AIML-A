function login(){
    waitforfiveseconds();
 console.log('login end')   
}
function getData(){
    waitforfiveseconds();
 console.log('get Data end')   
}
function displayData(){
    waitforfiveseconds();
 console.log('Display Data end')   
}
function attmptTxt(){
    waitforfiveseconds();
 console.log('attmptTxt end')   
}
function logout(){
    waitforfiveseconds();
 console.log('logout end')   
}
function waitforfiveseconds(){
    const ms=new Date().getTime()+5000;
    while(new Date().getTime()<ms)
    {}
}

login();
getData();
displayData();
attmptTxt();
logout();
console.log('call other application')