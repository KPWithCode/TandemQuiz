import shuffle from './shuffle';

function questionBank(arr) {
    arr = shuffle(arr)
    let questionArray = []
    for (let i = 0; i < arr.length; i++) {
        let questions = arr[i]
        questionArray.push(questions)

        if (!questionArray.includes(questions) && questionArray.length < 10) {
            questionArray.push(questions)
        }
    }
    return questionArray
}

export default questionBank;