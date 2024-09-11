import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";

const Formulario = () => {

    const times = [
        'Corredores de Longas Distâncias',
        'Corredores de Médias Distâncias',
        'Corredores de Curtas Distâncias',
        'Preparadores Físicos',
        'Treinadores'
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do Atleta</h2>
                <CampoTexto label="Nome" placeholder="Digite Seu Nome..." />
                <CampoTexto label="Esporte" placeholder="Digite Seu Esporte..." />
                <CampoTexto label="Imagem" placeholder="Digite o Endereço da Imagem"/>
                <ListaSuspensa label = "Time"  itens = {times} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
};

export default Formulario;
