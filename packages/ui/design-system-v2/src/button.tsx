import * as React from 'react';

export const ButtonSample = ({ label }: { label: string }) => {
    return <button style={{ minWidth: 100, minHeight: 40 }}>{label}</button>;
};
