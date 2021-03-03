import React, {Component} from 'react';
import NavBar from '../../components/NavBar';
// import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../../components/Footer';
import MobileMenu from '../../components/MobileMenu';
import ProudyPhotoGallery from './components/ProudyPhotoGallery';
class ProudyProjectDetails extends Component{

    render(){
        return(
            <div>
                {/* Navigation bar */}
                <NavBar/>

                {/* breadcrumb */}
                {/*====================  breadcrumb area ====================*/}
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>ProudyProjectDetails</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="projects">Project</a></li>
                                        <li>ProudyProjectDetails</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                {/*====================  project details page content ====================*/}
                <div className="page-wrapper section-space--inner--120">
                {/*Projects section start*/}
                <div className="project-section">
                    <div className="container">
                    <div className="row">
                        <div className="col-12 section-space--bottom--40">
                        <div className="project-image"><img src="assets/img/projects/proudy-house/proudy-house-title-image.jpg" className="img-fluid" alt="" /></div>
                        </div>
                        <div className="col-lg-4 col-12 section-space--bottom--30">
                            <div className="project-information">
                                <h3>Project Information</h3>
                                <ul>
                                    {/* <li><strong>Client:</strong> <a href="project-details">RRS Company</a></li> */}
                                    <li><strong>Location:</strong>San Jose, CA</li>
                                    <li><strong>Area(sf):</strong> 50,000 sf</li>
                                    <li><strong>Year:</strong> 2020</li>
                                    <li><strong>Budget:</strong> $890,000</li>
                                    <li><strong>Architect:</strong> Scott &amp; Austin</li>
                                    {/* <li><strong>Sector:</strong> <a href="project-details">Tunnel</a>, <a href="project-details">Transport</a></li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 section-space--bottom--30 pl-30 pl-sm-15 pl-xs-15">
                            <div className="project-details">
                                <h2>Craftsman Style Home Throughout</h2>
                                <p>Originally a one-story, three-bedroom, two-bathroom remodeled to a two-story, four-bedroom, four-bathroom addition. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem veritatis quo et ullam, ducimus itaque earum dolorem?</p>
                                <p>Construction involved demo down to the studs. A new foundation was poured, and an additional 200 square ft was added to the first story, resulting in a 1000 ft upscale. Updated, built custom cabinetry, stylish stair railings, high end bathroom fixtures and countertops.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ex, nam adipisci dolores laborum earum. Unde cum, ut nostrum nihil alias, laudantium molestiae, vitae quidem dolorem officiis ipsum. Aliquid nemo consequuntur cupiditate delectus sapiente doloribus dolorem, at suscipit, non laudantium mollitia magnam repellat atque quia! Aut, veniam, nam. Ex porro optio facilis nostrum, qui ipsa?</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <ProudyPhotoGallery/>
                        </div>
                    </div>
                    </div>
                </div>
                {/*Projects section end*/}

                </div>

                {/*====================  End of project details page content  ====================*/}

                {/* Brand logo */}
                {/* <BrandLogoSlider background = "grey-bg" /> */}

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default ProudyProjectDetails;