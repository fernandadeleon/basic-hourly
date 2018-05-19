# Basic Hourly Rate
## ¿Qué debes hacer?
1. Completa el formulario en HTML para que el script sea capaz de recibir las variables necesarias para hacer el calculo por hora.
2. Completa el script de JS que evalue las variables recibidas por el formulario y nos muestre los resultados esperados en sus respectivos elementos de contenido dinámico.
3. Una vez completado el script, agregar estilos y transiciones a la app a usando `TweenMax.js` que mejore la interfaz y le de un toque de animación al formulario par hacerlo más atractivo.

### Variables a considerar
| Campo                               | Tipo de dato  |
| ----------------------------------- |:-------------:|
| Horas a trabajar en el día          | Número        |
| Días de trabajo a la semana         | Número        |
| Gastos de vivienda                  | Número        |
| Gastos de luz                       | Número        |
| Gastos de teléfono e internet       | Número        |
| Gastos de comida                    | Número        |
| Gastos de teléfono celular          | Número        |
| Gastos de transporte                | Número        |
| Gastos de entretenimiento           | Número        |
| Porcentaje de ganancia              | Número(%)     |
| Porcentaje de jubilación            | Número(%)     |

### Variables esperadas
| Resultado                           | Tipo de dato  |
| ----------------------------------- |:-------------:|
| Gastos Totales                      | Número        |
| Mínimo Ingreso Mensual              | Número        |
| Costo por Hora                      | Número        |

### Pasos a seguir
1) `Total de Gastos Mensuales = (Suma de todos los campos de gastos)`

2) `Gastos más Ganancia = Total de Gastos Mensuales + (Total de Gastos Mensuales * Ganancia)`

3) `Mínimo Ingreso Mensual = Gastos con Ganancia más Jubilación = Gastos más Ganancia + (Gastos más Ganancia * Jubilación)`

4) `Total de Horas = horas * días * 4`

5) `Costo por Hora = Mínimo Ingreso Mensual / Total de Horas`