import Link from 'next/link';

export default function Admission() {


  return (

    <div className="min-h-screen bg-base-300 text-gray">
      <div className="container mx-auto py-8">

        <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
          <h3 className="text-xl font-bold mb-4">Admitere</h3>
          <p>
            Vă invităm să citiţi în această secţiune informaţii relative la procesul de admitere la facultatea A.C.E. pe diversele direcţii de studii oferite: licenţă, masterat, doctorat.
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
          <h3 className="text-xl font-bold mb-4">Facultatea noastră oferă la momentul actual, potenţialilor candidaţi:</h3>
          <ul className="list-disc pl-4">
            <li>Pentru <a className='underline'>licenţă</a>, patru domenii de studiu cu şapte programe de studii posibile (<Link href='/underconstruction' className="link link-hover text-blue-500 underline">link</Link>)</li>
            <li>Pentru <a className='underline'>master</a>, patru domenii de studiu cu şapte programe de studii posibile (<Link href='/underconstruction' className="link link-hover text-blue-500 underline">link</Link>)</li>
            <li>Pentru <a className='underline'>şcoala doctorală</a>, trei domenii de studiu posibile (<Link href='/underconstruction' className="link link-hover text-blue-500 underline">link</Link>)</li>
          </ul>
        </div>

        <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
          <h3 className="text-xl font-bold mb-4">De ce să alegi Facultatea de Automatică, Calculatoare și Electronică din Craiova?</h3>
          <p>

          </p>
        </div>

      </div>
    </div>
    
  );
}
