import { useState } from "react";
import Iframe from "react-iframe";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./App.css";

const App1 = () => {
 return(
  <>
  <Iframe
  url="https://pruebawebhostluna.000webhostapp.com/document.pdf"
  title="Inline Frame Example"
  width="700"
  height="800"
  display="block"
  position="relative"
  />

  
  </>
 )
 }
export default App1;
