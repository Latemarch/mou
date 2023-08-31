"use client";
import React, { useState, useEffect, ReactNode } from "react";

interface DelayedRenderProps {
  delay: number;
  children: ReactNode;
}

const DelayedRender: React.FC<DelayedRenderProps> = ({ delay, children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  if (!visible) return null;

  return <>{children}</>;
};

export default DelayedRender;
