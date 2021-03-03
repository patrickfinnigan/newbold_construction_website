import React, {Component} from 'react';
import NavBar from './components/NavBar';
import HeroSliderThree from './components/HeroSliderThree';
import FeatureIconText from './components/FeatureIconText';
import AboutText from './components/AboutText';
import ProjectImageGallery from './components/ProjectImageGallery'
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

class Home extends Component{
    render(){
        
        return(
            <div>
                
                {/* Navigation bar */}
                <NavBar/>
                
                {/* Hero slider */}
                <HeroSliderThree/>
                
                {/* Feature icon text */}
                <FeatureIconText/>
                
                {/* About text */}
                <AboutText/>

                {/* Project image gallery */}
                <ProjectImageGallery />

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default Home;