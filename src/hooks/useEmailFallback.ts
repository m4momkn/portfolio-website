import { useState, useCallback } from 'react';

export const useEmailFallback = (email: string) => {
    const [showEmail, setShowEmail] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleEmailClick = useCallback((e: React.MouseEvent) => {
        e.preventDefault();

        // Try to open mail client
        window.location.href = `mailto:${email}`;

        // Check if focus is lost (mail client opened)
        // We wait a bit to allow the browser to switch focus
        setTimeout(() => {
            if (document.hasFocus()) {
                setShowEmail(true);
                // Also copy to clipboard for convenience
                navigator.clipboard.writeText(email).then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                });
            }
        }, 500);
    }, [email]);

    return { showEmail, copied, handleEmailClick };
};
