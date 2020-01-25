import './untils'
import React from 'react'
import ReactDOM from 'react-dom'

const template = <p>This JSX from Webpack</p>
const root = document.getElementById('root')

ReactDOM.render(template, root)

console.log('app.js is running')
console.log(square(2))
