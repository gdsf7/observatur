import { Link } from "@inertiajs/react";

export default function TopBar({current = ""}){
    return (
        <>
            <Link>Início</Link>
            <Link>O Observatório</Link>
            <Link>Cidades</Link>
            <Link>Indicadores</Link>
            <Link>Publicações</Link>
            <Link>Contato</Link>
        </>
    );
}