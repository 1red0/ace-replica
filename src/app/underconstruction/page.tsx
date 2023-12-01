import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';


export default function UnderConstruction() {
  return (

    <div className="flex flex-col items-center justify-center h-screen bg-base-100">
      <FontAwesomeIcon icon={faExclamationCircle} className="text-4xl text-red-700 mb-2 h-96" />
      <h1 className="text-4xl font-bold mb-4 text-red-700">Pagina este in lucru</h1>
      <p className="text-lg text-gray">Revenim în curând cu informații actualizate.</p>
    </div>

  );
}
