import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do Atleta</h2>
                <CampoTexto label="Nome" placeholder="Digite Seu Nome..." />
                <CampoTexto label="Esporte" placeholder="Digite Seu Esporte..." />
                <CampoTexto label="Imagem" placeholder="Digite o Endereço da Imagem"/>
            </form>
        </section>
    );
};

export default Formulario;
