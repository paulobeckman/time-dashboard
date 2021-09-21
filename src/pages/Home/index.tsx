import * as S from './styles';
import imageJeremy from '../../assets/images/image-jeremy.png';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

export function Home(){
    return (
        <S.Container>
            <S.ProfileSection>
                <S.Header>
                    <img src={imageJeremy} alt="avatar" />
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </S.Header>
                <S.Options>
                    <Button onClick={() => {}}>Daily</Button>
                    <Button onClick={() => {}}>Weekly</Button>
                    <Button onClick={() => {}}>Monthly</Button>
                </S.Options>
            </S.ProfileSection>
            
            <S.CardsSection>
                <Card title={"Work"} current={5} previous={7}/>
                <Card title={"Work"} current={5} previous={7}/>
                <Card title={"Work"} current={5} previous={7}/>
                <Card title={"Work"} current={5} previous={7}/>
                <Card title={"Work"} current={5} previous={7}/>
                <Card title={"Work"} current={5} previous={7}/>
            </S.CardsSection>
        </S.Container>
    );
}