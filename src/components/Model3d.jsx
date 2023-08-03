import React from "react";
import "../style-sheets/Model3d.css";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { main_coord , inter_coord} from "../route_coordinates/Coordinates";

function Model3d() {
  const mountRef = useRef(null);
  const controlsRef  = useRef(null);
  const [position, setPosition] = useState(false);
  
  useEffect(() => {
    const initialCameraPosition = {
      x: 6,
      y: 5,
      z: 8,
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

    /* Funciones posicion */
    const ajustarEjeVertical = (objeto, valor) => {
      return -(valor - objeto.geometry.parameters.height + objeto.geometry.parameters.height/2);
    }

    const createObject = (dimX, dimY, dimZ, ejeX, ejeY, ejeZ, material) => {
      const objeto = new THREE.Mesh(new THREE.BoxGeometry(dimX, dimY, dimZ), material);
      scene.add(objeto);
      objeto.position.x = ejeX;
      objeto.position.y = ajustarEjeVertical(objeto,ejeY);
      objeto.position.z = ejeZ;
      return objeto;
    }

    /* Pisos */
      // PRIMER PISO
      const shapePiso01 = new THREE.Shape();
      shapePiso01.moveTo( 4, 1.5 ); // X, Z
      shapePiso01.lineTo( 4, -4.5 ); // esquina recepcion aulas 100
      shapePiso01.lineTo( 9, -4.5 ); // aulas 100
      shapePiso01.lineTo( 9, -2 ); // quiosco y gradas
      shapePiso01.lineTo( 11, -2 ); // quiosco y gradas
      shapePiso01.lineTo( 11, -4.5 );
      shapePiso01.lineTo( 13, -4.5 ); // aulas 100 lateral
      shapePiso01.lineTo( 13, -9 );
      shapePiso01.lineTo( 4, -9 ); // aulas 100 lateral
      shapePiso01.lineTo( 4, -9 ); // aulas 100 lateral
      shapePiso01.lineTo( 4, -25 ); // maquinas expendedoras
      shapePiso01.lineTo( 12, -25 ); // maquinas expendedoras
      shapePiso01.lineTo( 12, -32 ); // software pared este
      shapePiso01.lineTo( -2, -32 ); // software pared norte
      shapePiso01.lineTo( -2, -25 ); // software pared oeste
      shapePiso01.lineTo( 1.5, -25 ); // software pared sur
      shapePiso01.lineTo( 1.5, -24 ); // espacio
      shapePiso01.lineTo( -3, -24 ); // mini parque
      shapePiso01.lineTo( -3, -22 ); 
      shapePiso01.lineTo( 1.5, -22 ); // fin parque
      shapePiso01.lineTo( 1.5, -21 ); // pasillo
      shapePiso01.lineTo( -3, -21 ); // Auditorio
      shapePiso01.lineTo( -3, -15 ); // Auditorio
      shapePiso01.lineTo( 1.5, -15 ); // Fin Auditorio
      shapePiso01.lineTo( -1, -16 ); // baños
      shapePiso01.lineTo( -1, -12 ); // baños
      shapePiso01.lineTo( -1, -10 ); // gradas
      shapePiso01.lineTo( -1, -9 ); // espacio
      shapePiso01.lineTo( -1, -8 ); // usgom
      shapePiso01.lineTo( -1, -7 ); // espacio
      shapePiso01.lineTo( -1, -4.5); // direccion de escuela

      shapePiso01.lineTo( -3, -4.5 );
      shapePiso01.lineTo( -3, 1.5 );
      shapePiso01.moveTo( 4, 1.5 );
      
    const extrudeSettings = {
      depth: 0.1,
      bevelEnabled: false,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelOffset: 0,
      bevelSegments: 0
    };
      
    const geometryPiso01 = new THREE.ExtrudeGeometry( shapePiso01, extrudeSettings );
    const materialPiso01 = new THREE.MeshStandardMaterial( { color: 0x4A4E69 } );
    const piso01 = new THREE.Mesh( geometryPiso01, materialPiso01 ) ;
    piso01.rotation.x = 3.141593/2;
    piso01.position.y = -2;
    scene.add( piso01 );

    // SEGUNDO PISO

    const shapePiso02 = new THREE.Shape();
      shapePiso02.moveTo( 4, 1.5 ); // X, Z
      shapePiso02.lineTo( 4, -4.5 ); // esquina recepcion aulas 100
      shapePiso02.lineTo( 9, -4.5 ); // aulas 100
      shapePiso02.lineTo( 9, -2 ); // quiosco y gradas
      shapePiso02.lineTo( 11, -2 ); // quiosco y gradas
      shapePiso02.lineTo( 11, -4.5 );
      shapePiso02.lineTo( 13, -4.5 ); // aulas 100 lateral
      shapePiso02.lineTo( 13, -9 );
      shapePiso02.lineTo( 4, -9 ); // aulas 100 lateral
      shapePiso02.lineTo( 4, -9 ); // aulas 100 lateral
      shapePiso02.lineTo( 4, -25 ); // maquinas expendedoras
      shapePiso02.lineTo( 12, -25 ); // maquinas expendedoras
      shapePiso02.lineTo( 12, -32 ); // software pared este
      shapePiso02.lineTo( -2, -32 ); // software pared norte
      shapePiso02.lineTo( -2, -25 ); // software pared oeste
      shapePiso02.lineTo( 1.5, -25 ); // software pared sur
      shapePiso02.lineTo( 1.5, -24 ); // espacio
      shapePiso02.lineTo( 1.5, -22 ); // fin parque
      shapePiso02.lineTo( 1.5, -21 ); // pasillo
      shapePiso02.lineTo( -3, -21 ); // Auditorio
      shapePiso02.lineTo( -3, -15 ); // Auditorio
      shapePiso02.lineTo( 1.5, -15 ); // Fin Auditorio
      shapePiso02.lineTo( -1, -16 ); // baños
      shapePiso02.lineTo( -1, -12 ); // baños
      shapePiso02.lineTo( -1, -10 ); // gradas
      shapePiso02.lineTo( -1, -9 ); // espacio
      shapePiso02.lineTo( -1, -8 ); // usgom
      shapePiso02.lineTo( -1, -7 ); // espacio
      shapePiso02.lineTo( -1, -4.5); // direccion de escuela

      shapePiso02.lineTo( -3, -4.5 );
      shapePiso02.lineTo( -3, 1.5 );
      shapePiso02.moveTo( 4, 1.5 );

    const geometryPiso02 = new THREE.ExtrudeGeometry( shapePiso02, extrudeSettings );
    const materialPiso02 = new THREE.MeshStandardMaterial( { color: 0x4A4E69 } );
    const piso02 = new THREE.Mesh( geometryPiso02, materialPiso02 ) ;
    piso02.rotation.x = 3.141593/2;
    piso02.position.y = -0;
    //scene.add( piso02 );
    

    // CAMINO 1ER PISO
    const shapeCamino1 = new THREE.Shape();

    shapeCamino1.moveTo( 0.5, 1.7 ); // inicio derecho
    shapeCamino1.lineTo( 0.5, -0.5 ); // recepcion1
    shapeCamino1.lineTo( 3.5, -0.5 ); // recepcion2

    shapeCamino1.lineTo( 3.5, -6.25 ); // pasillo salones derecho
    shapeCamino1.lineTo( 4, -6.25 ); // pasillo salones largo

    shapeCamino1.lineTo( 9.9, -6.25 ); // pasillo salida izquierdo
    shapeCamino1.lineTo( 9.9, -4.3 ); // pasillo salida izquierdo
    shapeCamino1.lineTo( 8, -4.3 ); // pasillo salida izquierdo
    shapeCamino1.lineTo( 8 , -3.3 ); // pasillo salida derecho
    shapeCamino1.lineTo( 10.1, -3.3 ); // pasillo salida derecho
    
    shapeCamino1.lineTo( 10.9, -3.3 ); // pasillo escaleras derecho
    shapeCamino1.lineTo( 10.9, -4.3 ); // pasillo escaleras izquierda

    shapeCamino1.lineTo( 10.9, -6.25 ); // pasillo salida derecho

    shapeCamino1.lineTo( 12.5, -6.25 ); // pasillo salones largo
    
    shapeCamino1.lineTo( 12.5, -6.25 ); // pasillo salida izquierdo
    shapeCamino1.lineTo( 12.5, -7.25 ); // pasillo salones largo
    shapeCamino1.lineTo( 4, -7.25 ); // pasillo salones largo
    shapeCamino1.lineTo( 3.5, -7.25 ); // pasillo salones izquierdo
    
    shapeCamino1.lineTo( 3.5, -28 ); // pasillo software

    shapeCamino1.lineTo( 11, -28 ); // pasillo software
    shapeCamino1.lineTo( 11, -29 ); // pasillo software
    shapeCamino1.lineTo( -1.5, -29 ); // pasillo software
    shapeCamino1.lineTo( -1.5, -28 ); // pasillo software

    shapeCamino1.lineTo( 2.5, -28 ); // pasillo principal
    shapeCamino1.lineTo( 2.5, -1.5 ); // recepcion2
    shapeCamino1.lineTo( -0.5, -1.5 ); // recepcion1
    shapeCamino1.lineTo( -0.5, 1.7 ); // inicio izquierdo
    
    shapeCamino1.lineTo( 0.5, 1.7 );

    const geometryCamino = new THREE.ExtrudeGeometry( shapeCamino1, extrudeSettings );
    const materialCamino = new THREE.MeshStandardMaterial( { color: 0x9A8C98 } );
    const camino1 = new THREE.Mesh( geometryCamino, materialCamino ) ;
    camino1.rotation.x = 3.141593/2;
    camino1.position.y = -1.9;
    scene.add( camino1 );

    // CAMINO 2DO PISO
    const shapeCamino2 = new THREE.Shape();
    shapeCamino2.moveTo( 2.5, -0.5 ); // inicio derecho
    shapeCamino2.lineTo( 3.5, -0.5 ); // recepcion2

    shapeCamino2.lineTo( 3.5, -6.25 ); // pasillo salones derecho
    shapeCamino2.lineTo( 4, -6.25 ); // pasillo salones largo

    shapeCamino2.lineTo( 9.9, -6.25 ); // pasillo salida izquierdo
    shapeCamino2.lineTo( 9.9, -4.3 ); // pasillo salida izquierdo
    shapeCamino2.lineTo( 10.1, -3.3 ); // pasillo salida derecho
    
    shapeCamino2.lineTo( 10.9, -3.3 ); // pasillo escaleras derecho
    shapeCamino2.lineTo( 10.9, -4.3 ); // pasillo escaleras izquierda

    shapeCamino2.lineTo( 10.9, -6.25 ); // pasillo salida derecho

    shapeCamino2.lineTo( 12.5, -6.25 ); // pasillo salones largo
    
    shapeCamino2.lineTo( 12.5, -6.25 ); // pasillo salida izquierdo
    shapeCamino2.lineTo( 12.5, -7.25 ); // pasillo salones largo
    shapeCamino2.lineTo( 4, -7.25 ); // pasillo salones largo
    shapeCamino2.lineTo( 3.5, -7.25 ); // pasillo salones izquierdo
    
    shapeCamino2.lineTo( 3.5, -28 ); // pasillo software

    shapeCamino2.lineTo( 11, -28 ); // pasillo software
    shapeCamino2.lineTo( 11, -29 ); // pasillo software
    shapeCamino2.lineTo( -1.5, -29 ); // pasillo software
    shapeCamino2.lineTo( -1.5, -28 ); // pasillo software

    shapeCamino2.lineTo( 2.5, -28 ); // pasillo principal
    shapeCamino2.lineTo( 2.5, -1.5 ); // recepcion2
    
    shapeCamino2.lineTo( 2.5, -0.5 );

    const geometryCamino2 = new THREE.ExtrudeGeometry( shapeCamino2, extrudeSettings );
    const materialCamino2 = new THREE.MeshStandardMaterial( { color: 0x9A8C98 } );
    const camino2 = new THREE.Mesh( geometryCamino2, materialCamino2 ) ;
    camino2.rotation.x = 3.141593/2;
    camino2.position.y = 0.1;
    //scene.add( camino2 );


    // const camino1 = createObject(1,0.1,1.5,
                                  //0,2,0.9,
                                  //new THREE.MeshStandardMaterial({ color: 0x9A8C98 }));


    /* Aulas */

    // MATERIALES
    const material1 = new THREE.MeshStandardMaterial({ color: 0xC9ADA7 });
    const materialAulas = new THREE.MeshStandardMaterial({ color: 0xF2E9E4 });
    const materialEscenarios = new THREE.MeshStandardMaterial({ color: 0x83c5be });
    const materialAdministrativos = new THREE.MeshStandardMaterial({ color: 0xf28482 });
    const materialSSHH = new THREE.MeshStandardMaterial({ color: 0x90e0ef });
    const materialDeportes = new THREE.MeshStandardMaterial({ color: 0xc7f9cc });
    
    const atencionDoc = createObject(1, 0.5, 1, // 
                                      1.5, 2, 0.9,
                                      materialAdministrativos);
    

    const economia = createObject(1.9,0.5,1.3,
                                  -2,2,-1,
                                  materialAdministrativos);

    const dga = createObject(2.5,0.5,2.5,
      -1.70,2,-3.2,
      materialAdministrativos);

    const cerseu = createObject(2,0.5,1.8,
                              0.9,2,-2.9,
                              materialAdministrativos);

    const direccionEscuela = createObject(1.5,0.5,2,
                                          1.13,2,-5.5,
                                          materialAdministrativos);

    const usgom = createObject(1.5,0.5,1.8,
                              1.13,2,-8,
                              materialAdministrativos);

    
    const SSHH_Sistemas_1 = createObject(1.5,0.5,3,
                                  1.13,2,-13,
                                  materialSSHH);

    const auditorio = createObject(4,0.5,5,
                                  -0.2,2,-18,
                                  materialEscenarios);
    
    const aulas100 = createObject(4.7,0.5,1.5,
      6.5,2,-5.3,
      materialAulas); 

    const quiosco = createObject(0.9,0.5,1,
      9.5,2,-2.5,
      material1); 
    
    const aulas100v2 = createObject(8.7,0.5,1.5,
      8.5,2,-8.2,
      materialAulas); 
    
    const capilla = createObject(1.5,0.5,1,
      8,2,-10,
      material1);

    const vestidores = createObject(5,0.5,8,
      9,2,-19,
      materialDeportes);

    const losaDeportiva = createObject(3,0.5,1,
      10.5,2,-12,
      materialDeportes);

    const SSHH_Software_1 = createObject(2,0.5,2,
      7,2,-26,
      materialSSHH); 
    
    const aulasNuevoPabellon1 = createObject(5,0.5,2,
      6.5,2,-31,
      materialAulas); 
    
    const aulasNuevoPabellon1_v2 = createObject(3.9,0.5,2,
      0,2,-31,
      materialAulas); 


      /* Linea */

    const material2 = new THREE.LineBasicMaterial( { color: 0x0000ff, linewidth: 0.1 });
    const points = [];
    points.push( new THREE.Vector3(
      main_coord.entrada_1.x,
      main_coord.entrada_1.y,
      main_coord.entrada_1.z ) );
    points.push( new THREE.Vector3( 
      inter_coord.dob_1_1.x,
      inter_coord.dob_1_1.y,
      inter_coord.dob_1_1.z
     ) );
     points.push( new THREE.Vector3(
      main_coord.economia.x,
      main_coord.economia.y,
      main_coord.economia.z
     ) );
     points.push( new THREE.Vector3( 
      inter_coord.dob_1_1.x,
      inter_coord.dob_1_1.y,
      inter_coord.dob_1_1.z
     ) );

     points.push( new THREE.Vector3( 
      main_coord.dga.x,
      main_coord.dga.y,
      main_coord.dga.z
     ) );

     points.push( new THREE.Vector3( 
      inter_coord.dob_1_1.x,
      inter_coord.dob_1_1.y,
      inter_coord.dob_1_1.z
     ) );
     points.push( new THREE.Vector3( 
      inter_coord.pre_cerceu.x,
      inter_coord.pre_cerceu.y,
      inter_coord.pre_cerceu.z
     ) );
     points.push( new THREE.Vector3( 
      main_coord.cerseu.x,
      main_coord.cerseu.y,
      main_coord.cerseu.z
     ) );
     points.push( new THREE.Vector3( 
      inter_coord.pre_AtDoc.x,
      inter_coord.pre_AtDoc.y,
      inter_coord.pre_AtDoc.z
     ) );
     points.push( new THREE.Vector3( 
      main_coord.atDoc.x,
      main_coord.atDoc.y,
      main_coord.atDoc.z
     ) );
     points.push( new THREE.Vector3( 
      inter_coord.dob_1_2.x,
      inter_coord.dob_1_2.y,
      inter_coord.dob_1_2.z
     ) );
     points.push( new THREE.Vector3( 
      inter_coord.iniEscalera_1_1.x,
      inter_coord.iniEscalera_1_1.y,
      inter_coord.iniEscalera_1_1.z
     ) );
     points.push( new THREE.Vector3( 
      inter_coord.pre_CC.x,
      inter_coord.pre_CC.y,
      inter_coord.pre_CC.z
     ) );
     points.push( new THREE.Vector3( 
      main_coord.CC.x,
      main_coord.CC.y,
      main_coord.CC.z
     ) );
     points.push( new THREE.Vector3( 
      inter_coord.pre_USGOM.x,
      inter_coord.pre_USGOM.y,
      inter_coord.pre_USGOM.z
     ) );
     points.push( new THREE.Vector3( 
      inter_coord.pre_escalera_1_2.x,
      inter_coord.pre_escalera_1_2.y,
      inter_coord.pre_escalera_1_2.z
     ) );
     points.push( new THREE.Vector3( 
      inter_coord.iniEscalera_1_2.x,
      inter_coord.iniEscalera_1_2.y,
      inter_coord.iniEscalera_1_2.z
     ) );
     points.push( new THREE.Vector3( 
      inter_coord.pre_SSHH_1_1.x,
      inter_coord.pre_SSHH_1_1.y,
      inter_coord.pre_SSHH_1_1.z
     ) );
     points.push( new THREE.Vector3( 
      main_coord.SSHH_1_1.x,
      main_coord.SSHH_1_1.y,
      main_coord.SSHH_1_1.z
     ) );
     points.push( new THREE.Vector3( 
      inter_coord.pre_auditorio.x,
      inter_coord.pre_auditorio.y,
      inter_coord.pre_auditorio.z
     ) );
     points.push( new THREE.Vector3( 
      main_coord.auditorio.x,
      main_coord.auditorio.y,
      main_coord.auditorio.z
     ) );
     points.push( new THREE.Vector3( 
      inter_coord.pre_escalera_1_4.x,
      inter_coord.pre_escalera_1_4.y,
      inter_coord.pre_escalera_1_4.z
     ) );

     points.push( new THREE.Vector3( 
       main_coord.SSHH_1_2.x,
       main_coord.SSHH_1_2.y,
       main_coord.SSHH_1_2.z
       ) );
    points.push( new THREE.Vector3( 
    inter_coord.pre_aulaNP.x,
    inter_coord.pre_aulaNP.y,
    inter_coord.pre_aulaNP.z
    ) );
    points.push( new THREE.Vector3( 
      inter_coord.pre_escalera_1_5.x,
      inter_coord.pre_escalera_1_5.y,
      inter_coord.pre_escalera_1_5.z
      ) );
    points.push( new THREE.Vector3( 
      main_coord.aulaNP.x,
      main_coord.aulaNP.y,
      main_coord.aulaNP.z
      ) );
    points.push( new THREE.Vector3( 
      inter_coord.pre_SSHH_1_2.x,
      inter_coord.pre_SSHH_1_2.y,
      inter_coord.pre_SSHH_1_2.z
     ) );
     points.push( new THREE.Vector3( 
      inter_coord.iniEscalera_1_4.x,
      inter_coord.iniEscalera_1_4.y,
      inter_coord.iniEscalera_1_4.z
     ) );
     points.push( new THREE.Vector3( 
      main_coord.USGOM.x,
      main_coord.USGOM.y,
      main_coord.USGOM.z
     ) );
     points.push( new THREE.Vector3( 
      inter_coord.dob_1_3.x,
      inter_coord.dob_1_3.y,
      inter_coord.dob_1_3.z
     ) );
     points.push( new THREE.Vector3( 
      inter_coord.pre_aulas100.x,
      inter_coord.pre_aulas100.y,
      inter_coord.pre_aulas100.z
     ) );
     points.push( new THREE.Vector3( 
      main_coord.aulas100.x,
      main_coord.aulas100.y,
      main_coord.aulas100.z
     ) );
     points.push( new THREE.Vector3( 
      inter_coord.dob_1_4.x,
      inter_coord.dob_1_4.y,
      inter_coord.dob_1_4.z
     ) );
     points.push( new THREE.Vector3( 
      inter_coord.dob_1_5.x,
      inter_coord.dob_1_5.y,
      inter_coord.dob_1_5.z
     ) );
     points.push( new THREE.Vector3( 
      inter_coord.iniEscalera_1_6.x,
      inter_coord.iniEscalera_1_6.y,
      inter_coord.iniEscalera_1_6.z
     ) );
     points.push( new THREE.Vector3( 
      inter_coord.pre_kiosko.x,
      inter_coord.pre_kiosko.y,
      inter_coord.pre_kiosko.z
     ) );
     points.push( new THREE.Vector3( 
      main_coord.kiosko.x,
      main_coord.kiosko.y,
      main_coord.kiosko.z
     ) );
     points.push( new THREE.Vector3( 
      main_coord.entrada_2.x,
      main_coord.entrada_2.y,
      main_coord.entrada_2.z
     ) );

    const geometry2 = new THREE.BufferGeometry().setFromPoints( points );

    const line = new THREE.Line( geometry2, material2 );

    scene.add( line );
    


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

    controlsRef.current = {handleResetClick};

    renderer.render(scene, camera);

    /* Reajuste automàtico de tamaño */
    const resize = ()=>{
      const updatedWidth = currentRef.clientWidth;
      const updatedHeight = currentRef.clientHeight;
      renderer.setSize(updatedWidth,updatedHeight);
      camera.aspect = updatedWidth / updatedHeight;
      camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', resize)

    return () => {
      currentRef.removeChild(renderer.domElement);
      window.addEventListener('resize',resize);
    };
  }, []);

  useEffect(() => {
    controlsRef.current.handleResetClick();
  },[position]);


  return (
    <div className="container-principal">
      <div ref={mountRef} className="container-3d"></div>
      <button onClick={() => setPosition(!position)}>Reset position</button>
    </div>
  );
}

export default Model3d;
