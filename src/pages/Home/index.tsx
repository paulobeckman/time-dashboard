import * as S from './styles';
import imageJeremy from '../../assets/images/image-jeremy.png';
import IconExercise from '../../assets/images/icon-exercise.svg';
import IconPlay from '../../assets/images/icon-play.svg';
import IconSelfCare from '../../assets/images/icon-self-care.svg';
import IconSocial from '../../assets/images/icon-social.svg';
import IconStudy from '../../assets/images/icon-study.svg';
import IconWork from '../../assets/images/icon-work.svg';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

import colors from '../../assets/styles/theme';


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
                <Card 
                    background={colors.Lightorange}
                    img={IconWork} 
                    imgAlt={IconWork} 
                    title={"Work"} 
                    current={5} 
                    previous={7}
                />
                <Card 
                    background={colors.Softblue}
                    img={IconPlay}
                    imgAlt={IconWork}
                    title={"Work"}
                    current={5}
                    previous={7}
                />
                <Card 
                    background={colors.Lightred}
                    img={IconStudy}
                    imgAlt={IconWork}
                    title={"Work"}
                    current={5}
                    previous={7}
                />
                <Card 
                    background={colors.Limegreen}
                    img={IconExercise}
                    imgAlt={IconWork}
                    title={"Work"}
                    current={5}
                    previous={7}
                />
                <Card 
                    background={colors.Violet}
                    img={IconSocial}
                    imgAlt={IconWork}
                    title={"Work"}
                    current={5}
                    previous={7}
                />
                <Card 
                    background={colors.Softorange}
                    img={IconSelfCare}
                    imgAlt={IconWork}
                    title={"Work"}
                    current={5}
                    previous={7}
                />
            </S.CardsSection>
        </S.Container>
    );
}