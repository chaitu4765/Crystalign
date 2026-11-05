import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

// Fixed-camera, illustrative dental study. Each tooth retains the same mesh
// throughout the sequence: only its translation and rotation are interpolated.
const renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});
renderer.setSize(1000,480);renderer.setPixelRatio(1);
renderer.setClearColor(0xfafaf8);renderer.shadowMap.enabled=true;
renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
document.body.appendChild(renderer.domElement);
const scene=new THREE.Scene();scene.background=new THREE.Color(0xfafaf8);
const pmrem=new THREE.PMREMGenerator(renderer);
scene.environment=pmrem.fromScene(new RoomEnvironment(),0.04).texture;
const camera=new THREE.OrthographicCamera(-4.65,4.65,2.232,-2.232,.1,100);
camera.position.set(.3,2.2,14);camera.lookAt(0,.04,-.3);
scene.add(new THREE.HemisphereLight(0xffffff,0x9a8a83,1.5));
const key=new THREE.DirectionalLight(0xfff8eb,3.1);key.position.set(-3,7,8);key.castShadow=true;
key.shadow.mapSize.set(2048,2048);key.shadow.camera.left=-6;key.shadow.camera.right=6;
key.shadow.camera.top=5;key.shadow.camera.bottom=-5;key.shadow.normalBias=.03;key.shadow.bias=-.0001;
scene.add(key);
const fill=new THREE.DirectionalLight(0xeaf3ff,1.5);fill.position.set(5,2,3);scene.add(fill);
const enamel=new THREE.MeshPhysicalMaterial({color:0xfff8e7,roughness:.25,metalness:0,clearcoat:.35,clearcoatRoughness:.23,envMapIntensity:.55});
const gumMaterial=new THREE.MeshPhysicalMaterial({color:0xc47a80,roughness:.5,clearcoat:.1,envMapIntensity:.35});
const teeth=[];
function toothGeometry(kind){
 const shape=new THREE.Shape();
 shape.moveTo(-.25,.48);shape.bezierCurveTo(-.4,.47,-.42,.28,-.43,.05);
 if(kind===2){shape.bezierCurveTo(-.43,-.15,-.29,-.44,0,-.57);shape.bezierCurveTo(.29,-.44,.43,-.15,.43,.05)}
 else {shape.bezierCurveTo(-.44,-.18,-.44,-.43,-.33,-.48);shape.bezierCurveTo(-.18,-.51,.18,-.51,.33,-.48);shape.bezierCurveTo(.44,-.43,.44,-.18,.43,.05)}
 shape.bezierCurveTo(.42,.28,.4,.47,.25,.48);shape.bezierCurveTo(.08,.53,-.08,.53,-.25,.48);
 const geo=new THREE.ExtrudeGeometry(shape,{depth:kind>2?.5:.27,steps:3,bevelEnabled:true,bevelSegments:7,bevelSize:.075,bevelThickness:.10,curveSegments:18});
 // Slightly convex labial surface, rather than a flat extruded face.
 const pos=geo.attributes.position;
 for(let j=0;j<pos.count;j++){let x=pos.getX(j),y=pos.getY(j),z=pos.getZ(j);if(z>.1){z+=.075*Math.max(0,1-(x/.5)**2)*Math.max(0,1-(y/.6)**2);pos.setZ(j,z)}}
 geo.translate(0,0,-.15);geo.computeVertexNormals();return geo;
}
const geos=[0,1,2,3,4,5].map(toothGeometry);
const angles=[.145,.425,.69,.96,1.20,1.43];
for(let row=0;row<2;row++){
 const lower=row===1;
 // A continuous rounded gum arch, with an enamel-to-gum transition.
 const pts=[];for(let i=0;i<=100;i++){let a=-1.64+i/100*3.28;pts.push(new THREE.Vector3((lower?3.05:3.2)*Math.sin(a),lower?-1.13:1.13,-2.5*(1-Math.cos(a))-(lower?.16:0)))}
 const gum=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),120,.34,24,false),gumMaterial);
 gum.scale.y=1.12;gum.castShadow=true;gum.receiveShadow=true;scene.add(gum);
 for(let side of [-1,1])for(let i=0;i<6;i++){
  const angle=side*angles[i],mesh=new THREE.Mesh(geos[i],enamel);
  const width=(i===0?1:i===1?.87:i===2?.9:.98)*(lower?.9:1);
  mesh.scale.set(width,lower?.82:1,1);
  const base=new THREE.Vector3((lower?3.05:3.2)*Math.sin(angle),lower?-.59:.58,-2.5*(1-Math.cos(angle))-(lower?.17:0));
  const rotation=new THREE.Euler(lower?Math.PI:0,lower?-angle:angle,0);
  // Staggered incisors, mild crowding and rotated canines at the start.
  const strength=i<3?1:i===3?.35:0;
  const offset=new THREE.Vector3(side*(i===0?.1:i===1?-.22:-.13)*strength,(lower?-1:1)*[.06,-.12,.17,0,0,0][i],((i+row+(side>0?1:0))%2===0?.29:-.32)*strength);
  const twist=side*[.30,-.50,.33,.12,0,0][i]*(lower?-.85:1);
  const lean=side*[.10,-.16,.14,.03,0,0][i];
  teeth.push({mesh,base,rotation,offset,twist,lean});mesh.castShadow=true;mesh.receiveShadow=true;scene.add(mesh);
 }
}
// Soft grounding on a neutral studio surface, no patient photographs.
const floor=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.ShadowMaterial({opacity:.11}));
floor.rotation.x=-Math.PI/2;floor.position.y=-1.65;floor.receiveShadow=true;scene.add(floor);
window.renderAlignment=(progress)=>{
 const t=THREE.MathUtils.clamp(progress,0,1),q=1-(t*t*(3-2*t));
 for(const d of teeth){d.mesh.position.copy(d.base).addScaledVector(d.offset,q);d.mesh.rotation.copy(d.rotation);d.mesh.rotation.y+=d.twist*q;d.mesh.rotation.z+=d.lean*q;}
 renderer.render(scene,camera);
 return renderer.domElement.toDataURL('image/webp',.88);
};
window.renderAlignment(0);window.alignmentReady=true;
