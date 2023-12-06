document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.querySelector('h1');
    const yourName = 'Aditya Kumar Singh'; 
    let index = 0;

    function type() {
        if (index < yourName.length) {
            nameElement.textContent += yourName.charAt(index);
            index++;
            setTimeout(type, 150); // Adjust the typing speed (milliseconds)
        }
    }

    
    type();
});