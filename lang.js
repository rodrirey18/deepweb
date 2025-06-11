const translations = {
    en: {
        inicio: "HOME",
        sobremi: "ABOUT ME",
        skills: "SKILLS",
        curriculum: "RESUME",
        portfolio: "PORTFOLIO",
        contacto: "CONTACT",
        sobreMiTitulo: "About Me",
        sobreMiDescripcion: "Hi, I'm Rodrigo Reynoso. I am a software developer passionate about technology and continuous learning. I also work as tech support, solving problems with creativity and efficiency. I love building useful solutions, exploring new ideas, and working as a team to achieve great things.",
        datosPersonales: "Personal Info",
        intereses: "Interests",
        descargarCV: "Download CV",
        habilidadesTecnicas: "Technical Skills",
        habilidadesProfesionales: "Professional Skills",
        educacion: "Education",
        experiencia: "Work Experience",
        contactoTitulo: "CONTACT"
        // Agrega más traducciones según sea necesario
    },
    es: {
        // Ya está en español, así que puedes usar directamente el texto actual
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');

    languageSwitcher.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        cambiarIdioma(selectedLang);
    });
});

function cambiarIdioma(lang) {
    const elementos = {
        inicio: document.querySelector('a[href="#inicio"]'),
        sobremi: document.querySelector('a[href="#sobremi"]'),
        skills: document.querySelector('a[href="#skills"]'),
        curriculum: document.querySelector('a[href="#curriculum"]'),
        portfolio: document.querySelector('a[href="#portfolio"]'),
        contacto: document.querySelector('a[href="#contacto"]'),
        sobreMiTitulo: document.querySelector('#sobremi h2'),
        sobreMiDescripcion: document.querySelector('#sobremi p'),
        datosPersonales: document.querySelector('#sobremi .col h3'),
        intereses: document.querySelectorAll('#sobremi .col h3')[1],
        descargarCV: document.querySelector('#sobremi button a'),
        habilidadesTecnicas: document.querySelectorAll('#skills .col h3')[0],
        habilidadesProfesionales: document.querySelectorAll('#skills .col h3')[1],
        educacion: document.querySelector('.curriculum .izquierda h3'),
        experiencia: document.querySelector('.curriculum .derecha h3'),
        contactoTitulo: document.querySelector('#contacto h2')
        // Agrega más elementos si quieres traducir más partes
    };

    const t = translations[lang];

    if (t) {
        elementos.inicio.textContent = t.inicio;
        elementos.sobremi.textContent = t.sobremi;
        elementos.skills.textContent = t.skills;
        elementos.curriculum.textContent = t.curriculum;
        elementos.portfolio.textContent = t.portfolio;
        elementos.contacto.textContent = t.contacto;
        elementos.sobreMiTitulo.textContent = t.sobreMiTitulo;
        elementos.sobreMiDescripcion.textContent = t.sobreMiDescripcion;
        elementos.datosPersonales.textContent = t.datosPersonales;
        elementos.intereses.textContent = t.intereses;
        elementos.descargarCV.textContent = t.descargarCV;
        elementos.habilidadesTecnicas.textContent = t.habilidadesTecnicas;
        elementos.habilidadesProfesionales.textContent = t.habilidadesProfesionales;
        elementos.educacion.textContent = t.educacion;
        elementos.experiencia.textContent = t.experiencia;
        elementos.contactoTitulo.textContent = t.contactoTitulo;
    }
}

