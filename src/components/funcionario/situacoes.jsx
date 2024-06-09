import '../funcionario/situacoes.css'
const Situacoe = () =>{
    const funData ={
        abertos: "0",
        atendimento:"0",
        fechados:"0",
    }
    return(
        <div>
            <div className="situacoes">
                <h3 className='st-title'>Situações dos Tickets</h3>
                <h3>Abertos: {funData.abertos}</h3>
                <h3>Em atendimento: {funData.atendimento}</h3>
                <h3>Fechados: {funData.fechados}</h3>
            </div>
        </div>
    )
}
export default Situacoe;