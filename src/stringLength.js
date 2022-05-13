const strLength = (str) => {
    if(str.length < 1 && str.length < 10) {
        throw Error(`${str} is too short or too long`);
    }
    let leng = str.split('').length;
    return leng;
}

module.exports = strLength;