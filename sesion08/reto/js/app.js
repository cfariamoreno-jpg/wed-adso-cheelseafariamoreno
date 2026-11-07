const botonTema = document.getElementById('tema');

botonTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        botonTema.textContent = '☀️ Cambiar tema';
    } else {
        botonTema.textContent = '🌙 Cambiar tema';
    }
});