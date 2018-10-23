import React from 'react';

import Mensagem from '../components/Mensagem';
import Select from './Select';

const Conversacao = (props) =>
  <div className="caixa_inicial--conversacao">
    {
      props.mensagensBot.map((item) => {
        let msgTemplate;
        if(!item.opcoes){
          msgTemplate = 
            <Mensagem emissor={item.emissor === "bot" ? "bot" : "usuario"} key={item.textId}>
              {item.text}
            </Mensagem>;
        }else{
          msgTemplate = 
            <Select opcoes={item.opcoes} sendEvent={props.sendEvent} key={item.textId} />;
            
        }
        return msgTemplate;
        
      })
    }
  </div>;

export default Conversacao;