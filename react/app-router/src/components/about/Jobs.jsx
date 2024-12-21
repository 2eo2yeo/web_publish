import React from 'react';

export default function Spec({img, alt, profile, description}) {
    return (
        <>
            <img src={img} alt={alt} />
                        <div>
                            <p class="job__name">{profile}</p>
                            <p class="job__period">{description}</p>
                        </div>
        </>
    );
}

