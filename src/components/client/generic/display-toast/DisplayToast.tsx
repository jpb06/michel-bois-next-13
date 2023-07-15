'use client';

import { useEffect } from 'react';
import { toast } from 'react-toastify';

type DisplayToastProps = {
  message: string;
  type: 'error' | 'success' | 'info' | 'warning';
};

export const DisplayToast = ({ message, type }: DisplayToastProps) => {
  useEffect(() => {
    toast[type](message);
  }, [type, message]);

  return null;
};
