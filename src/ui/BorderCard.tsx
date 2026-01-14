import React from 'react';

export default function BorderCard({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return <div className={`border border-gray-400 p-4 rounded-md ${className}`}>{children}</div>;
}
