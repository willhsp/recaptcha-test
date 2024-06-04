import React, { useEffect, useRef } from 'react';

const RecaptchaIframe = ({ onVerify }) => {
    const iframeRef = useRef(null);

    useEffect(() => {
        const handleMessage = (event) => {
            if (event.origin === window.location.origin) {
                onVerify(event.data);
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [onVerify]);

    const requestCaptchaResponse = () => {
        iframeRef.current.contentWindow.postMessage('get-recaptcha-response', '*');
    };

    return (
        <div>
            <iframe
                ref={iframeRef}
                src={`${window.location.origin}/recaptcha.html`}
                title="reCAPTCHA"
                width="100%"
                height="200"
                frameBorder="0"
            />
            <button onClick={requestCaptchaResponse}>Verify reCAPTCHA</button>
        </div>
    );
};

export default RecaptchaIframe;
