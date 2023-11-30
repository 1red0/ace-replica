import Logo from '../assets/sigla.png';
import NewsLogo from '../assets/news.png'
import Image from 'next/image';
import newsData from '@/dummy-data/news.list';
import Link from 'next/link';

export default function Home() {
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
        {/* Presentation Container */}
        <div className="md:flex-1 flex justify-center p-8 bg-base-300">
          <div className="max-w-lg text-center">
            <div className="mockup-window border bg-base-200 shadow-xl">
              <div className="flex justify-center px-4 md:px-0 py-16 bg-base-100">
                <div className="hero min-w-screen bg-base-100">
                  <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image src={Logo} alt='LOGO' width={200} height={234}/>
                    <div>
                      <h1 className="text-5xl font-bold">ACE</h1>
                      <p className="py-6">Facultatea de Automatică, Calculatoare și Electronică</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Container */}

        <div className="md:flex-1 flex flex-col max-w-xl min-w-min items-center justify-center p-8 bg-base-100 overflow-x-auto border-l">
          <Link href="/news"><button className="btn btn-primary mb-4">Toate știrile</button></Link>
          <div className="flex flex-wrap justify-center">
            {newsData.map((news) => (
              <div key={news.id} className="card lg:card-side bg-base-300 shadow-2xl border mx-4 my-4 flex-grow p-4 w-full md:w-80 min-h-fit max-w-7xl">
                <figure>
                  <Image src={NewsLogo} alt={news.title} width={70} height={70}/>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{news.title}</h2>
                  <p>{news.description}</p>
                  <p>{news.date}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Citește</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
