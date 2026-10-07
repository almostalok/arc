'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserRole } from '../types';

interface RoleContextType {
  currentRole: UserRole;
  setCurrentRole: (role: UserRole) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isAiOpen: boolean;
  setIsAiOpen: (open: boolean) => void;
  aiDefaultQuery: string;
  setAiDefaultQuery: (query: string) => void;
  isNotificationsOpen: boolean;
  setIsNotificationsOpen: (open: boolean) => void;
  demoStep: number;
  setDemoStep: (step: number) => void;
  showDemoGuide: boolean;
  setShowDemoGuide: (show: boolean) => void;
  selectedStudentId: string;
  setSelectedStudentId: (id: string) => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [currentRole, setCurrentRole] = useState<UserRole>('student');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [aiDefaultQuery, setAiDefaultQuery] = useState('');
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [demoStep, setDemoStep] = useState(1);
  const [showDemoGuide, setShowDemoGuide] = useState(true);
  const [selectedStudentId, setSelectedStudentId] = useState('s-1042');

  // Keyboard shortcut for Cmd+K / Ctrl+K search and Cmd+J for AI
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'j') {
        e.preventDefault();
        setIsAiOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <RoleContext.Provider
      value={{
        currentRole,
        setCurrentRole,
        isSearchOpen,
        setIsSearchOpen,
        isAiOpen,
        setIsAiOpen,
        aiDefaultQuery,
        setAiDefaultQuery,
        isNotificationsOpen,
        setIsNotificationsOpen,
        demoStep,
        setDemoStep,
        showDemoGuide,
        setShowDemoGuide,
        selectedStudentId,
        setSelectedStudentId,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
}
