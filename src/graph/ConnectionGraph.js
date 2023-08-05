import Graph from "graphology";
import { dijkstra } from "graphology-shortest-path";
import { main_coord, inter_coord } from "../route_coordinates/Coordinates";

const graph = new Graph();

// piso 01
graph.addNode('entrada_1',main_coord.entrada_1);
graph.addNode('economia',main_coord.economia);
graph.addNode('dga',main_coord.dga);
graph.addNode('cerseu',main_coord.cerseu);
graph.addNode('atDoc',main_coord.atDoc);
graph.addNode('CC',main_coord.CC);
graph.addNode('aulas100',main_coord.aulas100);
graph.addNode('kiosko',main_coord.kiosko);
graph.addNode('entrada_2',main_coord.entrada_2);
graph.addNode('USGOM',main_coord.USGOM);
graph.addNode('SSHH_1_1',main_coord.SSHH_1_1);
graph.addNode('auditorio',main_coord.auditorio);
graph.addNode('SSHH_1_2',main_coord.SSHH_1_2);
graph.addNode('aulaNP',main_coord.aulaNP);
graph.addNode('losa',main_coord.losa);
graph.addNode('capilla',main_coord.capilla);
graph.addNode('vestidores',main_coord.vestidores);
graph.addNode('entrada_3',main_coord.entrada_3);

// piso 02
graph.addNode('decanato',main_coord.decanato);
graph.addNode('comedor',main_coord.comedor);
graph.addNode('magna',main_coord.magna);
graph.addNode('aulas200',main_coord.aulas200);
graph.addNode('salaCatedraticos',main_coord.salaCatedraticos);
graph.addNode('microDataCenter',main_coord.microDataCenter);
graph.addNode('aulaNP2',main_coord.aulaNP2);
graph.addNode('tercio',main_coord.tercio);
graph.addNode('SSHH_2_1',main_coord.SSHH_2_1);
graph.addNode('SSHH_2_2',main_coord.SSHH_2_2);

// Piso 03
graph.addNode('UNAYOE',main_coord.UNAYOE);
graph.addNode('dirSist',main_coord.dirSist);
graph.addNode('dirSoft',main_coord.dirSoft);
graph.addNode('matricula',main_coord.matricula);
graph.addNode('SSHH_3_1',main_coord.SSHH_3_1);
graph.addNode('SSHH_3_2',main_coord.SSHH_3_2);
graph.addNode('musica',main_coord.musica);
graph.addNode('laboratoriosNP3',main_coord.laboratoriosNP3);
graph.addNode('publicidad',main_coord.publicidad);
graph.addNode('soporte',main_coord.soporte);
graph.addNode('depAcaSist',main_coord.depAcaSist);
graph.addNode('laboratorios3',main_coord.laboratorios3);


//  Piso 01
graph.addNode('dob_1_1',inter_coord.dob_1_1);
graph.addNode('pre_cerceu',inter_coord.pre_cerceu);
graph.addNode('pre_AtDoc',inter_coord.pre_AtDoc);
graph.addNode('dob_1_2',inter_coord.dob_1_2);
graph.addNode('iniEscalera_1_1',inter_coord.iniEscalera_1_1);
graph.addNode('pre_CC',inter_coord.pre_CC);
graph.addNode('pre_USGOM',inter_coord.pre_USGOM);
graph.addNode('pre_escalera_1_2',inter_coord.pre_escalera_1_2);
graph.addNode('dob_1_6',inter_coord.dob_1_6);
graph.addNode('pre_escalera_1_3',inter_coord.pre_escalera_1_3);
graph.addNode('iniEscalera_1_3',inter_coord.iniEscalera_1_3);
graph.addNode('dob_1_7',inter_coord.dob_1_7);
graph.addNode('pre_vestidores',inter_coord.pre_vestidores);
graph.addNode('dob_1_8',inter_coord.dob_1_8);
graph.addNode('pre_SSHH_1_1',inter_coord.pre_SSHH_1_1);
graph.addNode('pre_auditorio',inter_coord.pre_auditorio);
graph.addNode('pre_escalera_1_4',inter_coord.pre_escalera_1_4);
graph.addNode('pre_SSHH_1_2',inter_coord.pre_SSHH_1_2);
graph.addNode('pre_aulaNP',inter_coord.pre_aulaNP);
graph.addNode('pre_escalera_1_5',inter_coord.pre_escalera_1_5);
graph.addNode('iniEscalera_1_5',inter_coord.iniEscalera_1_5);
graph.addNode('iniEscalera_1_4',inter_coord.iniEscalera_1_4);
graph.addNode('iniEscalera_1_2',inter_coord.iniEscalera_1_2);
graph.addNode('dob_1_3',inter_coord.dob_1_3);
graph.addNode('pre_aulas100',inter_coord.pre_aulas100);
graph.addNode('dob_1_4',inter_coord.dob_1_4);
graph.addNode('dob_1_5',inter_coord.dob_1_5);
graph.addNode('iniEscalera_1_6',inter_coord.iniEscalera_1_6);
graph.addNode('pre_kiosko',inter_coord.pre_kiosko);

