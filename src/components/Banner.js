import {Container,Row, Col} from 'react-bootstrap'

const Banner=()=>{
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Front-end Coder`} <span className="wrap">Web Developer</span></h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <button onClick={()=>console.log('connect')}>Let connect</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Banner;