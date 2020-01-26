import './untils'
import React from 'react'
import ReactDOM from 'react-dom'
import './main.scss'

const template = <h1>This JSX from Webpack</h1>
const root = document.getElementById('root')

ReactDOM.render(template, root)

console.log('app.js is running!!!!!')
