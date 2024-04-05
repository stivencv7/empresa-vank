export const ArrowHide = ({className,stroke,onClick}:{className:any,stroke:string,onClick:any}) => {
    return (
        <svg onClick={onClick} className={className} width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 8L13 1" stroke={stroke} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}
