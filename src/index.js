import helloFn from "./helloWorld.js"
import addImg from "./addImg.js"
import HelloButton from "./components/fanBorad/artPage.js"
import webpackHeading from "./components/heading/heading.js"

const heading = new webpackHeading(),
    button = new HelloButton()

heading.render()
addImg()
helloFn()
button.render()