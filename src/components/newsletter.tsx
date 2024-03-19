'use client';
import { useState } from 'react';
import Airtable from 'airtable'; // Importing Airtable directly from the package

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const base = new Airtable({
        apiKey:
          'patXG8nf1g8a4kNug.51f6e4b1027dd4b29e71d01574cfccc4b260b609b75376b1d01f124dc2b6d9aa',
      }).base('apps8wi0IrBOr3OaB');

      // Use the 'email' state directly instead of accessing the DOM
      base('Email').create(
        { Email: email }, // Use the 'email' state here
        function (err: any, record: any) {
          if (err) {
            console.error(err);
            setStatus('An error occurred. Please try again.');
            return;
          }
          console.log(record.getId());
          setStatus('Email submitted successfully!');
          setEmail('');
        }
      );
    } catch (err) {
      setStatus('An error occurred. Please try again.');
      console.error('Error:', err);
    }
  };

  return (
    <div className='bg-white py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32'>
          <h2 className='mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Get notified when we’re launching.
          </h2>
          <p className='mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300'>
            Sign up for our newsletter to stay up to date with the
            latest news and updates.
          </p>
          <form
            onSubmit={handleSubmit}
            className='mx-auto mt-10 flex max-w-md gap-x-4'>
            <div className='flex flex-col gap-2'>
              <div className='space-x-4 flex place-content-center'>
                <label
                  htmlFor='email-address'
                  className='sr-only'>
                  Email address
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete='email'
                  required
                  className='min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                  placeholder='Enter your email'
                />
                <button
                  type='submit'
                  className='flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
                  Notify me
                </button>
              </div>
              <div>
                {status && <p className='text-white'>{status}</p>}
              </div>
            </div>
          </form>
          <svg
            viewBox='0 0 1024 1024'
            className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2'
            aria-hidden='true'>
            <circle
              cx={512}
              cy={512}
              r={512}
              fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
              fillOpacity='0.7'
            />
            <defs>
              <radialGradient
                id='759c1415-0410-454c-8f7c-9a820de03641'
                cx={0}
                cy={0}
                r={1}
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(512 512) rotate(90) scale(512)'>
                <stop stopColor='#7775D6' />
                <stop
                  offset={1}
                  stopColor='#E935C1'
                  stopOpacity={0}
                />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
