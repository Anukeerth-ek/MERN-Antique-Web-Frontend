// src/ARViewer.js
import React, { useEffect } from 'react';
import * as THREE from 'three';
import {ARjs} from 'ar.js'

const ARViewer = () => {
  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Set up AR.js
    const arToolkitSource = new ARjs.Source({
      sourceType: 'webcam',
    });

    const arToolkitContext = new ARjs.Context({
      cameraParametersUrl: ARjs.Context.baseURL + 'data/camera_para.dat',
      detectionMode: 'mono',
    });

    arToolkitSource.init(() => {
      arToolkitContext.init(() => {
        camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
      });
    });

    // Handle resize
    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      arToolkitSource.onResizeElement();
      arToolkitSource.copyElementSizeTo(renderer.domElement);
      if (arToolkitContext.arController !== null) {
        arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
      }
    });

    // Render loop
    const render = () => {
      if (arToolkitSource.ready) {
        arToolkitContext.update(arToolkitSource.domElement);
      }
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };
    render();

    // Add your 3D model (antique item) to the scene
    const loader = new THREE.GLTFLoader();
    loader.load('path_to_your_3d_model.glb', (gltf) => {
      scene.add(gltf.scene);
    });
  }, []);

  return <div id="ar-container" />;
};

export default ARViewer;
