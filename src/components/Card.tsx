import React from 'react';

interface CardProps {
    width: string,
    height: string,
    children: React.ReactNode,

}

const Card: React.FC<CardProps> = ({width, height, children,}) => {
    return (
        <div style={{width, height}} className="bg-gray-400 text-white font-bold">
            {children}
        </div>
    );
};

export default Card;