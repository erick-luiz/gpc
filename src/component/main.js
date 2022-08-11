import React from 'react';
import BackgroundVideo from './backgroundVideo';
import Logo from './Logo';
import Icons from './Icons';
import ListenSpotify from './ListenSpotify';
import Youtube from './Youtube';
import Spotify from './Spotify';
import WhatsContact from './WhatsContact';
import Line from './Line';
import './style.css';

let main = (_) => {

    return (
        <>
        <BackgroundVideo></BackgroundVideo>
            <div className="content"></div>
        
            <div className="container animate__animated animate__fadeIn">
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-md-8 link-content ">
                        <main id="links" className="my-3">
                            <Logo></Logo>

                            <div data-biolink-block-id="11552" className="col-12 my-2">
                                <Icons></Icons>

                                <Line></Line>
                                <Youtube></Youtube>
                                <Spotify></Spotify>
                                <Line></Line>
                                                            
                        
                                <ListenSpotify />
                            
                                <WhatsContact></WhatsContact>
            
                                <div data-biolink-block-id="14473" className="col-12 my-2">
                                    <iframe width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/H2srMg3TkFE"
                                            title="YouTube video player"
                                            frameborder="0"
                                            autoplay
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen>
            
                                    </iframe>
                                </div>
                        </div>
                    </main>
                    </div>
                </div>
            </div>
        
        <input type="hidden" name="global_url" value="https://app.ihit.bio/" />
        <input type="hidden" name="global_token" value="671d99b9abf81a11925a275575557cff" />
        <input type="hidden" name="global_number_decimal_point" value="." />
        <input type="hidden" name="global_number_thousands_separator" value="," />
        </>
    );
}


export default main