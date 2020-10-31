const shuffleQuestions = (array) => {
    let length = array.length;

    while (0 !== length) {
        let random = Math.floor(Math.random() * length);
        length -= 1;
        let placement = array[length];
        array[length] = array[random]
        array[random] = placement
    }
    return array
}

export default shuffleQuestions