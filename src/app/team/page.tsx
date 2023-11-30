import React from 'react';
import Image from 'next/image';
import Teacher from '../../assets/user.png'
import teamMembers from '@/dummy-data/team.list';

export default function Team() {
  return (

    <div className="min-h-screen bg-base-300 text-gray">
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-2 mt-4 mx-16">Profesorii noștri</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-4 my-8 p-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-base-100 p-4 shadow-xl rounded-md border">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <Image src={Teacher}  alt='teacher'/>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">{member.name}</h3>
              <p className="text-sm text-gray">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

);
};
