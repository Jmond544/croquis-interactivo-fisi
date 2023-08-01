import React from "react";
import "../style-sheets/Model3d.css";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

function Model3d() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentRef = mountRef.current;
    const { clientWidth: width, clientHeight: height } = currentRef;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 1000);
    camera.position.z = 6;
    camera.position.x = 6;
    
    scene.background = new THREE.Color(0xbde0fe);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    currentRef.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    /* Cubos */
    const geometry = new THREE.BoxGeometry(6, 0.1, 3);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const cube2 = cube.clone();
    cube2.position.y = 1;
    scene.add(cube2);

    const cube3 = cube.clone();
    cube3.position.y = -1;
    scene.add(cube3);
    
    camera.lookAt(cube.position);

    /* Linea */

    const material2 = new THREE.LineBasicMaterial( { color: 0x0000ff } );
    const points = [];
    points.push( new THREE.Vector3( - 2, 0, 0 ) );
    points.push( new THREE.Vector3( 0, 2, 0 ) );
    points.push( new THREE.Vector3( 2, 0, 0 ) );

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

    renderer.render(scene, camera);

    return () => {
      currentRef.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="container"></div>;
}

export default Model3d;
