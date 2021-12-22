function nameHook(name) {
    let pattern = /^([\w\s]){4,30}$/
    return(pattern.test(name))
}

export default nameHook
