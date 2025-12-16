import React from 'react';

interface JsonLdProps {
    schema: Record<string, any>;
}

export const GJsonLd: React.FC<JsonLdProps> = ({ schema }) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};