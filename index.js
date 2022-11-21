userData =[]
function signUp() {
    page1.style.display = "none";
    page2.style.display = "block";
}
function logIn() {
    page1.style.display = "none";
    page3.style.display = "block";
}
function logI() {
    page2.style.display = "none";
    page3.style.display = "block";
}
function newUserData () {
    if (fn.value=="" && ln.value=="" && em.value=="" && ps.value==""){
        alert ('Fill In Your Personal Information');
    }
    else { 
        let accNum =Math.floor("2" + Math.random()*1000000000)
        console.log(accNum);
        dat = {
            firstname: fn.value,
            lastname: ln.value,
            email: em.value,
            password: ps.value,
            accountNum: accNum, 
        }

        console.log(dat);
        userData.push(dat)
    console.log(userData);
    localStorage.setItem ("info",JSON.stringify(userData))
    }
}