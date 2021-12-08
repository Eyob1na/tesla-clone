import React from 'react'
import styled from 'styled-components';
import Section from './Section';
function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
            /><Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
            /><Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
            /><Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
            /><Section
                title="Lowest Cost Solar Panels"
                description="Money Backed Guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                RightBtnText="Learn More"
            /><Section
                title="Solar for new Roofs"
                description="Solar Roof cost less"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                RightBtnText="Learn More"
            /><Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
            />
        </Container>
    )
}

export default Home

const Container=styled.div`
    height: 100vh;
`