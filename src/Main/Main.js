import React, { useEffect } from "react";
import "./Main.css";
import cardImgs from './Cards';

const Main = () => {
    useEffect(() => {
        const greetMsg = document.getElementById('greetings');
        const currentHour = new Date().getHours();

        if (currentHour >= 6 && currentHour < 12) {
            greetMsg.innerText = 'Bom dia!'
        } else if (currentHour >= 12 && currentHour < 18) {
            greetMsg.innerText = 'Boa tarde!'
        } else {
            greetMsg.innerText = 'Boa noite!'
        }
    }, []);
    
    return (
        <div className="playlist-container">
            <div id="result-playlists">
                <div className="playlist">
                    <h1 id="greetings">Bom dia!</h1>
                    <h2 className="session">Navegar por todas as seções</h2>
                </div>

                {/* CARDS */}
                <div className="offer__scroll-container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            {/* CARD 1 */}
                            <a href="/#" className="cards">
                                <div className="cards card1">
                                    <img src={cardImgs[0]} alt="" />
                                    <span>Boas festas</span>
                                </div>
                            </a>

                            {/* CARD 2 */}
                            <a href="/#" className="cards">
                                <div className="cards card2">
                                    <img src={cardImgs[1]} alt="" />
                                    <span>Feitos para você</span>
                                </div>
                            </a>

                            {/* CARD 3 */}
                            <a href="/#" className="cards">
                                <div className="cards card3">
                                    <img src={cardImgs[2]} alt="" />
                                    <span>Lançamentos</span>
                                </div>
                            </a>

                            {/* CARD 4 */}
                            <a href="/#" className="cards">
                                <div className="cards card4">
                                    <img src={cardImgs[3]} alt="" />
                                    <span>Creators</span>
                                </div>
                            </a>

                            {/* CARD 5 */}
                            <a href="/#" className="cards">
                                <div className="cards card5">
                                    <img src={cardImgs[4]} alt="" />
                                    <span>Para treinar</span>
                                </div>
                            </a>

                            {/* CARD 6 */}
                            <a href="/#" className="cards">
                                <div className="cards card6">
                                    <img src={cardImgs[5]} alt="" />
                                    <span>Podcasts</span>
                                </div>
                            </a>

                            {/* CARD 7 */}
                            <a href="/#" className="cards">
                                <div className="cards card7">
                                    <img src={cardImgs[6]} alt="" />
                                    <span>Sertanejo</span>
                                </div>
                            </a>

                            {/* CARD 8 */}
                            <a href="/#" className="cards">
                                <div className="cards card8">
                                    <img src={cardImgs[7]} alt="" />
                                    <span>Samba e pagode</span>
                                </div>
                            </a>

                            {/* CARD 9 */}
                            <a href="/#" className="cards">
                                <div className="cards card9">
                                    <img src={cardImgs[8]} alt="" />
                                    <span>Funk</span>
                                </div>
                            </a>

                            {/* CARD 10 */}
                            <a href="/#" className="cards">
                                <div className="cards card10">
                                    <img src={cardImgs[9]} alt="" />
                                    <span>MPB</span>
                                </div>
                            </a>

                            {/* CARD 11 */}
                            <a href="/#" className="cards">
                                <div className="cards card11">
                                    <img src={cardImgs[10]} alt="" />
                                    <span>Rock</span>
                                </div>
                            </a>

                            {/* CARD 12 */}
                            <a href="/#" className="cards">
                                <div className="cards card12">
                                    <img src={cardImgs[11]} alt="" />
                                    <span>Hip Hop</span>
                                </div>
                            </a>

                            {/* CARD 13 */}
                            <a href="/#" className="cards">
                                <div className="cards card13">
                                    <img src={cardImgs[12]} alt="" />
                                    <span>Indie</span>
                                </div>
                            </a>

                            {/* CARD 14 */}
                            <a href="/#" className="cards">
                                <div className="cards card14">
                                    <img src={cardImgs[13]} alt="" />
                                    <span>Relax</span>
                                </div>
                            </a>

                            {/* CARD 15 */}
                            <a href="/#" className="cards">
                                <div className="cards card15">
                                    <img src={cardImgs[14]} alt="" />
                                    <span>Música Latina</span>
                                </div>
                            </a>
                        </section>
                    </div>
                </div>
            </div>

            {/* SEARCH RESULTS */}
            <div id="result-artist" className="hidden">
                <div className="grid-container">
                    <div className="artist-card" id="">
                        <div className="card-img">
                            <img id="artist-img" className="artist-img" alt="Artista"></img>
                            <div className="play">
                                <span className="fa fa-solid fa-play"></span>
                            </div>
                        </div>
                        <div className="card-text">
                            <a href="/#" title="Foo Fighters" className="vst"></a>
                            <span id="artist-name" className="artist-name"></span>
                            <span className="artist-categories">Artista</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main