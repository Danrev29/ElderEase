// src/app/api/auth/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebaseAdmin';

export async function POST(request: NextRequest) {
  try {
    const { email, name, password, phone, birthYear } = await request.json();

    if (!email || !name || !password) {
      return NextResponse.json(
        { error: 'Email, name, and password are required' },
        { status: 400 }
      );
    }

    console.log('Registering user:', email);

    // Create user with Firebase Admin
    const userRecord = await adminAuth.createUser({
      email,
      password,
      displayName: name,
    });
    console.log('User created:', userRecord.uid);

    // Save additional info in Firestore
    await adminDb.collection('users').doc(userRecord.uid).set({
      id: userRecord.uid,
      email,
      name,
      phone: phone || '',
      birthYear: birthYear || '',
      profilePhoto: '',
      createdAt: new Date().toISOString(),
    });
    console.log('User info saved to Firestore');

    return NextResponse.json(
      {
        message: 'User created successfully',
        user: {
          id: userRecord.uid,
          email,
          name,
          phone: phone || '',
          birthYear: birthYear || '',
        },
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error('Registration error:', err);

    if (err.code === 'auth/email-already-exists') {
      return NextResponse.json({ error: 'Email already in use' }, { status: 400 });
    }

    return NextResponse.json(
      { error: err.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
