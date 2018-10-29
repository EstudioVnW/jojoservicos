const opcoes = {};
opcoes['exibir-opcoes-secao'] = [];
opcoes['exibir-opcoes-secao'].push(
  {
    label: 'Agendar Documento',
    evento: 'agendar-documento'
  },
  {
    label: 'Encontrar Emprego',
    evento: 'encontrar-emprego'
  },
  {
    label: 'Gerenciar Meu Negócio',
    evento: 'gerenciar-meu-negocio'
  }
);

opcoes['exibir-opcoes-docs'] = [];
opcoes['exibir-opcoes-docs'].push(
  {
    label: 'Identidade',
    evento: 'agendar-identidade'
  },
  {
    label: 'Carteira de trabalho',
    evento: 'agendar-carteira-de-trabalho'
  },
  {
    label: 'Título de Eleitor',
    evento: 'agendar-titulo-de-eleitor'
  },
  {
    label: 'Boletim de Ocorrência',
    evento: 'agendar-boletim-de-ocorrencia'
  }
);

opcoes['exibir-opcoes-identidade-qual-via'] = [];
opcoes['exibir-opcoes-identidade-qual-via'].push(
  {
    label: 'Primeira Via',
    evento: 'agendar-ident-primeira-via'
  },
  {
    label: 'Segunda Via',
    evento: 'agendar-ident-segunda-via'
  }
);

opcoes['exibir-opcoes-ident-seg-via-motivos'] = [];
opcoes['exibir-opcoes-ident-seg-via-motivos'].push(
  {
    label: 'Perda ou Dano',
    evento: 'ident-prim-via-perda-ou-dano'
  },
  {
    label: 'Roubo',
    evento: 'ident-seg-via-roubo'
  },
  {
    label: 'Validade',
    evento: 'ident-seg-via-validade'
  },
  {
    label: 'Mudou estado civil',
    evento: 'ident-seg-via-mudou-civil'
  }
);

opcoes['exibir-opcoes-ctps-qual-via'] = [];
opcoes['exibir-opcoes-ctps-qual-via'].push(
  {
    label: 'Primeira Via',
    evento: 'agendar-ctps-primeira-via'
  },
  {
    label: 'Segunda Via',
    evento: 'agendar-ctps-segunda-via'
  }
);

opcoes['exibir-opcoes-titulo-qual-via'] = [];
opcoes['exibir-opcoes-titulo-qual-via'].push(
  {
    label: 'Primeira Via',
    evento: 'agendar-titulo-primeira-via'
  },
  {
    label: 'Segunda Via',
    evento: 'agendar-titulo-segunda-via'
  }
);

opcoes['exibir-opcoes-tem-mei'] = [];
opcoes['exibir-opcoes-tem-mei'].push(
  {
    label: 'Sim',
    evento: 'tem-mei-sim'
  },
  {
    label: 'Não',
    evento: 'tem-mei-nao'
  }
);

opcoes['exibir-opcoes-quer-dar-entrada-no-mei'] = [];
opcoes['exibir-opcoes-quer-dar-entrada-no-mei'].push(
  {
    label: 'Sim',
    evento: 'quer-dar-entrada-no-mei-sim'
  },
  {
    label: 'Não',
    evento: 'quer-dar-entrada-no-mei-nao'
  }
);

opcoes['exibir-opcoes-servicos-mei'] = [];
opcoes['exibir-opcoes-servicos-mei'].push(
  {
    label: 'Alvará',
    evento: 'agendar-alvara'
  },
  {
    label: 'Registro de Vigilância Sanitária',
    evento: 'agendar-registro-de-vigilancia-sanitaria'
  },
  {
    label: 'Emitir nota',
    evento: 'agendar-emitir-nota'
  },
  {
    label: 'Negociação de débitos',
    evento: 'agendar-negociacao-de-debitos'
  }
);


opcoes['exibir-opcoes-primeiro-emprego'] = [];
opcoes['exibir-opcoes-primeiro-emprego'].push(
  {
    label: 'Sim',
    evento: 'primeiro-emprego-sim'
  },
  {
    label: 'Não',
    evento: 'primeiro-emprego-nao'
  }
);

opcoes['exibir-opcoes-emprego-idade'] = [];
opcoes['exibir-opcoes-emprego-idade'].push(
  {
    label: 'Sim',
    evento: 'menor-idade-sim'
  },
  {
    label: 'Não',
    evento: 'menor-idade-nao'
  }
);

opcoes['exibir-opcoes-completou-ensino-medio'] = [];
opcoes['exibir-opcoes-completou-ensino-medio'].push(
  {
    label: 'Sim',
    evento: 'completou-ensino-medio-sim'
  },
  {
    label: 'Não',
    evento: 'completou-ensino-medio-nao'
  }
);

opcoes['exibir-opcoes-outro-pedido'] = [];
opcoes['exibir-opcoes-outro-pedido'].push(
  {
    label: 'Sim',
    evento: 'outro-pedido-sim'
  },
  {
    label: 'Não',
    evento: 'outro-pedido-nao'
  }
);


export default opcoes;