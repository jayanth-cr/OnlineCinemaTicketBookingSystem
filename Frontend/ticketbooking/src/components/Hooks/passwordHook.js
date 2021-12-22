function passwordHook(password) {
    let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])([\w\d\s!@#$%^&*]{8,50})$/;
    return(pattern.test(password));
}

export default passwordHook
