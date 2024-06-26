import {useState} from 'react'
import {Container, Row, Col} from "react-bootstrap"
import contactImga from '../assets/img/contact-img.svg'
const Contact =()=>{
    const formInitiaDetails={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }
    const [formDetails, setFormDetails]=useState(formInitiaDetails)
    const [buttonText, setButtonText]=useState('Send');
    const [status, setStatus]=useState({})

    const onFormUpdate=(catelogy, value)=>{
        setFormDetails({...formDetails,
            [catelogy]:value
        })
    }

    const handleSubmit=()=>{

    }
    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                    <img src={contactImga} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                    <h2>Contact With Us</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                             <input type="text" value={formDetails.firstName} placeholder='First Name' onChange={(e)=>onFormUpdate('firstName', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                             <input type="text" value={formDetails.lastName} placeholder='Last Name' onChange={(e)=>onFormUpdate('lastName', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                             <input type="text" value={formDetails.email} placeholder='Email' onChange={(e)=>onFormUpdate('email', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                             <input type="text" value={formDetails.phone} placeholder='Phone' onChange={(e)=>onFormUpdate('phone', e.target.value)}/>
                            </Col>
                            <Col>
                            <textarea row={6} value={formDetails.message} placeholder="Your Message" onChange={(e)=>onFormUpdate('message', e.target.value)}></textarea>
                            <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                <p className={status.success ===false ? "danger":"success"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Contact;