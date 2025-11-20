// src/app/api/auth/profile/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';
import { db, auth } from '@/lib/firebaseConfig';

// Custom error class
class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
  }
}

// GET /api/auth/profile?userId=<email>
export async function GET(request: NextRequest) {
  try {
    const userId = request.nextUrl.searchParams.get('userId');
    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      throw new AuthError('User not found');
    }

    return NextResponse.json({ user: userSnap.data() }, { status: 200 });
  } catch (err) {
    const error = err as Error;
    console.error('Get profile error:', error.message);

    if (error instanceof AuthError) {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT /api/auth/profile
export async function PUT(request: NextRequest) {
  try {
    const body: {
      userId?: string;
      name?: string;
      phone?: string;
      birthYear?: string;
      profilePhoto?: string;
    } = await request.json();

    const { userId, name, phone, birthYear, profilePhoto } = body;

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      throw new AuthError('User not found');
    }

    const updates: Partial<{ name: string; phone: string; birthYear: string; profilePhoto: string }> = {};

    if (name) updates.name = name;
    if (phone) updates.phone = phone;
    if (birthYear) updates.birthYear = birthYear;
    if (profilePhoto) updates.profilePhoto = profilePhoto;

    // Update Firestore document
    await updateDoc(userRef, updates);

    // Optionally update Firebase Auth displayName if name changed
    if (name && auth.currentUser?.email === userId) {
      await updateProfile(auth.currentUser, { displayName: name });
    }

    const updatedSnap = await getDoc(userRef);
    return NextResponse.json({ message: 'Profile updated successfully', user: updatedSnap.data() }, { status: 200 });
  } catch (err) {
    const error = err as Error;
    console.error('Update profile error:', error.message);

    if (error instanceof AuthError) {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
