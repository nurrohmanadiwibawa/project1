import React from "react";


export const Profile = () => {
    return(
        <div className="container px-5 pt-5 pb-3">
            <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-3">
                <img src="/Picture/pp.jpg" className="shadow-lg mt-20"
                width="250"
                height="250"
                alt="Profile-pic"></img>
            </div>
            <div className="col-lg-5">
                <h1 className="ms-5 text-start" style={{color: 'gold', fontFamily: 'Malvie Trial'}}>NURROHMAN ADI WIBAWA</h1>
                <p className="ms-5 text-start text-light">
                <hr></hr>
                <h6>Informatics Engineering Of Dian Nuswantoro University at
                    Semarang Central Java Indonesia.
                </h6>
                Don't be affraid to try what you want.
                </p>
                
                <p className="ms-5 text-start text-light">
                Struggle that you do today is the single way to build a better future.
                </p>

                <p className="ms-5 text-start text-light">
                    Selengkapnya tentang saya:
                </p>

                <div className="d-flex">
                    <h3 className="ms-5">
                        <a href="https://github.com/nurrohmanadiwibawa">
                        <i class="text-light bi bi-github"></i> 
                        </a>
                    </h3>
                    <h3 className="ms-4">
                        <a href="https://instagram.com/wbwshnz">
                        <i class="text-light bi bi-instagram"></i> 
                        </a>
                    </h3>
                    
                    
                    

                    <h3 className="ms-4">
                        <a href="https://www.youtube.com/channel/UCCNAqUP1h2EqlV0_9mC9N-Q/about">
                        <i class="text-light bi bi-youtube"></i> 
                        </a>
                    </h3>
                </div>

                    {/* 
                    <p className="ms-5 text-start text-while text-light">
                    adiwibawa75@gmail.com
                </p>
                    */}
                
                
            </div>
            <div className="col-lg-3"></div>
            </div>
        </div>
    );
};