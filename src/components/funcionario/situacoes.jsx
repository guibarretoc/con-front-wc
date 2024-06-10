import { useEffect, useState } from 'react'
import '../funcionario/situacoes.css'
import getDepartmentTickets from '../../services/department/getDepartmentTickets'
import { countPedente } from './../../utils/countPedente';
import { countEmAtendimento } from './../../utils/countEmAtendimento';
import { countEmImpedimento } from './../../utils/countEmImpedimento';
import { countFechado } from './../../utils/countFechado';


const Situacoe = () =>{
    const [tickets, setTickets] = useState([]);
    const [abertos, setAbertos] = useState(0);
    const [emAtendimento, setEmAtendimento] = useState(0);
    const [emImpedimento, setEmImpedimento] = useState(0);
    const [fechados, setFechados] = useState(0);

    useEffect(() => {
        const fetchDepartmentTickets = async() => {
            const data = await getDepartmentTickets();
            setTickets(data);
            setAbertos(countPedente(data));
            setEmAtendimento(countEmAtendimento(data))
            setEmImpedimento(countEmImpedimento(data))
            setFechados(countFechado(data))
            //console.log(tickets);
        }

        fetchDepartmentTickets();
    }, [])

    return(
        <div>
            <div className="situacoes">
                <h3 className='st-title'>Situações dos Tickets</h3>
                <h3>Abertos: {abertos}</h3>
                <h3>Em atendimento: {emAtendimento}</h3>
                <h3>Em impedimento: {emImpedimento}</h3>
                <h3>Fechados: {fechados}</h3>
            </div>
        </div>
    )
}
export default Situacoe;