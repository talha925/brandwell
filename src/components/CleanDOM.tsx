'use client';
import { useEffect } from 'react';

export default function CleanDOM() {
  useEffect(() => {
    // Remove the attribute added by browser extensions
    document.body.removeAttribute('cz-shortcut-listen');
    
    // You can add more attributes to remove if needed
    // For example, if other extensions add their own attributes
  }, []);
  
  return null;
} 