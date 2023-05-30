//navbar - hover e "page active" (scroll)
const navLinkEls = document.querySelectorAll('.nav_link');
const sectionEls = document.querySelectorAll('section');

let currentSection = 'home';
window.addEventListener('scroll', () => {
     sectionEls.forEach(sectionEl => {
        if (window.scrollY >= (sectionEl.offsetTop - 170)) {
            currentSection = sectionEl.id;
        }
});
    navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active');
            navLinkEl.classList.add('active');
        };
    });
});

//dots laterais de navegação - hover e "page active" (scroll)
const sections = document.querySelectorAll('section');
const windowHeight = window.innerHeight;
const navigation = document.querySelector('.navigation');

function reset() {
    for (let i = 0; i < navigation.children.length; i++) {
        navigation.children[i].classList.remove('selected');
    }
}
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    sections.forEach(function(section, i) {
        if (section.offsetTop < scrollTop + windowHeight/2 && scrollTop < section.offsetTop + windowHeight/2) {
            reset();
            navigation.children[i].classList.add('selected');
        }
    })
});

//dots laterais (click)
document.querySelectorAll('.navigation li').forEach(function(item, i) {
    item.addEventListener('click', function() {
        window.scrollTo({
            top: i * windowHeight,
            behavior: 'smooth',
        })
    })
});

//animaçao de entrada dos icons de "Services" 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//formulario de reserva (click)
document.querySelector('#grabspot').addEventListener('click',function() {
    document.querySelector('.formulario').classList.add('active');
});
document.querySelector('.formulario .close-btn').addEventListener('click',function() {
    document.querySelector('.formulario').classList.remove('active');
});


//envio de email - NAO ESTA A FUNCIONAR!

function sendEmail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        dogsname: document.getElementById("dogsname").value,
        message: document.getElementById("message").value,
    };
}

const serviceID = "service_pcg307e";
const templateID = "template_pawperinos";

emailjs.send(serviceID, templateID, params)
    .then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("dogsname").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Sent Successfully!");
})
.catch((err) => console.log(err));