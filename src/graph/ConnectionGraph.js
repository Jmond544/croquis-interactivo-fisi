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

graph.addNode('dob_1_1',inter_coord.dob_1_1);
graph.addNode('pre_cerceu',inter_coord.dob_1_1);
graph.addNode('pre_AtDoc',inter_coord.dob_1_1);
graph.addNode('dob_1_2',inter_coord.dob_1_1);
graph.addNode('iniEscalera_1_1',inter_coord.dob_1_1);
graph.addNode('pre_CC',inter_coord.dob_1_1);
graph.addNode('pre_USGOM',inter_coord.dob_1_1);
graph.addNode('pre_escalera_1_2',inter_coord.dob_1_1);
graph.addNode('pre_SSHH_1_1',inter_coord.dob_1_1);

// for (const nodeName in main_coord) {
//   const coordinates = main_coord[nodeName];
//   graph.addNode(nodeName, {
//     x: coordinates.x,
//     y: coordinates.y,
//     z: coordinates.z,
//   });
// }

// for (const nodeName in inter_coord) {
//   const coordinates = main_coord[nodeName];
//   graph.addNode(nodeName, {
//     x: coordinates.x,
//     y: coordinates.y,
//     z: coordinates.z,
//   });
// }

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
  const edgeKey = `${source}->${target}`;
  graph.addEdgeWithKey(edgeKey, source, target, { distance });
}

// Agregar aristas con distancia calculada automáticamente
addEdgeWithDistance("entrada_1", "dob_1_1");
addEdgeWithDistance("economia", "dob_1_1");
addEdgeWithDistance("dga", "dob_1_1");
addEdgeWithDistance("dob_1_1", "pre_cerceu");
addEdgeWithDistance("cerseu", "pre_cerceu");
addEdgeWithDistance("pre_cerceu", "pre_AtDoc");
addEdgeWithDistance("pre_AtDoc", "atDoc");

// Implementar Dijkstra
const { distance, path } = dijkstra(graph, "entrada_1", {
  attributes: "distance",
});

// Mostrar el resultado

function mostrar() {
  console.log("Distancias:", distance);
  console.log("Camino de entrada_1 a atDoc:", path("atDoc"));
}

export { mostrar };
