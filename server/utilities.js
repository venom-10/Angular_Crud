function validatePassword(password) {
    // Minimum 6 characters
    if (password.length < 6) {
        return false;
    }

    // At least one special character, one lowercase letter, one uppercase letter, and one digit
    var regex = /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    return regex.test(password);
}


module.exports = {
    validatePassword
}