$(function () {
  bsCustomFileInput.init();
});
// $(function () {
//   $("#example1").DataTable({
//     "responsive": true, "lengthChange": false, "autoWidth": false,
//     "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
//   }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
//   $('#example2').DataTable({
//     "paging": true,
//     "lengthChange": false,
//     "searching": false,
//     "ordering": true,
//     "info": true,
//     "autoWidth": false,
//     "responsive": true,
//   });
// });
$(".tablas").DataTable({
  "language": {
    "sProcessing": 		"Procesando...",
    "sLengthMenu": 		"Mostrar _MENU_ registros",
    "sZeroRecords":  	"No se encontraron resultados",
    "sEmptyTable":  	"Ningun dato disponible en esta tabla",
    "sInfo":  			"Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
    "sInfoEmpty":  		"Mostrando registros del 0 al 0 de un total de 0",
    "sInfoFiltered":  	"(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix":  	"",
    "sSearch":  		"Buscar:",
    "sUrl":  			"",
    "sInfoThosands":  	",",
    "sLoadingRecords":  "Cargando...",
    "oPaginate":{
      "sFirst": 	 "Primero",
      "sLast": 	 "Último",
      "sNext": 	 "Siguiente",
      "sPrevious": "Anterior",
    },
    "oAria": {
      "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
      "sSortDescending": ": Activar para ordenar la columna de manera descentente"
    }

    }
});
$(function () {
  $("#example1").DataTable({
    "responsive": true, "lengthChange": false, "autoWidth": false,
    "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"],
    "language": {
      "sProcessing": 		"Procesando...",
      "sLengthMenu": 		"Mostrar _MENU_ registros",
      "sZeroRecords":  	"No se encontraron resultados",
      "sEmptyTable":  	"Ningun dato disponible en esta tabla",
      "sInfo":  			"Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
      "sInfoEmpty":  		"Mostrando registros del 0 al 0 de un total de 0",
      "sInfoFiltered":  	"(filtrado de un total de _MAX_ registros)",
      "sInfoPostFix":  	"",
      "sSearch":  		"Buscar:",
      "sUrl":  			"",
      "sInfoThosands":  	",",
      "sLoadingRecords":  "Cargando...",
      "oPaginate":{
        "sFirst": 	 "Primero",
        "sLast": 	 "Último",
        "sNext": 	 "Siguiente",
        "sPrevious": "Anterior",
      },
      "oAria": {
        "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descentente"
      },
      "buttons": {
        "copy": "Copiar",
        "colvis": "Visibilidad"
      }

    }
  }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
  $('#example2').DataTable({
    "paging": true,
    "lengthChange": false,
    "searching": false,
    "ordering": true,
    "info": true,
    "autoWidth": false,
    "responsive": true,
  });
});
