import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { UserProfile } from '../types';

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  authError: string | null;
  logout: () => Promise<void>;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Session persistence key for localStorage backup
const SESSION_KEY = 'bjuverse_session';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  const clearError = useCallback(() => setAuthError(null), []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currUser) => {
      try {
        setUser(currUser);
        
        if (currUser) {
          // Store session token in localStorage as backup
          const token = await currUser.getIdToken();
          localStorage.setItem(SESSION_KEY, JSON.stringify({
            uid: currUser.uid,
            email: currUser.email,
            token: token,
            timestamp: Date.now()
          }));

          // Fetch or create user profile with proper error handling
          try {
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
          } catch (firestoreError: any) {
            console.error('[v0] Firestore error:', firestoreError);
            // Create a minimal profile even if Firestore fails
            setProfile({
              uid: currUser.uid,
              username: currUser.displayName || `user_${currUser.uid.slice(0, 5)}`,
              email: currUser.email || '',
              theme: 'dark',
              savedIds: [],
              forkedIds: [],
              favoritesIds: [],
              isAdmin: false
            });
            setAuthError('Profile sync failed. Some features may be limited.');
          }
        } else {
          // Clear session data on logout
          localStorage.removeItem(SESSION_KEY);
          setProfile(null);
        }
      } catch (error: any) {
        console.error('[v0] Auth state change error:', error);
        setAuthError(error.message || 'Authentication error occurred');
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      localStorage.removeItem(SESSION_KEY);
      await signOut(auth);
    } catch (error: any) {
      console.error('[v0] Logout error:', error);
      setAuthError(error.message || 'Logout failed');
      throw error;
    }
  };

  const updateProfile = async (data: Partial<UserProfile>) => {
    if (!user) return;
    try {
      const updatedProfile = { ...profile!, ...data };
      await setDoc(doc(db, 'users', user.uid), updatedProfile, { merge: true });
      setProfile(updatedProfile);
    } catch (error: any) {
      console.error('[v0] Profile update error:', error);
      setAuthError(error.message || 'Profile update failed');
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, authError, logout, updateProfile, clearError }}>
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
