'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { LoadingSpinner } from '@/components/loadingSpinner/loadingSpinner.component';
import TeacherImage from '../../../assets/user.png';

// Teacher profile component
export default function TeacherProfile({ params }: Readonly<{ params: { id: string } }>) {
  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTeacherProfile = async () => {
      if (params.id) {
        try {
          // Fetch teacher data from API
          const response = await fetch(`/api/teacher?id=${params.id}`);
          const data = await response.json();
          setTeacher(data.teacher);
        } catch (error) {
          console.error('Error fetching teacher profile: ', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchTeacherProfile();
  }, [params.id]);

  if (loading) {
    return (
      <div className='flex-1 flex items-center min-h-screen justify-center p-8 bg-base-300'>
        <LoadingSpinner />
      </div>
    );
  }

  if (!teacher) {
    return <div className='flex-1 flex items-center min-h-screen justify-center p-8 bg-base-300'>No teacher found</div>;
  }

  return (
    <div className="flex-1 flex items-center min-h-screen justify-center p-8 bg-base-300">
      <div className="max-w-3xl w-full">
        <div className="mb-8">
            <figure className="relative">
                <Image src={TeacherImage} alt={teacher.name} width={240} height={160} />
            </figure>
            <div className='space-y-4'>
                <h2 className="text-2xl font-bold my-6 text-gray">{teacher.name} {teacher.surname}</h2>
                <h2 className="text-xl font-bold my-6 text-gray">Profesie: </h2>
                <h3 className="text-l my-6 text-gray">{teacher.role}</h3>
                <h2 className="text-xl font-bold my-6 text-gray">Departament: </h2>
                <h3 className="text-l my-6 text-gray">{teacher.department?.title}</h3>
                <h2 className="text-xl font-bold my-6 text-gray">Email: </h2>
                <h3 className="text-l my-6 text-gray">{teacher.email}</h3>
            </div>
        </div>
      </div>
    </div>
  );
}
