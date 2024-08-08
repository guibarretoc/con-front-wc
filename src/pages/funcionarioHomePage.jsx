
import MainFuncionario from "../components/FuncionarioHome/MainFuncionario";
import FooterFuncionario from "../components/FuncionarioHome/FooterFuncionario";
import MenuFuncionario from "../components/FuncionarioHome/MenuFuncionario";
import SideBarFuncionario from "../components/FuncionarioHome/SideBarFuncionario";

const FuncionarioHomePage = ()=>{
    return(
        <div>  
            <div><MenuFuncionario/></div>
            <div className="flex bg-white">
                <div className="w-2/5" ><SideBarFuncionario className=""/></div>
                <div className="space-y-64">
                    <div className="p-12"><MainFuncionario/></div>
                    <div  className='flex flex-none'><FooterFuncionario/></div> 
                </div>
            </div>
        </div>
    )
}
export default FuncionarioHomePage;