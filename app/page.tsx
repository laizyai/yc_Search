"use client";

import React from "react";
import styles from "./examples/basic-chat/page.module.css"; // Adjust path if needed
import Chat from "./components/chat"; // Import the Chat component

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Chat />
      </div>
    </main>
  );
};

export default Home;
