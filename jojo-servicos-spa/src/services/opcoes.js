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
    evento: 'boletim-de-ocorrencia'
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

export default opcoes;