function detallesBateria() {
  Swal.fire({
    showClass: {
      popup: "animate__animated animate__tada",
    },
    html:
      "<div><h1 style='color:#dc3545;font-weight:bold;text-align:center;'>Detalles Baterias</h1>" +
      "<hr class='featurette-divider'>" +
      "<p style='text-align:center;font-size:1rem'>Según el consumo de su sistema le recomendamos lo siguiente:</p>" +
      "<ul style='text-align:center;margin:0;padding:0;'><li>Baterias en total: <span style='color:#dc3545'>" +
      numBaterias +
      "</span></li><li>Baterias en paralelo: <span style='color:#dc3545'>" +
      bateriasParalelo +
      "</span></li><li>Baterias en serie: <span style='color:#dc3545'>" +
      bateriaSerie +
      "</span></li></ul>" +
      "<br>" +
      "<a href='" +
      verMas.bateria +
      "' target='_blank' type='button' class='btn btn-dark' style='color: #fff;'>Ver Detalles</a></div>",
  });
}
function detallesModulos() {
  Swal.fire({
    showClass: {
      popup: "animate__animated animate__tada",
    },
    html:
      "<div><h1 style='color:#dc3545;font-weight:bold;text-align:center;'>Detalles Modulos</h1>" +
      "<hr class='featurette-divider'>" +
      "<p style='text-align:center;font-size:1rem'>Según el consumo de su sistema le recomendamos lo siguiente:</p>" +
      "<ul style='text-align:center;margin:0;padding:0;'><li>Modulos en total: <span style='color:#dc3545'>" +
      numModulo +
      "</span></li><li>Modulos en paralelo: <span style='color:#dc3545'>" +
      paraleloModulo +
      "</span></li><li>Modulos en serie: <span style='color:#dc3545'>" +
      seriesModulo +
      "</span></li></ul>" +
      "<br>" +
      "<a href='" +
      verMas.modulo +
      "' target='_blank' type='button' class='btn btn-dark' style='color: #fff;'>Ver Detalles</a></div>",
  });
}
function detallesInversor() {
  Swal.fire({
    showClass: {
      popup: "animate__animated animate__tada",
    },
    html:
      "<div><h1 style='color:#dc3545;font-weight:bold;text-align:center;'>Detalles Inversor</h1>" +
      "<hr class='featurette-divider'>" +
      "<p style='text-align:center;font-size:1rem'>El Inversor que más se adapta a su consumo ingresado es el siguiente:</p>" +
      "<a href='" +
      verMas.inversor +
      "' target='_blank' type='button' class='btn btn-dark' style='color: #fff;'>Ver Detalles</a></div>",
  });
}
function detallesControlador() {
  Swal.fire({
    showClass: {
      popup: "animate__animated animate__tada",
    },
    html:
      "<div><h1 style='color:#dc3545;font-weight:bold;text-align:center;'>Detalles Controlador</h1>" +
      "<hr class='featurette-divider'>" +
      "<p style='text-align:center;font-size:1rem'>El controlador que más se adapta a su consumo ingresado es el siguiente: </p>" +
      "<a href='" +
      verMas.controlador +
      "' target='_blank' type='button' class='btn btn-dark' style='color: #fff;'>Ver Detalles</a></div>",
  });
}
