import {
  UserIcon,
  BookOpenIcon,
  HeartIcon,
  HandRaisedIcon,
} from '@heroicons/react/24/outline';
import Newsletter from '@/components/newsletter';

const features = [
  {
    name: 'Mental Health Support',
    description:
      ' Wo offer a variety of mental health support services including therapy, counseling, and support groups. We also offer specialized services for individuals with specific needs.',
    icon: HeartIcon,
  },
  {
    name: 'Therapist Connection and Specialized Services:',
    description:
      ' We help you connect with the right therapist for your needs. We also offer specialized services for individuals with specific needs.',
    icon: HandRaisedIcon,
  },
  {
    name: 'Educational Content and Resources:',
    description:
      ' We have curated a variety of educational content and resources to help you learn more about mental health and wellness. We also offer specialized services for individuals with specific needs.',
    icon: BookOpenIcon,
  },
  {
    name: 'Community Building and Engagement',
    description:
      ' We offer a variety of community building and engagement services to help you connect with others who share similar experiences. We also offer specialized services for individuals with specific needs.',
    icon: UserIcon,
  },
];

export default function Serivices() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-indigo-600'>
            Our Services
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            This is how we can help you
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Find a service that suits your needs and start your
            journey to better mental health today.
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <div
                key={feature.name}
                className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 text-gray-900'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    <feature.icon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
