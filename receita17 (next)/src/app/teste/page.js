{
  /*precisa estar com o nome page*/
}
import Image from "next/image";
export function Componente_arquivo() {
  return (
    <div>
      <h2>Um componente de outro arquivo</h2>
    </div>
  );
}

export function Componente_arquivo2() {
  return (
    <div>
      <h2>Segundo componente de outro arquivo</h2>
    </div>
  );
}

export default function pag2() {
  return (
    <div>
      <h1>Recompensa</h1>
      <Image
        src="https://ezbrew.com.br/wp-content/uploads/2021/09/tasty-american-beer-arrangement-708x1024.jpg"
        alt="Beer arrangement"
        width={708}
        height={1024}
      />
    </div>
  );
}
