import React from 'react'

export const IconAddActions = ({className,fill,stroke}:{className:string,fill:string,stroke:string}) => {
    return (
        <svg className={className} width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.416687" y="0.5" width="60" height="60" rx="30" fill={fill} />
            <path d="M30.4167 24.0833V36.9167M24 30.5H36.8333" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}