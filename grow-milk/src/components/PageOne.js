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
    MoveIn
} from 'react-scroll-motion';
import './PageOne.css'; 

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

class PageOne extends React.Component {

    render() {
        return (
            <ScrollContainer>
                <ScrollPage page={0}>
                    <div className="main">  
                        <Animator animation={batch(Sticky(), ZoomOut(1, 100))}>
                            <div className="title-pg">
                                <h1><span className="title">grow milk?</span></h1>
                            </div>
                        </Animator>
                    </div>
                </ScrollPage>

                <ScrollPage page={1}>
                    <Animator animation={batch(Sticky(), ZoomIn(), FadeIn())}>
                         <div className="fact-one">
                             <div className="fact-one-img">
                                <img src="https://img.freepik.com/free-photo/great-milk-splash-close-up_23-2147608388.jpg?w=2000&t=st=1653538073~exp=1653538673~hmac=0d6154dbbdd3ee428429ce607c36990c237d7c19a131ecb405e44508740efc3d"></img>
                             </div>
                        </div>
                    </Animator>

                    <div className="fact-one-text">
                        <Animator animation={batch(Sticky(25,50), MoveIn(-1000, 0), MoveOut(0, -200))}>
                                    Milk has been a part of our diets for genterations.
                        </Animator>
                        <Animator animation={batch(Sticky(33.5,55), MoveIn(-1000, 0), MoveOut(0, -200))}>
                                    It used in a virety of foods we enjoy like yougurt, cheese, and icecream.
                        </Animator>
                        <Animator animation={batch(Sticky(29.5,60), MoveIn(-1000, 0), MoveOut(0, -200))}>
                                    But much of what we know about milk has been proven false.
                        </Animator>
                    </div>
                </ScrollPage>

                <ScrollPage page={2}>
                    <div className="transition-one">  
                        <Animator animation>
                            <div className="transition-pg"></div>
                        </Animator>
                    </div>
                </ScrollPage>
             </ScrollContainer>

        )
    }
}

export default PageOne;