import Link from "next/link";

export default function StudentGuide() {
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
              <Link href="#programe-studiu" className="link link-hover text-blue-600 underline">Programe de studiu</Link>
            </li>
            <li>
              <Link href="#resurse-utile" className="link link-hover text-blue-600 underline">Resurse Utile</Link>
            </li>
            <li>
              <Link href="#activitati-studentesti" className="link link-hover text-blue-600 underline">Activități Studențești</Link>
            </li>
          </ul>
        </div>

        <section id="introducere" className="mb-8">
          <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Introducere</h3>
            <p>
              Bine ai venit la facultatea noastră! Ghidul Studentului este conceput pentru a te ajuta să te integrezi și să
              ai o experiență reușită pe parcursul studiilor tale.
            </p>
          </div>
        </section>

        <section id="programe-studiu" className="mb-8">
          <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Programe de Studiu</h3>
            <p>
              Află mai multe despre programele de studiu oferite la facultate, planurile de învățământ și oportunitățile
              academice disponibile.
            </p>
            <p>
              Explorează varietatea de specializări și discipline care te vor ghida în parcursul tău academic, oferindu-ți o
              perspectivă asupra domeniilor de interes.
            </p>
          </div>
        </section>

        <section id="resurse-utile" className="mb-8">
          <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Resurse Utile</h3>
            <p>
              Descoperă resursele utile disponibile pentru studenți, biblioteci, laboratoare, platforme online și altele.
            </p>
            <p>
              Beneficiază de facilitățile și instrumentele puse la dispoziție pentru a-ți îmbunătăți experiența de învățare și
              pentru a te conecta cu materialele de studiu.
            </p>
          </div>
        </section>

        <section id="activitati-studentesti" className="mb-8">
          <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Activități Studențești</h3>
            <p>
              Participă la diverse activități studențești pentru a-ți dezvolta abilitățile și pentru a te bucura de viața academică.
            </p>
            <p>
              Implică-te în proiecte, asociații studențești, și evenimente care să îți ofere o perspectivă cuprinzătoare asupra
              vieții de student.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
