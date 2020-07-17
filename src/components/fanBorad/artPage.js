import "../../styles.css"

class ArtPage {

    btnCss = 'print-btn'
    pCss = 'p-text'
    count = 0

    createButton() {

        const btn = document.createElement('button')
        btn.innerHTML = 'praise'
        btn.classList.add(this.btnCss)
        document.body.appendChild(btn)

        return btn
    }

    createParagraph() {

        const paragraph = document.createElement('p')
        paragraph.innerHTML = ` ${this.count++}, &#127882; Webpack &#127881; it's really awesome.`
        paragraph.classList.add(this.pCss)

        return paragraph
    }
    createBoard() {

        const board = document.createElement('aside')
        board.id = 'board'
        document.body.appendChild(board)

        return board
    }
    render() {

        const btn = this.createButton()
        const board = this.createBoard()
        btn.onclick = e => board.append(this.createParagraph())

    }
}

export default ArtPage