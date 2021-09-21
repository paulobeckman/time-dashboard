import * as S from './styles'

interface CardProps {
    title: string;
    current: number;
    previous: number;
}

export function Card({title, current, previous}: CardProps) {
    return(
        <S.ContainerCard>
            <img src="*" alt="" />
            <S.Content>
                <S.Header>
                    <p>{title}</p>
                    <i className="material-icons">more_horiz</i>
                </S.Header>  
                <h1>{current}hrs</h1>
                <p>Last day-{previous}hrs</p>
            </S.Content>
        </S.ContainerCard>
    );
}