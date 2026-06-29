# Spec: Gráfico de Tendencias Anestésico

## Objective
Mejorar el gráfico de tendencias de la app de registro anestésico para que muestre presión arterial sistólica, diastólica y media conectadas visualmente como en el estándar clínico (línea vertical azul con símbolos diferenciados), frecuencia cardíaca y CO₂. Además, debe permitir marcar con botones el inicio de inducción y la extubación como etiquetas de texto en el gráfico, y registrar notas intraquirúrgicas de texto libre que aparecen como ícono en el gráfico y en una sección listada por separado. Dirigido a anestesiólogos que llevan el registro durante el acto quirúrgico.

## Requirements

### Must-have
- El gráfico muestra PA sistólica (símbolo: Y invertida en la parte superior de la línea), PA diastólica (símbolo: Y en la parte inferior), PA media (símbolo: X en el punto medio), todos conectados por una línea vertical azul en cada punto de tiempo.
- El gráfico muestra FC como círculo rojo sólido.
- El gráfico muestra CO₂ como cuadrado verde sólido.
- Leyenda a la derecha del gráfico que identifica cada símbolo: Anest., Proc., Evnt., PAs, PAd, PAm, FC, CO₂.
- Botón "Inicio inducción": al presionarlo registra el tiempo actual y muestra una etiqueta de texto vertical en el eje X del gráfico en esa columna de tiempo.
- Botón "Extubación": al presionarlo registra el tiempo actual y muestra una etiqueta de texto vertical en el eje X del gráfico en esa columna de tiempo.
- Botón "Agregar nota": abre un campo de texto libre donde el usuario escribe la nota intraquirúrgica y la asocia al punto de tiempo actual.
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
- [ ] El gráfico muestra PA sistólica, diastólica y media con sus símbolos correctos (Y-inv, Y, X) conectados por línea vertical azul en cada punto de tiempo con datos.
- [ ] FC aparece como círculo rojo y CO₂ como cuadrado verde en el gráfico.
- [ ] La leyenda a la derecha del gráfico identifica correctamente todos los símbolos.
- [ ] Al presionar "Inicio inducción", aparece una etiqueta de texto en la columna de tiempo correspondiente del gráfico.
- [ ] Al presionar "Extubación", aparece una etiqueta de texto en la columna de tiempo correspondiente del gráfico.
- [ ] Presionar dos veces el mismo botón (inducción o extubación) no duplica el marcador.
- [ ] Al agregar una nota, el ícono de nota aparece en el gráfico en el punto de tiempo correcto.
- [ ] Las notas aparecen listadas en la sección separada debajo del gráfico con tiempo y texto.
- [ ] Una tercera nota en el mismo punto de tiempo se concatena a la segunda nota, sin crear un tercer slot.
- [ ] El ícono de nota y una etiqueta de inducción/extubación en el mismo punto de tiempo son ambos visibles.
- [ ] Todo funciona en un único archivo HTML, verificable abriendo el archivo directamente en el navegador.
