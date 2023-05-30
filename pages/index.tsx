import { ContactShadows, Environment, OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import type { NextPage } from 'next'
import { Suspense } from 'react'
import { Dav } from '../components/Dav'
import styles from './Index.module.css'

const estilos = {

  color: '#dfac12',

}




const Home: NextPage = () => {



  return (
    <>
      <div>
        <video
          src="vidoExpositor.mp4"
          autoPlay
          muted
          style={{width: '100%', height: '100vh', objectFit: 'cover', scale: '1', margin: 'auto', display: 'block'}}
        >

        </video>
      </div>
    
      {/* <div className={styles.canvas} style={{backgroundColor: '#878787', width:'90%'}}>
       
        <div className={styles.container}>
          <h1 className={styles.titulo} style={estilos} >Auxiliar Manipuladora</h1>
        </div>
        <div className={styles.movil}>
          <h1 className={styles.telefono} style={estilos} >968 693 575</h1>
        </div> 
        <Canvas
          style={{ width: '100%', margin:'auto', height:'88vh', border:'2px solid black'}}
          camera={{view: 
            {
              enabled: true,
              fullWidth: 100,
              fullHeight: 100,
              offsetX: 0,
              offsetY: -30,
              width: 100,
              height: 100,
            }
            ,  focus: 10, fov: 80 ,zoom: 6, position:[0, .5, 1.5]}} >
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            
              <Dav 
                scale={.3}
                position={[-.0,0.08,0.]}
                rotation={[Math.PI / 1000, 0, 0]}
              />
          
          </Suspense>
          <OrbitControls autoRotate autoRotateSpeed={1} />
          <ContactShadows resolution={1024} scale={1} position={[0, -.01, 0]} blur={3} opacity={.3} far={1} color="#8a6246" />
        </Canvas>
      </div> */}
    </>

  )
}



export default Home
