import Link from 'next/link';

export default function About() {
  
  return (

    <div className="min-h-screen bg-base-300 text-gray">
      <div className="container mx-auto py-8">

        <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
          <h3 className="text-xl font-bold mb-4">Facultatea</h3>
          <p className="mb-4">
            Facultatea de Automatică, Calculatoare şi Electronică (A.C.E.) pregăteşte şi formează tinerii ingineri, asigurându-le o pregătire teoretică fundamentală precum şi una practic-aplicativă, în domenii precum:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>calculatoare şi tehnologia informaţiei</li>
            <li>ingineria sistemelor</li>
            <li>inginerie electronică şi telecomunicaţii</li>
            <li>mecatronică şi robotică</li>
          </ul>
          <p className="mb-4">
            Planurile actuale de învățământ sunt rezultatul a circa 40 de ani de experienţă şi evoluţie, modificările succesive ale acestora urmărind cu mare atenţie progresele înregistrate în domeniile anterior menţionate. Diploma acordată de către Facultatea de Automatică, Calculatoare şi Electronică este echivalentă cu diplomele acordate de celelalte universităţi din Uniunea Europeană în aceste domenii de studiu.
          </p>

          <p className="mb-4">
            În prezent, Facultatea de Automatică, Calculatoare şi Electronică are 1489 de studenţi (1164 studenţi la specializările de licenţă şi 325 studenţi la specializarile de master).
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
          <h3 className="text-xl font-bold mb-4">Specializările de licenţă:</h3>
          <ul className="list-disc pl-8 mb-4">
            <li>Automatică: 337 (cca. 29%),</li>
            <li>Ingineria sistemelor multimedia: 113 (cca. 10%),</li>
            <li>Calculatoare cu predare în limba română: 241 (cca. 21%),</li>
            <li>Calculatoare cu predare în limba engleză: 190 (cca. 16%),</li>
            <li>Electronică aplicată: 140 (cca. 12%),</li>
            <li>Mecatronică: 72 (cca. 6%),</li>
            <li>Robotică: 71 (cca. 6%)</li>
          </ul>

          <h3 className="text-xl font-bold mb-4">Specializările de master:</h3>
          <ul className="list-disc pl-8 mb-4">
            <li>Automatica sistemelor complexe: 82 (cca. 25%),</li>
            <li>Tehnologii informatice în ingineria sistemelor: 38 (cca. 12%),</li>
            <li>Ingineria calculatoarelor şi comunicaţiilor: 23 (cca. 7%),</li>
            <li>Computer and communication engineering: 18 (cca. 6%),</li>
            <li>Sisteme electronice avansate: 26 (cca. 8%),</li>
            <li>Inginerie software: 70 (cca. 21%),</li>
            <li>Information systems for e-business: 24 (cca. 7%),</li>
            <li>Sisteme distribuite: 14 (cca. 4%),</li>
            <li>Sisteme de conducere în robotică: 30 (cca. 9%),</li>
          </ul>
        </div>


        <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
          <h3 className="text-xl font-bold mb-4">
            Structura facultăţii este formată actualmente din 2 departamente:
          </h3>
          <ul className="list-disc pl-8 mb-4">
            <li>Departamentul de Automatică, Electronică şi Mecatronică (<Link href="/underconstruction" className="link link-hover text-blue-500 underline">link</Link>),</li>
            <li>Departamentul de Calculatoare şi Tehnologia informaţiei (<Link href="/underconstruction" className="link link-hover text-blue-500 underline">link</Link>).</li>
          </ul>

          <h3 className="text-xl font-bold mb-4">
            Componenta de cercetare este reprezentată prin cele 4 centre de cercetare ştiinţifică:
          </h3>
          <ul className="list-disc pl-8 mb-4">
            <li>Automatică neliniară, stabilitate şi oscilaţii,</li>
            <li>Dezvoltarea de aplicaţii multimedia,</li>
            <li>Mecatronică şi robotică</li>
            <li>Sisteme Electronice Avansate</li>
          </ul>

          <h3 className="text-xl font-bold mb-4">
            Corpul profesoral al facultăţii cuprinde la momentul actual 64 de cadre didactice repartizate astfel:
          </h3>

          <ul className="list-disc pl-8 mb-4">
            <li>Profesori universitari: 25,</li>
            <li>Conferenţiari: 10,</li>
            <li>Şefi de lucrări: 16,</li>
            <li>Asistenţi: 12,</li>
            <li>Preparatori: 1</li>
          </ul>
          <div className="card-actions justify-end">
                <Link href='/team'><button className="btn btn-primary">Profesorii noștrii</button></Link>
          </div>
        </div>    
        
        <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
          <h3 className="text-xl font-bold mb-4">
            Spaţiile de învăţământ (se întind pe o suprafaţă totală de 2300 metri pătraţi) aflate în administrarea Facultăţii de Automatică, Calculatoare şi Electronică cuprind:
          </h3>
          <ul className="list-disc pl-8 mb-4">
            <li>1 aulă,</li>
            <li>5 săli de curs,</li>
            <li>10 săli de seminar,</li>
            <li>16 laboratoare (cca. 700 de metri pătraţi).</li>
          </ul>
        </div>            

        <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
          <h3 className="text-xl font-bold mb-4">Academic</h3>
          <p>
            Facultatea de Automatică, Calculatoare şi Electronică are relaţii de colaborare academică cu numeroase instituţii de învăţământ şi cercetare prestigioase, atât din România cât şi din străinătate. Aceste relaţii au permis perfecţionarea cadrelor didactice, actualizarea planurilor de învăţământ şi modernizarea laboratoarelor. În fiecare an, mai mult de 30 de studenţi beneficiază de burse de studii la universităţi din Germania, Franţa, Grecia, Portugalia, Italia, S.U.A., Olanda sau Belgia.
          </p>
        </div>

      </div>
    </div>
    
  );
}
