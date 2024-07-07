'use client';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

const EmailJs = () => {
  useEffect(() => {
    emailjs.init('wtgRI5Kf-GuS-l7hq');
  }, []);

  return null;
};

export default EmailJs;
