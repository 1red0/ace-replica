import React from 'react';

export default function Admission() {


  return (
<div className="min-h-screen bg-base-300 text-gray">
      <div className="container mx-auto py-8">

        <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
          <h3 className="text-xl font-bold mb-4">About the Faculty</h3>
          <p>
            The Faculty of Automation is committed to excellence in education, research, and innovation in the field of
            automation and control systems. Our programs are designed to equip students with the knowledge and skills
            needed to thrive in the rapidly evolving world of automation technology.
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
          <h3 className="text-xl font-bold mb-4">Programs Offered</h3>
          <ul className="list-disc pl-4">
            <li>Bachelor of Science in Automation Engineering</li>
            <li>Master of Science in Control Systems</li>
            <li>Ph.D. in Automation and Robotics</li>
          </ul>
        </div>

        <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
          <h3 className="text-xl font-bold mb-4">Admission Requirements</h3>
          <p>
            To apply for admission to the Faculty of Automation, applicants must meet the following requirements:
          </p>
          <ul className="list-disc pl-4">
            <li>Completed application form</li>
            <li>Bachelor&apos;s degree in a related field for master&apos;s programs</li>
            <li>Master&apos;s degree in a related field for Ph.D. programs</li>
            <li>Letters of recommendation</li>
            <li>Statement of purpose</li>
          </ul>
        </div>

        <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
          <h3 className="text-xl font-bold mb-4">Application Process</h3>
          <p>
            Interested candidates can apply online through our admissions portal. The application deadline for the
            upcoming academic year is [insert date]. Please ensure that all required documents are submitted before the
            deadline.
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl mx-4 my-8 p-8 rounded-md border">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>
            If you have any questions or need assistance, please feel free to contact our admissions office at{' '}
            <a href="mailto:admissions@automationfaculty.edu">admissions@automationfaculty.edu</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
