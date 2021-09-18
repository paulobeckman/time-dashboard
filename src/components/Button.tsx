interface ButtonProps {
    onClick: () => void;
    children?: string;
}

export function Button({onClick, children}:ButtonProps) {
    return(
        <a onClick={onClick}>
            {children}
        </a>
    );
}