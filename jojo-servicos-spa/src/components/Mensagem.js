import React from 'react';

const Mensagem = (props) =>{
    return (<div
      className={"conversacao--mensagem " + ((props.emissor === 'bot') ? ' conversacao--mensagem__bot ' : '') + ((props.emissor === 'usuario') ? ' conversacao--mensagem__usuario ' : '')}>
      {props.children}
    </div>);
}
  
export default Mensagem;
