export default function PopupMap({ countryName,  infosAlcohol}) {
    return (
      <div>
        <p>{`Nome do país: ${
          countryName
        }`}</p>
        {infosAlcohol ? <>
            <p>{`Média consumo de álcool: ${
          infosAlcohol?.alcconsumption
        } L/Adulto`}</p>
          <p>{`Taxa de suicídio a cada 100hab: ${
          infosAlcohol?.suicideper100th
        }`}</p>
        </> : <p>Sem dados!</p>
         }
          
     
      </div>
    );
  };