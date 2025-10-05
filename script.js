/**
 * Asistente de Programación: script.js para Invitación Digital
 * Implementación de la Cuenta Regresiva para la fiesta de María Clara.
 */

document.addEventListener('DOMContentLoaded', (event) => {
    // 1. Definimos la fecha y hora del evento: 18 DE OCTUBRE DEL 2025 A LAS 21:30HS
    // ¡IMPORTANTE! Si se cambia la fecha, solo se necesita cambiar esta línea.
    const fechaEvento = new Date("October 18, 2025 21:30:00").getTime();
    
    // Obtenemos la referencia al elemento HTML donde se mostrará la cuenta regresiva
    const countdownElement = document.getElementById('countdown');

    // 2. Función principal que actualiza el contador
    function actualizarCuentaRegresiva() {
        // Obtenemos la hora actual
        const ahora = new Date().getTime();
        
        // Calculamos la distancia de tiempo restante
        const distancia = fechaEvento - ahora;

        // Si la cuenta regresiva termina (distancia es negativa)
        if (distancia < 0) {
            clearInterval(x); // Detenemos el intervalo
            countdownElement.innerHTML = `<p class="time-block" style="font-size: 1.5em; width: 100%;">¡Es Hoy! ¡A celebrar! 🎉</p>`;
            return; 
        }

        // 3. Cálculos de tiempo (fórmulas matemáticas)
        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        // 4. Inyección del HTML para mostrar el resultado
        countdownElement.innerHTML = `
            <div class="time-block">${dias}<span>DÍAS</span></div>
            <div class="time-block">${horas}<span>HS</span></div>
            <div class="time-block">${minutos}<span>MIN</span></div>
            <div class="time-block">${segundos}<span>SEG</span></div>
        `;
    }

    // 5. Llamamos a la función inmediatamente y luego cada segundo
    actualizarCuentaRegresiva();
    const x = setInterval(actualizarCuentaRegresiva, 1000);
});