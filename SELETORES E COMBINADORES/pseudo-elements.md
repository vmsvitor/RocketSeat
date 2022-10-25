## Pseudo-elements

Com pseudo-elements nós podemos adicionar HTML pelo prróprio CSS

`::pseudo-element-name`

# Exemplos

* ::before

    HTML

    <ul>
    <li>Gratidão</li>
    <li>Esperança</li>
    <li>Fé</li>
    <li>Liberdade</li>
    </ul>
    CSS

    li::before {
    content: "> "
    }


* ::after

    li::after{
    content: ";"
    }

* ::first-line

li::firts-line {
    font-weight: bold;
    }

