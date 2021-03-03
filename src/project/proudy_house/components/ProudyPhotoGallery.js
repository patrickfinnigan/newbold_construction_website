import React, { Component } from 'react';
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

class PhotoGallery extends Component{
    render(){
        /* project gallery image list */
        const PROJECT_IMAGES = [
            "proudy-house-1.jpg",
            "proudy-house-2.jpg",
            "proudy-house-3.jpg",
            "proudy-house-4.jpg"
        ];

        const PhotoItem = ({ image, group }) => (
            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 section-space--top--10">
                <LightgalleryItem group={group} src={`assets/img/projects/${image}`}>
                    <button className="gallery-item single-gallery-thumb">
                        <img src={`assets/img/projects/proudy-house/${image}`} className="img-fluid" alt="" /><span className="plus" />
                    </button>
                </LightgalleryItem>
            </div>
        );

        return(
            <div>
                <LightgalleryProvider>
                    <div className="row row-5">
                        {PROJECT_IMAGES.map((p, idx) => (
                            <PhotoItem key={idx} image={p} group="group1" />
                        ))}
                    </div>
                </LightgalleryProvider>
            </div>
        )
    }
}

export default PhotoGallery;