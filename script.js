const courses = [{title: 'ciaac', content: "<h2>Hola</h2>"}]

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