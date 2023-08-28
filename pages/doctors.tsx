import { useState, useEffect } from 'react';
import { Stack, Flex, Container, Avatar, Space, Accordion, Group, Text } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

interface Doctors {
  id: number;
  personal_info: {
    first_name: string;
    last_name: string;
    gender: string;
    date_of_birth: string;
    avatar: string;
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

interface AccordionMain {
  label: string;
  image: string;
  address: string;
}

export default function Doctors() {
  const [doctors, setDoctors] = useState<Doctors[]>([]);
  const isMobile = useMediaQuery('(max-width: 50em)');

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

  function AccordionMain({ label, image, address }: AccordionMain) {
    return (
      <Group noWrap>
        <Avatar src={image} radius="xl" size="lg" />
        <div>
          <Text>{label}</Text>
          <Text size="sm" color="dimmed" weight={400}>
            {address}
          </Text>
        </div>
      </Group>
    );
  }

  return (
    <Container w={'100vw'}>
      <Stack align="flex-start" justify="center">
        <h1>Doctors</h1>
        {doctors.map((doctor, index) => (
          <Accordion w="100%" variant="separated" key={index}>
            <Accordion.Item value={index.toString()}>
              <Accordion.Control>
                <AccordionMain
                  label={doctor.personal_info.first_name}
                  image={doctor.personal_info.avatar}
                  address={doctor.contact_info.address}
                />
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        ))}
      </Stack>
    </Container>
  );
}
