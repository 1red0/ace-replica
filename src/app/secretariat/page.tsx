import Link from "next/link";

export default function Secretariat() {
  return (
    <div className="min-h-screen bg-base-300 text-gray">
      <div className="container mx-auto py-8">

        <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
          <h3 className="text-xl font-bold mb-4">Cuprins</h3>
          <ul className="list-disc pl-8 mb-4">
            <li>
              <Link href="#introducere" className="link link-hover text-blue-600 underline">Introducere</Link>
            </li>
            <li>
              <Link href="#documente-necesare" className="link link-hover text-blue-600 underline">Documente Necesare</Link>
            </li>
            <li>
              <Link href="#program-de-lucru" className="link link-hover text-blue-600 underline">Program de Lucru</Link>
            </li>
            <li>
              <Link href="#contact" className="link link-hover text-blue-600 underline">Contact</Link>
            </li>
          </ul>
        </div>

        <section id="introducere" className="mb-8">
          <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Introducere</h3>
            <p>
              Bine ai venit la Secretariatul facultății! Această secțiune oferă informații importante despre aspectele
              birocratice și administrative ale facultății.
            </p>
          </div>
        </section>

        <section id="documente-necesare" className="mb-8">
          <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Documente Necesare</h3>
            <p>
              Află care sunt documentele necesare pentru diverse procese administrative, precum înscrierea la examene,
              eliberarea adeverințelor, sau alte cerințe specifice ale facultății.
            </p>
            <p>
              Asigură-te că dispui de toate documentele necesare pentru a facilita procesul tău de studiu.
            </p>
          </div>
        </section>

        <section id="program-de-lucru" className="mb-8">
          <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Program de Lucru</h3>
            <p>
              Consultă programul de lucru al secretariatului pentru a ști în ce perioade poți accesa serviciile administrative
              și a obține informații de interes.
            </p>
            <p>
              Verifică orarul și asigură-te că te organizezi corespunzător pentru a beneficia de suportul oferit de
              secretariat.
            </p>
          </div>
        </section>

        <section id="contact" className="mb-8">
          <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Contact</h3>
            <p>
              Găsește informații de contact ale secretariatului pentru a putea lua legătura cu personalul administrativ și a
              primi răspunsuri la întrebările tale.
            </p>
            <p>
              Comunicarea eficientă cu secretariatul este esențială pentru a rezolva orice nelămurire sau a obține sprijin în
              procesele administrative.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
