import { useState, useEffect } from 'react';
import { Stack, Flex, Container } from '@mantine/core';

interface Doctor {
  personal_info: {
    first_name: string;
    last_name: string;
    gender: string;
    date_of_birth: string;
  };
  contact_info: {
    email: string;
    phone: string;
    address: string;
  };
  professional_info: {
    license_number: string;
    specialty: string;
    subspecialties: string[];
    medical_school: string;
    residency: string;
    experience_years: number;
    certifications: string[];
    languages_spoken: string[];
  };
  practice_info: {
    clinic_name: string;
    clinic_address: string;
    clinic_phone: string;
    clinic_website: string;
    clinic_affiliations: string[];
    practice_hours: string;
    accepted_insurances: string[];
  };
  appointments: {
    availability: string;
    booking_info: string;
  };
  reviews_ratings: {
    average_rating: number;
    reviews: {
      rating: number;
      comment: string;
    }[];
  };
  special_skills: string[];
  social_media: {
    twitter: string;
    website: string;
  };
  malpractice_history: {
    claims: number;
    disciplinary_actions: number;
  };
}

export default function Doctors() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  async function getDoctors() {
    try {
      const response = await fetch('/api/doctors');
      const data = await response.json();
      setDoctors(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  }

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <Container fluid>
      <Flex>
        <Stack align="center" justify="center" p={10} style={{ flex: 1 }}>
          <h1>Doctors</h1>
          <ul>
            {doctors.map((doctor, index) => (
              <li key={index}>
                <h2>
                  {doctor.personal_info.first_name} {doctor.personal_info.last_name}
                </h2>
                <p>Email: {doctor.contact_info.email}</p>
                <p>Specialty: {doctor.professional_info.specialty}</p>
              </li>
            ))}
          </ul>
        </Stack>
      </Flex>
    </Container>
  );
}
