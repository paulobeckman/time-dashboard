import { Container } from '../assets/styles/home';
import imageJeremy from '../assets/images/image-jeremy.png'

export function Home(){
    return (
        <Container>
            <section className="Container__Section" >
                <div className="Container__Section-header">
                    <img className="Container__Section-header-img" src={imageJeremy} alt="avatar" />
                    <p className="Container__Section-header-p">Report for</p>
                    <h1 className="Container__Section-header-h1">Jeremy Robson</h1>
                </div>
                <div className="Container__Section-options">
                    <a href="*">Daily</a>
                    <a href="*">Weekly</a>
                    <a href="*">Monthly</a>
                </div>
            </section>
            
            <section className="Container__Section" >
                olá
            </section>
        </Container>
    );
}