import React from 'react';
import Image from 'next/image';
import Teacher from '../../assets/user.png'
import teamMembers from '@/dummy-data/team.list';

export default function Team() {
  return (
<div className="min-h-screen flex flex-col md:flex-row bg-base-300 overflow-x-auto">
<div className="md:flex-1 flex flex-col mx-auto items-center justify-center p-8 bg-base-300 overflow-x-auto border">
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4 mx-8">Profesorii noștri</h2>

        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="card lg:card-side bg-base-100 shadow-2xl border mx-4 my-4 flex-grow p-4 w-full md:w-80 min-h-fit max-w-7xl">

                
                <figure>
                  <Image src={Teacher} alt={member.name} width={70} height={70}/>
                </figure>
                  <div className="card-body">
                  <h2 className="card-title">{member.name}</h2>
                  <p>{member.role}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Profil</button>
                  </div>
                </div>
              </div>

          ))}
        </div>
      </div>
    </div>
</div>


);
};
