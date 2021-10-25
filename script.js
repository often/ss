import { ss } from './lib.js'

const [length, characters, output] = document.querySelectorAll('input')
const [generate, copy] = document.querySelectorAll('button')

generate.addEventListener('click', () => {
	output.value = ss(Number(length.value), characters.value)
})

copy.addEventListener('click', () => navigator.clipboard.writeText(output.value))
