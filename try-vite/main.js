import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import markdownIt from "markdown-it"
import lorem from "./index.md?raw"

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>This is me trying out Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo, or don't!
    </p>
    <div id="lorem-target"></div>
  </div>
`

setupCounter(document.querySelector('#counter'))
document.querySelector('#lorem-target').innerHTML = markdownIt().render(lorem)