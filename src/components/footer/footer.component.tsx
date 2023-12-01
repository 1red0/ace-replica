import Image from 'next/image';
import Logo from '../../assets/sigla_mica.png'
import Link from 'next/link';

export default function Footer() {

  return (
    <><footer className="footer p-10 bg-base-200 text-base-content border-t">
      <nav>
        <header className="footer-title">Utile</header>
        <Link href='/underconstruction' className="link link-hover">Ghidul Studentului</Link>
        <Link href='/underconstruction' className="link link-hover">Secretariat</Link>
        <Link href='/news' className="link link-hover">Știri</Link>
        <Link href='/team' className="link link-hover">Profesori</Link>
      </nav>
      <nav>
        <header className="footer-title">Admitere</header>
        <Link href='/admission' className="link link-hover">Informații generale</Link>
        <Link href='/underconstruction' className="link link-hover">Licență</Link>
        <Link href='/underconstruction' className="link link-hover">Master</Link>
        <Link href='/underconstruction' className="link link-hover">Doctorat</Link>
      </nav>
    </footer><footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <Image src={Logo} alt="LOGO" />
          <p>Facultatea de Automatică, Calculatoare și Electronică 
            <br />Blvd. Decebal nr. 107, Craiova, Dolj, România
            <br />RO-200440
            <br />tel +40 251 438 198, e-mail:info@ace.ucv.ro
          </p>
        </aside>
      </footer></>
  );
}
