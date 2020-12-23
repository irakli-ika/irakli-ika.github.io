const sql = []

const logInTemp = {
    name : '',
    lastName : '',
    email : '',
    password : ''
}


const name = document.getElementById('name')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')

function submit() {
    logInTemp.name = name.value
    logInTemp.lastName = lastName.value
    logInTemp.email = email.value
    logInTemp.password = password.value   
//    console.log(logInTemp);
    sql.push(logInTemp)
    console.log(sql);

    // sql.forEach(element => {
    //     if(element.name == name && element.password == password ) console.log(`hey ${element.name}`)
    // });
}