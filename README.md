//Com guardar el projecte//

    git status //per veure si hi ha alguna cosa desactualitzada//
    git add . //s'afegeix un fitxer o els seus canvis//o git rm si s'ha de borrar
    git status
    git commit -m ""//per posar el comentari del canvi
    git push comu master //git push repositori branca

//Com descarregar canvis en el projecte//

    git fetch //Descarrega els canvis//
    git merge comu/master  //Ajunta els canvis remots amb el projecte//

//o el que es el mateix://

    git pull master //Descarregar i ajuntar el codi//

//Crear un nova branca//

    git checkout -b nom_branca

//Canviar de branca//

    git checkout nom_branca //o repositori/branca (comu/master)//

//Descarregar tot el projecte de nou//

    git clone [[repositori]]

//Afegir un nou repositori//

    git remote add nom_repositori url_repositori

//Per treballar amb windows sa d'escriure un cop aquesta comanda (https://help.github.com/articles/dealing-with-line-endings)//

    git config --global core.autocrlf true
