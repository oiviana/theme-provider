"use client"

import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface ProviderProps {
    children: ReactNode;
  }
  

const Providers: React.FC<ProviderProps> = ({ children }) => {
    return(
        <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
        </ThemeProvider>
    )
}

export default Providers;
