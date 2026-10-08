'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  width?: 'md' | 'lg' | 'xl';
}

const widthStyles = {
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-2xl',
};

export function Drawer({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  width = 'lg',
}: DrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-200"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div
          className={`w-screen ${widthStyles[width]} bg-white border-l border-slate-200/90 shadow-2xl flex flex-col transform transition-transform duration-250 ease-out`}
        >
          {/* Header */}
          <div className="px-5 py-4 border-b border-slate-200/80 flex items-start justify-between bg-slate-50/50">
            <div>
              <h2 className="text-base font-bold text-slate-900 tracking-tight">{title}</h2>
              {description && (
                <p className="text-xs text-slate-500 mt-0.5 leading-snug">{description}</p>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              title="Close drawer (ESC)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5 text-xs text-slate-800">
            {children}
          </div>

          {/* Optional Footer */}
          {footer && (
            <div className="px-5 py-3.5 border-t border-slate-200/80 bg-slate-50/70 flex items-center justify-end space-x-2.5">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
