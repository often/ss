const ss = (length, characters) => Array(length).fill().map(() => characters[Math.floor(random() * characters.length)]).join('')
const random = () => crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32

export { ss, random }
