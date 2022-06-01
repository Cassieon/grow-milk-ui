import React from 'react';
import { 
    Animator,
    MoveOut,
    ScrollContainer,
    ScrollPage,
    batch,
    FadeIn,
    Sticky,
    StickyOut,
    StickyIn,
    Zoom,
    ZoomIn,
    ZoomOut, 
    Move,
    Fade,
    MoveIn,
    MoveUp,
    FadeOut
} from 'react-scroll-motion';
import './PageOne.css'; 

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

class PageOne extends React.Component {

    render() {
        return (
            <ScrollContainer>
                    <ScrollPage page={0}> {/* main title page  */}
                        <div className="main"> 
                            <img src="https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/> 
                        <div className="navbar"></div>
                            <Animator animation={batch(Sticky(), ZoomOut(1, 100))}>
                                <div className="title-pg">
                                    <h1 className="title"><em>grow milk?</em></h1>
                                </div>
                            </Animator>
                        </div>
                    </ScrollPage>

                    <ScrollPage page={1}> {/* milk splash page  */}
                        <Animator animation={batch(Sticky(), ZoomIn(), FadeIn())}>
                            <div className="fact-one">
                                <div className="fact-one-img">
                                    <img src="https://images.pexels.com/photos/799273/pexels-photo-799273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
                                </div>
                            </div>
                        </Animator>

                        <div className="fact-one-text">
                            <Animator animation={batch(StickyIn(35), MoveIn(-1000, 0), MoveOut(0, -200), Fade())}>
                                <div className="pg-one-textbox">
                                    <h3 id="line01">Milk has been a part of our diets for genterations.</h3>
                                    <h3 id="line02">It used in a virety of foods we enjoy like yougurt, cheese, and icecream.</h3>
                                    <h3 id="line03">But much of what we know about milk has been proven false.</h3>
                                </div>
                            </Animator>
                        </div>
                    </ScrollPage>

                    <ScrollPage page={2}> {/* Lady in milk page */}
                        <div className="page-three"> 
                            <Animator animation={batch(Move(0, 800, null, -100), Sticky(30, 65), FadeIn())}>
                                <div className="fact-two">
                                    <div className="fact-two-img">
                                        <img src="https://images.squarespace-cdn.com/content/v1/5a67cc3329f187b9045e59ff/1517274686118-JVAZ1EIV4686JI9472OJ/150617_7120b3+%28Priime+White+Gold%29.JPG?format=2500w"></img>
                                    </div>
                                </div>
                            </Animator>
                            <div className="fact-two-mq">
                                <Animator animation={batch(Move(0, -800, null, -100), Sticky(90, 50))}>
                                    <div className="fact-two-text-box">
                                        <div className="text-align">
                                            <p className="fact-two-text">
                                                <span id="line1">For decades we've seen adds that proclaim</span>
                                                <span id="line2">that milk is filled with calcium and builds strong</span>
                                                <span id="line3">bones, but this couldn't be further from the truth.</span>
                                                <span id="line4">The amount of calcium in cow's milk is so low that</span>
                                                <span id="line5">it is barely absorbable to the human body.</span>
                                                <span id="line6">In addition, research has proven that milk actually</span>
                                                <span id="line7">depleats calcium from our bones and increses risk of fractures.</span>
                                            </p>
                                        </div>
                                    </div>
                                </Animator>
                            </div>
                        </div>
                    </ScrollPage>

                    <ScrollPage page={3}> {/* cow and baby page */}
                        <div className="page-four">  
                            <Animator animation={Move()}>
                                <div className="fact-three">
                                    <div className="fact-three-img">
                                        <Animator animation={batch(MoveIn(-1000, 0), ZoomOut(), Sticky(30, 50))}> {/*cow */}
                                            <div>
                                                <img id="pg4-img1" src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y293fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                                            </div>
                                        </Animator>

                                        <Animator animation={batch(MoveIn(1000, 0), ZoomOut(), Sticky(68, 30))}>
                                            <div>
                                                <img id="pg4-img2" src="https://images.unsplash.com/photo-1518200925927-aa63b1e57a84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80"/> {/*baby */}
                                            </div>
                                        </Animator>

                                        <Animator animation={batch(Sticky(70, 68.5), Move(), Move())}> {/*text */}
                                            <div className="text-box">
                                                <div className="pg4-text-align">
                                                    <p className="pg4-text">
                                                        <span id="line1">Milk is an excellent food soucre... for claves</span>
                                                        <span id="line2">and once they've weand they never drink milk again.</span>
                                                        <span id="line3">Humans seem to be the only mammalian species on</span>
                                                        <span id="line4">the planet that continue drinking milk after infancy.</span>
                                                        <span id="line5">What if there was a better way to enjoy milk and dairy products?</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </Animator>
                                    </div>
                                </div>
                            </Animator>
                        </div>
                    </ScrollPage>

                    <ScrollPage page={4}> {/* main title page  */}
                        <div className="main"> 
                            <Animator animation={batch(Move(), Sticky(), FadeIn())}>
                            <img src="https://images.pexels.com/photos/87824/oats-oat-field-arable-cereals-87824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                            </Animator>

                            <Animator animation={batch(Sticky(), Move(), FadeIn())}>
                                <div className="title-pg">
                                    <h1 className="title"><em>grow milk?</em></h1>
                                </div>
                            </Animator>
                        </div>
                    </ScrollPage>

                    <ScrollPage page={5}>
                        
                    </ScrollPage>
             </ScrollContainer>

        )
    }
}

export default PageOne;