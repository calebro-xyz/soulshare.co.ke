import { NextResponse } from 'next/server';

export async function POST(request: any) {
  const { email, fname, lname, message, phone } =
    await request.json();

  try {
    const response = await fetch(
      'https://api.airtable.com/v0/YOUR_BASE_ID/TABLE_NAME',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Fname: fname,
                Lname: lname,
                Email: email,
                Phone: phone,
                Message: message,
              },
            },
          ],
        }),
      }
    );

    if (response.ok) {
      return NextResponse.json({
        message: 'Data submitted successfully!',
      });
    } else {
      return NextResponse.json(
        { error: 'An error occurred while submitting data.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'An error occurred while submitting data.' },
      { status: 500 }
    );
  }
}
