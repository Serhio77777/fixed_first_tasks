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
        userPasswordCorrectOnceMore = userPasswordInspection.value;
	var regexpForValueNameAndPassword = /\W/g, regexpForPhone = /[^0-9]/g;
    var inValidate = true;

    function mistake(sendFieldName, sendFieldErrorName, top) {
        var wrong = true;
        sendFieldErrorName.style.visibility = "visible";
        sendFieldName.style.border = "2px solid red";
        sendFieldErrorName.style.top = top + "%";
        wrong = false;
        return wrong;
    }
    function correct(sendFieldName, sendFieldErrorName) {
        sendFieldErrorName.style.visibility = "hidden";
        sendFieldName.style.border = "1px solid black";
    }

    if ((!userName.value) || (userName.value.search(regexpForValueNameAndPassword) != -1) || (nameValueLength<5)) {
        inValidate = mistake(userName, errorName, 12.6);
        // isInvalid

	} else 	correct(userName, errorName);
    if((!userPhone.value)||(userPhone.value.search(regexpForPhone) != -1)||(userPhone.value.length != 10)){
          inValidate = mistake(userPhone, errorPhone, 25);
    } else correct(userPhone, errorPhone);
    if((!userPassword.value)||(userPassword.value.search(regexpForValueNameAndPassword) != -1)||(passwordLength<5)){
          inValidate = mistake(userPassword, errorPassword, 41.2);
    } else {
       correct(userPassword, errorPassword);
    }
    if((passwordLength !== userPasswordCorrectOnceMore)){
          inValidate = mistake(userPasswordInspection, errorPasswordInspection, 54);
    } else correct(userPasswordInspection, errorPasswordInspection);
    
    if (inValidate) {
        alert("Success! Takes my congratulations!");
    }
	return false;
}