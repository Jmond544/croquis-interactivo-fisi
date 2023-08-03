import React from "react";
import "../style-sheets/Model3d.css";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


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

      const shape = new THREE.Shape();
      shape.moveTo( 4, 1.5 );
      shape.lineTo( 4, -4.5 ); // esquina recepcion aulas 100
      shape.lineTo( 9, -4.5 ); // aulas 100
      shape.lineTo( 9, -2 ); // quiosco y gradas
      shape.lineTo( 11, -2 ); // quiosco y gradas
      shape.lineTo( 11, -4.5 );
      shape.lineTo( 13, -4.5 ); // aulas 100 lateral
      shape.lineTo( 13, -9 );
      shape.lineTo( 4, -9 ); // aulas 100 lateral
      shape.lineTo( 4, -9 ); // aulas 100 lateral
      shape.lineTo( 4, -25 ); // maquinas expendedoras
      shape.lineTo( 12, -25 ); // maquinas expendedoras
      shape.lineTo( 12, -32 ); // software pared este
      shape.lineTo( -2, -32 ); // software pared norte
      shape.lineTo( -2, -25 ); // software pared oeste
      shape.lineTo( 1.5, -25 ); // software pared sur
      shape.lineTo( 1.5, -24 ); // espacio
      shape.lineTo( -3, -24 ); // mini parque
      shape.lineTo( -3, -22 ); 
      shape.lineTo( 1.5, -22 ); // fin parque
      shape.lineTo( 1.5, -21 ); // pasillo
      shape.lineTo( -3, -21 ); // Auditorio
      shape.lineTo( -3, -15 ); // Auditorio
      shape.lineTo( 1.5, -15 ); // Fin Auditorio
      shape.lineTo( -1, -16 ); // baños
      shape.lineTo( -1, -12 ); // baños
      shape.lineTo( -1, -10 ); // gradas
      shape.lineTo( -1, -9 ); // espacio
      shape.lineTo( -1, -8 ); // usgom
      shape.lineTo( -1, -7 ); // espacio
      shape.lineTo( -1, -4.5); // direccion de escuela

      shape.lineTo( -3, -4.5 );
      shape.lineTo( -3, 1.5 );
      shape.moveTo( 4, 1.5 );
      
      const extrudeSettings = {
        depth: 0.1,
        bevelEnabled: false,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelOffset: 0,
        bevelSegments: 0
      };
      
    const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
    const material3 = new THREE.MeshStandardMaterial( { color: 0x4A4E69 } );
    const mesh = new THREE.Mesh( geometry, material3 ) ;
    mesh.rotation.x = 3.141593/2;
    mesh.position.y = -2;
    scene.add( mesh );

    // const material = new THREE.MeshStandardMaterial({ color: 0x4A4E69 });
    // const piso1 = createObject(6, 0.1, 6,
    //                             0,-2,0, material);
    // piso1.position.y = -2;
    // piso1.position.z = -1.5;

    // const piso2 = piso1.clone();
    // piso2.position.y = 0;
    // scene.add(piso2);

    // const piso3 = piso1.clone();
    // piso3.position.y = 2;
    // scene.add(piso3);




    /* Aulas */
    const material1 = new THREE.MeshStandardMaterial({ color: 0xC9ADA7 });
    const materialAulas = new THREE.MeshStandardMaterial({ color: 0xC9ADA7 });
    
    const atencionDoc = createObject(1,0.5,1,
                                      1.5,2,0.9,
                                      material1);
    
    const entrada = createObject(1,0.1,1.5,
                                  0,2,0.9,
                                  new THREE.MeshStandardMaterial({ color: 0x9A8C98 }));

    const economia = createObject(1.9,0.5,1.3,
                                  -2,2,-1,
                                  material1);

    const dga = createObject(2.5,0.5,2.5,
      -1.70,2,-3.2,
      material1);

    const cerseu = createObject(2,0.5,1.8,
                              0.9,2,-2.9,
                              material1);

    const direccionEscuela = createObject(1.5,0.5,2,
                                          1.13,2,-5.5,
                                          material1);

    const usgom = createObject(1.5,0.5,1.8,
                              1.13,2,-8,
                              material1);

    
    const SSHH_Sistemas_1 = createObject(1.5,0.5,3,
                                  1.13,2,-13,
                                  material1);

    const auditorio = createObject(4,0.5,5,
                                  -0.2,2,-18,
                                  material1);
    ;
    const aulas100 = createObject(4.7,0.5,1.5,
      6.5,2,-5.3,
      material1); 

    const quiosco = createObject(0.9,0.5,1,
      9.5,2,-2.5,
      material1); 
    
    const aulas100v2 = createObject(8.7,0.5,1.5,
      8.5,2,-8,
      material1); 
    
    const capilla = createObject(1.5,0.5,1,
      8,2,-10,
      material1);

    const vestidores = createObject(5,0.5,8,
      9,2,-19,
      material1);

    const losaDeportiva = createObject(3,0.5,1,
      10.5,2,-12,
      material1);

    const SSHH_Software_1 = createObject(2,0.5,2,
      7,2,-26,
      material1); 
    
    const aulasNuevoPabellon1 = createObject(5,0.5,2,
      6.5,2,-31,
      material1); 
    
    const aulasNuevoPabellon1_v2 = createObject(3.9,0.5,2,
      0,2,-31,
      material1); 


      /* Linea */

    // const material2 = new THREE.LineBasicMaterial( { color: 0x0000ff, linewidth: 10 });
    // const points = [];
    // points.push( new THREE.Vector3( - 2, 0, 0 ) );
    // points.push( new THREE.Vector3( 0, 2, 0 ) );
    // points.push( new THREE.Vector3( 2, 0, 0 ) );
    // points.push( new THREE.Vector3( 2, 2, 0 ) );

    // const geometry2 = new THREE.BufferGeometry().setFromPoints( points );

    // const line = new THREE.Line( geometry2, material2 );

    // scene.add( line );
    


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
