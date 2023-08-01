import React from "react";
import "../style-sheets/Model3d.css";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

function Model3d() {
  const mountRef = useRef(null);
  const buttonResetRef = useRef(null);
  const [initialCameraPosition, setInitialCameraPosition] = useState({ x: 6, y: 4, z: 6 });
  
  useEffect(() => {
    const currentRef = mountRef.current;
    const { clientWidth: width, clientHeight: height } = currentRef;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 1000);
    camera.position.set(initialCameraPosition.x, initialCameraPosition.y, initialCameraPosition.z);
    
    // Restablecer la posición de la cámara a la posición inicial almacenada en el estado

    scene.background = new THREE.Color(0xbde0fe);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    currentRef.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableRotate = false;
    controls.dampingFactor = 0.04;
    controls.minDistance = 1;
    controls.maxDistance = 15;

    /* Cubos */
    const geometry = new THREE.BoxGeometry(6, 0.1, 3);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff04 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const cube2 = cube.clone();
    cube2.position.y = 2;
    scene.add(cube2);

    const cube3 = cube.clone();
    cube3.position.y = -2;
    scene.add(cube3);

    const cube4 = cube.clone();
    cube4.position.y = -2;
    cube4.geometry = new THREE.BoxGeometry(1, 0.5, 1);
    scene.add(cube4);
    

    /* Linea */

    const material2 = new THREE.LineBasicMaterial( { color: 0x0000ff, linewidth: 10 });
    const points = [];
    points.push( new THREE.Vector3( - 2, 0, 0 ) );
    points.push( new THREE.Vector3( 0, 2, 0 ) );
    points.push( new THREE.Vector3( 2, 0, 0 ) );
    points.push( new THREE.Vector3( 2, 2, 0 ) );

    const geometry2 = new THREE.BufferGeometry().setFromPoints( points );

    const line = new THREE.Line( geometry2, material2 );

    scene.add( line );
    /* Iluminacion */

    const AmbientalLight = new THREE.AmbientLight( 0x404040, 5 ); // soft white light
    scene.add( AmbientalLight );

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7); // Posición de la luz en el espacio 3D
    scene.add(directionalLight);


    const animate  = () => {
      controls.update();
      renderer.render(scene,camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResetClick = () => {
      camera.position.set(initialCameraPosition.x, initialCameraPosition.y, initialCameraPosition.z);
      controls.update();
    }

    buttonResetRef.current?.addEventListener('click', handleResetClick);

    renderer.render(scene, camera);

    return () => {
      currentRef.removeChild(renderer.domElement);
    };
  }, [initialCameraPosition.x, initialCameraPosition.y, initialCameraPosition.z]);

  return (
  <div className="container-principal">
    <div ref={mountRef} className="container-3d"></div>
    <button ref={buttonResetRef} >Reset position</button>

  </div>
  );
}

export default Model3d;
