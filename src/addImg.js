import image from "./lofi_sun.png"
function addImg() {
    const img = document.createElement('img')
    img.title = "Lofi Sunshine by K.T Motshoana."
    img.alt = "Lofi Sunshine"
    img.width = 300
    img.height = 300
    img.src = image
    document.body.appendChild(img)
}

export default addImg