// Animação do botão Hanburger.
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
};

// Exibe a tela com detalhes dos projetos relacionados aos cards.
const mostrar = document.getElementById('showScreen');
const oculto = document.getElementById('hidden');
const fechar = document.getElementById('close');

function alternarVisibilidade() {
    if (oculto.style.display === 'none') {
        oculto.style.display = 'flex';
    } else {
        oculto.style.display = 'none';
    }
}

mostrar.addEventListener("click", alternarVisibilidade);
fechar.addEventListener("click", alternarVisibilidade);

// Slide da tela de informações dos projetos.
const control = document.querySelectorAll('.control');
const itemImg = document.querySelectorAll('.itemImg',);

let currentItem = 0;
const items = document.querySelectorAll('.itemImg');

const maxItems = items.length;

control.forEach(control => {
    control.addEventListener('click', () => {
        const isRigth = control.classList.contains('next')

        if (isRigth) {
            currentItem += 1;
        } else {
            currentItem -= 1;
        }

        if (currentItem >= maxItems) {
            currentItem = 0;
        }

        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }
        items.forEach(items =>
            items.classList.remove('current-Item'));

        items[currentItem].scrollIntoView({
            inline: "start",
            behavior: "smooth"
        })

    })
});

// Botão de retorno ao início da página.
const bottonUp = document.querySelector('.BtnUp');

bottonUp.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

document.addEventListener('scroll', ocultar);

function ocultar() {
    if (window.scrollY > 10) {
        bottonUp.style.display = 'flex'
    } else {
        bottonUp.style.display = 'none'
    }
};

ocultar();

const buttonUp = document.querySelector('.BtnUp');

function checkScreenWidth() {
    if (window.innerWidth <= 670) {
        buttonUp.style.opacity = 0;
    } else {
        buttonUp.style.opacity = 1;
    }
}
checkScreenWidth();
window.addEventListener('resize', checkScreenWidth);

