'use client';

import React, { useEffect, useState } from 'react';

export const GDynamicYear = () => {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    if (!year) return null;

    return <span>{year}</span>;
};
