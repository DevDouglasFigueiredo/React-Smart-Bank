import React from "react"
import alimentacao from "../assets/images/alimentacao.svg"
import outros from "../assets/images/outros.svg"
import saude from "../assets/images/saude.svg"
import transporte from "../assets/images/transporte.svg"
import utilidades from "../assets/images/utilidades.svg"
import { Icone } from "./UI"
import { IconeTema } from "./UI"


export default (type) => {

    const Images = {
        Restaurante: <IconeTema src={alimentacao} alt="restaurante" />,
        Utilidades: <IconeTema src={alimentacao} alt="utilidades" />,
        Saude: <IconeTema src={alimentacao} alt="saude" />,
        Transporte: <IconeTema src={alimentacao} alt="transporte" />,
        default: <IconeTema src={alimentacao} alt="outros" />
     };

     return Images [type] || Images.default;
};