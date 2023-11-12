"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export const TanstackProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools
        initialIsOpen={false}
        position="top"
        buttonPosition="bottom-left"
      />
    </QueryClientProvider>
  );
};
