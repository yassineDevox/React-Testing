//it's a piece of code to test the software code
// it throws an error when the actual output doesn't much the expected one

const getFullName = (first, last) => `${last} ${first}`

const actualFullName = getFullName('yassine', 'rassy')

const expectedFullName = 'Yassine Rassy'

if (actualFullName !== expectedFullName) {
  throw new Error('The actualFullName not equal the expected one 😿 !')
}
