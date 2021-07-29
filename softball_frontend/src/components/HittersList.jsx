import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import HitterCard from "./HitterCard";

const HittersList = (props) => {

    const [hitters, setHitters] = useState([]);
    const { limit } = props;

    useEffect(() => {
        (async () => {
            let hitters;
            if (!!limit) {
                hitters = await fetch(
                    `http://localhost:3333/hitters?limit=${limit}`
                ).then(response => response.json());
            } else {
                hitters = await fetch(
                    `http://localhost:3333/hitters`
                ).then(response => response.json());
            }
            setHitters(hitters);
        })();
    }, [setHitters, limit]);

    return (
        <>
            {hitters.map(hitter => {
                return (
                    <Link to={`/hitters/${hitter.id}`}>
                        <HitterCard key={hitter.id} hitter={hitter}/>
                    </Link>
                )
            })}
        </>
    );
}

export default HittersList;