const programasTecnicos = [
    'Técnico en Auxiliar Administrativo',
    'Técnico en Atención a la primera Infancia',
    'Técnico en Seguridad Ocupacional',
    'Técnico en Sistemas',
    'Técnico en Asistente administrativo y gerencial',
    'Técnico en Investigación Judicial y criminalística',
    'Técnico en Auxiliar de Producción Audiovisual'
];

const programasNormales = [
    'Curso de Mercadeo y ventas',
    'Curso de Auxiliar en Sistemas',
    'Curso de Auxiliar en sistemas nivel II',
    'Curso de Mantenimiento y reparación de computadores',
    'Curso de Diseño Gráfico',
    'Curso de Caja Registradora',
    'Curso de Producción Audiovisual'
];

// Función para seleccionar tipo de curso
function selectOption(tipo) {
    // Ocultar banner
    document.getElementById('selectionBanner').style.display = 'none';
    
    // Mostrar formulario
    document.getElementById('formContainer').classList.add('show');
    
    // Actualizar título
    const formTitle = document.getElementById('formTitle');
    formTitle.textContent = tipo === 'tecnico' ? 'Inscripción - Curso Técnico' : 'Inscripción - Curso Normal';
    
    // Cargar programas
    const selectPrograma = document.getElementById('programa');
    selectPrograma.innerHTML = '<option value="">Selecciona un programa</option>';
    
    const programas = tipo === 'tecnico' ? programasTecnicos : programasNormales;
    programas.forEach(programa => {
        const option = document.createElement('option');
        option.value = programa;
        option.textContent = programa;
        selectPrograma.appendChild(option);
    });

    // Scroll suave hacia el formulario
    setTimeout(() => {
        document.getElementById('formContainer').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// Función para volver a la selección
function goBack() {
    // Ocultar formulario
    document.getElementById('formContainer').classList.remove('show');
    
    // Mostrar banner
    document.getElementById('selectionBanner').style.display = 'grid';
    
    // Limpiar formulario
    document.getElementById('inscriptionForm').reset();
    
    // Scroll hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Función para manejar el envío del formulario
function handleSubmit(event) {
    event.preventDefault();
    
    // Recopilar datos del formulario
    const formData = {
        nombre: document.getElementById('nombre').value,
        direccion: document.getElementById('direccion').value,
        telefono: document.getElementById('telefono').value,
        programa: document.getElementById('programa').value,
        correo: document.getElementById('correo').value || 'No proporcionado'
    };

    // Aquí puedes agregar la lógica para enviar los datos a tu servidor
    // Por ejemplo, usando fetch API:
    /*
    fetch('tu-url-de-envio', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('¡Gracias por tu inscripción! Pronto nos pondremos en contacto contigo.');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Hubo un error al enviar tu inscripción. Por favor, intenta nuevamente.');
    });
    */

    // Por ahora, solo mostramos un mensaje
    console.log('Datos del formulario:', formData);
    
    // Mensaje de confirmación
    alert('¡Gracias por tu inscripción! Pronto nos pondremos en contacto contigo.');
    
    // Opcional: resetear formulario y volver al inicio
    document.getElementById('inscriptionForm').reset();
    goBack();
}

// Añadir animación a las tarjetas al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.option-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});