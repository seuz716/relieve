import React from 'react'
import CustomerExperience from '../customers/CustomerExperience'
import Properties from '../properties/Properties'
import Slider from '../slider/Slider'
import About from '../about/About'
import Title from '../titulo/Title'
import ContactForm from '../contactForm/ContactForm'
import CustomerInversion from '../customerInversion/CustomerInversion'
import './home.css' 

export default function Home() {
    return (
      <div>
          <Slider />
     
          <About />
          <Title  title="Servicios Relieve Ingeniería SAS"/>
          <Properties />
          <Title title="Experiencias Relieve Ingeniería SAS" />
          <CustomerExperience />
          <CustomerInversion />
          <ContactForm />
        
      </div>
     
    )}
