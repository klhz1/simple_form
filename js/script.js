function validate(form){
    var email = form.email.value;
    var name = form.name.value;
    var surname = form.surname.value;
    var date = form.date.value;
    var errors = [];
    var RegExp_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    var RegExp_name = /^[A-Za-z]+$/;
    var parsedDate = Date.parse(date);

    if (!RegExp_email.test(email)) {
        errors[errors.length] = "email address";
    }

    if (!RegExp_name.test(name)) {
        errors[errors.length] = "name";
    }

    if (!RegExp_name.test(surname)) {
        errors[errors.length] = "surname";
    }

    if (!parsedDate) {
        errors[errors.length] = "date [yyyy-MM-dd]";
    }
    else {
        form.date.value = parsedDate.toString("yyyy-MM-dd");
    }

    if (errors.length > 0) {
        reportErrors(errors);
        return false;
    }

    alert("form is valid");
    return true;
}

function reportErrors(errors){
    var errorcont = document.querySelector('.form__errors');
    var msg = "";

    errorcont.innerHTML = "";

    for (var i = 0; i<errors.length; i++) {
        msg += " &#9642 " + errors[i];
    }
    errorcont.innerHTML += "<p> Please enter valid data:" + msg + "</p>";
}