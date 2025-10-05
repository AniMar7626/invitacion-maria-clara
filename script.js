/**
 * Asistente de Programación: script.js para Invitación Digital
 * Implementación de la Cuenta Regresiva y Reproducción de Música.
 */

document.addEventListener('DOMContentLoaded', (event) => {
    // =================================================================
    // 1. FUNCIONALIDAD DE REPRODUCCIÓN DE MÚSICA
    // =================================================================
    const musica = document.getElementById('musicaFondo');
    const btnMusica = document.getElementById('btnPlayMusic');

    btnMusica.addEventListener('click', () => {
        if (musica.paused) {
            // Intentar reproducir. Esto es crucial en móviles.
            musica.play()
                .then(() => {
                    btnMusica.innerHTML = '⏸️ Pausar Música';
                })
                .catch(error => {
                    // Si el navegador lo bloquea, mostramos un error amigable.
                    console.error('Error al intentar reproducir el audio:', error);
                    btnMusica.innerHTML = '⚠️ Inicia la Música (Error)';
                });
        } else {
            musica.pause();
            btnMusica.innerHTML = '▶️ Reproducir Música';
        }
    });

    // =================================================================
    // 2. FUNCIONALIDAD DE CUENTA REGRESIVA
    // =================================================================
    // Fecha y hora del evento: 18 DE OCTUBRE DEL 2025 A LAS 21:30HS
    const fechaEvento = new Date("October 18, 2025 21:30:00").getTime();
    const countdownElement = document.getElementById('countdown');

    function actualizarCuentaRegresiva() {
        const ahora = new Date().getTime();
        const distancia = fechaEvento - ahora;

        if (distancia < 0) {
            clearInterval(x);
            countdownElement.innerHTML = `<p class="time-block" style="font-size: 1.5em; width: 100%;">¡Es Hoy! ¡A celebrar! 🎉</p>`;
            return; 
        }

        // Cálculos de tiempo
        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        // Inyección del HTML para mostrar el resultado
        countdownElement.innerHTML = `
            <div class="time-block">${dias}<span>DÍAS</span></div>
            <div class="time-block">${horas}<span>HS</span></div>
            <div class="time-block">${minutos}<span>MIN</span></div>
            <div class="time-block">${segundos}<span>SEG</span></div>
        `;
    }

    // Inicializamos y configuramos el intervalo
    actualizarCuentaRegresiva();
    const x = setInterval(actualizarCuentaRegresiva, 1000);
});