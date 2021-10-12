'use strict'

//-------------METODOS CLIENTES------------------

function registrocliente() {
  var elemento = {
    id: $("#id").val(),
    name: $("#name").val(),
    email: $("#email").val(),
    age: $("#age").val(),
  }
  var dataToSend = JSON.stringify(elemento);
  //JSON= JavaScript Object Notation
  $.ajax({
    dataType: 'json',
    data: elemento,
    url: "https://g3448692b7adcab-gastosbd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
    type: 'POST',

    success: function (response) {
      console.log(response);
    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });

}

function obtenerItemsCliente() {
  console.log("Correcto")

  $.ajax({
    dataType: 'json',
    url: "https://g3448692b7adcab-gastosbd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
    type: 'GET',

    success: function (response) {

      var misItems = response.items;
      $("#miResultado").html("");
      misItems.forEach(function (item) {
        console.log(item);
        {
          $("#miResultado").append("<tr>");
          $("#miResultado").append("<td>" + item.id + "</td>");
          $("#miResultado").append("<td>" + item.name + "</td>");
          $("#miResultado").append("<td>" + item.email + "</td>");
          $("#miResultado").append("<td>" + item.age + "</td>");
          $("#miResultado").append('<td><button onclick="borrarCliente(' + item.id + ')">Borrar</button></td>');
          $("#miResultado").append('<td><button onclick="obtenerItemEspecificoCliente(' + item.id + ')">Cargar</button></td>');
          $("#miResultado").append("</tr>");

        }
      });

    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });

}


function borrarCliente(idElemento) {
  var elemento = {
    id: idElemento
  };


  var dataToSend = JSON.stringify(elemento);

  $.ajax({
    dataType: 'json',
    data: dataToSend,
    url: "https://g3448692b7adcab-gastosbd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
    type: 'DELETE',
    contentType: 'application/json',
    success: function (response) {
      console.log(response);

    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });

  obtenerItemsCliente();

}



function obtenerItemEspecificoCliente(idItem) {
  $.ajax({
    dataType: 'json',
    data: { id: idItem },
    url: "https://g3448692b7adcab-gastosbd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
    type: 'GET',
    success: function (response) {
      console.log(response);

      var item = response.items[0];


      $("#id").val(item.id);
      $("#name").val(item.name);
      $("#email").val(item.email);
      $("#age").val(item.age)
    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });

}

function actualizarCliente() {

  var elemento = {
    id: $("#id").val(),
    name: $("#name").val(),
    email: $("#email").val(),
    age: $("#age").val(),
  }

  var dataToSend = JSON.stringify(elemento);
  //JSON= JavaScript Object Notation
  $.ajax({
    dataType: 'json',
    data: dataToSend,
    contentType: 'application/json',
    url: "https://g3448692b7adcab-gastosbd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
    type: 'PUT',

    success: function (response) {
      console.log(response);
      obtenerItemsCliente();
    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });
  obtenerItemsCliente();

}



//-------------------METODOS MENSAJES-----------------------


function registroMensaje() {
  var elementomensaje = {
    id: $("#id").val(),
    messagetext: $("#messagetext").val(),
  }
  var dataparaEnviar = JSON.stringify(elementomensaje);
  //JSON= JavaScript Object Notation
  $.ajax({
    dataType: 'json',
    data: elementomensaje,
    url: "https://g3448692b7adcab-gastosbd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
    type: 'POST',

    success: function (response) {
      console.log(response);
    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });

}

function obtenerItemsMensaje() {
  console.log("correcto")

  $.ajax({
    dataType: 'json',
    url: "https://g3448692b7adcab-gastosbd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
    type: 'GET',

    success: function (response) {

      var misItems = response.items;
      $("#miResultadomensaje").html("");
      misItems.forEach(function (itemmensaje) {
        console.log(itemmensaje);
        {
          $("#miResultadomensaje").append("<tr>");
          $("#miResultadomensaje").append("<td>" + itemmensaje.id + "</td>");
          $("#miResultadomensaje").append("<td>" + itemmensaje.messagetext + "</td>");
          $("#miResultadomensaje").append('<td><button onclick="borrarMensaje(' + itemmensaje.id + ')">Borrar</button></td>');
          $("#miResultadomensaje").append('<td><button onclick="obtenerItemEspecificoMensaje(' + itemmensaje.id + ')">Cargar</button></td>');
          $("#miResultadomensaje").append("</tr>");

        }
      });

    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });

}


function borrarMensaje(idElemento) {
  var elementomensaje = {
    id: idElemento
  };


  var dataToSend = JSON.stringify(elementomensaje);

  $.ajax({
    dataType: 'json',
    data: dataToSend,
    url: "https://g3448692b7adcab-gastosbd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
    type: 'DELETE',
    contentType: 'application/json',
    success: function (response) {
      console.log(response);

    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });

  obtenerItemsMensaje();

}



function obtenerItemEspecificoMensaje(idItem) {
  $.ajax({
    dataType: 'json',
    data: { id: idItem },
    url: "https://g3448692b7adcab-gastosbd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
    type: 'GET',
    success: function (response) {
      console.log(response);

      var itemmensaje = response.items[0];


      $("#id").val(itemmensaje.id);
      $("#messagetext").val(itemmensaje.messagetext);
    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });

}

function actualizarMensaje() {

  var elementomensaje = {
    id: $("#id").val(),
    messagetext: $("#messagetext").val(),
  }

  var dataToSend = JSON.stringify(elementomensaje);
  //JSON= JavaScript Object Notation
  $.ajax({
    dataType: 'json',
    data: dataToSend,
    contentType: 'application/json',
    url: "https://g3448692b7adcab-gastosbd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
    type: 'PUT',

    success: function (response) {
      console.log(response);
      obtenerItemsMensaje();
    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });
  obtenerItemsMensaje();

}

//-------------------METODOS MOTO-----------------------


function registroMoto() {
  var elementomoto = {
    id: $("#id").val(),
    brand: $("#brand").val(),
    model: $("#model").val(),
    category_id: $("#category_id").val(),
    name: $("#name").val()
  }
  var dataparaEnviar = JSON.stringify(elementomoto);
  //JSON= JavaScript Object Notation
  $.ajax({
    dataType: 'json',
    data: elementomoto,
    url: "https://g3448692b7adcab-gastosbd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/moto/moto",
    type: 'POST',

    success: function (response) {
      console.log(response);
    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });

}

function obtenerItemsMoto() {
  console.log("correcto")

  $.ajax({
    dataType: 'json',
    url: "https://g3448692b7adcab-gastosbd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/moto/moto",
    type: 'GET',

    success: function (response) {

      var misItems = response.items;
      $("#miResultadomoto").html("");
      misItems.forEach(function (itemmoto) {
        console.log(itemmoto);
        {
          $("#miResultadomoto").append("<tr>");
          $("#miResultadomoto").append("<td>" + itemmoto.id + "</td>");
          $("#miResultadomoto").append("<td>" + itemmoto.brand + "</td>");
          $("#miResultadomoto").append("<td>" + itemmoto.model + "</td>");
          $("#miResultadomoto").append("<td>" + itemmoto.category_id + "</td>");
          $("#miResultadomoto").append("<td>" + itemmoto.name + "</td>");
          $("#miResultadomoto").append('<td><button onclick="borrarMoto(' + itemmoto.id + ')">Borrar</button></td>');
          $("#miResultadomoto").append('<td><button onclick="obtenerItemEspecificoMoto(' + itemmoto.id + ')">Cargar</button></td>');
          $("#miResultadomoto").append("</tr>");

        }
      });

    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });

}


function borrarMoto(idElemento) {
  var elementomoto = {
    id: idElemento
  };


  var dataToSend = JSON.stringify(elementomoto);

  $.ajax({
    dataType: 'json',
    data: dataToSend,
    url: "https://g3448692b7adcab-gastosbd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/moto/moto",
    type: 'DELETE',
    contentType: 'application/json',
    success: function (response) {
      console.log(response);

    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });

  obtenerItemsMoto();

}



function obtenerItemEspecificoMoto(idItem) {
  $.ajax({
    dataType: 'json',
    data: { id: idItem },
    url: "https://g3448692b7adcab-gastosbd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/moto/moto",
    type: 'GET',
    success: function (response) {
      console.log(response);

      var itemmoto = response.items[0];


      $("#id").val(itemmoto.id);
      $("#brand").val(itemmoto.brand);
      $("#model").val(itemmoto.model);
      $("#category_id").val(itemmoto.category_id);
      $("#name").val(itemmoto.name);
    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });

}

function actualizarMoto() {
  var elementomoto = {
    id: $("#id").val(),
    brand: $("#brand").val(),
    model: $("#model").val(),
    category_id: $("#category_id").val(),
    name: $("#name").val()
  }

  var dataToSend = JSON.stringify(elementomoto);
  //JSON= JavaScript Object Notation
  $.ajax({
    dataType: 'json',
    data: dataToSend,
    contentType: 'application/json',
    url: "https://g3448692b7adcab-gastosbd.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/moto/moto",
    type: 'PUT',

    success: function (response) {
      console.log(response);
      obtenerItemsMoto();
    },

    error: function (jqXHR, textStatus, errorThrown) {

    }
  });
  obtenerItemsMoto();

}
