import React from 'react';
import '../../css/projetos.css';
import logo from '../../img/lades logo.svg';
import ladesfooter from '../../img/ladesfooter.svg';
import logoif from '../../img/logoif.svg';

function Projetos() {
  return (
    <>
      <header>
        <nav>
          <img width="100px" src={logo} alt="logo lades" />
          <ul>
            <li><a href="/sobre"> Sobre</a></li>
            <li><a href="/pesquisadores"> Pesquisadores</a></li>
            <li><a href="/pesquisas"> Pesquisas</a></li>
            <li><a href="/projetos"> Projetos</a></li>
            <li><a href="/contato"> Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="introducao_projetos">
          <div className="txt">
            <h1> Projetos</h1>
            <p> Confira os projetos desenvolvidos pelo nosso laboratório</p>
          </div>
          <div className="mes">
            <h2> 2023 - ABRIL</h2>
          </div>
        </section>

        <section className="pricipal_projetos">
          <div className="projeto">
            <h3>Nome do projeto</h3>
            <p>Por: Alessandro Souza </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
            <br />
            <button>Veja mais</button>
          </div>

          <div className="projeto">
            <h3>Nome do projeto</h3>
            <p>Por: Alessandro Souza </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
            <br />
            <button>Veja mais</button>
          </div>
          
          <div className="projeto">
            <h3>Nome do projeto</h3>
            <p>Por: Alessandro Souza </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
            <br />
            <button>Veja mais</button>
          </div>

          <div className="projeto">
            <h3>Nome do projeto</h3>
            <p>Por: Alessandro Souza </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
            <br />
            <button>Veja mais</button>
          </div>

          <div className="projeto">
            <h3>Nome do projeto</h3>
            <p>Por: Alessandro Souza </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
            <br />
            <button>Veja mais</button>
          </div>

          <div className="projeto">
            <h3>Nome do projeto</h3>
            <p>Por: Alessandro Souza </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
            <br />
            <button>Veja mais</button>
          </div>

          <div className="projeto">
            <h3>Nome do projeto</h3>
            <p>Por: Alessandro Souza </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
            <br />
            <button>Veja mais</button>
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

export default Projetos;
