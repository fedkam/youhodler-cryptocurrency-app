"use client";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { reset: queryReset } = useQueryErrorResetBoundary();

  const handleReset = () => {
    queryReset();
    reset();
  };

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={handleReset}>Try again</button>
    </div>
  );
}
