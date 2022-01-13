import ReactDOMServer from 'react-dom/server';

import { MapContainer, GeoJSON } from 'react-leaflet'; 

import { PopupMap } from '../popUpMap'
import mapData from '../../data/countries.json';
import dados from '../../data/gapminder_alcohol.json';
import 'leaflet/dist/leaflet.css';
import './styles.css';

export function MyMap(){
    const countryStyle = {
        fillColor: "red",
        fillOpacity: "0.8", //just number between 0 and 1 
        color: "white",
        weight: 1,   
    };

    function printMessageToConsole (event){
        console.log("clicked");
    };


    function highlightFeature(event) {
        event.target.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
        });
       }

   function onEachCountry (country, layer) {
       const {arrayCountries} = dados;

       const countryName = country.properties.ADMIN;
      
       const arrayInfosAlcohol = arrayCountries.filter(currentCountry => {
           return currentCountry.country === countryName;
       });

      const infosAlcohol = arrayInfosAlcohol[0]
      
       console.log("infosAlcohol", infosAlcohol, "countryName", countryName);
        
/*         layer.bindPopup(countryName, infosAlcohol?.alcconsumption, infosAlcohol?.employrate, infosAlcohol?.incomeperperson );
 */
        const popupContent = ReactDOMServer.renderToString(
            <PopupMap countryName={countryName} infosAlcohol={infosAlcohol} />
          );
          layer.bindPopup(popupContent);


        layer.on('loading', {
            click: printMessageToConsole,
            mouseover: highlightFeature,
          
        });
      /*   layer.on('mouseover', {
            mouseover: changeColorCountry,
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
