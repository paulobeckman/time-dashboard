import { Container } from '../assets/styles/home';
import imageJeremy from '../assets/images/image-jeremy.png';

import { Button } from '../components/Button';
import { Card } from '../components/Card';

export function Home(){
    return (
        <Container>
            <section className="Container__Section first" >
                <div className="Container__Section-header">
                    <img className="Container__Section-header-img" src={imageJeremy} alt="avatar" />
                    <p className="Container__Section-header-p">Report for</p>
                    <h1 className="Container__Section-header-h1">Jeremy Robson</h1>
                </div>
                <div className="Container__Section-options">
                    <Button onClick={() => {}}>Daily</Button>
                    <Button onClick={() => {}}>Weekly</Button>
                    <Button onClick={() => {}}>Monthly</Button>
                </div>
            </section>
            
            <section className="Container__Section second" >
                <Card title={"Work"} current={5} previous={7}/>
                <Card title={"Work"} current={5} previous={7}/>
                <Card title={"Work"} current={5} previous={7}/>
                <Card title={"Work"} current={5} previous={7}/>
                <Card title={"Work"} current={5} previous={7}/>
                <Card title={"Work"} current={5} previous={7}/>
            </section>
        </Container>
    );
}