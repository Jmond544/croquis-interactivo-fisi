const main_coord = {
  //Piso 1
  entrada_1: { x: 0, y: -1.8, z: 1.5 },
  economia: {x:-1, y:-1.8, z:-1},
  dga: {x:-1, y:-1.8, z:-2},
  cerseu: {x:1, y:-1.8, z:-2},
  atDoc: { x:1.5, y:-1.8, z:0.5 },
  CC: {x:2, y:-1.8, z:-6},
  aulas100: {x:5, y:-1.8, z:-6},
  kiosko: {x:9.2, y:-1.8, z:-2.8},
  entrada_2: {x:8, y:-1.8, z:-3.8},
  USGOM: {x:2, y:-1.8, z:-8},
  SSHH_1_1: {x:2, y:-1.8, z:-14.25},
  auditorio: {x:2, y:-1.8, z:-17},
  SSHH_1_2: {x:6.5, y:-1.8, z:-27},
  aulaNP: {x:8, y:-1.8, z:-30},
  losa: {x:7.5, y:-1.8, z:-15},
  capilla: {x:7.5, y:-1.8, z:-10},
  vestidores: {x:10, y:-1.8, z:-13},
  entrada_3: {x:14, y:-1.8, z:-8},
  
  //Piso 2
  
  decanato: {x:-1, y:0.2, z:-1},
  comedor: {x:2, y:0.2, z:-17},
  magna: {x:12, y:0.2, z:-8},
  aulas200: {x:6.5, y:0.2, z:-6},
  salaCatedraticos: {x:3.6, y:0.2, z:-10},
  microDataCenter: {x:9.8, y:0.2, z:-27},
  aulaNP2: {x:8, y:0.2, z:-30},
  tercio:{x:9.7, y:0.2, z:-8},
  SSHH_2_1: {x:2, y:0.2, z:-14.25},
  SSHH_2_2: {x:6.5, y:0.2, z:-27},
  //Piso 3
  UNAYOE: {x:0, y:2.2, z:-1.5},
  dirSist: {x:1, y:2.2, z:-5.6},
  dirSoft: {x:1, y:2.2, z:-8},
  matricula: {x:1, y:2.2, z:-9.5},
  SSHH_3_1: {x:2, y:2.2, z:-14.25},
  SSHH_3_2: {x:6.5, y:2.2, z:-27},
  musica: {x:2,y:2.2,z:-30.5},
  };
  
  const inter_coord = {
  dob_1_1: {x:0, y:-1.8, z:-1},
  pre_cerceu: {x:1, y:-1.8, z:-1},
  pre_AtDoc: {x:1.5, y:-1.8, z:-1},
  dob_1_2: {x:3, y:-1.8, z:-1},
  iniEscalera_1_1: {x:3, y:-1.8, z:-0.5},
  pre_CC: {x:3, y:-1.8, z:-6},
  pre_USGOM: {x:3, y:-1.8, z:-8},
  pre_escalera_1_2: {x:3, y:-1.8, z:-9.7},
  dob_1_6: {x:3, y:-1.8, z:-11.5},
  pre_escalera_1_3: {x:4.5, y:-1.8, z:-11.5},
  iniEscalera_1_3: {x:4.5, y:-1.8, z:-12},
  dob_1_7: {x:7.5, y:-1.8, z:-11.5},
  pre_vestidores: {x:10, y:-1.8, z:-11.5},
  dob_1_8: {x:14, y:-1.8, z:-11.5},
  pre_SSHH_1_1: {x:3, y:-1.8, z:-14.25},
  pre_auditorio: {x:3, y:-1.8, z:-17},
  pre_escalera_1_4: {x:3, y:-1.8, z:-28.5},
  pre_SSHH_1_2: {x:6.5, y:-1.8, z:-28.5},
  pre_aulaNP: {x:8, y:-1.8, z:-28.5},
  pre_escalera_1_5: {x:9.8, y:-1.8, z:-28.5},
  iniEscalera_1_5: {x:9.8, y:-1.8, z:-29},
  iniEscalera_1_4: {x:2.5, y:-1.8, z:-29},
  iniEscalera_1_2: {x:2.5, y:-1.8, z:-9.7},
  dob_1_3: {x:3, y:-1.8, z:-6.75},
  pre_aulas100: {x:5, y:-1.8, z:-6.75},
  dob_1_4: {x:10.4, y:-1.8, z:-6.75},
  dob_1_5: {x:10.4, y:-1.8, z:-3.8},
  iniEscalera_1_6: {x:10.4, y:-1.8, z:-3.2},
  pre_kiosko: {x:9.2, y:-1.8, z:-3.8},
  
  //mid_
  
  mid_Escalera_1_1: {x:3, y:-0.8, z:1.5},
  mid_Escalera_1_2: {x:0.5, y:-0.8, z: -10.5},
  mid_Escalera_1_6: {x:10.4, y:-0.8, z:-2},
  mid_Escalera_1_4: {x:3.2, y:-0.8, z:-31},
  mid_Escalera_1_5: {x:10, y:-0.8, z:-31},
  
  //Piso 2
  
  //pre_
  pre_aulaNP2: {x:8, y:0.2, z:-28.5},
  pre_SSHH_2_1: {x:3, y:0.2, z:-14.25},
  pre_SSHH_2_2: {x:6.5, y:0.2, z:-28.5},
  pre_escalera_2_2: {x:3, y:0.2, z:-9.7},
  pre_escalera_2_4: {x:3, y:0.2, z:-28.5},
  pre_escalera_2_5: {x:9.8, y:0.2, z:-28.5},
  pre_escalera_2_1: {x:3, y:0.2, z:-1},
  pre_comedor: {x:3, y:0.2, z:-17},
  pre_magna: {x:12, y:0.2, z:-6.75},
  pre_salaCatedraticos : {x:3, y:0.2, z:-10},
  pre_tercio: {x:9.7, y:0.2, z:-6.75},
  
  //dob_
  
  dob_2_3: {x:3, y:0.2, z:-6.75},
  dob_2_4: {x:10.4, y:0.2, z:-6.75},
  dob_2_extra:{x:6.5, y:0.2, z:-6.75},
  
  //iniEscalera_
  iniEscalera_2_1: {x:3, y:0.2, z:-0.5},
  iniEscalera_2_5: {x:9.8, y:0.2, z:-29},
  iniEscalera_2_4: {x:2.5, y:0.2, z:-29},
  iniEscalera_2_2: {x:2.5, y: 0.2, z:-9.7},
  iniEscalera_2_6: {x:10.4, y:0.2, z:-3.2},
  
  
  //mid_Escalera_
  
  mid_Escalera_2_1: {x:3, y:1.2, z:1.5},
  mid_Escalera_2_2: {x:0.5, y: 1.2, z:-10.5},
  mid_Escalera_2_6: {x:10.4, y:1.2, z:-2},
  mid_Escalera_2_4: {x:3.2, y:1.2, z:-31},
  mid_Escalera_2_5: {x:10, y:1.2, z:-31},
  
  //fin_Escalera_
  
  fin_Escalera_3_2: {x:2.5, y: 2.2, z:-9.7},
  fin_Escalera_3_1: {x:3, y:2.2, z:-0.5},
  fin_Escalera_3_6: {x:10.4, y:2.2, z:-3.2},
  fin_Escalera_3_4: {x:2.5, y:2.2, z:-29},
  fin_Escalera_3_5: {x:9.8, y:2.2, z:-29},
  
  //Piso 3
  
  //pre_
  pre_escalera_3_1: {x:3, y:2.2, z:-1.5},
  pre_dirSist: {x:3, y:2.2, z:-5.6},
  pre_dirSoft:{x:3, y:2.2, z:-8},
  pre_matricula:{x:3, y:2.2, z:-9.5},
  pre_SSHH_3_1: {x:3, y:2.2, z:-14.25},
  pre_SSHH_3_2: {x:6.5, y:2.2, z:-28.5},
  pre_musica: {x:2,y:2.2,z:-28.5},
  
  //dob_
  dob_3_1: {x:3, y:2.2, z:-6.6},
  }
  
  export { main_coord, inter_coord };