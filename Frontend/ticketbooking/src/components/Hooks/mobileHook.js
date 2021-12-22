function mobileHook(num) {
    let pattern =   /^\d{10}$/;
    return(pattern.test(num));
}

export default mobileHook
