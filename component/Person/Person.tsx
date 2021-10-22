import React from 'react';
import { useState } from "react";
import CSS from 'csstype';
import Tilt from 'react-parallax-tilt';
import Link from 'next/link';

const image = 'https://us1rgn-down.file.samsungcloud.com/file/v2/blobs/17eeab30305a11ec8970c21e54111ce5/signed/resized/760?signature=2E3vNqyjekF0q48IUxRNdHNQdie9W_cAq4Xrk6XifBrCQq6Qa6XcpEEXTYUqcX7tlP0TMIfqZx5Xg9PGNqzJkjtDWMljKgcHYXmDtFX1Sz4gnwb-3Uy0hrluvJWVthYHWWGOhr0JE6bj6fucAdyJ1MquR_LqZPjZLp1e5ju3_N3UtxTujpdQMkoyXSIAtD_qvDw1XZ4LOGCKC7cgtCy1FAHr8EGp74ak0kNi2Yc__EVuckqQcYWKTXF4ZGkuJEqzFrKjFSObfmBwfHrsJXsEnVI06in2UVxM1hqso4DrgbbxBKC5cyDhR29ZQLu4AaPa&v=1719969289&cid=A411ZXFWwq'
const Linkedin = 'https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw'
const GitHub = 'https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg'
const Instagram = 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png'
const name = "Ankur Ahir"
const bio = "hello world"
export const buttonStyle: CSS.Properties = {
    background: "transparent",
    borderColor: "transparent",
    textTransform: "capitalize",
    color: "hsl(205, 78 %, 60 %)",
    fontSize: "1rem",
    cursor: "pointer",
    paddingLeft: "0.25rem"
}

const Tutor = () => {
    return (

        <div className='max-w-xl py-10 px-10'>
            <Tilt>
                <figure className="transform hover:shadow-2xl shadow-md md:flex bg-white rounded-lg p-0 md:p-0 transition">
                    <img className="w-32 h-32 object-cover md:w-48 md:h-full md:rounded-r-none md:rounded-l-lg md:mx-0 md:max-h-80 rounded-full mx-auto" src={image} alt={name} width="384" height="512" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <h4 className="text-2xl font-semibold">Hi I'm {name}</h4>
                            <p>{bio}</p>
                        </blockquote>
                        <button style={buttonStyle}>
                            Let's Talk
                        </button>
                        <Contacts />
                    </div>
                </figure>
            </Tilt>
        </div>
    )
}

const Contacts = () => {
    return (<>
        <div className="flex flex-row-reverse md:flex-row py-2">
            <a href="https://www.linkedin.com/in/ankur-ahir-93b041211/" target="_blank" className="w-10 h-10 overflow-hidden mr-2">
                <img src={Linkedin} />
            </a>
            <a href="https://github.com/Ankur-0429" target="_blank" className="w-10 h-10 overflow-hidden mx-2">
                <img src={GitHub} />
            </a>
            <a href="https://www.instagram.com/ankur_ahir88/" target="_blank" className="w-10 h-10 overflow-hidden mx-2">
                <img src={Instagram} />
            </a>
        </div>
    </>)
}

export default Tutor