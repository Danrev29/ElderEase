import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebaseAdmin';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Get user by email
    const userRecord = await adminAuth.getUserByEmail(email);

    // Verify password via Admin SDK (requires generating a custom token)
    // Since Admin SDK can't verify password directly, we'll use signInWithEmailAndPassword on client
    // So login should be done using Firebase Auth client with API key
    return NextResponse.json({
      message: 'User exists, login can proceed via client SDK',
      user: {
        id: userRecord.uid,
        email: userRecord.email,
        name: userRecord.displayName || '',
      }
    }, { status: 200 });

  } catch (err: any) {
    console.error('Login error:', err);

    if (err.code === 'auth/user-not-found') {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
