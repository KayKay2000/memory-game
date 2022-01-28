import React from 'react';
import './MemoryCard.css';

class MemoryCard extends React.Component { 
    render() {
        return <div class="MemoryCard">
                    <div class="MemoryCard__inner">
                        <div class="MemoryCard__back"><img src="https://www.digitalcrafts.com/img/logo-wrench-white.png" class="image" alt="wrench"/></div>
                        <div class="MemoryCard--front">∆</div>
                    </div>
                </div>
    }}


export default MemoryCard
