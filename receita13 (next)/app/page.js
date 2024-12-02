import Table from "./body/body";
import Header from "./header/header";

export default function Home() {
  return (
    <div>
      {Header()}
      {Table()}
    </div>
  );
}
