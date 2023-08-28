import { NextApiRequest, NextApiResponse } from 'next';

const doctors = [
  {
    id: 83127892137,
    personal_info: {
      first_name: 'John',
      last_name: 'Doe',
      gender: 'Male',
      date_of_birth: '1980-05-15',
      avatar: 'https://i.pravatar.cc/100',
    },
    contact_info: {
      email: 'johndoe@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Cityville, State',
    },
    professional_info: {
      license_number: '12345',
      specialty: 'Cardiology',
      subspecialties: ['Interventional Cardiology'],
      medical_school: 'University Medical School',
      residency: 'City Hospital',
      experience_years: 15,
      certifications: ['American Board of Cardiology'],
      languages_spoken: ['English', 'Spanish'],
    },
    practice_info: {
      clinic_name: 'HeartCare Clinic',
      clinic_address: '456 Elm St, Cityville, State',
      clinic_phone: '789-123-4567',
      clinic_website: 'http://heartcareclinic.com',
      clinic_affiliations: ['City Hospital', 'Medical Association'],
      practice_hours: 'Mon-Fri: 9am-5pm',
      accepted_insurances: ['BlueHealth', 'HealthGuard'],
    },
    appointments: {
      availability: 'By appointment',
      booking_info: 'Online platform or phone',
    },
    reviews_ratings: {
      average_rating: 4.2,
      reviews: [
        {
          rating: 5,
          comment: 'Dr. Doe is very knowledgeable and caring.',
        },
        {
          rating: 4,
          comment: 'Good experience overall.',
        },
      ],
    },
    special_skills: ['Angioplasty', 'Echocardiography'],
    social_media: {
      twitter: '@johndoe_md',
      website: 'http://johndoe-md.com',
    },
    malpractice_history: {
      claims: 0,
      disciplinary_actions: 0,
    },
  },
  {
    id: 2139091230,
    personal_info: {
      first_name: 'Alice',
      last_name: 'Smith',
      gender: 'Female',
      date_of_birth: '1975-10-20',
      avatar: 'https://i.pravatar.cc/102',
    },
    contact_info: {
      email: 'alice.smith@example.com',
      phone: '987-654-3210',
      address: '789 Oak Ave, Townsville, State',
    },
    professional_info: {
      license_number: '54321',
      specialty: 'Dermatology',
      subspecialties: ['Cosmetic Dermatology'],
      medical_school: 'Townsville Medical College',
      residency: 'County Hospital',
      experience_years: 12,
      certifications: ['American Board of Dermatology'],
      languages_spoken: ['English', 'French'],
    },
    practice_info: {
      clinic_name: 'SkinCare Clinic',
      clinic_address: '890 Maple St, Townsville, State',
      clinic_phone: '567-890-1234',
      clinic_website: 'http://skincareclinic.com',
      clinic_affiliations: ['County Hospital', 'Dermatology Society'],
      practice_hours: 'Mon-Fri: 10am-6pm',
      accepted_insurances: ['HealthPlus', 'DermInsure'],
    },
    appointments: {
      availability: 'By appointment',
      booking_info: 'Online platform or phone',
    },
    reviews_ratings: {
      average_rating: 4.6,
      reviews: [
        {
          rating: 5,
          comment: 'Dr. Smith is highly skilled and professional.',
        },
        {
          rating: 4,
          comment: 'Good dermatologist, helped me with my skin issues.',
        },
      ],
    },
    special_skills: ['Botox Injections', 'Laser Therapy'],
    social_media: {
      twitter: '@alice_derm',
      website: 'http://alice-derm.com',
    },
    malpractice_history: {
      claims: 0,
      disciplinary_actions: 0,
    },
  },
  {
    id: 665905643,
    personal_info: {
      first_name: 'Michael',
      last_name: 'Johnson',
      gender: 'Male',
      date_of_birth: '1978-03-08',
      avatar: 'https://i.pravatar.cc/101',
    },
    contact_info: {
      email: 'michael.johnson@example.com',
      phone: '555-123-4567',
      address: '567 Pine St, Villagetown, State',
    },
    professional_info: {
      license_number: '98765',
      specialty: 'Orthopedics',
      subspecialties: ['Sports Medicine'],
      medical_school: 'Villagetown Medical University',
      residency: 'Regional Medical Center',
      experience_years: 18,
      certifications: ['American Board of Orthopedic Surgery'],
      languages_spoken: ['English', 'German'],
    },
    practice_info: {
      clinic_name: 'JointFlex Ortho Clinic',
      clinic_address: '678 Oak Lane, Villagetown, State',
      clinic_phone: '789-456-2345',
      clinic_website: 'http://jointflexortho.com',
      clinic_affiliations: ['Regional Medical Center', 'Orthopedic Association'],
      practice_hours: 'Mon-Fri: 8am-4pm',
      accepted_insurances: ['HealthCare Plus', 'OrthoGuard'],
    },
    appointments: {
      availability: 'By appointment',
      booking_info: 'Online platform or phone',
    },
    reviews_ratings: {
      average_rating: 4.9,
      reviews: [
        {
          rating: 5,
          comment: 'Dr. Johnson helped me recover from a sports injury. Excellent care!',
        },
        {
          rating: 5,
          comment: 'Highly recommended for orthopedic issues.',
        },
      ],
    },
    special_skills: ['Arthroscopy', 'Joint Replacement'],
    social_media: {
      twitter: '@michaelortho',
      website: 'http://michaelortho.com',
    },
    malpractice_history: {
      claims: 0,
      disciplinary_actions: 0,
    },
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(doctors);
}
