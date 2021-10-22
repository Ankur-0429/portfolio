import React, { useEffect } from 'react';
import { useState } from "react";
import styles from '../../styles/person.module.css'

const image = 'https://us1rgn-down.file.samsungcloud.com/file/v2/blobs/17eeab30305a11ec8970c21e54111ce5/signed/resized/760?signature=2E3vNqyjekF0q48IUxRNdHNQdie9W_cAq4Xrk6XifBrCQq6Qa6XcpEEXTYUqcX7tlP0TMIfqZx5Xg9PGNqzJkjtDWMljKgcHYXmDtFX1Sz4gnwb-3Uy0hrluvJWVthYHWWGOhr0JE6bj6fucAdyJ1MquR_LqZPjZLp1e5ju3_N3UtxTujpdQMkoyXSIAtD_qvDw1XZ4LOGCKC7cgtCy1FAHr8EGp74ak0kNi2Yc__EVuckqQcYWKTXF4ZGkuJEqzFrKjFSObfmBwfHrsJXsEnVI06in2UVxM1hqso4DrgbbxBKC5cyDhR29ZQLu4AaPa&v=1719969289&cid=A411ZXFWwq'
const Linkedin = 'https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw'
const GitHub = 'https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg'
const Instagram = 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png'
const name = "Ankur Ahir"
const bio = "hello world"
const textArray = ['NodeJS', 'React', 'Angular', 'NextJS', 'Git', 'Python', 'Gradle', 'CSS']

const Person  = () => {
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const timer = setTimeout(() => {
          setIndex((index+1)%(textArray.length))
        }, 3000);
        return () => clearTimeout(timer);
    });
    return (<>
        <h1 className={styles.intro}>Hey, <br/>I'm Ankur <br/>{textArray[index]} developer</h1>
    </>)
}

export default Person