graph.addNode('fin_EscaleraParque',inter_coord.fin_EscaleraParque);
graph.addNode('mid_Escalera_Parque',inter_coord.mid_Escalera_Parque);

graph.addNode('mid_Escalera_1_1', inter_coord.mid_Escalera_1_1);
graph.addNode('mid_Escalera_1_2', inter_coord.mid_Escalera_1_2);
graph.addNode('mid_Escalera_1_6', inter_coord.mid_Escalera_1_6);
graph.addNode('mid_Escalera_1_4', inter_coord.mid_Escalera_1_4);
graph.addNode('mid_Escalera_1_5', inter_coord.mid_Escalera_1_5);

graph.addNode('pre_aulas200', inter_coord.pre_aulas200);
graph.addNode('pre_aulaNP2', inter_coord.pre_aulaNP2);
graph.addNode('pre_SSHH_2_1', inter_coord.pre_SSHH_2_1);
graph.addNode('pre_SSHH_2_2', inter_coord.pre_SSHH_2_2);
graph.addNode('pre_escalera_2_2', inter_coord.pre_escalera_2_2);
graph.addNode('pre_escalera_2_4', inter_coord.pre_escalera_2_4);
graph.addNode('pre_escalera_2_5', inter_coord.pre_escalera_2_5);
graph.addNode('pre_escalera_2_1', inter_coord.pre_escalera_2_1);
graph.addNode('pre_comedor', inter_coord.pre_comedor);
graph.addNode('pre_magna', inter_coord.pre_magna);
graph.addNode('pre_salaCatedraticos', inter_coord.pre_salaCatedraticos);
graph.addNode('pre_tercio', inter_coord.pre_tercio);
graph.addNode('pre_escaleraParque', inter_coord.pre_escaleraParque);

graph.addNode('dob_2_3', inter_coord.dob_2_3);
graph.addNode('dob_2_4', inter_coord.dob_2_4);

graph.addNode('iniEscalera_2_1', inter_coord.iniEscalera_2_1);
graph.addNode('iniEscalera_2_5', inter_coord.iniEscalera_2_5);
graph.addNode('iniEscalera_2_4', inter_coord.iniEscalera_2_4);
graph.addNode('iniEscalera_2_2', inter_coord.iniEscalera_2_2);
graph.addNode('iniEscalera_2_6', inter_coord.iniEscalera_2_6);

graph.addNode('mid_Escalera_2_1', inter_coord.mid_Escalera_2_1);
graph.addNode('mid_Escalera_2_2', inter_coord.mid_Escalera_2_2);
graph.addNode('mid_Escalera_2_6', inter_coord.mid_Escalera_2_6);
graph.addNode('mid_Escalera_2_4', inter_coord.mid_Escalera_2_4);
graph.addNode('mid_Escalera_2_5', inter_coord.mid_Escalera_2_5);

graph.addNode('fin_Escalera_3_2', inter_coord.fin_Escalera_3_2);
graph.addNode('fin_Escalera_3_1', inter_coord.fin_Escalera_3_1);
graph.addNode('fin_Escalera_3_6', inter_coord.fin_Escalera_3_6);
graph.addNode('fin_Escalera_3_4', inter_coord.fin_Escalera_3_4);
graph.addNode('fin_Escalera_3_5', inter_coord.fin_Escalera_3_5);

