import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App row container-cls">
      <div className="col-md-12">
        <div className="menu-section row menu-mb">
          <div className="col-md-3 "></div>
          <div className="col-xs-12 col-sm-12 col-md-5 header-container">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark desktop-only">
              <ul className="navbar-nav">
                <li className="nav-item"> <a href="#" className="nav-link"> HOME </a> </li>
                <li className="nav-item"> <a href="#" className="nav-link"> MINT </a> </li>
                <li className="nav-item"> <a href="#" className="nav-link btn-gradient-1" > STORY </a> </li>
                <li className="nav-item"> <a href="#" className="nav-link"> WHITEPAPER </a> </li>
                <li className="nav-item"> <a href="#" className="nav-link"> MARKETPLACE </a> </li>
                <li className="nav-item"> <a href="#" className="nav-link"> FAQ </a> </li>
                <li className="nav-item"> <a href="#" className="nav-link"> NEWS </a> </li>
              </ul>
            </nav>

            <nav className="navbar navbar-inverse bg-dark mobile-only">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" >
                    <span> <img src="/assets/images/menubar.png" height="40" width="40" /></span>
                  </button>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                  <ul className="navbar-nav">
                    <li className="nav-item"> <a href="#" className="nav-link "> HOME </a> </li>
                    <li className="nav-item"> <a href="#" className="nav-link"> MINT </a> </li>
                    <li className="nav-item"> <a href="#" className="nav-link active"> STORY </a> </li>
                    <li className="nav-item"> <a href="#" className="nav-link"> WHITEPAPER </a> </li>
                    <li className="nav-item"> <a href="#" className="nav-link"> MARKETPLACE </a> </li>
                    <li className="nav-item"> <a href="#" className="nav-link"> FAQ </a> </li>
                    <li className="nav-item"> <a href="#" className="nav-link"> NEWS </a> </li>
                    <li className="link-btn">
                      <p className="badge badge-pill badge-info ">
                        <a>
                          <span className="header-btn">MINT</span>
                        </a>
                      </p>
                      <p className="badge badge-pill badge-dark ">
                        <a>
                          <span className="header-btn">CONNECT WALLET</span>
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 mt-2 link-btn text-right desktop-only">
            <span className="badge badge-pill badge-info"> <a> <span className="header-btn">MINT</span> </a> </span>
            <span className="badge badge-pill badge-dark "> <a> <span className="header-btn">CONNECT WALLET</span> </a></span>
          </div>
        </div>
        <div className="content-section row">
          <div className="col-xs-12 col-sm-12 col-md-4 offset-md-2">
            <h4 className="content-title">STORY</h4>
            <div>
              <p>
                It's the year 2300. Extreme wealth disparity has divided the
                world into two zones. While the poor live in squalor, living and
                dying in failing cities, the ultra-wealthy build a paradise just
                for themselves: Zoolana.
                <br />
                <br />
                Deep within the Rocky Mountains, they build an enclave for the
                rich and famous. The amount of money and land they invest in
                Zoolana is unprecedented. But, the rich hoard it all. Robots and
                machines equipped with Al are cheap and accessible, turning
                labor into a novelty, but still, the poor are excluded. The
                wealthy's Al rapidly accelerates the pace of improving
                technology and only they benefit. Below, the world's poor
                starve, and perish.
                <br />
                <br />
                Initially built so the citizens of Zoolana could maintain and
                surround themselves with the ones that lavish on extravagant
                lifestyles, the city turns into something...else. After years of
                seclusion in the mountains, and with limitless technology at
                their fingertips, the city's inhabitants begin to turn strange.
                They start to abuse their power, using technology for strange
                and twisted experiments.
                <br />
                <br />
                Among other gross uses of their power, the inhabitants begin
                modifying animals as a source of entertainment, hosting
                gladiator battles to the death, even going so far as to give
                them human-like intelligence to make the battles more
                entertaining. They named these animals Zanis. Slowly but surely,
                a deep hatred is borne deep within these oppressed creatures.
                <br />
                <br />
                After withstanding more than five years of inequity and
                mistreatment by the citizens of Zoolana, rallied by their
                pent-up anger and frustration, the Zanis rebel. They hijack the
                headquarters with the skills they've forged from years of battle
                in the Colosseum, and overwhelm the operators, forcing them to
                shut down all communications in Zoolana. "Lights out." And the
                hunt begins.
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 text-left">
            <div
              className="img-section"
              style={{
                background: "url('/assets/images/tower-img.png') no-repeat",
                height: '420px',
                backgroundSize: 'contain',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
