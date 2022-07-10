import React from 'react'

import { Container, Row, Col, Alert, Button } from 'react-bootstrap';

export default function HomeContent() {
  return (
    <section className="container">
    <div>
     <Alert variant="success">This is a button</Alert>  
     <Button>Test Button</Button>
   </div>
    <body>
 <p className="myBackgroundImage"></p>
<h2>La BellaFina Pubishing, LLC</h2>
<p>La BellaFina Publishing, LLC is was founded by Louis Scozzari in Minneapolis, MN.  It's primary focus is to publish Louis Scozzari's Music.</p>
<p>.....Resize the browser window to see the responsive effect.</p>

<div class="header">
  <h2>Header</h2>
</div>

<div class="row">
  <div class="column">Column1
  <p> This is a test Line 1 Column1</p>
  <p> This is a test Line 2 Column1</p>
  </div>
  <div class="column">Column2
 <p> This is a test Line 1 Column2</p>
  <p> This is a test Line 2 Column2</p>
  <img src="BryantLake.JPG" alt="Bryant Lake" width="500" height="600"/> 
  </div>
  <div class="column">Column3
  
  <p> 
  <ul> 
  <li>This is a test line 1 BULLET Column3</li>
  <li>This is a test line 2 BULLET Column3</li>
  </ul>
  </p>
  
  </div>
</div>



</body> 
  </section>
  )
}