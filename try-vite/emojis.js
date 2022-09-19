import emojis from './public/emojis.json'

export function setupEmojis(el) {
    const getRandomEmoji = () => {
        const max = emojis.v14.length
        const randEmo = Math.floor(Math.random() * (max + 1))
        return String.fromCodePoint(randEmo)
    }
    el.addEventListener('click', () => el.innerHTML= getRandomEmoji())
}
