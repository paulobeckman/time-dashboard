import * as S from './styles'
import IconEllipsis from '../../assets/images/icon-ellipsis';

interface CardProps {
    title: string;
    current: number;
    previous: number;
    img: string;
    imgAlt: string;
    background: string;
}

export function Card({title, current, previous, img, imgAlt, background}: CardProps) {
    return(
        <S.ContainerCard background={background} >
            <S.ContainerImage>
                <img src={img} alt={imgAlt} />
            </S.ContainerImage>
            <S.Content>
                <S.Header>
                    <p>{title}</p> 
                    <IconEllipsis />
                </S.Header>  
                <span>
                    <h1>{current}hrs</h1>
                    <p>Last week - {previous}hrs</p>
                </span>
            </S.Content>
        </S.ContainerCard>
    );
}