import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-100">
      <h1 className="text-4xl font-bold mb-4 text-red-700">Pagina nu exista</h1>
      <button className="btn btn-primary"><Link href='/'>Înapoi la pagina principală</Link></button>
    </div>
  )
}