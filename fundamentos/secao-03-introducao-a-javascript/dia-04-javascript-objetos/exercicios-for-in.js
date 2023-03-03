let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Bem vinda, ' + info.personagem);

  info.recorrente = 'sim';

  for (const key in info) {

    
  
    }
  
    let cloneInfo = {}

    Object.assign(cloneInfo, info);

        cloneInfo.personagem = 'Margarida e Tio Patinhas';
        cloneInfo.origem = `Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178`;
        cloneInfo.nota = 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas';
        cloneInfo.recorrente = 'Ambos recorrentes';
        
    
        console.log(cloneInfo);