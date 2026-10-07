'use client';

import React from 'react';
import { Topbar } from './Topbar';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';
import { GlobalSearchModal } from './GlobalSearchModal';
import { ArcIntelligenceModal } from './ArcIntelligenceModal';
import { NotificationDrawer } from './NotificationDrawer';
import { DemoWalkthroughBar } from './DemoWalkthroughBar';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased">
      <Topbar />

      <div className="flex-1 flex w-full">
        <div className="hidden md:block shrink-0">
          <Sidebar />
        </div>

        <main className="flex-1 min-w-0 pb-20 md:pb-16 overflow-y-auto">
          {children}
        </main>
      </div>

      <MobileNav />
      <GlobalSearchModal />
      <ArcIntelligenceModal />
      <NotificationDrawer />
      <DemoWalkthroughBar />
    </div>
  );
}
