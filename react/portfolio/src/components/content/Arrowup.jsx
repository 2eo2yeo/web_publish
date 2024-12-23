import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function Arrowup() {
    return (
        <aside>
            <a class="arrow--up" href="#">
                <i class="fa-solid fa-arrow-up">
                    <FontAwesomeIcon
                        icon={faArrowUp} />
                </i>
            </a>
        </aside>
    );
}

