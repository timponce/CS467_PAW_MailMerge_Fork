import React from "react";

export default function RecipientsList({ recipients, onSelectRecipient, selectedRecipient }) {
    if (!recipients || recipients.length === 0) {
        return <p>No recipients available</p>;
      }
      
    return (
        <div className="recipients-list">
            <h3>Recipients</h3>
            <ul>
                {recipients.map((recipient, index) => (
                    <li
                        key={index}
                        onClick={() => onSelectRecipient(recipient)}
                        style={{ cursor: 'pointer', marginBottom: '8px' }}
                        className={recipient === selectedRecipient ? "selected" : ""}
                    >
                        {`Recipient ${index + 1}${(recipient.name || recipient.email) ? ` - ${recipient.name || recipient.email}` : ''}`}
                    </li>
                ))}
            </ul>
        </div>
    )
}