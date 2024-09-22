"use client"; // Ensure this is at the very top
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded) {
      if (user) {
        router.push("/dashboard");
      } else {
        router.push("/courses");
      }
    }
  }, [user, isLoaded, router]); // Ensure all dependencies are included

  return (
      <div>
      <UserButton signOutUrl="/sign-in" />
      </div>
  );
}
