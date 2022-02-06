import './App.css';
import MapLegend from './components/MapLegend';
// import MyMap  from './components/MyMap';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <div className='teste'>
        <MapLegend/>
      </div>
      <div className="introPage">
        <div className="Title">
          <h1>CONSUMO DE</h1>
          <h1 className="alcohol">ÁLCOOL</h1>   
          <div className="Subtitle">
            <h2>PRAY FOR ALCOHOLICS</h2>
          </div>
        </div>
        <div className="middle-page">
          <img src="https://www.ufc.br/images/_images/a_universidade/identidade_visual/brasao/brasao1_horizontal_cor_300dpi.png" alt="..." height="105" width="325"></img>
          <div className="class">
            <p>2021.2 Data Visualization</p>
            <div className="student">
              <p>Al.Bruna Maia - 499257</p>
              <p>Al.Guilherme Sales - 499756</p>
              <p>Al.Luiza Clara - 493478</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="dotsVisu">
        <MyMap/>
      </div> */}
      <div className="separate-2"></div>
      <div className="all-graphs">
        <div className="graphs-mru">
          <iframe width="100%" height="578" frameborder="0" title="mru-graph" src="https://observablehq.com/embed/@brnamaia/visualizando-dados-de-alcool-na-russia?cells=viewof+dados"></iframe>
          <div className="text-image-mru">
            <scroll-container>
              <scroll-page>
                  <img src="https://images.a12.com/source/files/c/172868/alcoolismo-168237_1028-686-0-0.jpg" alt="..." height="100" width="215"></img>
                  <p>
                    É notório que com o passar dos anos o consumo
                    de álcool foi crescendo e se popularizando no 
                    mundo, é cada vez mais comum pessoas menores
                    de 18 anos abusarem dessa substância. O mercado 
                    do álcool vem ganhando espaço, principalmente através
                    do marketing. O problema do consumo exacerbado são 
                    as consequências geradas, além da dependência, também
                    leva ao desenvolvimento de algumas doenças podendo
                    levar a morte do usuário.
                  </p>
              </scroll-page>
              <scroll-page>
                <img src="https://saude.abril.com.br/wp-content/uploads/2018/09/alcool.png" alt="..." height="100" width="215" border="1px"></img>
                <p>
                  O uso de álcool e drogas é o segundo diagnóstico mais 
                  relacionado ao suicídio, representando 22,4% dos casos.
                  Pensando nisso, pesquisadores da Universidade São Paulo
                  (USP) fizeram um estudo acerca do assunto. Eles analisaram 
                  os exames toxicológicos de 1.700 pessoas que se mataram 
                  entre 2011 e 2015 na cidade de São Paulo. Obtiveram como 
                  resultado que 30,2% das amostras acusavam algum grau de
                  teor alcoólico no sangue. 
                </p>
              </scroll-page>
              <scroll-page>
                <img src="https://media.moneytimes.com.br/uploads/2021/09/bandeira-da-russia.jpg" alt="..." height="100" width="215" border="1px"></img>
                <p>
                  Como um dos países que mais consome álcool no mundo,
                  escolhemos mostrar os dados sobre a venda de 
                  bebidas na Rússia. Sendo uma grande associada à cultura
                  do país, a vodka tem um grande status para os russos. 
                  Ela já foi o centro da economia do país nos tempos do 
                  czarismo e sempre esteve presente nos principais momentos 
                  da história russa. Entretanto, hoje, a cerveja é a bebida 
                  alcoólica mais consumida do país 
                </p>
              </scroll-page>
            </scroll-container>
          </div>
        </div>
        <div className="separate"></div>
        <div className="graphs-gui">
          <div className="text-image-gui">
            <scroll-container>
              <scroll-page>
                  <img src="https://images.a12.com/source/files/c/172868/alcoolismo-168237_1028-686-0-0.jpg" alt="..." height="100" width="215"></img>
                  <p>
                    É notório que com o passar dos anos o consumo
                    de álcool foi crescendo e se popularizando no 
                    mundo, é cada vez mais comum pessoas menores
                    de 18 anos abusarem dessa substância. O mercado 
                    do álcool vem ganhando espaço, principalmente através
                    do marketing. O problema do consumo exacerbado são 
                    as consequências geradas, além da dependência, também
                    leva ao desenvolvimento de algumas doenças podendo
                    levar a morte do usuário.
                  </p>
              </scroll-page>
              <scroll-page>
                <img src="https://saude.abril.com.br/wp-content/uploads/2018/09/alcool.png" alt="..." height="100" width="215" border="1px"></img>
                <p>
                  O uso de álcool e drogas é o segundo diagnóstico mais 
                  relacionado ao suicídio, representando 22,4% dos casos.
                  Pensando nisso, pesquisadores da Universidade São Paulo
                  (USP) fizeram um estudo acerca do assunto. Eles analisaram 
                  os exames toxicológicos de 1.700 pessoas que se mataram 
                  entre 2011 e 2015 na cidade de São Paulo. Obtiveram como 
                  resultado que 30,2% das amostras acusavam algum grau de
                  teor alcoólico no sangue. 
                </p>
              </scroll-page>
              <scroll-page>
                <img src="https://media.moneytimes.com.br/uploads/2021/09/bandeira-da-russia.jpg" alt="..." height="100" width="215" border="1px"></img>
                <p>
                  Como um dos países que mais consome álcool no mundo,
                  escolhemos mostrar os dados sobre a venda de 
                  bebidas na Rússia. Sendo uma grande associada à cultura
                  do país, a vodka tem um grande status para os russos. 
                  Ela já foi o centro da economia do país nos tempos do 
                  czarismo e sempre esteve presente nos principais momentos 
                  da história russa. Entretanto, hoje, a cerveja é a bebida 
                  alcoólica mais consumida do país 
                </p>
              </scroll-page>
            </scroll-container>
          </div>
          <iframe width="100%" height="610" frameborder="0" title="gui-graph "src="https://observablehq.com/embed/@guisales404/paises-que-mais-consomem-alcool?cells=graphs"></iframe>
        </div>
        <div className="separate1"></div>
        <div className="graphs-guiMruLu">
          <iframe width="100%" height="578" frameborder="0" title="guiMruLu" src="https://observablehq.com/embed/@guisales404/visualizacao-sobre-alcool-em-sao-paulo?cells=chart"></iframe>
          <div className="text-image-guiMruLu">
            <scroll-container>
              <scroll-page>
                  <img src="https://images.a12.com/source/files/c/172868/alcoolismo-168237_1028-686-0-0.jpg" alt="..." height="100" width="215"></img>
                  <p>
                    É notório que com o passar dos anos o consumo
                    de álcool foi crescendo e se popularizando no 
                    mundo, é cada vez mais comum pessoas menores
                    de 18 anos abusarem dessa substância. O mercado 
                    do álcool vem ganhando espaço, principalmente através
                    do marketing. O problema do consumo exacerbado são 
                    as consequências geradas, além da dependência, também
                    leva ao desenvolvimento de algumas doenças podendo
                    levar a morte do usuário.
                  </p>
              </scroll-page>
              <scroll-page>
                <img src="https://saude.abril.com.br/wp-content/uploads/2018/09/alcool.png" alt="..." height="100" width="215" border="1px"></img>
                <p>
                  O uso de álcool e drogas é o segundo diagnóstico mais 
                  relacionado ao suicídio, representando 22,4% dos casos.
                  Pensando nisso, pesquisadores da Universidade São Paulo
                  (USP) fizeram um estudo acerca do assunto. Eles analisaram 
                  os exames toxicológicos de 1.700 pessoas que se mataram 
                  entre 2011 e 2015 na cidade de São Paulo. Obtiveram como 
                  resultado que 30,2% das amostras acusavam algum grau de
                  teor alcoólico no sangue. 
                </p>
              </scroll-page>
              <scroll-page>
                <img src="https://media.moneytimes.com.br/uploads/2021/09/bandeira-da-russia.jpg" alt="..." height="100" width="215" border="1px"></img>
                <p>
                  Como um dos países que mais consome álcool no mundo,
                  escolhemos mostrar os dados sobre a venda de 
                  bebidas na Rússia. Sendo uma grande associada à cultura
                  do país, a vodka tem um grande status para os russos. 
                  Ela já foi o centro da economia do país nos tempos do 
                  czarismo e sempre esteve presente nos principais momentos 
                  da história russa. Entretanto, hoje, a cerveja é a bebida 
                  alcoólica mais consumida do país 
                </p>
              </scroll-page>
            </scroll-container>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
