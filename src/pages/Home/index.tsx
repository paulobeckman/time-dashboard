import { useState } from 'react';
import * as S from './styles';
import imageJeremy from '../../assets/images/image-jeremy.png';
import IconWork from '../../assets/images/icon-work.svg';
import IconPlay from '../../assets/images/icon-play.svg';
import IconStudy from '../../assets/images/icon-study.svg';
import IconExercise from '../../assets/images/icon-exercise.svg';
import IconSocial from '../../assets/images/icon-social.svg';
import IconSelfCare from '../../assets/images/icon-self-care.svg';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

import data from '../../database/data.json';

export function Home(){
    const [selectOption, setSelectOption] = useState('');

    return (
        <S.Container>
            <S.ProfileSection>
                <S.Header>
                    <img src={imageJeremy} alt="avatar" />
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </S.Header>
                <S.Options>
                    <Button onClick={() => setSelectOption('Daily')}>Daily</Button>
                    <Button onClick={() => setSelectOption('Weekly')}>Weekly</Button>
                    <Button onClick={() => setSelectOption('Monthly')}>Monthly</Button>
                </S.Options>
            </S.ProfileSection>
            
            <S.CardsSection>
            {data.map((activity, i) => {
                let current
                let previous
                let title
                let color
                let icon
                switch(selectOption){
                    case 'Daily':
                        title = activity.title;
                        icon = activity.icon;
                        color = activity.color;
                        current = activity.timeframes.daily.current;
                        previous = activity.timeframes.daily.previous;
                        break;
                    default:   
                        title = activity.title;
                        icon = activity.icon;
                        color = activity.color;
                        current = activity.timeframes.daily.current;
                        previous = activity.timeframes.daily.previous;
                        break;
                }
                return(
                    <Card 
                        key={i}
                        background={color}
                        img={icon} 
                        imgAlt={icon} 
                        title={title} 
                        current={current} 
                        previous={previous}
                    />
                )
            })}
            </S.CardsSection>
        </S.Container>
    );
}