# COMANDOS GIT

* git init // Inicializar el proyecto
* git add . // Prepara para agregar todos los archivos del proyecto
* git rm --cached nombre del archivo a deshacer o punto para todos los archivos // Deshacer la preparación del envío
* git status // Ver el estado de los archivos del proyecto. Indica si falta algún archivo para enviar o están todos enviados
* git commit -m "Descripción del proyecto" // Cerrar el proyecto, ponerle descripción y enviarlo
* git log // Ver los commits y las versiones de los proyectos guardados. Fecha, hora, datos del autor y descripción
* git log --stat // Ver todos los logs y los detalles de los mismos
* git log --oneline // Ver los commits en una sóla línea, con sus identificadores
* git checkout -- . // Reconstruye el proyecto por completo
* git checkout número del commit // Volver a un commit anterior según su identificador
* git checkout -b Nombre de la rama nueva // Crear una rama nueva. Se puede agregar código a la rama nueva ya que clona el principal
* git branch // Ver las ramas del proyecto
* git checkout Nombre de la rama // Cambiar a la rama seleccionada
* git merge Nombre de la rama a unir // Fusionar ramas con la rama en la que estás en este momento
* git branch -d Nombre de la rama a borrar // Borrar rama
* git tag -a v1.0.0 -m "Diseño Listo" // Crear versión para releases
* git tag // Ver los tags creados
* git push // Desplegar en GitHub
* git push --tags // Desplegar en GitHub con un tag
* git remote -v // Ver el URL donde se hizo el despliegue

## Para borrar el GIT, entrar en la carpeta del pryecto y borrar la carpeta oculta GIT. Hay que volver a inicializar con INIT

# RECUPERAR DE GITHUB

* Descargar de GitHub el último TAG y luego hacer npm install
* Pulsar botón de CLONAR en el repositorio de GitHub y en la terminal: git clone pegar URL (preferible)