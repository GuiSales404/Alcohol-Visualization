import ReactDOMServer from 'react-dom/server';

import { MapContainer, GeoJSON } from 'react-leaflet'; 
import PopupMap from '../PopupMap'

import mapData from '../../data/countries.json';
import dados from '../../data/gapminder_alcohol.json';
import 'leaflet/dist/leaflet.css';
import './styles.css';

const COLOR_0 = "#FF0000";
const COLOR_1 = "#D80000";
const COLOR_75 = "#950101";
const COLOR_140 = "#3D0000";

export default function MyMap(){
    
    const countryStyle  = (feature) => {
      const {arrayCountries} = dados;

       const countryName = feature.properties.ADMIN;

       const arrayInfosAlcohol = filterCountry(arrayCountries, countryName);
        return {
            fillColor: getColor(arrayInfosAlcohol[0]?.alcconsumption),
            fillOpacity: "0.8", //just number between 0 and 1 
            color: "white",
            weight: 1,   
        }
    }
    

    function getColor(infoConsumo) {
       
        if(infoConsumo){
            return infoConsumo < 5
            ? COLOR_0
            : infoConsumo >= 5 && infoConsumo < 8
            ? COLOR_1
            : infoConsumo >= 8 && infoConsumo < 15
            ? COLOR_75
            : infoConsumo >= 15
            ? COLOR_140
            : "#3D0000";
        }
        return "#DDDDDD"; //se for vazio, vai renderizar essa cor padrao;
      
      }
    
  function filterCountry(arrayCountries, countryName){

    const arrayInfosAlcohol = arrayCountries.filter(currentCountry => {
        return currentCountry.country === countryName;
    });

    return arrayInfosAlcohol;
  }

   function onEachCountry (country, layer) {
       const {arrayCountries} = dados;

       const countryName = country.properties.ADMIN;

       const arrayInfosAlcohol = filterCountry(arrayCountries, countryName);

       const infosAlcohol = arrayInfosAlcohol[0]
      
        const popupContent = ReactDOMServer.renderToString(
            <PopupMap countryName={countryName} infosAlcohol={infosAlcohol} />
          );

        layer.bindPopup(popupContent);


     /*    layer.on('loading', {
            click: printMessageToConsole,
            mouseover: highlightFeature,
          
        }); */

    };
        return(
            <div>
                <h1 style={{ textAlign: "center" }}>Alcohol Map</h1>
                <MapContainer style={{ height: "80vh"}}
                 zoom={2}
                 center={[20, 100]}
                >
                    <GeoJSON style={countryStyle} 
                            data={mapData.features} 
                            onEachFeature={onEachCountry} 
                    />
                </MapContainer>
            </div>
        );
    
}
