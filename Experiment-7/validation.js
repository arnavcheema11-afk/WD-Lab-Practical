function validateForm() {
    var name = document.forms["regForm"]["name"].value;
    var password = document.forms["regForm"]["password"].value;
    var letters = /^[A-Za-z\s]+$/;
    var nameError = (name.length < 6)
        ? "Name must be at least 6 characters long."
        : (!letters.test(name))
            ? "Name should contain alphabets only."
            : "";
    var passwordError = (password.length < 6)
        ? "Password must be at least 6 characters long."
        : "";

    var email = document.forms["regForm"]["email"].value;
    var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    var emailError = (!emailPattern.test(email))
        ? "Enter a valid E-mail Id (example: name@domain.com)."
        : "";

    var phone = document.forms["regForm"]["phone"].value;
    var phonePattern = /^[0-9]{10}$/;
    var phoneError = (!phonePattern.test(phone))
        ? "Phone number should contain 10 digits only."
        : "";

    var error = nameError || passwordError || emailError || phoneError;
    if (error) {
        alert(error);
        return false;
    }
    alert("Registration Successful!");
    return true;
}
