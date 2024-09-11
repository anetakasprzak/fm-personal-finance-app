import Image from "next/image";
import data from "../../data/data.json";

export default function Nav() {
  return (
    <ul>
      {data.nav.map((nav) => (
        <li key={nav.id}>
          <Image src={nav.image} alt="nav icon" width={50} height={50} />
          <p>{nav.text}</p>
        </li>
      ))}
    </ul>
  );
}
