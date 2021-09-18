interface CardProps {
    title: string;
    current: number;
    previous: number;
}

export function Card({title, current, previous}: CardProps) {
    return(
        <div className="container__card">
            <div className="container__card-main">
                <div className="container__card-main-header">
                    <p>{title}</p>
                    <i className="material-icons">more_horiz</i>
                </div>  
                <h1>{current}hrs</h1>
                <p>Last day-{previous}hrs</p>
            </div>
        </div>
    );
}