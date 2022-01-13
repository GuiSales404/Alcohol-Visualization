export default function PopupMap({ countryName,  infosAlcohol}) {
    return (
      <div>
        <p>{`Teste ${
          countryName
        }`}</p>
        {infosAlcohol ? <>
            <p>{`Teste 1 ${
          infosAlcohol?.alcconsumption
        }`}</p>
          <p>{`Teste ${
          infosAlcohol?.incomeperperson
        }`}</p>
        </> : <p>Sem dados !</p>
         }
          
     
      </div>
    );
  };