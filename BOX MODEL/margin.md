# Margin

Espaços entre elementos

- margin-top | margin-right | margin-bottom | margin-left
- values: `<length` | `<percentage>` | auto
```css

div {
    /*shorthand*/
    margin: 12px 16px 10px 4px; /*top, right, bottom e left */
    margin: 12px 16px 0; /* top, laterais e bottom */
    margin:8px 16px; /* cima e baixo, lateais  */
    margin: 8px; /* para todas as direções */
}
```
* Cuiodadao com margin collapsing (top se ajunta ao bottom) - no display block os valores de margin, quando há dois elementos um abaixo do outro, não são somados. Já no caso do display inline, o valor da margin horizontal são somadas o que cria uma distâcia entre as box maior

** por padrão os navegadores tem 8px de margin

** sempre colocar * {
    margin:0
} para não errar no cálculo

**o autor faz cálculos automáticos apenas nas laterais
