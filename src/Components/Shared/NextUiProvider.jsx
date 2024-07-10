// app/providers.tsx
"use client";
import { NextUIProvider } from "@nextui-org/react";

const NextUi_Provider = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default NextUi_Provider;
