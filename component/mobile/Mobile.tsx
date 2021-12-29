import Image from 'next/image'
import styles from '../../styles/project.module.css'
import { Parallax } from 'react-scroll-parallax';
import colors from '../utils/globals';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Navbar() {

    const handleClick = (input: boolean) => {
        setColor(input)
    }
    // @ts-ignore
    const theme = useSelector(state => state.swapTheme)

    const [color, setColor] = useState(theme)

    useEffect(() => {
        setColor(theme)
    }, [theme])
    return (<>
        <div style={{ width: '100%', marginBottom: '30px' }} className={styles.title}>
            <Parallax x={[0, 0]} y={[0, 0]} tagInner="h1">
                <h1 className={styles.handWritten} style={{ fontSize: '1rem' }}>{'<h1>'}</h1>
                <h1 id="projects">
                    RecycleMe
                </h1>
                <div style={{ width: '15%' }}>
                    <Parallax x={[630, 630]} tagInner="h1">
                        <h1 className={styles.handWritten} style={{ fontSize: '1rem' }}>{'</h1>'}</h1>
                    </Parallax>
                </div>
            </Parallax>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', flexBasis: '50%', justifyContent: 'space-around', marginBottom: 100, alignItems: 'center' }}>

            <div style={{ overflow: 'hidden', height: 300, width: 500, backgroundColor: `${theme ? colors.white : colors.darkGrey}`, padding: 20, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 5px 5px 0px', marginBottom: 20 }}>
                <div style={{ fontWeight: 700, fontSize: 30, fontFamily: 'sans-serif', marginBottom: 20 }}>
                    Maps Integration
                </div>
                <div style={{lineHeight: 2, fontFamily: 'sans-serif'}}>
                    Find the nearest recycling centers from your location. Create your own custom markers which will be shown to every user of our app.
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ overflow: 'hidden', borderRadius: 10 }}>
                    <Image src={`/greenday_maps_screen${color ? "light" : ""}.jpg`} layout="fixed" objectFit="cover" width={200} height={422} />
                </div>
                <div style={{ width: 50, height: 100, backgroundColor: theme ? colors.white : colors.darkGrey, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 5px 5px 0px', marginTop: 10, borderRadius: 5, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', textAlign: 'center', marginLeft: 10 }}>

                    <button onClick={() => handleClick(true)}>
                        <div>
                            🌞
                        </div>
                    </button>
                    <button onClick={() => handleClick(false)}>
                        <div>
                            🌜
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', flexBasis: '50%', justifyContent: 'space-around', alignItems: 'center', marginBottom: 100 }}>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: 50, height: 100, backgroundColor: theme ? colors.white : colors.darkGrey, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 5px 5px 0px', marginTop: 10, borderRadius: 5, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', textAlign: 'center', marginRight: 10 }}>

                    <button onClick={() => handleClick(true)}>
                        <div>
                            🌞
                        </div>
                    </button>
                    <button onClick={() => handleClick(false)}>
                        <div>
                            🌜
                        </div>
                    </button>
                </div>
                <div style={{ overflow: 'hidden', borderRadius: 10 }}>
                    <Image src={`/greenday_home_screen${color ? "light" : ""}.jpg`} layout="fixed" objectFit="cover" width={200} height={422} />
                </div>
            </div>
            <div style={{ overflow: 'hidden', height: 300, width: 500, backgroundColor: `${theme ? colors.white : colors.darkGrey}`, padding: 20, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 5px 5px 0px', marginBottom: 20 }}>
                <div style={{ fontWeight: 700, fontSize: 30, fontFamily: 'sans-serif', marginBottom: 20 }}>
                    Find the Most Relevent Objects
                </div>
                <div style={{lineHeight: 2, fontFamily: 'sans-serif'}}>
                    Using the Google Vision API, we can find the most relevent parts of the images. This will allow us to categorize each of these images and determine its recyclability.
                </div>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', flexBasis: '50%', justifyContent: 'space-around', marginBottom: 100, alignItems: 'center' }}>

            <div style={{ overflow: 'hidden', height: 300, width: 500, backgroundColor: `${theme ? colors.white : colors.darkGrey}`, padding: 20, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 5px 5px 0px', marginBottom: 20 }}>
                <div style={{ fontWeight: 700, fontSize: 30, fontFamily: 'sans-serif', marginBottom: 20 }}>
                    Our Bread and Butter
                </div>
                <div style={{lineHeight: 2, fontFamily: 'sans-serif'}}>
                    Categorize the image and determine its recyclability. In the future, we plan to add a method to allow the user to directly find the nearest recycling center based upon the category of the image.
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ overflow: 'hidden', borderRadius: 10 }}>
                    <Image src={`/greenday_details_screen${color ? "light" : ""}.jpg`} layout="fixed" objectFit="cover" width={200} height={422} />
                </div>
                <div style={{ width: 50, height: 100, backgroundColor: theme ? colors.white : colors.darkGrey, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 5px 5px 0px', marginTop: 10, borderRadius: 5, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', textAlign: 'center', marginLeft: 10 }}>

                    <button onClick={() => handleClick(true)}>
                        <div>
                            🌞
                        </div>
                    </button>
                    <button onClick={() => handleClick(false)}>
                        <div>
                            🌜
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </>)
}