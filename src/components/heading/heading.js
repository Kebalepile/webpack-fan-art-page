import "../../styles.css"
export default class Heading {

    render() {
        const h1 = document.createElement('h1'),
            body = document.querySelector('body')
        h1.innerHTML = 'Webpack'
        body.appendChild(h1)
    }
}