import React from 'react';
import { 
    Animator,
    ScrollContainer,
    ScrollPage,
    // sticky,
    StickyIn,
    ZoomIn
} from 'react-scroll-motion';
import './PageOne.css'; 

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

class PageOne extends React.Component {

    render() {
        return (
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={ZoomInScrollOut}>
                        <div className="main">
                            <div className="title-pg">
                                <h1 className="title">grow milk?</h1>
                            </div>
                        </div>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>

        )
    }
}

export default PageOne;