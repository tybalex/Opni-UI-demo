import React from "react";
import { Container, Button } from "shards-react";

import opnidashboard from '../images/p1.png'

const QuickStart = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>Opni Demo Quickstart</h2>
        <h3>Launch our demo with sockshop application on a single node cluster</h3>
        <Button pill>Launch Demo</Button>
        <p>     </p>
        <img src={opnidashboard} alt="Opni Dashboard" width="960" height="540" />
      </div>
    </div>
  </Container>
);

export default QuickStart;