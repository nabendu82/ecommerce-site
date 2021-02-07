import React from 'react'
import { styles, Section } from '../../utils'
import styled from 'styled-components'

const About = () => {
    return (
        <Section>
            <AboutWrapper>
                <p>Ecommerce is dedicated to 100% customer delight ensuring that everything from placing your order to delivering it right to your doorstep is smooth and hassle-free. 
                </p>
                <p>    
                When it comes to online transactions, Ecommerce ensures that all credit/debit card and net banking transactions are done through secure and trusted gateways.
                </p>
                <p>All your bank details are safe and secure, and will not be shared with any third-party.
                </p>
                <p>
                Ecommerce offers a cash on delivery option if you need an easier payment method and excellent after sales services too. If you have any issues with your purchase, the easy exchange and replacement policies comes to your rescue.
                </p>

            </AboutWrapper>
        </Section>
    )
}
export const AboutWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    p {
        font-size: 1.2rem;
        letter-spacing: 2px;
        color: ${styles.colors.mainBlack};
        margin-bottom: 2rem;
    }
`;

export default About;
