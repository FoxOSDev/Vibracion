
//Creamos una variable que determine una duracion.
var simp=[100]

//Creamos una variable que determine un ritmo concreto
var notansimp=[100,150,200]

//Esta variable es una prueba de que no hay limite en la vibracion.
var marchando=[
 800,160,
 800,160,
 800,160,
 320,80,
 160,96,
 640,160,
 320,80,
 160,96,
 960,480,
 608,112,
 608,112,
 608,112,
 400,112,
 160,96,
 480,96,
 320,160,
 160,96,
 640
]


//Ejecutamos la vibracion simple 
function simple(){
	navigator.vibrate(simp)
}


//Ejecutamos una vibracion con otra variable, sin necesidad de cambiar nada.
function complej(){
	navigator.vibrate(notansimp)
}

function marcha(){
	navigator.vibrate(marchando)
}


//Al dar valor = 0 detenemos cualquier vibracion activa
function parar(){
	navigator.vibrate(0)
}

function install(){
	var instalar = window.navigator.mozApps.install("http://app.foxosdev.es/manifest.wabapp")
	instalar.onsuccess = function () {
		alert('Instalado correctamente.')
	}
	instalar.onerror = function () {
		alert('Error en la instalación ('+this.error.name+')')
	}
}
