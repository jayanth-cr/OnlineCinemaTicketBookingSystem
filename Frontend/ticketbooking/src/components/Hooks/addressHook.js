function addressHook(name) {
    let pattern = /^([\w\s-//,()]){10,40}$/
    return(pattern.test(name))
}

export default addressHook
