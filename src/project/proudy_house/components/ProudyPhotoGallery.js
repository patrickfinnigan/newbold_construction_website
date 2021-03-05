import React, { Component } from 'react';
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

class PhotoGallery extends Component{
    render(){
        /* project gallery image list */
        const PROJECT_IMAGES = [
            "proudy-house-01.jpg",
            "proudy-house-02.jpg",
            "proudy-house-03.jpg",
            "proudy-house-04.jpg",
            "proudy-house-05.jpg",
            "proudy-house-06.jpg",
            "proudy-house-07.jpg",
            "proudy-house-08.jpg",
            "proudy-house-09.jpg",
            "proudy-house-10.jpg",
            "proudy-house-11.jpg",
            "proudy-house-12.jpg",
            "proudy-house-13.jpg",
            "proudy-house-14.jpg",
            "proudy-house-15.jpg",
            "proudy-house-16.jpg",
            "proudy-house-17.jpg",
            "proudy-house-18.jpg",
            "proudy-house-19.jpg",
            "proudy-house-20.jpg",
            "proudy-house-21.jpg"
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