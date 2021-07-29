import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './Pages.css';

const HitterProfile = () => {

    const [hitter, setHitter] = useState({});
    const [lowerCaseTeam, setLowerCaseTeam] = useState("");
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const hitter = await fetch(
                `http://localhost:3333/hitters/${id}`
            ).then(response => response.json());
            setHitter(hitter);
            setLowerCaseTeam(hitter.team.toLowerCase().replace(" ", ""));
        })();
    }, [setHitter, id]);

    return (
        <article className="post-single">
            <header className="post-header">
                <div className="breadcrumbs">
                    <Link to="/">
                        <span>Home</span>
                    </Link>
                    »
                    <Link to="/hitters">
                        <span>Hitters</span>
                    </Link>
                </div>
                <h1 className="post-title">{hitter.name}</h1>
                <div className="post-meta">{hitter.team}</div>
            </header>
            <div className="post-content">
                <img src={`https://cdn.d1baseball.com/logos/teams/128/${lowerCaseTeam}.png`} alt={hitter.team} />
                <h2>Batting Statistics</h2>
                <br />
                <div className="container">
                    <div className="flex">
                        <div><strong>AVG</strong></div>
                        <div>{hitter.batting_average}</div>
                    </div>
                    <div className="flex">
                        <div><strong>OBP</strong></div>
                        <div>{hitter.on_base_percentage}</div>
                    </div>
                    <div className="flex">
                        <div><strong>SLG</strong></div>
                        <div>{hitter.slugging_percentage}</div>
                    </div>
                    <div className="flex">
                        <div><strong>OPS</strong></div>
                        <div>{hitter.on_base_plus_slugging}</div>
                    </div>
                    <div className="flex">
                        <div><strong>GP</strong></div>
                        <div>{hitter.games_played}</div>
                    </div>
                    <div className="flex">
                        <div><strong>AB</strong></div>
                        <div>{hitter.at_bats}</div>
                    </div>
                    <div className="flex">
                        <div><strong>R</strong></div>
                        <div>{hitter.runs}</div>
                    </div>
                    <div className="flex">
                        <div><strong>H</strong></div>
                        <div>{hitter.hits}</div>
                    </div>
                    <div className="flex">
                        <div><strong>2B</strong></div>
                        <div>{hitter.doubles}</div>
                    </div>
                    <div className="flex">
                        <div><strong>3B</strong></div>
                        <div>{hitter.triples}</div>
                    </div>
                    <div className="flex">
                        <div><strong>HR</strong></div>
                        <div>{hitter.homeruns}</div>
                    </div>
                    <div className="flex">
                        <div><strong>RBI</strong></div>
                        <div>{hitter.rbis}</div>
                    </div>
                    <div className="flex">
                        <div><strong>HBP</strong></div>
                        <div>{hitter.hit_by_pitch}</div>
                    </div>
                    <div className="flex">
                        <div><strong>SO</strong></div>
                        <div>{hitter.strikeouts}</div>
                    </div>
                    <div className="flex">
                        <div><strong>SB</strong></div>
                        <div>{hitter.stolen_bases}</div>
                    </div>
                    <div className="flex">
                        <div><strong>CS</strong></div>
                        <div>{hitter.caught_stealing}</div>
                    </div>
                </div>
            </div>
            <footer className="post-footer">

            </footer>
        </article>
    );
}

export default HitterProfile;