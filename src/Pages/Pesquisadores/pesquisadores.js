import React from 'react';
import '../../css/pesquisadores.css';
import '../../css/projetos.css';
import logo from '../../img/lades logo.svg';
import picture from '../../img/picture.png';
import ladesfooter from '../../img/ladesfooter.svg';
import logoif from '../../img/logoif.svg';

function Pesquisadores() {
  return (
    <>
      <header>
        <nav>
          <img width="100px" src={logo} alt="logo lades" />
          <ul>
            <li>
              <a href="/home"> Sobre</a>
            </li>
            <li>
              <a href="/pesquisadores"> Pesquisadores</a>
            </li>
            <li>
              <a href="/pesquisas"> Pesquisas</a>
            </li>
            <li>
              <a href="/projetos"> Projetos</a>
            </li>
            <li>
              <a href="/contato"> Contato</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="introducao_projetos">
          <div className="txt">
            <h1> Pesquisadores</h1>
            <p>
              Conheça os integrantes e colaboradores da nossa equipe de
              desenvolvimento do LADES
            </p>
          </div>
        </section>

        <section className="pricipal_projeto">
          <div className="projetos">
            <img src={picture} alt="" />
            <div className="buttons">
              <p>
                Júlia
                <br />
                UI & UX Designer
              </p>
              <button className="btn-projeto">Projetos</button>
              <button className="lattes">Lattes</button>
            </div>  
          </div>

          <div className="projetos">
            <img src={picture} alt="" />
            <div className="buttons">
              <p>
                Júlia
                <br />
                UI & UX Designer
              </p>
              <button className="btn-projeto">Projetos</button>
              <button className="lattes">Lattes</button>
            </div>  
          </div>

          <div className="projetos">
            <img src={picture} alt="" />
            <div className="buttons">
              <p>
                Júlia
                <br />
                UI & UX Designer
              </p>
              <button className="btn-projeto">Projetos</button>
              <button className="lattes">Lattes</button>
            </div>  
          </div>

          <div className="projetos">
            <img src={picture} alt="" />
            <div className="buttons">
              <p>
                Júlia
                <br />
                UI & UX Designer
              </p>
              <button className="btn-projeto">Projetos</button>
              <button className="lattes">Lattes</button>
            </div>  
          </div>

          <div className="projetos">
            <img src={picture} alt="" />
            <div className="buttons">
              <p>
                Júlia
                <br />
                UI & UX Designer
              </p>
              <button className="btn-projeto">Projetos</button>
              <button className="lattes">Lattes</button>
            </div>  
          </div>

          <div className="projetos">
            <img src={picture} alt="" />
            <div className="buttons">
              <p>
                Júlia
                <br />
                UI & UX Designer
              </p>
              <button className="btn-projeto">Projetos</button>
              <button className="lattes">Lattes</button>
            </div>  
          </div>

          <div className="projetos">
            <img src={picture} alt="" />
            <div className="buttons">
              <p>
                Júlia
                <br />
                UI & UX Designer
              </p>
              <button className="btn-projeto">Projetos</button>
              <button className="lattes">Lattes</button>
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
            <p>Avenida Senador Salgado Filho, 1559, Tirol, Natal-RN</p>
            <p>Nucleo-nudes@ifrn.edu.br</p>
            <p>(84) 99090-9090</p>
          </div>
        </section>

        <section className="logo_footer">
          <img width="150px" src={ladesfooter} alt="logo lades" />
          <img src={logoif} alt="logo_if" />
        </section>
      </footer>
    </>
  );
}

export default Pesquisadores;
