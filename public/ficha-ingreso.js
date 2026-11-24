// Ficha de ingreso: el formulario no envia datos a ningun servidor.
// Solo evita el envio accidental, permite limpiar los campos y avisa
// antes de abandonar la pagina con informacion sin imprimir.
(function () {
  const form = document.getElementById('ficha');
  if (!form) return;

  // Sin accion de envio: pulsar Enter no debe recargar ni perder los datos.
  form.addEventListener('submit', e => e.preventDefault());

  const lleno = () => [...form.elements].some(el =>
    (el.type === 'checkbox' || el.type === 'radio') ? el.checked : (el.value || '').trim() !== ''
  );

  const limpiar = document.getElementById('limpiar');
  if (limpiar) limpiar.addEventListener('click', () => {
    if (!lleno() || confirm('Se borraran todos los campos de esta ficha. Esta accion no se puede deshacer.')) {
      form.reset();
      form.elements[0] && form.elements[0].focus();
    }
  });

  // Los datos son efimeros: avisar si se sale con la ficha a medio llenar.
  window.addEventListener('beforeunload', e => {
    if (lleno()) { e.preventDefault(); e.returnValue = ''; }
  });
})();
