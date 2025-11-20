import { NextRequest, NextResponse } from 'next/server';
import { updateUserPreferences } from '@/lib/auth-utils';

export async function PUT(request: NextRequest) {
  try {
    const body: { userId?: string; preferences?: any } = await request.json();
    const { userId, preferences } = body;

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    if (!preferences || typeof preferences !== 'object') {
      return NextResponse.json(
        { error: 'Preferences must be an object' },
        { status: 400 }
      );
    }

    const userPreferences = await updateUserPreferences(userId, preferences);

    return NextResponse.json(
      { 
        message: 'Preferences updated successfully',
        preferences: userPreferences 
      },
      { status: 200 }
    );
  } catch (err) {
    const error = err as Error;
    console.error('Update preferences error:', error.message);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
