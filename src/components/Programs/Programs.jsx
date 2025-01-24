import React from 'react'
import './Programs.css'


const programData = [
  {
    title: 'Fahmi Dein',
    description: 'Al-Shahadatul Aalamiyyah: This degree program offers online courses on the Seerah of the Prophet (PBUH), books of Hadith, Islamic history, and fundamental jurisprudential issues',
  },
  {
    title: 'Nazira Quran',
    description: 'Nazira Quran Degree: This program is aimed at teaching children to recite the Holy Quran with proper pronunciation and helping them memorize essential daily prayers (duas).',
  },
  {
    title: 'Noorani Qaida',
    description: 'Noorani Qaida Degree: This program is designed to teach children the Noorani Qaida, with a maximum duration of 3 months.',
  },
  {
    title: 'Trilingual Degree: Urdu, Pashto, English',
    description: 'This program equips children with proficiency in Urdu, Pashto, and English, focusing on enhancing their reading, writing, and speaking skills.',
  },
  {
    title: 'Basic to Advanced Mathematics',
    description: 'This program is designed to teach children mathematics starting from the basic level up to the 8th-grade level, ensuring a strong foundation and gradual advancement in mathematical skills.',
  },
  {
    title: 'Programming Languages',
    description: 'This program focuses on teaching programming languages such as Python, JavaScript, HTML, and more. It is designed to equip students with the skills needed to excel in the field of technology and software development.',
  },
];
function Programs() {
  return (
    <div className="programs" name="Programs">
      {programData.map((program, index) => (
        <div key={index}>
          <div className="card">
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        </div>
      ))}
    </div>
    
  );
}


export default Programs
