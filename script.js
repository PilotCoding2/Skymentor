const courses = [
    {
        title: 'ciaac',
        content: `
        <h2>Acredita tu examen profesional</h2>
        <p>El examen teórico del CIAAC es la culminación de tu etapa como piloto comercial en formación. <br>Prepararte y estar a la altura de las circunstancias te asegurará acreditar el examen y lograr tus sueños. <br>Nuestro curso cubre las siguientes materias:</p>
        <ul class="ciaac-list">
            <li>Meteorología</li>
            <li>Operaciones Aéreas</li>
            <li>Medicina de Aviación</li>
            <li>PIA y Manuales de Aviación</li>
            <li>Aeronaves y Motores</li>
            <li>Legislación Aeronaútica</li>
            <li>Seguridad Aérea</li>
            <li>Servicios de Tránsito Aéreo</li>
            <li>Factores Humanos</li>
            <li>Telecomunicaciones</li>
            <li>Navegación Aérea</li>
            <li>Aerodinámica</li>
        </ul>
        <p>Además, contamos con lo siguiente:</p>
        <div class="ciaac-cards">
            <div class="ciaac-card">
                <h2>Simuladores</h2>
                <img src="/assets/test.jpg">
                <p>Utiliza exámenes de prueba para medir tus conocimientos</p>
            </div>
            <div class="ciaac-card">
                <h2>Metodología</h2>
                <img src="/assets/studying.jpg">
                <p>En Skymentor empleamos métodos de estudio que te ayudarán a acreditar tu examen</p>
            </div>
            <div class="ciaac-card">
                <h2>Seguimiento</h2>
                <img src="/assets/mentor.jpg">
                <p>Contarás con apoyo y seguimiento continuo de asesores expertos</p>
            </div>
        </div>
        <button class="info-btn">Saber más</button>
        `
    },
    {
    title: 'english',
    content: `
        <div class="course-content">
            <h2>Consigue el RTARI</h2>
            <p>Ya tienes tu licencia de piloto comercial. Ahora, el siguiente paso es acreditar el inglés.<br>Nuestros cursos te llevan de la mano según tu nivel:</p>
            <div class="english-cards">
                <div class="english-card">
                    <h2>Inglés desde cero</h2>
                    <img src="/assets/test.jpg">
                    <p>Evaluamos tu nivel y te ofrecemos el mejor curso</p>
                </div>
                <div class="english-card">
                    <h2>Inglés técnico</h2>
                    <img src="/assets/studying.jpg">
                    <p>Te enseñamos la fraseología empleada en la aviación internacional</p>
                </div>
                <div class="english-card">
                    <h2>Práctica constante</h2>
                    <img src="/assets/mentor.jpg">
                    <p>Contarás con ejercicios similares al examen real</p>
                </div>
            </div>
            <button class="info-btn">Saber más</button>
        </div>
    `
}
]
const courseSelector = document.getElementById('courses-selector');
const courseContent = document.querySelector('.course-content');



courseSelector.addEventListener('change', () => {
    courses.forEach(course => {
        console.log(courseSelector.value, course.title)
        if(courseSelector.value === course.title){
            courseContent.innerHTML = course.content;
        }
    })
});