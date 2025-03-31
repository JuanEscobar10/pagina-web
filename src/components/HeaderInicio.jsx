
const HeaderInicio=()=>{
    return (
      <header>
        <div className="logo">
          <img src="/public/logo.png" alt="Logo" />
          <h1>Institución Educativa</h1>
        </div>

        <section className="links">
          <li>
            <a href="">Conócenos</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
          <li>
            <a href="">Módulos Sistema</a>
          </li>
        </section>

        <button>
          <p>Iniciar sesión</p>
        </button>
      </header>
    );
}

export default HeaderInicio