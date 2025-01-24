import Link from "next/link";
import { Componente_arquivo, Componente_arquivo2 } from "./teste/page";
import Pagina4 from "./teste/[name]/page";
import style from "./styles/link.module.css";

export default function Principal() {
  return (
    <div>
      <h1>Receita NEXT</h1>
      <div className="teste">
        <Componente_arquivo />
        <Componente_arquivo2 />
      </div>{" "}
      <br></br>
      <div className="teste">
        <Pagina4 textinho="Componente Escrito em Outra Página" />
      </div>
      <MariaPrea />
      {/*o url é a pasta*/}
      <Link href="/teste" className={style.link}>
        Página 2
      </Link>
      <br></br>
      <Link href="/movieSearch" className={style.link}>
        Formulário
      </Link>
      <br></br>
      <Link href="/teste/name" className={style.link}>
        Página 3
      </Link>
    </div>
  );
}

export function MariaPrea() {
  return <h2>Morreu Maria Preá...</h2>;
}
