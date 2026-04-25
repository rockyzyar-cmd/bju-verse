import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User, signOut, signInAnonymously } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { UserProfile } from '../types';

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  logout: () => Promise<void>;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currUser) => {
      setUser(currUser);
      if (currUser) {
        const userDoc = await getDoc(doc(db, 'users', currUser.uid));
        if (userDoc.exists()) {
          setProfile(userDoc.data() as UserProfile);
        } else {
          // Create default profile for guest or new user
          const adminEmails = ['rockyzyar@gmail.com', 'shauryabis672@gmail.com'];
          const newProfile: UserProfile = {
            uid: currUser.uid,
            username: currUser.displayName || `user_${currUser.uid.slice(0, 5)}`,
            email: currUser.email || '',
            theme: 'dark',
            savedIds: [],
            forkedIds: [],
            favoritesIds: [],
            isAdmin: adminEmails.includes(currUser.email || '')
          };
          await setDoc(doc(db, 'users', currUser.uid), newProfile);
          setProfile(newProfile);
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  const updateProfile = async (data: Partial<UserProfile>) => {
    if (!user) return;
    const updatedProfile = { ...profile!, ...data };
    await setDoc(doc(db, 'users', user.uid), updatedProfile, { merge: true });
    setProfile(updatedProfile);
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
