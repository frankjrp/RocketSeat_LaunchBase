const topics = document.querySelectorAll(".topic")

for (let topic of topics) {
    const btn = topic.querySelector("span")

    btn.addEventListener("click", () => {
        if (btn.innerText == "ESCONDER") {
            topic.querySelector(".content").classList.add("hidden")
            btn.innerText = "mostrar"
        } else {
            topic.querySelector(".content").classList.remove("hidden")
            btn.innerText = "esconder"
        }
    })
}

const ImageGallery = {
    highlight: document.querySelector('.gallery .highlight > img'),
    previews: document.querySelectorAll('.gallery-preview img'),
    setImage(e) {
        const { target } = e

        ImageGallery.previews.forEach(preview => preview.classList.remove('active'))
        target.classList.add('active')

        ImageGallery.highlight.src = target.src
    }
}