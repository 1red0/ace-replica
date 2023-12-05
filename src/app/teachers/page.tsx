'use client';
import { LoadingSpinner } from '@/components/loadingSpinner/loadingSpinner.component';
import React from 'react';
import { TeacherCard } from '@/components/teacherCard/teacherCard.component';


export default function Teachers() {
  const [teachers, setTeachers] = React.useState<Teacher[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch('/api/teachers');
        const data = await response.json();
        setTeachers(data.teachers);
      } catch (error) {
        console.error('Error fetching news: ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeachers();
  }, []);

  let teachersContent;

  if (loading) {
    teachersContent = <LoadingSpinner />;
  } else {
    teachersContent = (
      <div className="flex flex-wrap justify-center">
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-base-300 overflow-x-auto">
      <div className="md:flex-1 flex flex-col mx-auto items-center justify-center p-8 bg-base-300 overflow-x-auto border">
        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold mb-4 mx-8">Profesorii noștri</h2>
          {teachersContent}
        </div>
      </div>
    </div>
  );
}
