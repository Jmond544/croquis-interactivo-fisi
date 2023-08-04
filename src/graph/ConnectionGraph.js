import Graph from "graphology";
import { dijkstra } from "graphology-shortest-path";
import { main_coord, inter_coord } from "../route_coordinates/Coordinates";

const graph = new Graph();

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

// Implementar Dijkstra

// Mostrar el resultado

function mostrar(source, target) {
  const arrGen = [];
  const list = [];
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

    if (/^midEscalera_.+$/.test(path[nodo])) {
      arrGen.push([...list]);
      list.length = 0;
    }
  }
  if(arrGen.length === 0){
    arrGen.push([...list]);
  }
  // for (const val in arrGen) {
  //   for (const element in arrGen[val]) {
  //     console.log(arrGen[val][element].x+';'+arrGen[val][element].y+';'+arrGen[val][element].z);
  //   }
  // }
  return arrGen;
}

export { mostrar };
