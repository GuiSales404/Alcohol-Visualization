import './styles.css'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { BackTop } from 'antd'

export default function Footer(){
        return(
            <div className='all-footer'>
                <div className='upside'>
                    <div className='about-project'>
                        <h4>Sobre o projeto:</h4>
                        <p> 
                            Esse site foi criado pelos alunos: Guilherme Sales, Bruna Maia e Luiza Pacheco
                            para a apresentação do trabalho final da cadeira de Visualização de Dados,
                            ministrada pela Profa.Dra Emanuele Marques dos Santos na Universidade
                            Federal do Ceará (UFC) - Fortaleza.
                        </p>
                    </div>
                    <div className='students'>
                        <div className='gui'>
                            <a href="https://github.com/GuiSales404">
                                <div className='gui-git'>
                                    <AiFillGithub/>
                                    <p>GuiSales404</p>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/guilherme-sales-fernandes-394a0a154/">
                                <div className='gui-linkedin'>
                                    <AiFillLinkedin/>
                                    <p>Guilherme Sales</p>
                                </div>
                            </a>
                        </div>
                        <div className='mru'>
                            <a href="https://github.com/brnamaia">
                                <div className='mru-git'>
                                    <AiFillGithub/>
                                    <p>brnamaia</p>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/bruna-maia-77a604210/">
                                <div className='mru-linkedin'>
                                    <AiFillLinkedin/>
                                    <p>Bruna Maia</p>
                                </div>
                            </a>
                        </div>
                        <div className='lu'>
                            <a href="https://github.com">
                                <div className='lu-git'>
                                    <AiFillGithub/>
                                    <p>lupacheco</p>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/feed/">
                                <div className='lu-linkedin'>
                                    <AiFillLinkedin/>
                                    <p>Luiza Pacheco</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <hr width="95%"/>
                <div className='downside'>
                    <p>© Copyright 2022 - Todos os diretos reservados.</p>
                    <BackTop duration={2000}><div className='button'>Voltar</div></BackTop>
                </div>
            </div>
        )
}