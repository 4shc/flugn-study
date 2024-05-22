import React from 'react'
import SliderA from '../../components/sliderA/SliderA'
import Section from '../../components/common/Section'
import imgData from '../../assets/img/slider-git/imgData'
import imgDataUxUi from '../../assets/img/slider-ux-ui/imgData'
import { Content0, Content1 } from '../../views/Home/content/';

const Home = () => {
  return (
    <main>
      <Section 
        date="20.11.2023" 
        dateTitle="SLIDERS - Comandos básicos GIT" 
        dateTitleTitle="SLIDERS - Comandos básicos GIT" 
        title="Comandos básicos de GIT" 
        content={<SliderA images={imgData} />}
      />

      <Section 
        date="20.11.2023" 
        dateTitle="SLIDERS - Mejores extensiones VSCode" 
        dateTitleTitle="SLIDERS - Mejores extensiones VSCode" 
        title="Mejores extensiones VSCode" 
        content={<SliderA images={imgDataUxUi} />}
      />

      <Section 
        date="Lunes 20.11.2023" 
        dateTitle="Reunion 1 - Programación" 
        dateTitleTitle="Reunion 1 - Programación" 
        title="Reunion 1 - Programación" 
        content= {<Content0/>}
      />

      <Section 
        date="Lunes 20.11.2023" 
        dateTitle="Reunion 1 - Programación" 
        dateTitleTitle="Reunion 1 - Programación" 
        title="Reunion 1 - Programación" 
        content= {<Content1/>}
      />
    </main>
  )
}

export default Home
