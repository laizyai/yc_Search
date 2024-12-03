"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/examples/basic-chat");
  }, [router]);

  return null; // Optional: You can show a loading indicator here if desired
};

export default Home;
