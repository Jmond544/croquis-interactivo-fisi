import React from "react";
import "../style-sheets/Model3d.css";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { main_coord, inter_coord } from "../route_coordinates/Coordinates";
import { mostrar } from '../graph/ConnectionGraph';
import TextInputs from "./TextInputs";
import ButtonCheckBox from "./ButtonCheckBox";

import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js";

function Model3d() {
  const mountRef = useRef(null);
  const controlsRef = useRef(null);
  const [estadoPiso01, setEstadoPiso01] = useState([true]);
  const [estadoPiso02, setEstadoPiso02] = useState([true]);
  const [estadoPiso03, setEstadoPiso03] = useState([true]);
  const [position, setPosition] = useState(false);
  let currentOrigen = null;
  let currentDestino = null;

  useEffect(() => {



    const initialCameraPosition = {
      x: 0,
      y: 4,
      z: 9,
    };

    const currentRef = mountRef.current;
    const { clientWidth: width, clientHeight: height } = currentRef;

    // Escena, camara y renderizado
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(
      initialCameraPosition.x,
      initialCameraPosition.y,
      initialCameraPosition.z
    );
    scene.background = new THREE.Color(0xbde0fe);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    currentRef.appendChild(renderer.domElement);

    /* Iluminacion */

    const AmbientalLight = new THREE.AmbientLight(0x404040, 5); // soft white light
    scene.add(AmbientalLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7); // Posición de la luz en el espacio 3D
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableRotate = true; // cambiar
    controls.dampingFactor = 0.04;
    controls.minDistance = 1;
    controls.maxDistance = 30;

    /* TRAZADO DE RUTAS */

    const materialTrazoRutas = new THREE.LineBasicMaterial({ color: 0x0000ff, linewidth: 0.1 });
    let trazoRutaPiso01;
    let trazoRutaPiso02;
    let trazoRutaPiso03;
    const generarTrazadorRuta = (inicio, fin) => {
      if(trazoRutaPiso01 != null){
        scene.remove(trazoRutaPiso01)
        trazoRutaPiso01 = null;
      }
      if(trazoRutaPiso02 != null){
        scene.remove(trazoRutaPiso02)
        trazoRutaPiso02 = null;
      }
      if(trazoRutaPiso03 != null){
        scene.remove(trazoRutaPiso03)
        trazoRutaPiso03 = null;
      }
      if(inicio!=null && fin != null){
        const resCamino = mostrar(inicio, fin);
        for (const val in resCamino) {
          const pointsRuta = [];
          for (const element in resCamino[val]) {
            pointsRuta.push(new THREE.Vector3(resCamino[val][element].x, resCamino[val][element].y, resCamino[val][element].z));
          }
          const geometryRuta = new THREE.BufferGeometry().setFromPoints(pointsRuta);
          if (val === 0) {
            trazoRutaPiso01 = new THREE.Line(geometryRuta, materialTrazoRutas);
            scene.add(trazoRutaPiso01)
          } else if (val === 1) {
            trazoRutaPiso02 = new THREE.Line(geometryRuta, materialTrazoRutas);
            scene.add(trazoRutaPiso02)
          } else {
            trazoRutaPiso03 = new THREE.Line(geometryRuta, materialTrazoRutas);
            scene.add(trazoRutaPiso03)
          }
          pointsRuta.length = 0;
        }
      }
    }

    /* Funciones posicion */
    const ajustarEjeVertical = (objeto, valor) => {
      return -(valor - objeto.geometry.parameters.height + objeto.geometry.parameters.height / 2);
    }

    const createObject = (dimX, dimY, dimZ, ejeX, ejeY, ejeZ, material) => {
      const objeto = new THREE.Mesh(new THREE.BoxGeometry(dimX, dimY, dimZ), material);
      objeto.position.x = ejeX;
      objeto.position.y = ajustarEjeVertical(objeto, ejeY);
      objeto.position.z = ejeZ;
      return objeto;
    }

    /* Pisos */
    // PRIMER PISO
    const shapePiso01 = new THREE.Shape();
    shapePiso01.moveTo(4, 1.5); // X, Z
    shapePiso01.lineTo(4, -4.5); // esquina recepcion aulas 100
    shapePiso01.lineTo(9, -4.5); // aulas 100
    shapePiso01.lineTo(9, -2); // quiosco y gradas
    shapePiso01.lineTo(11, -2); // quiosco y gradas
    shapePiso01.lineTo(11, -4.5);
    shapePiso01.lineTo(13, -4.5); // aulas 100 lateral
    shapePiso01.lineTo(13, -9);
    shapePiso01.lineTo(4, -9); // aulas 100 lateral
    shapePiso01.lineTo(4, -9); // aulas 100 lateral
    shapePiso01.lineTo(4, -25); // maquinas expendedoras
    shapePiso01.lineTo(12, -25); // maquinas expendedoras
    shapePiso01.lineTo(12, -32); // software pared este
    shapePiso01.lineTo(-2, -32); // software pared norte
    shapePiso01.lineTo(-2, -25); // software pared oeste
    shapePiso01.lineTo(1.5, -25); // software pared sur
    shapePiso01.lineTo(1.5, -24); // espacio
    shapePiso01.lineTo(-3, -24); // mini parque
    shapePiso01.lineTo(-3, -22);
    shapePiso01.lineTo(1.5, -22); // fin parque
    shapePiso01.lineTo(1.5, -21); // pasillo
    shapePiso01.lineTo(-3, -21); // Auditorio
    shapePiso01.lineTo(-3, -15); // Auditorio
    shapePiso01.lineTo(1.5, -15); // Fin Auditorio
    shapePiso01.lineTo(-1, -16); // baños
    shapePiso01.lineTo(-1, -12); // baños
    shapePiso01.lineTo(-1, -10); // gradas
    shapePiso01.lineTo(-1, -9); // espacio
    shapePiso01.lineTo(-1, -8); // usgom
    shapePiso01.lineTo(-1, -7); // espacio
    shapePiso01.lineTo(-1, -4.5); // direccion de escuela


    shapePiso01.lineTo(-3, -4.5);
    shapePiso01.lineTo(-3, 1.5);
    shapePiso01.moveTo(4, 1.5);

    const extrudeSettings = {
      depth: 0.1,
      bevelEnabled: false,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelOffset: 0,
      bevelSegments: 0
    };

    const geometryPiso01 = new THREE.ExtrudeGeometry(shapePiso01, extrudeSettings);
    const materialPiso01 = new THREE.MeshStandardMaterial({ color: 0x4A4E69 });
    const piso01 = new THREE.Mesh(geometryPiso01, materialPiso01);
    piso01.rotation.x = 3.141593 / 2;
    piso01.position.y = -2;

    //Piso Parque

    const shapePisoParque = new THREE.Shape();
    shapePisoParque.moveTo(4, -25);
    shapePisoParque.lineTo(4, -9);
    shapePisoParque.lineTo(15, -9);
    shapePisoParque.lineTo(15, -25);
    shapePisoParque.moveTo(4, -25);
    const geometryPisoParque = new THREE.ExtrudeGeometry(shapePisoParque, extrudeSettings);
    const materialPisoParque = new THREE.MeshStandardMaterial({ color: 0xDCDCDC });
    const pisoParque = new THREE.Mesh(geometryPisoParque, materialPisoParque);
    pisoParque.rotation.x = 3.141593 / 2;
    pisoParque.position.y = -2;

    // SEGUNDO PISO

    const shapePiso02 = new THREE.Shape();
    shapePiso02.moveTo(4, 1.5); // X, Z
    shapePiso02.lineTo(4, -4.5); // esquina recepcion aulas 100
    shapePiso02.lineTo(9, -4.5); // aulas 100
    shapePiso02.lineTo(9, -2); // quiosco y gradas
    shapePiso02.lineTo(10, -2); // quiosco y gradas
    shapePiso02.lineTo(10, -3); // quiosco y gradas
    shapePiso02.lineTo(11, -3); // quiosco y gradas
    shapePiso02.lineTo(11, -4.5);
    shapePiso02.lineTo(13, -4.5); // aulas 100 lateral
    shapePiso02.lineTo(13, -9);
    shapePiso02.lineTo(4, -9); // aulas 100 lateral
    shapePiso02.lineTo(4, -9); // aulas 100 lateral
    shapePiso02.lineTo(4, -25); // maquinas expendedoras
    shapePiso02.lineTo(12, -25); // maquinas expendedoras
    shapePiso02.lineTo(12, -32); // software pared este
    shapePiso02.lineTo(-2, -32); // software pared norte
    shapePiso02.lineTo(-2, -25); // software pared oeste
    shapePiso02.lineTo(1.5, -25); // software pared sur
    shapePiso02.lineTo(1.5, -24); // espacio
    shapePiso02.lineTo(1.5, -22); // fin parque
    shapePiso02.lineTo(1.5, -21); // pasillo
    shapePiso02.lineTo(-3, -21); // Auditorio
    shapePiso02.lineTo(-3, -15); // Auditorio
    shapePiso02.lineTo(1.5, -15); // Fin Auditorio
    shapePiso02.lineTo(-1, -16); // baños
    shapePiso02.lineTo(-1, -12); // baños
    shapePiso02.lineTo(-1, -10); // gradas
    shapePiso02.lineTo(-1, -9); // espacio
    shapePiso02.lineTo(-1, -8); // usgom
    shapePiso02.lineTo(-1, -7); // espacio
    shapePiso02.lineTo(-1, -4.5); // direccion de escuela

    shapePiso02.lineTo(-3, -4.5);
    shapePiso02.lineTo(-3, 1.5);
    shapePiso02.moveTo(4, 1.5);

    const geometryPiso02 = new THREE.ExtrudeGeometry(shapePiso02, extrudeSettings);
    const materialPiso02 = new THREE.MeshStandardMaterial({ color: 0x4A4E69 });
    const piso02 = new THREE.Mesh(geometryPiso02, materialPiso02);
    piso02.rotation.x = 3.141593 / 2;

    piso02.position.y = 0;

    const piso03 = new THREE.Mesh(geometryPiso02, materialPiso02);
    piso03.rotation.x = 3.141593 / 2;
    piso03.position.y = 2;

    // CAMINO 1ER PISO
    const shapeCamino1 = new THREE.Shape();

    shapeCamino1.moveTo(0.5, 1.7); // inicio derecho
    shapeCamino1.lineTo(0.5, -0.5); // recepcion1
    shapeCamino1.lineTo(3.5, -0.5); // recepcion2

    shapeCamino1.lineTo(3.5, -6.25); // pasillo salones derecho
    shapeCamino1.lineTo(4, -6.25); // pasillo salones largo

    shapeCamino1.lineTo(9.9, -6.25); // pasillo salida izquierdo
    shapeCamino1.lineTo(9.9, -4.3); // pasillo salida izquierdo
    shapeCamino1.lineTo(8, -4.3); // pasillo salida izquierdo
    shapeCamino1.lineTo(8, -3.3); // pasillo salida derecho
    shapeCamino1.lineTo(10.1, -3.3); // pasillo salida derecho

    shapeCamino1.lineTo(10.9, -3.3); // pasillo escaleras derecho
    shapeCamino1.lineTo(10.9, -4.3); // pasillo escaleras izquierda

    shapeCamino1.lineTo(10.9, -6.25); // pasillo salida derecho

    shapeCamino1.lineTo(12.5, -6.25); // pasillo salones largo

    shapeCamino1.lineTo(12.5, -6.25); // pasillo salida izquierdo
    shapeCamino1.lineTo(12.5, -7.25); // pasillo salones largo
    shapeCamino1.lineTo(4, -7.25); // pasillo salones largo
    shapeCamino1.lineTo(3.5, -7.25); // pasillo salones izquierdo

    shapeCamino1.lineTo(3.5, -11); // area verde


    shapeCamino1.lineTo(13.5, -11); // area verde derecho
    shapeCamino1.lineTo(13.5, -8); // area verde derecho

    shapeCamino1.lineTo(14.5, -8); // area verde izquierdo
    shapeCamino1.lineTo(14.5, -12); // area verde izquierdo
    shapeCamino1.lineTo(8, -12); // area verde
    shapeCamino1.lineTo(8, -15); // area verde
    shapeCamino1.lineTo(7, -16); // area verde
    shapeCamino1.lineTo(7, -12); // area verde
    shapeCamino1.lineTo(3.5, -12); // area verde

    shapeCamino1.lineTo(3.5, -28); // pasillo software

    shapeCamino1.lineTo(11, -28); // pasillo software
    shapeCamino1.lineTo(11, -29); // pasillo software
    shapeCamino1.lineTo(-1.5, -29); // pasillo software
    shapeCamino1.lineTo(-1.5, -28); // pasillo software

    shapeCamino1.lineTo(2.5, -28); // pasillo principal
    shapeCamino1.lineTo(2.5, -1.5); // recepcion2
    shapeCamino1.lineTo(-0.5, -1.5); // recepcion1
    shapeCamino1.lineTo(-0.5, 1.7); // inicio izquierdo

    shapeCamino1.lineTo(0.5, 1.7);

    const geometryCamino = new THREE.ExtrudeGeometry(shapeCamino1, extrudeSettings);
    const materialCamino = new THREE.MeshStandardMaterial({ color: 0x9A8C98 });
    const camino1 = new THREE.Mesh(geometryCamino, materialCamino);
    camino1.rotation.x = 3.141593 / 2;
    camino1.position.y = -1.9;

    // CAMINO 2DO PISO
    const shapeCamino2 = new THREE.Shape();
    shapeCamino2.moveTo(2.5, -0.5); // inicio derecho
    shapeCamino2.lineTo(3.5, -0.5); // recepcion2

    shapeCamino2.lineTo(3.5, -6.25); // pasillo salones derecho
    shapeCamino2.lineTo(4, -6.25); // pasillo salones largo

    shapeCamino2.lineTo(9.9, -6.25); // pasillo salida izquierdo
    shapeCamino2.lineTo(9.9, -4.3); // pasillo salida izquierdo
    shapeCamino2.lineTo(9.9, -3.3); // pasillo salida derecho

    shapeCamino2.lineTo(10.9, -3.3); // pasillo escaleras derecho
    shapeCamino2.lineTo(10.9, -4.3); // pasillo escaleras izquierda

    shapeCamino2.lineTo(10.9, -6.25); // pasillo salida derecho

    shapeCamino2.lineTo(12.5, -6.25); // pasillo salones largo

    shapeCamino2.lineTo(12.5, -6.25); // pasillo salida izquierdo
    shapeCamino2.lineTo(12.5, -7.25); // pasillo salones largo
    shapeCamino2.lineTo(4, -7.25); // pasillo salones largo
    shapeCamino2.lineTo(3.5, -7.25); // pasillo salones izquierdo

    shapeCamino2.lineTo(3.5, -28); // pasillo software

    shapeCamino2.lineTo(11, -28); // pasillo software
    shapeCamino2.lineTo(11, -29); // pasillo software
    shapeCamino2.lineTo(-1.5, -29); // pasillo software
    shapeCamino2.lineTo(-1.5, -28); // pasillo software

    shapeCamino2.lineTo(2.5, -28); // pasillo principal
    shapeCamino2.lineTo(2.5, -1.5); // recepcion2

    shapeCamino2.lineTo(2.5, -0.5);

    const geometryCamino2 = new THREE.ExtrudeGeometry(shapeCamino2, extrudeSettings);
    const materialCamino2 = new THREE.MeshStandardMaterial({ color: 0x9A8C98 });
    const camino2 = new THREE.Mesh(geometryCamino2, materialCamino2);
    camino2.rotation.x = 3.141593 / 2;
    camino2.position.y = 0.1;

    //CAMINO 3er PISO

    const shapeCamino3 = new THREE.Shape();
    shapeCamino3.moveTo(2.5, -0.5); // inicio derecho
    shapeCamino3.lineTo(3.5, -0.5); // recepcion2

    shapeCamino3.lineTo(3.5, -6.25); // pasillo salones derecho
    shapeCamino3.lineTo(4, -6.25); // pasillo salones largo

    shapeCamino3.lineTo(9.9, -6.25); // pasillo salida izquierdo
    shapeCamino3.lineTo(9.9, -4.3); // pasillo salida izquierdo
    shapeCamino3.lineTo(9.9, -3.3); // pasillo salida derecho

    shapeCamino3.lineTo(10.9, -3.3); // pasillo escaleras derecho
    shapeCamino3.lineTo(10.9, -4.3); // pasillo escaleras izquierda

    shapeCamino3.lineTo(10.9, -6.25); // pasillo salida derecho

    shapeCamino3.lineTo(12.5, -6.25); // pasillo salones largo

    shapeCamino3.lineTo(12.5, -6.25); // pasillo salida izquierdo
    shapeCamino3.lineTo(12.5, -7.25); // pasillo salones largo
    shapeCamino3.lineTo(4, -7.25); // pasillo salones largo
    shapeCamino3.lineTo(3.5, -7.25); // pasillo salones izquierdo

    shapeCamino3.lineTo(3.5, -28); // pasillo software

    shapeCamino3.lineTo(11, -28); // pasillo software
    shapeCamino3.lineTo(11, -29); // pasillo software
    shapeCamino3.lineTo(-1.5, -29); // pasillo software
    shapeCamino3.lineTo(-1.5, -28); // pasillo software

    shapeCamino3.lineTo(2.5, -28); // pasillo principal
    shapeCamino3.lineTo(2.5, -1.5); // recepcion2

    shapeCamino3.lineTo(2.5, -0.5);

    const geometryCamino3 = new THREE.ExtrudeGeometry(shapeCamino3, extrudeSettings);
    const materialCamino3 = new THREE.MeshStandardMaterial({ color: 0x9A8C98 });
    const camino3 = new THREE.Mesh(geometryCamino3, materialCamino3);
    camino3.rotation.x = 3.141593 / 2;
    camino3.position.y = 2.1;



    //ESCALERAS
    const materialEscalera = new THREE.MeshStandardMaterial({ color: 0xF8CB19 });

//ESCALERA PISO 1
  
      //crearEscaleras1

    let x1_1_1=3;
    let y1_1_1=2;
    let z1_1_1=1;

    const escalera1_1_1Parte1 = createObject(0.4, 0.04, 1 * Math.sqrt(2) - 0.1, x1_1_1 - 0.2, y1_1_1 - 1.4, z1_1_1, materialEscalera);
      escalera1_1_1Parte1.rotation.x = Math.PI / 4; // 3. 141593 / 4

    const escalera1_1_1Parte2 = createObject(0.4, 0.04, 1 * Math.sqrt(2) - 0.1, x1_1_1 + 0.2, y1_1_1 - 0.5, z1_1_1, materialEscalera);
      escalera1_1_1Parte2.rotation.x = -Math.PI / 4; // -3.141593 / 4

    

    let x1_1_2=10.5;
    let y1_1_2=2;
    let z1_1_2=-2.5;

    const escalera1_1_2Parte1 = createObject(0.4, 0.04, 1 * Math.sqrt(2) - 0.1, x1_1_2 - 0.2, y1_1_2 - 1.4, z1_1_2, materialEscalera);
      escalera1_1_2Parte1.rotation.x = Math.PI / 4; // 3. 141593 / 4

      const escalera1_1_2Parte2 = createObject(0.4, 0.04, 1 * Math.sqrt(2) - 0.1, x1_1_2 + 0.2, y1_1_2 - 0.5, z1_1_2, materialEscalera);
      escalera1_1_2Parte2.rotation.x = -Math.PI / 4; // -3.141593 / 4

      //crearEscaleras2

    //const escalera1_3 = crearEscaleras2(1, 2, -10.6);

    let x2_1_3=1;
    let y2_1_3=2;
    let z2_1_3=-10.6;

    const escalera2_1_3Parte1 = createObject(1 * Math.sqrt(2) - 0.1, 0.04, 0.4, x2_1_3, y2_1_3 - 1.4, z2_1_3 - 0.2, materialEscalera);
      escalera2_1_3Parte1.rotation.z = Math.PI / 4; // 3. 141593 / 4

      const escalera2_1_3Parte2 = createObject(1 * Math.sqrt(2) - 0.1, 0.04, 0.4, x2_1_3, y2_1_3 - 0.5, z2_1_3 + 0.2, materialEscalera);
      escalera2_1_3Parte2.rotation.z = -Math.PI / 4; // -3.141593 / 4

      //crearEscaleras3

    let x3_1_4 = 3.1;
    let y3_1_4 = 2;
    let z3_1_4 = -30.5;
    
    const escalera3_1_4Parte1 = createObject(0.4, 0.04, 1 * Math.sqrt(2) - 0.1, x3_1_4 - 0.2, y3_1_4 - 1.4, z3_1_4, materialEscalera);
      escalera3_1_4Parte1.rotation.x = -Math.PI / 4; // 3. 141593 / 4
      const escalera3_1_4Parte2 = createObject(0.4, 0.04, 1 * Math.sqrt(2) - 0.1, x3_1_4 + 0.2, y3_1_4 - 0.5, z3_1_4, materialEscalera);
      escalera3_1_4Parte2.rotation.x = Math.PI / 4; // -3.141593 / 4




    //const escalera1_5 = crearEscaleras3(10, 2, -30.5);

    let x3_1_5 = 10;
    let y3_1_5 = 2;
    let z3_1_5 = -30.5;
    
    const escalera3_1_5Parte1 = createObject(0.4, 0.04, 1 * Math.sqrt(2) - 0.1, x3_1_5 - 0.2, y3_1_5 - 1.4, z3_1_5, materialEscalera);
      escalera3_1_5Parte1.rotation.x = -Math.PI / 4; // 3. 141593 / 4
      scene.add(escalera3_1_5Parte1);
      const escalera3_1_5Parte2 = createObject(0.4, 0.04, 1 * Math.sqrt(2) - 0.1, x3_1_5 + 0.2, y3_1_5 - 0.5, z3_1_5, materialEscalera);
      escalera3_1_5Parte2.rotation.x = Math.PI / 4; // -3.141593 / 4
      scene.add(escalera3_1_5Parte2);

//Escalera PISO 2

      //crearEscaleras1

    //const escalera2_1 = crearEscaleras1(3, 0, 1);

    let x1_2_1=3;
    let y1_2_1=0;
    let z1_2_1=1;

    const escalera1_2_1Parte1 = createObject(0.4, 0.04, 1 * Math.sqrt(2) - 0.1, x1_2_1 - 0.2, y1_2_1 - 1.4, z1_2_1, materialEscalera);
      escalera1_2_1Parte1.rotation.x = Math.PI / 4; // 3. 141593 / 4

      const escalera1_2_1Parte2 = createObject(0.4, 0.04, 1 * Math.sqrt(2) - 0.1, x1_2_1 + 0.2, y1_2_1 - 0.5, z1_2_1, materialEscalera);
      escalera1_2_1Parte2.rotation.x = -Math.PI / 4; // -3.141593 / 4

    //const escalera2_2 = crearEscaleras1(10.5, 0, -2.5);

    let x1_2_2=10.5;
    let y1_2_2=0;
    let z1_2_2=-2.5;

    const escalera1_2_2Parte1 = createObject(0.4, 0.04, 1 * Math.sqrt(2) - 0.1, x1_2_2 - 0.2, y1_2_2 - 1.4, z1_2_2, materialEscalera);
      escalera1_2_2Parte1.rotation.x = Math.PI / 4; // 3. 141593 / 4

      const escalera1_2_2Parte2 = createObject(0.4, 0.04, 1 * Math.sqrt(2) - 0.1, x1_2_2 + 0.2, y1_2_2 - 0.5, z1_2_2, materialEscalera);
      escalera1_2_2Parte2.rotation.x = -Math.PI / 4; // -3.141593 / 4

      //crearEscaleras2

    //const escalera2_3 = crearEscaleras2(1, 0, -10.6);

    let x2_2_3=1;
    let y2_2_3=0;
    let z2_2_3=-10.6;

    const escalera2_2_3Parte1 = createObject(1 * Math.sqrt(2) - 0.1, 0.04, 0.4, x2_2_3, y2_2_3 - 1.4, z2_2_3 - 0.2, materialEscalera);
      escalera2_2_3Parte1.rotation.z = Math.PI / 4; // 3. 141593 / 4

      const escalera2_2_3Parte2 = createObject(1 * Math.sqrt(2) - 0.1, 0.04, 0.4, x2_2_3, y2_2_3 - 0.5, z2_2_3 + 0.2, materialEscalera);
      escalera2_2_3Parte2.rotation.z = -Math.PI / 4; // -3.141593 / 4

      //crearEscaleras3

    //const escalera2_4 = crearEscaleras3(3.1, 0, -30.5);

    let x3_2_4 = 3.1;
    let y3_2_4 = 0;
    let z3_2_4 = -30.5;
    
    const escalera3_2_4Parte1 = createObject(0.4, 0.04, 1 * Math.sqrt(2) - 0.1, x3_2_4 - 0.2, y3_2_4 - 1.4, z3_2_4, materialEscalera);
      escalera3_2_4Parte1.rotation.x = -Math.PI / 4; // 3. 141593 / 4
      const escalera3_2_4Parte2 = createObject(0.4, 0.04, 1 * Math.sqrt(2) - 0.1, x3_2_4 + 0.2, y3_2_4 - 0.5, z3_2_4, materialEscalera);
      escalera3_2_4Parte2.rotation.x = Math.PI / 4; // -3.141593 / 4

    //const escalera2_5 = crearEscaleras3(10, 0, -30.5);

    let x3_2_5 = 10;
    let y3_2_5 = 0;
    let z3_2_5 = -30.5;
    
    const escalera3_2_5Parte1 = createObject(0.4, 0.04, 1 * Math.sqrt(2) - 0.1, x3_2_5 - 0.2, y3_2_5 - 1.4, z3_2_5, materialEscalera);
      escalera3_2_5Parte1.rotation.x = -Math.PI / 4; // 3. 141593 / 4
      const escalera3_2_5Parte2 = createObject(0.4, 0.04, 1 * Math.sqrt(2) - 0.1, x3_2_5 + 0.2, y3_2_5 - 0.5, z3_2_5, materialEscalera);
      escalera3_2_5Parte2.rotation.x = Math.PI / 4; // -3.141593 / 4





    //ESCALERA PARQUE

  
    let xEscaleraParque= 4.5;
    let yEscaleraParque=2;
    let zEscaleraParque = -17.9;

    const escaleraParque = createObject(1, 2, 3.4,
      xEscaleraParque, yEscaleraParque, zEscaleraParque, materialEscalera);
    const escaleraParqueSubida = createObject(1, 0.04, 2 * Math.sqrt(2) - 0.1,
      xEscaleraParque, yEscaleraParque - 1, zEscaleraParque + 2.65, materialEscalera);
    escaleraParqueSubida.rotation.x = Math.PI / 4;
    const escaleraParqueSubida2 = createObject(1, 0.04, 2 * Math.sqrt(2) - 0.1,
      xEscaleraParque, yEscaleraParque - 1, zEscaleraParque - 2.65, materialEscalera)
    escaleraParqueSubida2.rotation.x = -Math.PI / 4;






    // const shapePisoParque = new THREE.Shape();
    // shapePisoParque.moveTo(4,-25);
    // shapePisoParque.lineTo(4,-9);
    // shapePisoParque.lineTo(15,-9);
    // shapePisoParque.lineTo(15,-25);
    // shapePisoParque.moveTo(4,-25);
    // const geometryPisoParque = new THREE.ExtrudeGeometry(shapePisoParque,extrudeSettings);
    // const materialPisoParque = new THREE.MeshStandardMaterial({color: 0xDCDCDC});
    // const pisoParque = new THREE.Mesh(geometryPisoParque,materialPisoParque);
    // pisoParque.rotation.x = 3.141593/2;
    // pisoParque.position.y = -2;
    // scene.add(pisoParque)



    // const camino1 = createObject(1,0.1,1.5,
    //0,2,0.9,
    //new THREE.MeshStandardMaterial({ color: 0x9A8C98 }));

    /* Entradas */

    const geometry = new THREE.TorusGeometry(0.5, 0.2, 30, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0xffff00 });
    const entrada1 = new THREE.Mesh(geometry, material);
    entrada1.position.x = 0;
    entrada1.position.y = -1.5;
    entrada1.position.z = 1.9;

    const entrada2 = new THREE.Mesh(geometry, material);
    entrada2.position.x = 8;
    entrada2.position.z = -3.8;
    entrada2.position.y = -1.5;
    entrada2.rotation.y = 3.141593 / 2;

    const entrada3 = new THREE.Mesh(geometry, material);
    entrada3.position.x = 14;
    entrada3.position.z = -8;
    entrada3.position.y = -1.5;

    /* Aulas */

    // MATERIALES
    const material1 = new THREE.MeshStandardMaterial({ color: 0xC9ADA7 });
    const materialAulas = new THREE.MeshStandardMaterial({ color: 0xF2E9E4 });
    const materialEscenarios = new THREE.MeshStandardMaterial({ color: 0x83c5be });
    const materialAdministrativos = new THREE.MeshStandardMaterial({ color: 0xf28482 });
    const materialSSHH = new THREE.MeshStandardMaterial({ color: 0x90e0ef });
    const materialDeportes = new THREE.MeshStandardMaterial({ color: 0xc7f9cc });
    const materialComedor = new THREE.MeshStandardMaterial({ color: 0xBAB7B7 });
    const materialDataCenter = new THREE.MeshStandardMaterial({ color: 0xF7E11E4 });
    const materialMagna = new THREE.MeshStandardMaterial({ color: 0xF1E17E27 })

    //Aulas del piso 1

    const atencionDoc = createObject(1, 0.5, 1, // 
      1.5, 2, 0.9,
      materialAdministrativos);


    const economia = createObject(1.9, 0.5, 1.3,
      -2, 2, -1,
      materialAdministrativos);

    const dga = createObject(2.5, 0.5, 2.5,
      -1.70, 2, -3.2,
      materialAdministrativos);

    const cerseu = createObject(2, 0.5, 1.8,
      0.9, 2, -2.9,
      materialAdministrativos);

    const direccionEscuela = createObject(1.5, 0.5, 2,
      1.13, 2, -5.5,
      materialAdministrativos);

    const usgom = createObject(1.5, 0.5, 1.8,
      1.13, 2, -8,
      materialAdministrativos);


    const SSHH_Sistemas_1 = createObject(1.5, 0.5, 3,
      1.13, 2, -13,
      materialSSHH);

    const auditorio = createObject(4, 0.5, 5,
      -0.2, 2, -18,
      materialEscenarios);

    const aulas100 = createObject(4.7, 0.5, 1.5,
      6.5, 2, -5.3,
      materialAulas);

    const quiosco = createObject(0.9, 0.5, 1,
      9.5, 2, -2.5,
      material1);

    const aulas100v2 = createObject(8.7, 0.5, 1.5,
      8.5, 2, -8.2,
      materialAulas);

    const capilla = createObject(1.5, 0.5, 1,
      8, 2, -10,
      material1);

    const losaDeportiva = createObject(5, 0.5, 8,
      9, 2, -19,
      materialDeportes);

    const vestidores = createObject(3, 0.5, 1,
      10.5, 2, -13,
      materialDeportes);

    const SSHH_Software_1 = createObject(2, 0.5, 2,
      7, 2, -26,
      materialSSHH);

    const aulasNuevoPabellon1 = createObject(5, 0.5, 2,
      6.5, 2, -31,
      materialAulas);

    const aulasNuevoPabellon1_v2 = createObject(3.9, 0.5, 2,
      0, 2, -31,
      materialAulas);

    //Aulas del piso 2

    const SSHH_Sistemas_2 = createObject(1.5, 0.5, 3,
      1.13, 0, -13,
      materialSSHH);

    const SSHH_Software_2 = createObject(2, 0.5, 2,
      7, 0, -26,
      materialSSHH);

    const comedor = createObject(4, 0.5, 5,
      -0.2, 0, -18,
      materialComedor);

    const LaboratoriosNuevoPabellon = createObject(5, 0.5, 2,
      6.5, 0, -31,
      materialAulas);

    const aulasNuevoPabellon2_v2 = createObject(3.9, 0.5, 2,
      0, 0, -31,
      materialAulas);

    const microDataCenter = createObject(2, 0.5, 2,
      9.5, 0, -26, materialDataCenter)

    const decanato = createObject(3.9, 0.5, 3.6,
      -1, 0, -0.3, materialAdministrativos
    )

    const aulas200 = createObject(4.7, 0.5, 1.5,
      6.5, 0, -5.3,
      materialAulas);

    

    const aulas200v2 = createObject(5, 0.5, 1.5,
      6.5, 0, -8.2,
      materialAulas);

    const tercio = createObject(1, 0.5, 1.5,
      9.7, 0, -8.2,
      materialAdministrativos);

    const Magna = createObject(1, 0.5, 1.5,
      12, 0, -8.2,
      materialMagna
    )

    const salaCatedraticos = createObject(0.7, 0.5, 0.7,
      3.6, 0, -10,
      materialAdministrativos);

// Tercer piso
    const musica = createObject(2, 0.5, 1.8,
      2, -2, -31,materialEscenarios
    )
    const publicidad = createObject(1, 0.5, 1.5,
          6, -2, -8.2,
          materialAdministrativos);
    const SSHH_Sistemas_3 = createObject(1.5, 0.5, 3,
      1.13, -2, -13,
      materialSSHH);

    const SSHH_Software_3 = createObject(2, 0.5, 2,
      7, -2, -26,
      materialSSHH);

      const UNAYOE = createObject(3.9, 0.5, 6,
      -1, -2, -1.5, materialAdministrativos
    )

    const Matricula = createObject(1.5, 0.5, 1,
      1.13, -2, -9.6,
      materialAdministrativos);
      const dirSoft = createObject(1.5, 0.5, 2,
        1.13, -2, -8,
        materialAdministrativos);

        const dirSist = createObject(1.5, 0.5, 2,
          1.13, -2, -5.9,
          materialAdministrativos) ;

          const soporte = createObject(1, 0.5, 1.5,
            9, -2, -8.2,
            materialAdministrativos);

            const DepAcaSist = createObject(1,0.5,1.5,
              10.1,-2,-8.2,materialAdministrativos);

              const Laboratorios3_1 = createObject(2.7, 0.5, 1.5,
                10, -2, -26,
                materialAulas);

                const Laboratorios3_2 = createObject(4.7, 0.5, 1.5,
                  6.5, -2, -5.3,
                  materialAulas);

    /* Linea */

    const material2 = new THREE.LineBasicMaterial({ color: 0x0000ff, linewidth: 0.1 });
    const points = [];


    

  
    function addPointToPoints(coord) {
      points.push(new THREE.Vector3(
        coord.x,
        coord.y,
        coord.z
      ));
    }
    

    
    addPointToPoints(inter_coord.dob_1_2);
    addPointToPoints(inter_coord.iniEscalera_1_1);
    addPointToPoints(inter_coord.mid_Escalera_1_1);
    addPointToPoints(inter_coord.iniEscalera_2_1);
    addPointToPoints(inter_coord.mid_Escalera_2_1);
    addPointToPoints(inter_coord.fin_Escalera_3_1);
    addPointToPoints(inter_coord.pre_escalera_3_1);
    addPointToPoints(inter_coord.pre_dirSist);
    addPointToPoints(main_coord.dirSist);
    addPointToPoints(inter_coord.dob_3_1);
    addPointToPoints(inter_coord.pre_dirSoft);
    addPointToPoints(main_coord.dirSoft);
    addPointToPoints(inter_coord.pre_matricula);
    addPointToPoints(main_coord.matricula);
    addPointToPoints(inter_coord.pre_SSHH_3_1);
    addPointToPoints(main_coord.SSHH_3_1  );
    addPointToPoints(inter_coord.pre_musica);
    addPointToPoints(main_coord.musica);
    addPointToPoints(inter_coord.pre_SSHH_3_2);
    addPointToPoints(main_coord.SSHH_3_2);

    //addPointToPoints(inter_coord.iniEscalera_2_1);
    //addPointToPoints(inter_coord.mid_Escalera_2_1);
    //addPointToPoints(inter_coord.fin_Escalera_3_1);
    //addPointToPoints(inter_coord.fin_Escalera_3_1);
    
        //addPointToPoints(main_coord)
    


    // points.push(new THREE.Vector3(
    //   inter_coord.dob_2_4.x,
    //   inter_coord.dob_2_4.y,
    //   inter_coord.dob_2_4.z
    // ));
    // points.push(new THREE.Vector3(
    //   inter_coord.pre_SSHH_2_1.x,
    //   inter_coord.pre_SSHH_2_1.y,
    //   inter_coord.pre_SSHH_2_1.z
    // ));
    // points.push(new THREE.Vector3(
    //   inter_coord.pre_SSHH_2_2.x,
    //   inter_coord.pre_SSHH_2_2.y,
    //   inter_coord.pre_SSHH_2_2.z
    // ));
    // points.push( new THREE.Vector3(
    //  main_coord.entrada_1.x,
    //  main_coord.entrada_1.y,
    //  main_coord.entrada_1.z ) );
    // points.push( new THREE.Vector3( 
    //  inter_coord.dob_1_1.x,
    //  inter_coord.dob_1_1.y,
    //  inter_coord.dob_1_1.z
    // ) );
    // points.push( new THREE.Vector3(
    //  main_coord.economia.x,
    //  main_coord.economia.y,
    //  main_coord.economia.z
    // ) );
    // points.push( new THREE.Vector3( 
    //  inter_coord.dob_1_1.x,
    //  inter_coord.dob_1_1.y,
    //  inter_coord.dob_1_1.z
    // ) );

    // points.push( new THREE.Vector3( 
    //  main_coord.dga.x,
    //  main_coord.dga.y,
    //  main_coord.dga.z
    // ) );

    // points.push( new THREE.Vector3( 
    //  inter_coord.dob_1_1.x,
    //  inter_coord.dob_1_1.y,
    //  inter_coord.dob_1_1.z
    // ) );
    // points.push( new THREE.Vector3( 
    //  inter_coord.pre_cerceu.x,
    //  inter_coord.pre_cerceu.y,
    //  inter_coord.pre_cerceu.z
    // ) );
    // points.push( new THREE.Vector3( 
    //  main_coord.cerseu.x,
    //  main_coord.cerseu.y,
    //  main_coord.cerseu.z
    // ) );
    // points.push( new THREE.Vector3( 
    //  inter_coord.pre_AtDoc.x,
    //  inter_coord.pre_AtDoc.y,
    //  inter_coord.pre_AtDoc.z
    // ) );
    // points.push( new THREE.Vector3( 
    //  main_coord.atDoc.x,
    //  main_coord.atDoc.y,
    //  main_coord.atDoc.z
    // ) );
    // points.push( new THREE.Vector3( 
    //  inter_coord.dob_1_2.x,
    //  inter_coord.dob_1_2.y,
    //  inter_coord.dob_1_2.z
    // ) );
    // points.push( new THREE.Vector3( 
    //  inter_coord.iniEscalera_1_1.x,
    //  inter_coord.iniEscalera_1_1.y,
    //  inter_coord.iniEscalera_1_1.z
    // ) );
    // points.push( new THREE.Vector3( 
    //  inter_coord.mid_Escalera_1_1.x,
    //  inter_coord.mid_Escalera_1_1.y,
    //  inter_coord.mid_Escalera_1_1.z
    // ) );
    // points.push( new THREE.Vector3( 
    //  inter_coord.pre_CC.x,
    //  inter_coord.pre_CC.y,
    //  inter_coord.pre_CC.z
    // ) );
    //  points.push( new THREE.Vector3( 
    //   main_coord.CC.x,
    //   main_coord.CC.y,
    //   main_coord.CC.z
    //  ) );
    // points.push( new THREE.Vector3( 
    //  inter_coord.pre_USGOM.x,
    //  inter_coord.pre_USGOM.y,
    //  inter_coord.pre_USGOM.z
    // ) );
    // points.push( new THREE.Vector3( 
    //  inter_coord.pre_escalera_1_2.x,
    //  inter_coord.pre_escalera_1_2.y,
    //  inter_coord.pre_escalera_1_2.z
    // ) );
    // points.push( new THREE.Vector3( 
    //  inter_coord.iniEscalera_1_2.x,
    //  inter_coord.iniEscalera_1_2.y,
    //  inter_coord.iniEscalera_1_2.z
    // ) );
    // points.push( new THREE.Vector3( 
    //   inter_coord.pre_escalera_1_3.x,
    //   inter_coord.pre_escalera_1_3.y,
    //   inter_coord.pre_escalera_1_3.z
    //  ) );
    //  points.push( new THREE.Vector3( 
    //   inter_coord.dob_1_7.x,
    //   inter_coord.dob_1_7.y,
    //   inter_coord.dob_1_7.z
    //  ) );
    //  points.push( new THREE.Vector3( 
    //   main_coord.losa.x,
    //   main_coord.losa.y,
    //   main_coord.losa.z
    //  ) );
    //  points.push( new THREE.Vector3( 
    //   main_coord.capilla.x,
    //   main_coord.capilla.y,
    //   main_coord.capilla.z
    //  ) );
    //  points.push( new THREE.Vector3( 
    //   inter_coord.pre_vestidores.x,
    //   inter_coord.pre_vestidores.y,
    //   inter_coord.pre_vestidores.z
    //  ) );
    //  points.push( new THREE.Vector3( 
    //   inter_coord.dob_1_8.x,
    //   inter_coord.dob_1_8.y,
    //   inter_coord.dob_1_8.z
    //  ) );
    //  points.push( new THREE.Vector3( 
    //   main_coord.entrada_3.x,
    //   main_coord.entrada_3.y,
    //   main_coord.entrada_3.z
    //  ) );
    // points.push( new THREE.Vector3( 
    //   inter_coord.dob_1_6.x,
    //   inter_coord.dob_1_6.y,
    //   inter_coord.dob_1_6.z
    //  ) );
    //  points.push( new THREE.Vector3( 
    //  inter_coord.pre_SSHH_1_1.x,
    //  inter_coord.pre_SSHH_1_1.y,
    //  inter_coord.pre_SSHH_1_1.z
    // ) );
    // points.push( new THREE.Vector3( 
    //  main_coord.SSHH_1_1.x,
    //  main_coord.SSHH_1_1.y,
    //  main_coord.SSHH_1_1.z
    // ) );
    // points.push( new THREE.Vector3( 
    //  inter_coord.pre_auditorio.x,
    //  inter_coord.pre_auditorio.y,
    //  inter_coord.pre_auditorio.z
    // ) );
    // points.push( new THREE.Vector3( 
    //  main_coord.auditorio.x,
    //  main_coord.auditorio.y,
    //  main_coord.auditorio.z
    // ) );
    // points.push( new THREE.Vector3( 
    //  inter_coord.pre_escalera_1_4.x,
    //  inter_coord.pre_escalera_1_4.y,
    //  inter_coord.pre_escalera_1_4.z
    // ) );

    // points.push( new THREE.Vector3( 
    //   main_coord.SSHH_1_2.x,
    //   main_coord.SSHH_1_2.y,
    //   main_coord.SSHH_1_2.z
    //   ) );
    // points.push( new THREE.Vector3( 
    // inter_coord.pre_aulaNP.x,
    // inter_coord.pre_aulaNP.y,
    // inter_coord.pre_aulaNP.z
    // ) );
    // points.push( new THREE.Vector3( 
    //   inter_coord.pre_escalera_1_5.x,
    //   inter_coord.pre_escalera_1_5.y,
    //   inter_coord.pre_escalera_1_5.z
    //   ) );
    // points.push( new THREE.Vector3( 
    //   main_coord.aulaNP.x,
    //   main_coord.aulaNP.y,
    //   main_coord.aulaNP.z
    //   ) );
    // points.push( new THREE.Vector3( 
    //   inter_coord.pre_SSHH_1_2.x,
    //   inter_coord.pre_SSHH_1_2.y,
    //   inter_coord.pre_SSHH_1_2.z
    //  ) );
    //  points.push( new THREE.Vector3( 
    //   inter_coord.iniEscalera_1_4.x,
    //   inter_coord.iniEscalera_1_4.y,
    //   inter_coord.iniEscalera_1_4.z
    //  ) );
    //  points.push( new THREE.Vector3( 
    //   main_coord.USGOM.x,
    //   main_coord.USGOM.y,
    //   main_coord.USGOM.z
    //  ) );
    //  points.push( new THREE.Vector3( 
    //   inter_coord.dob_1_3.x,
    //   inter_coord.dob_1_3.y,
    //   inter_coord.dob_1_3.z
    //  ) );
    //  points.push( new THREE.Vector3( 
    //   inter_coord.pre_aulas100.x,
    //   inter_coord.pre_aulas100.y,
    //   inter_coord.pre_aulas100.z
    //  ) );
    //  points.push( new THREE.Vector3( 
    //   main_coord.aulas100.x,
    //   main_coord.aulas100.y,
    //   main_coord.aulas100.z
    //  ) );
    //  points.push( new THREE.Vector3( 
    //   inter_coord.dob_1_4.x,
    //   inter_coord.dob_1_4.y,
    //   inter_coord.dob_1_4.z
    //  ) );
    //  points.push( new THREE.Vector3( 
    //   inter_coord.dob_1_5.x,
    //   inter_coord.dob_1_5.y,
    //   inter_coord.dob_1_5.z
    //  ) );
    //  points.push( new THREE.Vector3( 
    //   inter_coord.iniEscalera_1_6.x,
    //   inter_coord.iniEscalera_1_6.y,
    //   inter_coord.iniEscalera_1_6.z
    //  ) );
    //  points.push( new THREE.Vector3( 
    //   inter_coord.pre_kiosko.x,
    //   inter_coord.pre_kiosko.y,
    //   inter_coord.pre_kiosko.z
    //  ) );
    //  points.push( new THREE.Vector3( 
    //   main_coord.kiosko.x,
    //   main_coord.kiosko.y,
    //   main_coord.kiosko.z
    //  ) );
    //  points.push( new THREE.Vector3( 
    //   main_coord.entrada_2.x,
    //   main_coord.entrada_2.y,
    //   main_coord.entrada_2.z
    //  ) );

    const geometry2 = new THREE.BufferGeometry().setFromPoints(points);

    const line = new THREE.Line(geometry2, material2);

    //scene.add(line);



    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResetClick = () => {
      const { x, y, z } = initialCameraPosition;
      camera.position.set(x, y, z);
      controls.target.set(0, 0, 0); // Reset the camera target to the origin
      controls.update();
    };

    

    renderer.render(scene, camera);

    /* Reajuste automàtico de tamaño */
    const resize = () => {
      const updatedWidth = currentRef.clientWidth;
      const updatedHeight = currentRef.clientHeight;
      renderer.setSize(updatedWidth, updatedHeight);
      camera.aspect = updatedWidth / updatedHeight;
      camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', resize)

    // Agregando elementos (por piso) a las listas
    const objetosPiso01=[];
    const objetosPiso02=[];
    const objetosPiso03=[];

    objetosPiso01.push(piso01);
    objetosPiso01.push(trazoRutaPiso01);
    objetosPiso01.push(pisoParque);
    objetosPiso01.push(camino1);
    objetosPiso01.push(entrada1);
    objetosPiso01.push(entrada2);
    objetosPiso01.push(entrada3);
    objetosPiso01.push(atencionDoc);
    objetosPiso01.push(economia);
    objetosPiso01.push(dga);
    objetosPiso01.push(cerseu);
    objetosPiso01.push(direccionEscuela);
    objetosPiso01.push(usgom);
    objetosPiso01.push(SSHH_Sistemas_1);
    objetosPiso01.push(auditorio);
    objetosPiso01.push(aulas100);
    objetosPiso01.push(quiosco);
    objetosPiso01.push(aulas100v2);
    objetosPiso01.push(losaDeportiva);
    objetosPiso01.push(vestidores);
    objetosPiso01.push(SSHH_Software_1);
    objetosPiso01.push(aulasNuevoPabellon1);
    objetosPiso01.push(aulasNuevoPabellon1_v2);
    objetosPiso01.push(capilla);
    objetosPiso01.push(escalera1_1_1Parte1);
    objetosPiso01.push(escalera1_1_1Parte2);
    objetosPiso01.push(escalera1_1_2Parte1);
    objetosPiso01.push(escalera1_1_2Parte2);
    objetosPiso01.push(escalera2_1_3Parte1);
    objetosPiso01.push(escalera2_1_3Parte2);
    objetosPiso01.push(escalera3_1_4Parte1);
    objetosPiso01.push(escalera3_1_4Parte2);
    objetosPiso01.push(escalera3_1_5Parte1);
    objetosPiso01.push(escalera3_1_5Parte2);
    objetosPiso01.push(escaleraParqueSubida);
    objetosPiso01.push(escaleraParqueSubida2);

    
    // objetosPiso01.push(escalera1_1);
    // objetosPiso01.push(escalera1_2);
    // objetosPiso01.push(escalera1_3);
    // objetosPiso01.push(escalera1_4);
    // objetosPiso01.push(escalera1_5);
    // objetosPiso01.push(escaleraParque);

    objetosPiso02.push(piso02);
    objetosPiso02.push(trazoRutaPiso02);
    objetosPiso02.push(camino2);
    objetosPiso02.push(SSHH_Sistemas_2);
    objetosPiso02.push(SSHH_Software_2);
    objetosPiso02.push(comedor);
    objetosPiso02.push(LaboratoriosNuevoPabellon);
    objetosPiso02.push(aulasNuevoPabellon2_v2);
    objetosPiso02.push(microDataCenter);
    objetosPiso02.push(decanato);
    objetosPiso02.push(aulas200);
    objetosPiso02.push(aulas200v2);
    objetosPiso02.push(tercio);
    objetosPiso02.push(Magna);
    objetosPiso02.push(salaCatedraticos);
    
    objetosPiso02.push(escalera1_2_1Parte1);
    objetosPiso02.push(escalera1_2_1Parte2);
    objetosPiso02.push(escalera1_2_2Parte1);
    objetosPiso02.push(escalera1_2_2Parte2);
    objetosPiso02.push(escalera2_2_3Parte1);
    objetosPiso02.push(escalera2_2_3Parte2);
    objetosPiso02.push(escalera3_2_4Parte1);
    objetosPiso02.push(escalera3_2_4Parte2);
    objetosPiso02.push(escalera3_2_5Parte1);
    objetosPiso02.push(escalera3_2_5Parte2);
    
    objetosPiso03.push(piso03);
    objetosPiso03.push(trazoRutaPiso03);
    objetosPiso03.push(camino3);
    objetosPiso03.push(musica);
    objetosPiso03.push(publicidad);
    objetosPiso03.push(SSHH_Sistemas_3);
    objetosPiso03.push(SSHH_Software_3);
    objetosPiso03.push(UNAYOE);
    objetosPiso03.push(Matricula);
    objetosPiso03.push(dirSoft);
    objetosPiso03.push(dirSist);
    objetosPiso03.push(soporte);
    objetosPiso03.push(DepAcaSist);
    objetosPiso03.push(Laboratorios3_1);
    objetosPiso03.push(Laboratorios3_2);


    const eliminarPiso = (numero) => {
      switch (numero) {
        case 1:
          for(const element in objetosPiso01){
            scene.remove(objetosPiso01[element]);
          }
          break;
        case 2:
          for(const element in objetosPiso02){
            scene.remove(objetosPiso02[element]);
          }
          break;
        case 3:
          for(const element in objetosPiso03){
            scene.remove(objetosPiso03[element]);
          }
          break;
      
        default:
          break;
      }
    }

    const agregarPiso = (numero) => {
      switch (numero) {
        case 1:
          for(const element in objetosPiso01){
            if(capilla===objetosPiso01[element]){
              console.log(element)
            }
            scene.add(objetosPiso01[element]);
          }
          break;
        case 2:
          for(const element in objetosPiso02){
            scene.add(objetosPiso02[element]);
          }
          break;
        case 3:
          for(const element in objetosPiso03){
            scene.add(objetosPiso03[element]);
          }
          break;
      
        default:
          break;
      }
    }

    controlsRef.current = { handleResetClick, generarTrazadorRuta, eliminarPiso, agregarPiso };

    return () => {
      currentRef.removeChild(renderer.domElement);
      window.addEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    controlsRef.current.handleResetClick();
  }, [position]);

  useEffect(() => {
    if(estadoPiso01){
      controlsRef.current.agregarPiso(1);
    }else{
      controlsRef.current.eliminarPiso(1);
    }
  }, [estadoPiso01]);

  useEffect(() => {
    if(estadoPiso02){
      controlsRef.current.agregarPiso(2);
    }else{
      controlsRef.current.eliminarPiso(2);
    }
  }, [estadoPiso02]);

  useEffect(() => {
    if(estadoPiso03){
      controlsRef.current.agregarPiso(3);
    }else{
      controlsRef.current.eliminarPiso(3);
    }
  }, [estadoPiso03]);
  
  function callGenerarTrazadorRuta(origen, destino, tipo){
    if (tipo === 'origen') {
      currentOrigen = origen;
    } else if (tipo === 'destino') {
      currentDestino = destino;
    }
    controlsRef.current.generarTrazadorRuta(currentOrigen, currentDestino);
  }

  return (
    <div className="container-principal">
      <div className="container-inputs">
        <TextInputs tipo={'origen'} generarTrazadorRuta={callGenerarTrazadorRuta} />
        <TextInputs tipo={'destino'} generarTrazadorRuta={callGenerarTrazadorRuta} />
      </div>
      <div ref={mountRef} className="container-3d"></div>
      <div className='barra-inferior'>
        <div>
          <button onClick={() => setPosition(!position)}>Reset position</button>
        </div>
        <div className="control-pisos">
          <ButtonCheckBox tipo={'piso01'} setEstado={setEstadoPiso01} />
          <ButtonCheckBox tipo={'piso02'} setEstado={setEstadoPiso02} />
          <ButtonCheckBox tipo={'piso03'} setEstado={setEstadoPiso03} />
        </div>
      </div>
    </div>
  );
}

export default Model3d;
