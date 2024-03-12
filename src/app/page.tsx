import Image from 'next/image';
import Newsletter from '@/components/newsletter';

const stats = [
  {
    label:
      'people globally will experience a mental health disorder at some point in their lives.',
    value: ' 1 in 4',
  },
  {
    label: 'people of all ages suffer from depression.',
    value: '264M',
  },
  {
    label: ' people die due to suicide every yea',
    value: ' 800,000',
  },
];
const values = [
  {
    name: 'Inclusive and Judgement-Free Spaces',
    description:
      'Our community provides inclusive and judgement-free spaces where individuals can share their struggles without fear of discrimination or stigma, fostering a supportive environment for healing and growth.',
  },
  {
    name: 'Emotional Support',
    description:
      'Members receive empathetic emotional support from fellow community members who understand and validate their experiences, offering comfort and solidarity during difficult times.',
  },
  {
    name: 'Professional Guidance',
    description:
      'Our community offers access to professional guidance from mental health experts, including therapists and counselors, who provide valuable insights, resources, and advice to help members navigate their mental health journey.',
  },
  {
    name: 'Privacy',
    description:
      'We prioritize privacy and maintain a judgement-free environment where individuals can feel safe discussing sensitive topics and seeking support without fear of their personal information being compromised or their experiences being dismissed.',
  },
  {
    name: 'Community and Belonging',
    description:
      'Joining our community provides a sense of belonging and connection with others who share similar experiences, fostering meaningful relationships and a supportive network to lean on during challenging times.',
  },
  {
    name: 'Support for Mental Health Advocates',
    description:
      'Our community offers support for mental health advocates, providing resources, encouragement, and a platform to raise awareness, promote education, and advocate for positive change in mental health care.',
  },
];

export default function Home() {
  return (
    <div className='bg-white'>
      <main className='isolate'>
        {/* Hero section */}
        <div className='relative isolate -z-10'>
          <svg
            className='absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]'
            aria-hidden='true'>
            <defs>
              <pattern
                id='1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84'
                width={200}
                height={200}
                x='50%'
                y={-1}
                patternUnits='userSpaceOnUse'>
                <path
                  d='M.5 200V.5H200'
                  fill='none'
                />
              </pattern>
            </defs>
            <svg
              x='50%'
              y={-1}
              className='overflow-visible fill-gray-50'>
              <path
                d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
                strokeWidth={0}
              />
            </svg>
            <rect
              width='100%'
              height='100%'
              strokeWidth={0}
              fill='url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)'
            />
          </svg>
          <div
            className='absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'
            aria-hidden='true'>
            <div
              className='aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30'
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className='overflow-hidden'>
            <div className='mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32'>
              <div className='mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
                <div className='w-full max-w-xl lg:shrink-0 xl:max-w-2xl'>
                  <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                    Every Conversation Matters, Every Voice is Valued
                  </h1>
                  <p className='relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none'>
                    We are building a global community that
                    prioritizes mental well-being, fostering open
                    conversations, authentic connections, and
                    accessible support for individuals worldwide. We
                    envisions a world where mental health is
                    destigmatized, and everyone feels empowered to
                    share their experiences.
                  </p>
                </div>
                <div className='mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
                  <div className='ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80'>
                    <div className='relative'>
                      <Image
                        src='https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt=''
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                        width={1080}
                        height={960}
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                  </div>
                  <div className='mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36'>
                    <div className='relative'>
                      <Image
                        src='https://images.pexels.com/photos/5159234/pexels-photo-5159234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt=''
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                        width={1080}
                        height={960}
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                    <div className='relative'>
                      <Image
                        src='https://images.pexels.com/photos/8042458/pexels-photo-8042458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt=''
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                        width={1080}
                        height={960}
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                  </div>
                  <div className='w-44 flex-none space-y-8 pt-32 sm:pt-0'>
                    <div className='relative'>
                      <Image
                        src='https://images.pexels.com/photos/10264752/pexels-photo-10264752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt=''
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                        width={1200}
                        height={960}
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                    <div className='relative'>
                      <Image
                        src='https://images.pexels.com/photos/3856026/pexels-photo-3856026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt=''
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                        width={1200}
                        height={960}
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className='mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8'>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Our mission
            </h2>
            <div className='mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row'>
              <div className='lg:w-full lg:max-w-2xl lg:flex-auto'>
                <p className='text-xl leading-8 text-gray-900'>
                  Nurturing Conversations, Empowering Lives.
                </p>
                <div className='mt-10 max-w-xl text-base leading-7 text-gray-700'>
                  <p>
                    To empower individuals worldwide by providing a
                    safe and inclusive platform for open conversations
                    about mental health. Soul share Network is
                    dedicated to offering accessible support,
                    connecting users with licensed therapists, and
                    fostering a global community that advocates for
                    mental well-being.
                  </p>
                  <p className='mt-10'>
                    Through genuine storytelling, educational
                    resources, and community engagement, we strive to
                    destigmatize mental health, inspire resilience,
                    and create a culture of understanding and support
                    for everyone.
                  </p>
                </div>
              </div>
              <div className='lg:flex lg:flex-auto lg:justify-center'>
                <dl className='w-64 space-y-8 xl:w-80'>
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className='flex flex-col-reverse gap-y-4'>
                      <dt className='text-base leading-7 text-gray-600'>
                        {stat.label}
                      </dt>
                      <dd className='text-5xl font-semibold tracking-tight text-gray-900'>
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className='mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8'>
          <Image
            src='https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
            alt=''
            className='aspect-[5/2] w-full object-cover xl:rounded-3xl'
            width={1960}
            height={1200}
          />
        </div>

        {/* Values section */}
        <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Our values
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              These are the reasons why you should be part of Soul
              Share Network
            </p>
          </div>
          <dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            {values.map((value) => (
              <div key={value.name}>
                <dt className='font-semibold text-gray-900'>
                  {value.name}
                </dt>
                <dd className='mt-1 text-gray-600'>
                  {value.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Logo cloud */}
        <Newsletter />
      </main>
    </div>
  );
}
