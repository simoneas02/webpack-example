const add = (a, b) => a + b

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

describe('Some demo test', () => {
  test('should add two numbers', () => {
    const result = add(3, 4)

    expect(result).toBe(7)
  })

  test('should generate greeting from name', () => {
    const result = generateGreeting('Beyonce')

    expect(result).toBe('Hello Beyonce!')
  })

  test('should generate greeting for no name', () => {
    const result = generateGreeting()

    expect(result).toBe('Hello Anonymous!')
  })
})