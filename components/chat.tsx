import React from 'react';
import styles from './Chat.module.css';

const Chat = () => {
    return (
        <div className={styles.chatContainer}>
            <div className={styles.messagesContainer}>
                {/* Messages go here */}
            </div>
            <div className={styles.inputContainer}>
                {/* Chat input goes here */}
            </div>
        </div>
    );
};

export default Chat; 