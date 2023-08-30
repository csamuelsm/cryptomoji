"use client";
import React, { useState } from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

type MojiInputProps = {
    src:string,
    width:number,
    height:number,
    answer:string,
}

function MojiInput( props:MojiInputProps ) {
    const [selected, setSelected] = useState<boolean>(false);

    function toggleSelection() {setSelected(!selected);}

    return (
        <div style={{
            borderRadius: 12,
            backgroundColor: "white",
            border: selected ? "2px solid #0066FF" : "2px solid white",
            width: props.width+10,
            height: props.height+10,
            padding: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: selected ? "flex-start" : "center",
            alignItems: selected ? "flex-start" : "center",
            margin: 2,
        }}
            onClick={() => toggleSelection()}
        >
            <img
                style={{
                    transition: "width 0.2s, height 0.2s",
                    transitionTimingFunction: "ease-in-out",
                    zIndex: 9999
                }}
                src={props.src}
                width={selected ? 12 : props.width}
                height={selected ? 12 : props.height}
            />
            <div style={{
                width: "100%",
                display: selected ? "flex" : "none",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                fontWeight: 800,
                marginTop: -10,
                color: "#0066FF",
            }}>
                <p className={inter.className}>{props.answer}</p>
            </div>
        </div>
    )
}

export default MojiInput;