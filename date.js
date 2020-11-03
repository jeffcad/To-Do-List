exports.getDate = function () {
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    return (new Date()).toLocaleDateString('en-CA', options)
}

exports.getDay = function () {
    const options = {
        weekday: 'long'
    }

    return (new Date()).toLocaleDateString('en-CA', options)
}