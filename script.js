var userName = document.getElementById("userName"),
    userPassword = document.getElementById("userPassword"),
    userPasswordInspection = document.getElementById("userPasswordInspection"),
    userPhone = document.getElementById("userPhone"),
    errorName = document.getElementById("errorName"),
    errorPhone = document.getElementById("errorPhone"),
    errorPassword = document.getElementById("errorPassword"),
    errorPasswordInspection = document.getElementById("errorPasswordInspection");


function validate() {
    var nameValueLength = userName.value.length,
        passwordLength = userPassword.value.length,
        userPasswordCorrect=userPassword.value,
        userPasswordCorrectOnceMore = userPasswordInspection.value;
	var regexpForValueNameAndPassword = /\W/g, regexpForPhone = /[^0-9]/g;
    var isInvalid = true;

    function mistake(sendFieldName, sendFieldErrorName, left) {
        var wrong = true;
        sendFieldErrorName.style.visibility = "visible";
        sendFieldName.style.border = "2px solid red";
        sendFieldErrorName.style.left = left + "%";
        wrong = false;
        return wrong;
    }
    function correct(sendFieldName, sendFieldErrorName, left) {
        sendFieldErrorName.style.visibility = "hidden";
        sendFieldName.style.border = "1px solid black";
        sendFieldErrorName.style.left = left + "%";
    }

    if ((!userName.value) || (userName.value.search(regexpForValueNameAndPassword) != -1) || (nameValueLength<5)) {
        isInvalid = mistake(userName, errorName, 45);
	} else {
        correct(userName, errorName, 10);
    }
    
    if ((!userPhone.value)||(userPhone.value.search(regexpForPhone) != -1)||(userPhone.value.length != 10)){
        isInvalid = mistake(userPhone, errorPhone, 45);
    } else {
        correct(userPhone, errorPhone, 10);
    } 
    
    if ((!userPassword.value) || (userPassword.value.search(regexpForValueNameAndPassword) != -1) || (passwordLength<5)) {
        isInvalid = mistake(userPassword, errorPassword, 45);
    } else {
        correct(userPassword, errorPassword, 10);
    }
    
    if ((userPasswordCorrect !== userPasswordCorrectOnceMore)) {
        isInvalid = mistake(userPasswordInspection, errorPasswordInspection, 45);
    } else {
        correct(userPasswordInspection, errorPasswordInspection, 10);
    }
    
    if (isInvalid) {
        alert("Success! Takes my congratulations!");
    }
	return false;
}