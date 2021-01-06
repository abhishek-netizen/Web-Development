import React from 'react'
import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/svg-4.svg'
import Icon3 from '../../images/svg-6.svg'
import {ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP} from './ServicesElements'


const Services = () => {
    return (
        <>
          <ServicesContainer id="services">
           <ServicesH1>Our Services</ServicesH1>
           <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Reduce expenses</ServicesH2>
                <ServicesP>We help reduce your fess and incresase your overall revenue.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Virtual offices</ServicesH2>
                <ServicesP>You can access our plotform anywhere in the world.24*7 you dont have to worry</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
            </ServicesCard>
           </ServicesWrapper>
          </ServicesContainer>  
        </>
    )
}

export default Services
