import React from 'react';
import '../../css/slide.css';
import '../../css/home.css';
import '../../css/projetos.css';
import '../../css/sobre.css';
import logo from '../../img/lades logo.svg';
import lades from '../../img/lades.png';
import ladesfooter from '../../img/ladesfooter.svg';
import logoif from '../../img/logoif.svg';
import vector from '../../img/Vector.svg';

function Sobre() {
  return (
    <div>
      <header>
        <nav>
        <a href = "/home"> <img width="100px" src={logo} alt="logo lades" /></a>
          <ul>
            <li>
              <a href="./sobre"> Sobre</a>
            </li>
            <li>
              <a href="./pesquisadores"> Pesquisadores</a>
            </li>
            <li>
              <a href="./pesquisas"> Pesquisas</a>
            </li>
            <li>
              <a href="./projetos"> Projetos</a>
            </li>
            <li>
              <a href="./contato"> Contato</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="sectionone">
          <div>
            <h1>LABORATÓRIO DE <br /> DESENVOLVIMENTO DE SOFTWARE</h1>
            <p>
              Estamos comprometidos em promover a inovação <br /> e o avanço
              tecnológico por meio da pesquisa e do <br /> desenvolvimento de
              software.
            </p>
          </div>
        </section>

        <section className="objetivo_sobre">
          <div className="objetivo_geral">
            <img width="300px" height="150px" src={lades} alt="" />
            <div className="objetivo_txt">
              <h2>Quem somos</h2>
              <p>
                O Laboratório de Desenvolvimento de Software, se destaca pela
                integração das práticas de ensino, pesquisa e extensão na área de
                computação. Nossa equipe é composta por pesquisadores altamente
                qualificados, incluindo docentes, discentes e egressos. Ao longo
                dos anos, temos construído uma sólida reputação no desenvolvimento
                de soluções inovadoras em engenharia de software.
              </p>
            </div>
          </div>
        </section>

        <section className="metas">
        <h3> Metas e Objetivos</h3>

        <div className="txt-metas"> 
           
            <div>
                <p>Nossas metas consistem em criar produtos
                    de software inovadores, realizando 
                   pesquisas aplicadas em diversas áreas da 
                   engenharia de software.</p>
            </div>
            <div>
                <p>buscamos colaborar com empresas e instituições conveniadas,
                     transferindo conhecimento e 
                    tecnologia para aprimorar práticas de desenvolvimento
                     e aumentar a eficiência operacional</p>
            </div>
            <div>
                <p>Nosso propósito é impulsionar a área de engenharia de software,
                     oferecendo soluções 
                    tecnológicas avançadas que atendam às demandas do mercado e 
                    agreguem valor aos usuários.</p>
            </div>
        </div>
    </section>

    <section className="pesquisa">
        <h4> Pesquisas</h4>
        <p>As pesquisas conduzidas pelo LADES são voltadas para a pesquisa aplicada em produtos, 
            processos e serviços de engenharia de software. Buscamos desenvolver
             soluções inovadoras e aplicáveis, com foco na resolução de problemas
              reais enfrentados pela indústria e pela sociedade. Essas pesquisas
               são realizadas em parceria com empresas e instituições conveniadas, permitindo
             a aplicação prática dos resultados obtidos.</p>
         
    </section>
    <section class="linha-de-pesquisa">
        <h5>LINHAS DE pesquisa</h5>

        <div className="lpesquisa-geral">
            <div  className="pesquisa-card" >
                <h6>Temas de convergência: Cidades inteligentes</h6>
                <div className="lorem-card" >
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                </div>

                <div className="ux-ui">
                    <p> Júlia <br></br>
                        UI & UX Designer</p>

                    <hr></hr>
                    <p> Júlia <br></br>
                        UI & UX Designer</p>
                </div>

            </div>

            <div  className="pesquisa-card" >
                <h6>Temas de convergência: Cidades inteligentes</h6>
                <div className="lorem-card" >
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                </div>

                <div className="ux-ui">
                    <p> Júlia <br></br>
                        UI & UX Designer</p>

                    <hr></hr>
                    <p> Júlia <br></br>
                        UI & UX Designer</p>
                </div>

            </div>

            <div  className="pesquisa-card" >
                <h6>Temas de convergência: Cidades inteligentes</h6>
                <div className="lorem-card" >
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                </div>

                <div className="ux-ui">
                    <p> Júlia <br></br>
                        UI & UX Designer</p>

                    <hr></hr>
                    <p> Júlia <br></br>
                        UI & UX Designer</p>
                </div>

            </div>

            <div  className="pesquisa-card" >
                <h6>Temas de convergência: Cidades inteligentes</h6>
                <div className="lorem-card" >
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                </div>

                <div className="ux-ui">
                    <p> Júlia <br></br>
                        UI & UX Designer</p>

                    <hr></hr>
                    <p> Júlia <br></br>
                        UI & UX Designer</p>
                </div>

            </div>

            <div  className="pesquisa-card" >
                <h6>Temas de convergência: Cidades inteligentes</h6>
                <div className="lorem-card" >
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                </div>

                <div className="ux-ui">
                    <p> Júlia <br></br>
                        UI & UX Designer</p>

                    <hr></hr>
                    <p> Júlia <br></br>
                        UI & UX Designer</p>
                </div>

            </div>

            <div  className="pesquisa-card" >
                <h6>Temas de convergência: Cidades inteligentes</h6>
                <div className="lorem-card" >
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                </div>

                <div className="ux-ui">
                    <p> Júlia <br></br>
                        UI & UX Designer</p>

                    <hr></hr>
                    <p> Júlia <br></br>
                        UI & UX Designer</p>
                </div>

            </div>

            <div  className="pesquisa-card" >
                <h6>Temas de convergência: Cidades inteligentes</h6>
                <div className="lorem-card" >
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                </div>

                <div className="ux-ui">
                    <p> Júlia <br></br>
                        UI & UX Designer</p>

                    <hr></hr>
                    <p> Júlia <br></br>
                        UI & UX Designer</p>
                </div>

            </div>

            <div  className="pesquisa-card" >
                <h6>Temas de convergência: Cidades inteligentes</h6>
                <div className="lorem-card" >
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                     <p><img width="14px" src={vector}  alt=""/> Lorem ipsum dolor sit amet</p>
                </div>

                <div className="ux-ui">
                    <p> Júlia <br></br>
                        UI & UX Designer</p>

                    <hr></hr>
                    <p> Júlia <br></br>
                        UI & UX Designer</p>
                </div>

            </div>
        </div>
    </section>

      </main>

      <footer>
        <section className="nav_footer">
          <div>
            <h4>Sobre</h4>
            <p>Sobre nós</p>
            <p>Metas e objetivos</p>
            <p>Manuais</p>
          </div>

          <div>
            <h4>Pesquisas</h4>
            <p>Nossas pesquisas</p>
            <p>Pesquisadores</p>
            <p>Linhas de pesquisa</p>
          </div>

          <div>
            <h4>Projetos</h4>
            <p>Nossos projetos</p>
            <p>Dúvidas frequentes</p>
            <p>Equipe</p>
          </div>

          <div>
            <h4>Contato</h4>
            <p>
              Avenida Senador Salgado Filho, 1559, Tirol, Natal-RN
            </p>
            <p>Nucleo-nudes@ifrn.edu.br</p>
            <p>(84) 99090-9090</p>
          </div>
        </section>

        <section className="logo_footer">
          <img width="150px" src={ladesfooter} alt="logo lades" />
          <img src={logoif} alt="logo_if" />
        </section>
      </footer>
    </div>
  );
}

export default Sobre;
