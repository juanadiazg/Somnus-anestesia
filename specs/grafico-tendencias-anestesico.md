# Spec: Gráfico de Tendencias Anestésico

## Objective
Mejorar el gráfico de tendencias de la app de registro anestésico para que muestre presión arterial sistólica, diastólica y media conectadas visualmente como en el estándar clínico (línea vertical azul con símbolos diferenciados), frecuencia cardíaca y CO₂. Además, debe permitir marcar con botones el inicio de inducción y la extubación como etiquetas de texto en el gráfico, y registrar notas intraquirúrgicas de texto libre que aparecen como ícono en el gráfico y en una sección listada por separado. Dirigido a anestesiólogos que llevan el registro durante el acto quirúrgico.

## Requirements

### Must-have
- El gráfico muestra PA sistólica (símbolo: horquilla abriendo hacia arriba), PA diastólica (símbolo: horquilla abriendo hacia abajo), PA media (símbolo: X en el punto medio), todos conectados por una línea vertical azul en cada punto de tiempo.
- El gráfico muestra FC como triángulo rojo sólido.
- El gráfico muestra CO₂ como círculo verde sólido.
- Los parámetros no se conectan con líneas de tendencia entre puntos de tiempo; cada valor se dibuja solo como su símbolo (la única línea es la vertical azul que une PAs/PAd/PAm dentro del mismo punto de tiempo).
- Leyenda a la derecha del gráfico que identifica cada símbolo: PAs, PAd, PAm, FC, CO₂, Nota, Inducción, Extubación.
- Botón "Inducción": al presionarlo registra el tiempo actual y muestra una etiqueta de texto vertical en el eje X del gráfico en esa columna de tiempo. La hora queda editable mediante un campo de hora, y puede quitarse.
- Botón "Extubación": al presionarlo registra el tiempo actual y muestra una etiqueta de texto vertical en el eje X del gráfico en esa columna de tiempo. La hora queda editable mediante un campo de hora, y puede quitarse.
- Botón "Agregar nota": abre un campo de texto libre y un campo de hora (por defecto la hora actual, editable) donde el usuario escribe la nota intraquirúrgica y la asocia a ese punto de tiempo.
- La posición de registros, marcadores (inducción/extubación) y notas en el eje X se determina por su hora HH:MM; al editar cualquier hora, el gráfico se reposiciona.
- En la lista de notas, cada nota tiene su hora editable y puede eliminarse.
- Cada nota registrada muestra un ícono de nota (📝 o equivalente) en el gráfico en la columna de tiempo correspondiente.
- Todas las notas aparecen en una sección separada debajo del gráfico, listadas con su tiempo y texto.
- Máximo 2 notas distintas por punto de tiempo. Si se intenta agregar una tercera en el mismo punto, el texto se concatena (append) a la segunda nota existente en ese tiempo.
- Todo el código reside en un único archivo HTML sin dependencias externas.

### Out of scope
- Sincronización con sistemas hospitalarios externos.
- Exportación o impresión del gráfico de tendencias (a menos que ya exista en la app).
- Alertas o umbrales automáticos sobre los valores graficados.
- Edición o eliminación de notas ya registradas.

## Edge Cases
- Si el usuario presiona "Inicio inducción" o "Extubación" más de una vez, solo se registra el primer evento; los siguientes presses son ignorados o muestran un aviso de que ya fue marcado.
- Si se agrega una tercera nota en el mismo punto de tiempo, el texto nuevo se concatena al final de la segunda nota existente con un separador visible (p.ej. " / ").
- Si no hay valores de PA/FC/CO₂ registrados en un punto de tiempo pero sí hay una nota o marcador, el ícono/etiqueta igual debe aparecer en el gráfico en esa columna.
- Si el ícono de nota y la etiqueta de inducción/extubación coinciden en el mismo punto de tiempo, ambos deben ser visibles sin solaparse.

## Definition of Done
- [ ] El gráfico muestra PA sistólica, diastólica y media con sus símbolos (horquilla arriba, horquilla abajo, X) conectados por línea vertical azul en cada punto de tiempo con datos.
- [ ] FC aparece como triángulo rojo y CO₂ como círculo verde en el gráfico.
- [ ] No hay líneas de tendencia que unan los parámetros entre puntos de tiempo (solo la línea vertical azul de PA dentro de cada punto).
- [ ] La leyenda a la derecha del gráfico identifica los símbolos PAs, PAd, PAm, FC, CO₂, Nota, Inducción, Extubación (sin Anest., Proc. ni Evnt.).
- [ ] Al presionar "Inducción", aparece una etiqueta de texto en la columna de tiempo correspondiente del gráfico, con su hora editable y opción de quitarla.
- [ ] Al presionar "Extubación", aparece una etiqueta de texto en la columna de tiempo correspondiente del gráfico, con su hora editable y opción de quitarla.
- [ ] El diálogo de nota incluye un campo de hora editable; en la lista de notas cada nota tiene hora editable y puede eliminarse; al cambiar cualquier hora el gráfico se reposiciona.
- [ ] Presionar dos veces el mismo botón (inducción o extubación) no duplica el marcador.
- [ ] Al agregar una nota, el ícono de nota aparece en el gráfico en el punto de tiempo correcto.
- [ ] Las notas aparecen listadas en la sección separada debajo del gráfico con tiempo y texto.
- [ ] Una tercera nota en el mismo punto de tiempo se concatena a la segunda nota, sin crear un tercer slot.
- [ ] El ícono de nota y una etiqueta de inducción/extubación en el mismo punto de tiempo son ambos visibles.
- [ ] Todo funciona en un único archivo HTML, verificable abriendo el archivo directamente en el navegador.
