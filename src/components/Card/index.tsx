import * as S from './styles'
import IconEllipsis from '../../assets/images/icon-ellipsis';
import IconExercise from '../../assets/images/icon-exercise';

interface CardProps {
    title: string;
    current: number;
    previous: number;
}

export function Card({title, current, previous}: CardProps) {
    return(
        <S.ContainerCard>
            <IconExercise />
            <S.Content>
                <S.Header>
                    <p>{title}</p>
                    <IconEllipsis />
                </S.Header>  
                <h1>{current}hrs</h1>
                <p>Last week - {previous}hrs</p>
            </S.Content>
        </S.ContainerCard>
    );
}