function publicar() {
    let input = document.querySelector(".comentario");
    let output = document.querySelector("div#resposta");
    if (input.value !== undefined) {
        output.innerHTML = `<p>${input.value}<ion-icon class="emoji-coracao" name="heart-outline"></ion-icon></p>`
        output.style.margin = '1%'
    }
}


//função que ao clicar no icone ele muda de cor