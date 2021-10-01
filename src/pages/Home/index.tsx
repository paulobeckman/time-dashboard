import { useState } from 'react';
import * as S from './styles';
import imageJeremy from '../../assets/images/image-jeremy.png';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

import data from '../../database/data.json';

export function Home(){
    const [selectOption, setSelectOption] = useState('Weekly');

    return (
        <S.Container>
            <S.ProfileSection>
                <S.Header>
                    <img src={imageJeremy} alt="avatar" />
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </S.Header>
                <S.Options>
                    <Button 
                        valueSelected={selectOption === 'Daily'}
                        onClick={() => setSelectOption('Daily')}
                    >
                        Daily
                    </Button>
                    <Button
                        valueSelected={selectOption === 'Weekly'}
                        onClick={() => setSelectOption('Weekly')}
                    >
                        Weekly
                    </Button>
                    <Button
                        valueSelected={selectOption === 'Monthly'}
                        onClick={() => setSelectOption('Monthly')}
                    >
                        Monthly
                    </Button>
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
                    case 'Weekly':
                        title = activity.title;
                        icon = activity.icon;
                        color = activity.color;
                        current = activity.timeframes.weekly.current;
                        previous = activity.timeframes.weekly.previous;
                        break;
                    case 'Monthly':
                        title = activity.title;
                        icon = activity.icon;
                        color = activity.color;
                        current = activity.timeframes.monthly.current;
                        previous = activity.timeframes.monthly.previous;
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