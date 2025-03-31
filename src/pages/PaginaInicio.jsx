import HeaderInicio from "../components/HeaderInicio"
import Main from "../components/Main"
import "./PaginaInicio.css"

const PaginaInicio =()=>{
    return(
        <section className="contenedor-principal">

            <div>
                <HeaderInicio/>
            </div>

            <section>
                <Main/>
            </section>



        </section>
    )
}

export default PaginaInicio
