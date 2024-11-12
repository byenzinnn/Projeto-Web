function openModal(pacoteId) {
    const pacote = pacotes[pacoteId];

    document.getElementById("myModal").innerHTML = `
      <div class="modal-content">
        <span class="material-symbols-outlined close" onclick="closeModal()">
            close
        </span>
        <div class="card-image" style="background-image: url('${pacote.imagem}'); background-size: cover;"></div>
        <h2 id="modal-title">${pacote.titulo}</h2>
        <p id="modal-description">${pacote.descricao}</p>
        <p id="modal-price">Preço: R$${pacote.preco}</p>
        <div class="button-container">
            <button class="btn-comprar" style="background-color: green;" onclick="openEscolhaModal()">Comprar</button>
            <button class="btn-carrinho" style="background-color: #141414;" onclick="window.location.href='pagamento.html'">Adicionar ao carrinho</button>
        </div>
      </div>
    `;

    var modal = document.getElementById("myModal");
    modal.style.display = "flex";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
 
function openEscolhaModal() {
    openModalById('escolhaModal');
}

function openLoginModal() {
    closeModalById('escolhaModal'); 
    openModalById('loginModal'); 
}

function openCadastroModal() {
    closeModalById('escolhaModal'); 
    openModalById('cadastroModal'); 
}

function openModalById(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
}

function closeModalById(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}


const pacotes = {
    "pacote1": {
        "titulo": "Pacote para Grécia",
        "descricao": "Uma viagem incrível pelas ilhas gregas.",
        "preco": "1500,00",
        "imagem": "./assets/img/Grecia - 1.png"
    },
    "pacote2": {
        "titulo": "Pacote para Paris",
        "descricao": "Desfrute do charme e da cultura parisiense.",
        "preco": "2000,00",
        "imagem": "./assets/img/Paris - 1.png"
    },
    "pacote3": {
        "titulo": "Pacote para Japão",
        "descricao": "Explore a cultura e modernidade do Japão.",
        "preco": "3000,00",
        "imagem": "./assets/img/Japao - 1.png"
    },
    "pacote4": {
        "titulo": "Pacote para Austrália",
        "descricao": "Descubra as maravilhas da Austrália.",
        "preco": "2500,00",
        "imagem": "./assets/img/Australia - 1.png"
    },
    "pacote5": {
        "titulo": "Pacote para Egito",
        "descricao": "Explore as pirâmides e a rica história do Egito.",
        "preco": "2200,00",
        "imagem": "./assets/img/Egito - 1.png"
    },
    "pacote6": {
        "titulo": "Pacote para Canadá",
        "descricao": "Descubra as paisagens deslumbrantes do Canadá.",
        "preco": "2700,00",
        "imagem": "./assets/img/Canada - 1.png"
    },
    "pacote7": {
        "titulo": "Pacote para Itália",
        "descricao": "Desfrute das belezas culturais e históricas da Itália.",
        "preco": "2300,00",
        "imagem": "./assets/img/Italia - 2.png"
    },
    "pacote8": {
        "titulo": "Pacote para México",
        "descricao": "Mergulhe na cultura vibrante e nas praias do México.",
        "preco": "1800,00",
        "imagem": "./assets/img/Mexico - 2.png"
    },
    "pacote9": {
        "titulo": "Pacote para Tailândia",
        "descricao": "Aventure-se nas praias exóticas e templos da Tailândia.",
        "preco": "2600,00",
        "imagem": "./assets/img/Tailandia - 2.png"
    },
    "pacote10": {
        "titulo": "Pacote para África do Sul",
        "descricao": "Experimente safáris incríveis e a cultura sul-africana.",
        "preco": "2900,00",
        "imagem": "./assets/img/AfricaSul - 2.png"
    }
};

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active-slide');
    });

    slides[index].classList.add('active-slide');
}

function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

showSlide(currentSlide);

function toggleMenu() {
    const navlinks = document.querySelector(".nav-links");
   
    if (navlinks.style.top === "60px") {
        navlinks.style.top = "-250px"; 
    } else {
        navlinks.style.top = "60px";
    }
}
