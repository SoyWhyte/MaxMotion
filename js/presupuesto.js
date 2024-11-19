//Asignar elementos
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('presupuestoForm');
    const plan = document.getElementById('plan');
    const plazo = document.getElementById('plazo');
    const extra1 = document.getElementById('extra1');
    const extra2 = document.getElementById('extra2');
    const presupuestoFinal = document.getElementById('presupuestoFinal')



    //Función calcular
    function calcularPresupuesto() {
        let total = parseFloat(plan.value); //Precio Base


        const plazoMeses = parseInt(plazo.value);
        let descuento = 1; // Sin descuento

        if (plazoMeses >= 6 && plazoMeses <= 11) {
            descuento = 0.9; // 10% de descuento

        } else if (plazoMeses >= 12 && plazoMeses <= 17) {
            descuento = 0.8; // 20% de descuento

            } else if (plazoMeses >= 18 && plazoMeses <= 24) {
                descuento = 0.7; // 30% de descuento
        }

        //Aplicar extra1
        if (extra1.checked) {
            total += parseFloat(extra1.value);
        }

        //Aplicar extra2
        if (extra2.checked) {
            total += parseFloat(extra2.value);
        }

        total *= descuento;
        presupuestoFinal.value = `${total.toFixed(2)}€ / mes`;
    }

    //Recalcular Cambios
    plan.addEventListener('change', calcularPresupuesto);
    plazo.addEventListener('input', calcularPresupuesto);
    extra1.addEventListener('change', calcularPresupuesto);
    extra2.addEventListener('change', calcularPresupuesto);

    //Validar Formulario
    form.addEventListener('submit', function (event) {
        const nombre = document.getElementById('nombre').value;
        const apellidos = document.getElementById('apellidos').value;
        const telefono = document.getElementById('telefono').value;

        const regexNombre = /^[A-Za-z\s]{1,15}$/;
        const regexApellidos = /^[A-Za-z\s]{1,40}$/;
        const regexTelefono = /^[0-9]{9}$/;

        if (!regexNombre.test(nombre)) {
            alert('El nombre solo puede contener letras y hasta 15 caracteres.');
            event.preventDefault();
        }

        if (!regexApellidos.test(apellidos)) {
            alert('Los apellidos solo pueden contener letras y hasta 40 caracteres.');
            event.preventDefault();
        }

        if (!regexTelefono.test(telefono)) {
            alert('El teléfono debe contener 9 dígitos.');
            event.preventDefault();
        }
    });

    //Iniciar Cálculo
    calcularPresupuesto();
});
