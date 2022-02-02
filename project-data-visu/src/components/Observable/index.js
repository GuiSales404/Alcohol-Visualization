import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@guisales404/visualizando-dados-de-terremoto-usando-a-api-vega-lite-part/3";

function VisualizandoDadosDeTerremotoUsandoAApiVegaLitePart() {
  const viewofDashboardRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "viewof dashboard") return new Inspector(viewofDashboardRef.current);
      return ["selected"].includes(name);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={viewofDashboardRef} />
      <p>Credit: <a href="https://observablehq.com/@guisales404/visualizando-dados-de-terremoto-usando-a-api-vega-lite-part/3">Visualizando dados de terremoto usando a API Vega-Lite (Parte 2) com Interação by Guilherme Sales </a></p>
    </>
  );
}

export default VisualizandoDadosDeTerremotoUsandoAApiVegaLitePart;