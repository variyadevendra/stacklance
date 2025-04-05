import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/utils/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await sendContactEmail(body);

    if (result.success) {
      return NextResponse.json({ message: 'Email sent successfully' });
    } else {
      return NextResponse.json(
        { error: result.error || 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 