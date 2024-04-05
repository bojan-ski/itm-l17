const tasksLSEffect = () => ({ setSelf, onSet }) => {
    const savedValues = localStorage.getItem('tasksData')

    if (savedValues !== null) {
        setSelf(JSON.parse(savedValues))
    }

    onSet(newValue => {
        localStorage.setItem('tasksData', JSON.stringify(newValue))
    })
}

export default tasksLSEffect
