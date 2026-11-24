#!/bin/sh
# Genera las copias en Word a partir de los Markdown de public/documentos/.
# Los .md son la fuente editorial; los .docx son artefactos derivados.
# Se desactiva task_lists: con esa extension pandoc elimina las casillas
# "- [ ]" al escribir .docx y las declaraciones quedarian sin nada que marcar.
# Ejecutar desde la raiz del proyecto tras modificar cualquier .md:  sh generar-docx.sh
set -e
cd "$(dirname "$0")/public/documentos"
for f in estatutos reglamento ficha-ingreso ficha-aporte ficha-programacion; do
  pandoc -f gfm-task_lists -t docx "$f.md" -o "$f.docx"
  echo "  $f.docx  $(wc -c < "$f.docx") bytes"
done
echo "Listo. Recordar volver a desplegar."
