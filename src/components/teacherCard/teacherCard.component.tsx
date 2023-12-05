import Image from 'next/image';
import Teacher from '../../assets/user.png';
import Link from 'next/link';

export const TeacherCard: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
    return (
      <div className="card lg:card-side bg-base-100 shadow-2xl border mx-4 my-4 flex-grow p-4 w-full md:w-80 min-h-fit max-w-7xl">
        <figure>
          <Image src={Teacher} alt={teacher.name} width={70} height={70} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{teacher.name}</h2>
          <p>{teacher.role}</p>
          <div className="card-actions justify-end">
            <Link href={`/teachers/${teacher.id}`}>
              <button className="btn btn-primary">Profil</button>
            </Link>
          </div>
        </div>
      </div>
    );
  };