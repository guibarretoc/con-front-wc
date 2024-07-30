import React from 'react';
import NavbarAdm from '../NavbarAdm/navbarAdm';
import Footer from './../LoginPageFooter/Footer';

const AdminHomeComponent = () => {
  return (
    <div>
      <NavbarAdm />
      
             <section className={"pc-content"}>

         <div className={"imgPc"}>
        
         </div>
         <div className={"frases"}>
            <h1>WayClient <p><span>-</span> espera e <span>+</span> vendas, totalmente <br></br> automático.</p></h1>
         </div>
              
              
       </section>

      <section className={"dicas-content"}>
         <div className={"dicas"}>
       


        <div className={"caixas-content"}>
           <h1>Por que o WayClient?</h1>
         <div id="caixas">
            <div id={"icon-1"}></div>
            
           <h4>Melhorar seu atendimento</h4>
           <br />
           <p>Maximize a eficiência operacional, melhore a satisfação do seu cliente e 
           impulsione o crescimento empresarial.</p>
         </div>
         <div id="caixas">
         <div id={"icon-2"}></div>
            <h4>Personalização</h4>
            <br />
           <p> Ofereça uma experiência personalizada  ao cliente, aumentando sua satisfação e <br /> fidelidade.</p>
         </div>
         <div id="caixas">
         <div id={"icon-3"}></div>
            <h4>Eficiência</h4>
            <br />
            <p>Automatiza processos, reduzindo <br /> tempo e esforço na gestão de <br /> tickets e solicitações.</p>
         </div>
         </div>

         </div>
          
         </section>    


         <section className="gestao-content">
             

       <div className="gestao">
         
           <h1><span>Otimize</span> a gestão <br /> da sua equipe</h1>
           <br />
           <p>Aumente a produtividade da sua equipe <br /> de suporte centralizando os registros 
            de solicitações <br /> com seu cliente em um só lugar.</p>

            </div> 
            <div id="img-1"></div>
            </section> 
            
             <section className={"satisfacao-content"}>

             <div id={"img-2"}></div>
                <div className={"satisfacao"}>
                  <h1>Aumente o nível <br />de satisfação de <br />seus clientes</h1>
                  <p id={"p2"}>Ofereça uma experiência personalizada,<br /> distribuindo cada chamado para seu setor específico.</p>

                </div>

               </section> 

               <section className={"otimize-content"}>
               <div id={"img-3"}></div>
                  <div className={"otimize"}>
                     
                     <h2>Otimize seu fluxo de atendimento! </h2>
                  
                     <p id={"p3"}>Experimente nosso sistema de gestão  de atendimentos e eleve a <br /> eficiência da sua equipe. <br />
                     Aumente a satisfação do seu cliente <br /> e impulsione o  <br />crescimento do seu negócio com <br /> nossa plataforma.</p>

                     <button id={"bt"}>Comece Agora!</button>
                   
                  </div>

        
               </section>

      <Footer />
    </div>
  )
}

export default AdminHomeComponent