// piso 3
graph.addNode('pre_escalera_3_1', inter_coord.pre_escalera_3_1);
graph.addNode('pre_dirSist', inter_coord.pre_dirSist);
graph.addNode('pre_dirSoft', inter_coord.pre_dirSoft);
graph.addNode('pre_matricula', inter_coord.pre_matricula);
graph.addNode('pre_SSHH_3_1', inter_coord.pre_SSHH_3_1);
graph.addNode('pre_SSHH_3_2', inter_coord.pre_SSHH_3_2);
graph.addNode('pre_musica', inter_coord.pre_musica);
graph.addNode('pre_laboratoriosNP3', inter_coord.pre_laboratoriosNP3);
graph.addNode('pre_publicidad', inter_coord.pre_publicidad);
graph.addNode('pre_soporte', inter_coord.pre_soporte);
graph.addNode('pre_depAcaSist', inter_coord.pre_depAcaSist);
graph.addNode('pre_laboratorios3', inter_coord.pre_laboratorios3);

graph.addNode('dob_3_1', inter_coord.dob_3_1);
graph.addNode('dob_3_2', inter_coord.dob_3_2);


// Función para calcular la distancia entre dos nodos
function calculateDistance(nodeA, nodeB) {
  const attributesA = graph.getNodeAttributes(nodeA);
  const attributesB = graph.getNodeAttributes(nodeB);

  const dx = attributesB.x - attributesA.x;
  const dy = attributesB.y - attributesA.y;
  const dz = attributesB.z - attributesA.z;

  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

// Agregar aristas automáticamente calculando la distancia
function addEdgeWithDistance(source, target) {
  const distance = calculateDistance(source, target);
  graph.addEdge(source, target, {weight: distance });
  graph.addEdge(target, source, {weight: distance });
}

// Agregar aristas con distancia calculada automáticamente
addEdgeWithDistance("entrada_1", "dob_1_1");
addEdgeWithDistance("economia", "dob_1_1");
addEdgeWithDistance("dga", "dob_1_1");
addEdgeWithDistance("dob_1_1", "pre_cerceu");
addEdgeWithDistance("cerseu", "pre_cerceu");
addEdgeWithDistance("pre_cerceu", "pre_AtDoc");
addEdgeWithDistance("pre_AtDoc", "atDoc");
addEdgeWithDistance("pre_AtDoc", "dob_1_2");
addEdgeWithDistance("iniEscalera_1_1", "dob_1_2");
addEdgeWithDistance("pre_CC", "dob_1_2");
addEdgeWithDistance("pre_CC", "CC");
addEdgeWithDistance("pre_CC", "dob_1_3");
addEdgeWithDistance("pre_aulas100", "dob_1_3");
addEdgeWithDistance("aulas100", "pre_aulas100");
addEdgeWithDistance("dob_1_4", "pre_aulas100");
addEdgeWithDistance("dob_1_4", "dob_1_5");
addEdgeWithDistance("iniEscalera_1_6", "dob_1_5");
addEdgeWithDistance("pre_kiosko", "dob_1_5");
addEdgeWithDistance("pre_kiosko", "kiosko");
addEdgeWithDistance("pre_kiosko", "entrada_2");
addEdgeWithDistance("pre_USGOM", "dob_1_3");
addEdgeWithDistance("pre_USGOM", "USGOM");
addEdgeWithDistance("pre_USGOM", "pre_escalera_1_2");
addEdgeWithDistance("iniEscalera_1_2", "pre_escalera_1_2");
addEdgeWithDistance("pre_SSHH_1_1", "pre_escalera_1_2");
addEdgeWithDistance("pre_SSHH_1_1", "SSHH_1_1");
addEdgeWithDistance("pre_SSHH_1_1", "pre_auditorio");
addEdgeWithDistance("auditorio", "pre_auditorio");
addEdgeWithDistance("pre_escalera_1_4", "pre_auditorio");
addEdgeWithDistance("pre_escalera_1_4", "iniEscalera_1_4");
addEdgeWithDistance("pre_escalera_1_4", "pre_SSHH_1_2");
addEdgeWithDistance("SSHH_1_2", "pre_SSHH_1_2");
addEdgeWithDistance("pre_aulaNP", "pre_SSHH_1_2");
addEdgeWithDistance("pre_aulaNP", "aulaNP");
addEdgeWithDistance("pre_aulaNP", "pre_escalera_1_5");
addEdgeWithDistance("iniEscalera_1_5", "pre_escalera_1_5");
addEdgeWithDistance("dob_1_6", "pre_SSHH_1_1");
addEdgeWithDistance("dob_1_6", "pre_escalera_1_2");
addEdgeWithDistance("dob_1_6", "pre_escalera_1_3");
addEdgeWithDistance("iniEscalera_1_3", "pre_escalera_1_3");
addEdgeWithDistance("dob_1_7", "pre_escalera_1_3");
addEdgeWithDistance("dob_1_7", "losa");
addEdgeWithDistance("dob_1_7", "capilla");
addEdgeWithDistance("dob_1_7", "pre_vestidores");
addEdgeWithDistance("vestidores", "pre_vestidores");
addEdgeWithDistance("dob_1_8", "pre_vestidores");
addEdgeWithDistance("dob_1_8", "entrada_3");
addEdgeWithDistance("mid_Escalera_1_1", "iniEscalera_1_1");
addEdgeWithDistance("mid_Escalera_1_1", "iniEscalera_2_1");
addEdgeWithDistance("mid_Escalera_2_1", "iniEscalera_2_1");
addEdgeWithDistance("mid_Escalera_2_1", "fin_Escalera_3_1");
addEdgeWithDistance("decanato", "iniEscalera_2_1");
addEdgeWithDistance("dob_2_3", "iniEscalera_2_1");
addEdgeWithDistance("dob_2_3", "pre_aulas200");
addEdgeWithDistance("pre_aulas200", "aulas200");
addEdgeWithDistance("pre_aulas200", "pre_tercio");
addEdgeWithDistance("tercio", "pre_tercio");
addEdgeWithDistance("dob_2_4", "pre_tercio");
addEdgeWithDistance("pre_magna", "pre_tercio");
addEdgeWithDistance("pre_magna", "magna");
addEdgeWithDistance("dob_2_4", "iniEscalera_2_6");
addEdgeWithDistance("mid_Escalera_1_6", "iniEscalera_2_6");
addEdgeWithDistance("mid_Escalera_1_6", "iniEscalera_1_6");
addEdgeWithDistance("mid_Escalera_2_6", "iniEscalera_2_6");
addEdgeWithDistance("mid_Escalera_2_6", "fin_Escalera_3_6");
addEdgeWithDistance("dob_2_3", "pre_salaCatedraticos");
addEdgeWithDistance("salaCatedraticos", "pre_salaCatedraticos");
addEdgeWithDistance("pre_SSHH_2_1", "pre_salaCatedraticos");
addEdgeWithDistance("pre_SSHH_2_1", "SSHH_2_1");

addEdgeWithDistance("pre_SSHH_2_1", "pre_comedor");
addEdgeWithDistance("pre_escaleraParque", "pre_comedor");
addEdgeWithDistance("pre_escaleraParque", "fin_EscaleraParque");
addEdgeWithDistance("mid_Escalera_Parque", "fin_EscaleraParque");
addEdgeWithDistance("iniEscalera_1_3", "fin_EscaleraParque");

addEdgeWithDistance("comedor", "pre_escaleraParque");
addEdgeWithDistance("pre_escalera_2_4", "pre_comedor");
addEdgeWithDistance("pre_escalera_2_4", "iniEscalera_2_4");
addEdgeWithDistance("iniEscalera_2_4", "mid_Escalera_2_4");
addEdgeWithDistance("fin_Escalera_3_4", "mid_Escalera_2_4");
addEdgeWithDistance("pre_escalera_2_4", "pre_SSHH_2_2");
addEdgeWithDistance("SSHH_2_2", "pre_SSHH_2_2");
addEdgeWithDistance("pre_aulaNP2", "pre_SSHH_2_2");
addEdgeWithDistance("pre_aulaNP2", "aulaNP2");
addEdgeWithDistance("pre_aulaNP2", "pre_escalera_2_5");
addEdgeWithDistance("microDataCenter", "pre_escalera_2_5");
addEdgeWithDistance("iniEscalera_2_5", "pre_escalera_2_5");
addEdgeWithDistance("iniEscalera_2_5", "mid_Escalera_2_5");
addEdgeWithDistance("fin_Escalera_3_5", "mid_Escalera_2_5");

addEdgeWithDistance("pre_escalera_3_1", "fin_Escalera_3_1");
addEdgeWithDistance("pre_escalera_3_1", "UNAYOE");
addEdgeWithDistance("pre_escalera_3_1", "pre_dirSist");
addEdgeWithDistance("dirSist", "pre_dirSist");
addEdgeWithDistance("dob_3_1", "pre_dirSist");
addEdgeWithDistance("dob_3_1", "pre_dirSoft");
addEdgeWithDistance("dirSoft", "pre_dirSoft");
addEdgeWithDistance("pre_matricula", "pre_dirSoft");
addEdgeWithDistance("pre_matricula", "matricula");
addEdgeWithDistance("pre_matricula", "fin_Escalera_3_2");
addEdgeWithDistance("pre_SSHH_3_1", "fin_Escalera_3_2");
addEdgeWithDistance("pre_SSHH_3_1", "SSHH_3_1");
addEdgeWithDistance("pre_SSHH_3_1", "fin_Escalera_3_4");
addEdgeWithDistance("pre_musica", "fin_Escalera_3_4");
addEdgeWithDistance("pre_musica", "musica");
addEdgeWithDistance("pre_SSHH_3_2", "fin_Escalera_3_4");
addEdgeWithDistance("pre_SSHH_3_2", "SSHH_3_2");
addEdgeWithDistance("pre_SSHH_3_2", "pre_laboratoriosNP3");
addEdgeWithDistance("laboratoriosNP3", "pre_laboratoriosNP3");
addEdgeWithDistance("fin_Escalera_3_5", "pre_laboratoriosNP3");

addEdgeWithDistance("dob_3_1", "pre_publicidad");
addEdgeWithDistance("publicidad", "pre_publicidad");
addEdgeWithDistance("pre_laboratorios3", "pre_publicidad");
addEdgeWithDistance("pre_laboratorios3", "laboratorios3");
addEdgeWithDistance("pre_laboratorios3", "pre_soporte");
addEdgeWithDistance("soporte", "pre_soporte");
addEdgeWithDistance("pre_depAcaSist", "pre_soporte");
addEdgeWithDistance("pre_depAcaSist", "depAcaSist");
addEdgeWithDistance("pre_depAcaSist", "dob_3_2");
addEdgeWithDistance("fin_Escalera_3_6", "dob_3_2");


// Implementar Dijkstra

// Mostrar el resultado

function mostrar(source, target) {
  const arrGen = [];
  let list = [];
  console.log(graph.hasEdge('cerseu','pre_cerceu'));
  const path = dijkstra.bidirectional(graph, source, target);
  console.log("Camino de entrada_1 a cerseu:", path);
  for(const nodo in path){
    console.log("Nodo:", path[nodo]);
    const ejeX = graph.getNodeAttribute(path[nodo], 'x');
    const ejeY = graph.getNodeAttribute(path[nodo], 'y');
    const ejeZ = graph.getNodeAttribute(path[nodo], 'z');
    const coordinates = {x: ejeX, y: ejeY, z:ejeZ};
    console.log("  x:", coordinates.x );
    console.log("  y:", coordinates.y );
    console.log("  z:", coordinates.z );

    list.push(coordinates);

    if (/^mid_Escalera_.+$/.test(path[nodo])) {
      arrGen.push([...list]);
      list.length = 0;
      list.push(coordinates);
    }
  }

  arrGen.push([...list]);

  // for (const val in arrGen) {
    //   for (const element in arrGen[val]) {
      //     console.log(arrGen[val][element].x+';'+arrGen[val][element].y+';'+arrGen[val][element].z);
      //   }
      // }
  console.log(arrGen)
  return arrGen;
}

export { mostrar };
