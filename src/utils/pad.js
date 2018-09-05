const pad = (num = 0, len = 0) => {
    return `${'0'.repeat((len || 0) - ((num || '').toString().length))}${num || ''}`
}

module.exports = pad