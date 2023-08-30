import React, { useEffect, useState } from 'react'
import MojiInput from '../MojiInput';
import emojis from '@/utils';

function CrossMoji() {
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async() => {
            const data = await fetch("/api/cryptoapi");
            const json = await data.json();
            return json;
        }

        fetchData()
        .then((result) => {
            console.log(result.layout)
        })
        .catch((error) => {
            console.log("Erro ao buscar os dados: ", error);
        })
    })

    return (
        <div>CrossMoji</div>
    )
}

export default CrossMoji;