import React from 'react';
import '../../css/home.css';
import '../../css/projetos.css';
import '../../css/slide.css';
import logo from '../../img/lades logo.svg';
import objetivo from '../../img/nossoobjetivo.png';
import logoif from '../../img/logoif.svg';
import ladesfooter from '../../img/ladesfooter.svg';

function Home() {
  return (
    <>
      <html lang="pt-br">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />   
          <script src="../../css/slid.js" defer></script>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>home</title>
        </head>
        <body>
          <header>
            <nav>
            <a href = "/home"> <img width="100px" src={logo} alt="logo lades" /></a>
              <ul>
                <li>
                  <a href="./Sobre"> Sobre</a>
                </li>
                <li>
                  <a href="./Pesquisadores"> Pesquisadores</a>
                </li>
                <li>
                  <a href="./Linhas de Pesquisa"> Pesquisas</a>
                </li>
                <li>
                  <a href="./Projetos"> Projetos</a>
                </li>
                <li>
                  <a href="./Contato"> Contato</a>
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

            <section className="objetivo">
              <div className="objetivo_geral">
                <img width="300px" src= {objetivo} alt="" />
                <div className="objetivo_txt">
                  <h2>NOSSO OBJETIVO</h2>

                  <p>
                    O Lades tem como foco central o desenvolvimento de <br />{' '}
                    ações que integram ensino, pesquisa e extensão, com <br />
                    ênfase na criação de produtos de software inovadores, <br />
                    pesquisa aplicada e parcerias estratégicas. Nosso objetivo{' '}
                    <br /> é impulsionar o avanço tecnológico, formar
                    profissionais <br /> qualificados e contribuir para o
                    desenvolvimento da <br /> sociedade por meio do software.
                  </p>
                </div>
              </div>
            </section>

            <h3> VENHA CONFERIR </h3>
            <section className="conferir">
              <div className="principal_conferir">
                <div>
                  <h4> Equipe</h4>
                  <p>
                    Conheça os membros da <br /> nossa equipe
                  </p>
                </div>

                <ul>
                  <li>
                    <p>Coordenadores</p>
                  </li>
                  <li>
                    <p>Pesquisadores</p>
                  </li>
                  <li>
                    <p>Estudantes</p>
                  </li>
                </ul>
                <button> veja mais &gt; </button>
              </div>

              <div className="principal_conferir">
                <div>
                  <h4> Equipe</h4>
                  <p>
                    Conheça os membros da <br /> nossa equipe
                  </p>
                </div>

                <ul>
                  <li>
                    <p>Coordenadores</p>
                  </li>
                  <li>
                    <p>Pesquisadores</p>
                  </li>
                  <li>
                    <p>Estudantes</p>
                  </li>
                </ul>
                <button> veja mais &gt; </button>
              </div>

              <div className="principal_conferir">
                <div>
                  <h4> Equipe</h4>
                  <p>
                    Conheça os membros da <br /> nossa equipe
                  </p>
                </div>

                <ul>
                  <li>
                    <p>Coordenadores</p>
                  </li>
                  <li>
                    <p>Pesquisadores</p>
                  </li>
                  <li>
                    <p>Estudantes</p>
                  </li>
                </ul>
                <button> veja mais &gt; </button>
              </div>
            </section>

            <section className="slide-principal">
              <section className="slider">
                <h5>CONHEÇA NOSSOS PROJETOS</h5>
                <div className="slider-content">
                  <input type="radio" name="btn-radio" id="radio1" />
                  <input type="radio" name="btn-radio" id="radio2" />
                  <input type="radio" name="btn-radio" id="radio3" />
                  <input type="radio" name="btn-radio" id="radio4" />

                  <div className="slide-box primeiro">
                    <div>
                      <h4>Nome do projeto </h4>
                      <p>
                        Tem o objetivo de desenvolver softwares para melhorar a
                        performance das pesquisas e análises
                      </p>

                      <button> Saiba mais</button>
                    </div>
                  </div>

                  <div className="slide-box">
                    <div>
                      <h4>Nome do projeto </h4>
                      <p>
                        Tem o objetivo de desenvolver softwares para melhorar a
                        performance das pesquisas e análises
                      </p>

                      <button> Saiba mais</button>
                    </div>
                  </div>

                  <div className="slide-box">
                    <div>
                      <h4>Nome do projeto </h4>
                      <p>
                        Tem o objetivo de desenvolver softwares para melhorar a
                        performance das pesquisas e análises
                      </p>

                      <button> Saiba mais</button>
                    </div>
                  </div>

                  <div className="slide-box">
                    <div>
                      <h4>Nome do projeto </h4>
                      <p>
                        Tem o objetivo de desenvolver softwares para melhorar a
                        performance das pesquisas e análises
                      </p>
                      

                      <button> Saiba mais</button>
                    </div>
                  </div>
                  

                  <div className="nav-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>
                  </div>

                  <div className="nav-manual">
                    <label for="radio1" className="manual-btn"></label>
                    <label for="radio2" className="manual-btn"></label>
                    <label for="radio3" className="manual-btn"></label>
                    <label for="radio4" className="manual-btn"></label>
                  </div>
                </div>
              </section>
            </section>

            <section className="nossos-numeros">
              <h6>Nossos números</h6>
              <br />

              <div className="numeros-principal">
                <div>
                  <span>Projetos</span>
                  <p>24</p>
                </div>

                <div>
                  <span>Linha de pesquisas</span>
                  <p>6</p>
                </div>

                <div>
                  <span>Equipe</span>
                  <p>26</p>
                </div>

                <div>
                  <span>Colaboradores</span>
                  <p>10</p>
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
        </body>
      </html>
    </>
  );
}

export default Home;
