module.exports = {
    '**/*.(js|vue)': (filenames) => [
        `eslint ${filenames.join(' ')}`,
        `prettier --check ${filenames.join(' ')}`
    ]
}
