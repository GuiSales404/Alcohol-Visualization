import './App.css';
import MapLegend from './components/MapLegend';
import MyMap  from './components/MyMap';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
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
      <div className='intro-all'>
        <p className='intro-text'>
          Esse trabalho tem o objetivo de mostrar alguns dados sobre o consumo de álcool, suas relações
          com indicadores como taxa de suicídio, salário médio e nível de urbanização pelo mundo.
        </p>
        <p className='quote'>
          "Não é possível afogar nenhum problema no álcool, visto que, todos eles sabem nadar... No máximo adormecer momentaneamente as cóleras da alma"
        </p>
      </div>
      <div>
        <div className='mapLegend'>
          <MapLegend/>
        </div>
        <div className="dotsVisu">
          <MyMap/>
        </div>
      </div>
      <div className='introGui-container'>
        <div className="intro-gui-visu">
          <div className='text-gui'>
            Analisaremos primeiramente em escala global, dando foco para as posições que representam os eixos Taxa de suicído x Consumo de álcool,
            é possível percebar um pequena tendência crescente à relação desses fatos, principalmente após à posição 11. Depois os países que mais
            consomem bebidas álcoolicas no mundo. 
          </div>
        </div>
      </div>
        <div className="graphs-gui">
          <div className="text-image-gui">
            <scroll-container>
              <scroll-page>
                  <img src="https://www.therecoveryvillage.com/wp-content/uploads/2020/06/Alcohol-and-Suicide.jpg" alt="..." height="100" width="235"></img>
                  <p>
                    Desde o ano 6.000 a.C. o álcool co-existe como droga recreativa para humanidade, apesar de ser a bebida padrão para 
                    momentos festivos e confraternizações no geral, é um fato que também traz inúmeros problemas devido a utilização não 
                    moderada dessa substância. Hoje, mais do que em qualquer outro momento da história humana nós estamos consumindo bebidas
                    álcoolicas, afirmação essa garantido pelo <b>Centro de Informações sobre Saúde e Álcool (CISA)</b>, e a partir disso, podemos
                    montar algumas hipótesis. 
                  </p>
              </scroll-page>
              <scroll-page>
                <img src="https://media.ascensionpress.com/wp-content/uploads/2018/06/sharon-mccutcheon-665638-unsplash-1-e1529598677623-1024x589.jpg" alt="..." height="100" width="235"></img>
                <p>
                  A principal delas é devido à ascenção do capitalismo tardio e a crescente era da técnica e desvalorização do trabalho humano.
                  Esses pontos geraram a sociedade que mais trabalha, alcança maior nível de instrução e contudo, mais endividada. Quando colocamos
                  essas questões em jogo e em comparação com a geração "boomer", relativo ao "baby boom", vemos que é um conjunto de pessoas que tem 
                  que se esforçar tanto quanto qualquer outra para não ter o mínimo que seus pais tiveram. Com isso, gerando sentimentos de invalidez
                  e incapacidade, e aí que muitas pessoas recorrem ao álcool como uma fuga da realidade.
                </p>
              </scroll-page>
              <scroll-page>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/A_general_map_of_Eastern_Europe.svg" alt="..." height="100" width="215"></img>
                <p>
                  É interessante notar que a a maioria dos países que consomem altas quantidades de álcool, a maioria está no Leste Europeu, como:
                  Bielorrúsia, Estônio, Lintuânia, Rússia e Ucrânia. 5 dos 7 maiores está lá. Um possível alternativa do porquê que é tão cultural 
                  esse consumo é o frio extremo que passa nessas regiões. 
                </p>
              </scroll-page>
            </scroll-container>
          </div>
          <iframe width="100%" height="610" frameborder="0" title="gui-graph "src="https://observablehq.com/embed/@guisales404/paises-que-mais-consomem-alcool?cells=graphs"></iframe>
        </div>
      <div className="intro-russia">
        <div className='text-russia'>
          Um dos países mais icônicos quando se fala em consumo de bebidas álcoolicas é a Rússia e sua vodka, analisaremos agora como
          caminha o consumo por lá e as ascenções de novas bebidas.
        </div> 
      </div>
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
        <div className="intro-final-container">
          <div className="intro-final">
            <div className="text-introFinal">
              Muito foi mostrado sobre o álcool no escopo global, contudo, vamos agora voltar o olhar para a cidade São Paulo, maior capital
              do Brasil e América Latina e como ela consome. 
            </div>
          </div>
        </div>
        <div className="graphs-guiMruLu">
          <div className="text-image-guiMruLu">
            <scroll-container>
              <scroll-page>
                  <img src="https://a-static.mlcdn.com.br/1500x1500/bandeira-do-sao-paulo-22x32cm-banderminas/wgilbandeiras/52/100f3169f8c6ea848357115931387347.jpg" alt="..." height="110" width="215"></img>
                  <p>
                    São Paulo capital é junto com o Rio de Janeiro símbolo interanacional de cidade do Brasil, contudo com um fardo a mais,
                    "representar", na medida das simplificações e generalizações, todo o centro financeiro, corporativo, mercantil e cultural
                    da América do Sul. A Terra da conta hoje com uma população de 33 milhões de habitantes, movimentando 30% do PIB Brasileiro,
                    desse PIB, vamos falar sobre álcool. 
                  </p>
              </scroll-page>
              <scroll-page>
                <img src="https://exame.com/wp-content/uploads/2020/12/GettyImages-520857436-1.jpg" alt="..." height="100" width="215"></img>
                <p>
                  Com mais de 30 mil bares na cidade de São Paulo, uma coisa que todos tem em comum é a cerveja, uma das bebidas mais populares
                  do Brasil é com certeza a mais democrática. De acordo com a visualização ao lado, podemos ver que os níveis de consumo dessa 
                  bebida é alto durante todo o ano, com pequenas variações em meses específicos.
                </p>
              </scroll-page>
              <scroll-page>
                <img src="https://assets.papelpop.com/wp-content/uploads/2020/09/NARCISO-EM-F%C3%89RIAS_STILL-3.jpg" alt="..." height="100" width="215"></img>
                <p>
                  A cidade que faz alguma coisa acontecer quando Caetano Veloso cruza as avenidas Ipiranga e São João tem dados que confirmam que 
                  42% das mortes por acidentes de trânsito tem como causa primária a embriaguez. Além disso, dados da Folha de S.Paulo mostram que em
                  2021, durante a pandemia de Covid-19, houve um aumento de 156,3% de mortes por transtornos mentais ou comportamentais causados pelo álcool,
                  ou seja, consumo excessivo de álcool como causa base da morte.
                </p>
              </scroll-page>
            </scroll-container>
          </div>
          <iframe width="100%" height="578" frameborder="0" title="guiMruLu" src="https://observablehq.com/embed/@guisales404/visualizacao-sobre-alcool-em-sao-paulo?cells=chart"></iframe>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
