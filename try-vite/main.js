import './style.css'
import { setupCounter } from './counter.js'
import { setupEmojis } from './emojis.js'
import markdownIt from "markdown-it"
import lorem from "./index.md?raw"

document.querySelector('#app').innerHTML = `
  <div>
    <h1>😀</h1>
    <div class="card">
      <button id="emojis" type="button">Generate Random Emoji</button>
    </div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div id="lorem-target"></div>
  </div>
`

setupCounter(document.querySelector('#counter'))
setupEmojis(document.querySelector('#emojis'))
document.querySelector('#lorem-target').innerHTML = markdownIt().render(lorem)