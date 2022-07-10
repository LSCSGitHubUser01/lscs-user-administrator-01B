import React, { Fragment } from 'react';
import Hero from './Hero';
import HomeContent from './HomeContent';
import Test from './Test';
import { Container, Row, Col, Alert, Button, Image } from 'react-bootstrap'

export default function Home() {
  return (

<section>
    <Fragment>
      <Hero />
       <HomeContent />
    </Fragment>
    </section>
  )
}
