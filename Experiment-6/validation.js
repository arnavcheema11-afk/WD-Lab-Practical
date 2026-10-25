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

    var error = nameError ? nameError : passwordError;
    if (error) {
        alert(error);
        return false;
    }
    alert("Registration Successful!");
    return true;
}
