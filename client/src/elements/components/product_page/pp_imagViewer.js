import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import bg_dot from '../../../img/dot_bg.png';

export const PPImageViewer = ({ productImages }) => {
    const navigate = useLocation();
    const url = navigate.pathname;
    const [productImagesArr, setProductImagesArr] = useState(productImages?.images.slice(0, 4));

    const [selectedImg, setSelectedImg] = useState(productImages?.image_cover)

    useEffect(() => {
        setProductImagesArr(productImages?.images.slice(0, 4))
        console.log(productImagesArr)
    }, [productImages, url])
    return (
        <div className='imageViewer_wrap' style={{ display: 'flex', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <div className='img_bg' style={{ background: '#EDEAE6', width: '540px', height: '540px', position: 'absolute' }}></div>
                <img src={bg_dot} alt='' style={{ width: '540px', height: '540px', position: 'absolute', objectFit: 'cover', opacity: '0.03' }} />
                <img className='selectedImage' src={selectedImg} alt='Slected Image' style={{ zIndex: '1', border: '1px solid #d4d0cb', width: '540px', height: '540px', objectFit: 'contain', cursor: 'pointer', transition: 'all 0.5s cubic-bezier(0.25,0.75,0.5,1) 0s' }} />
            </div>
            <div className='images_wrap' style={{ padding: 0, gap: '10px', display: 'flex', flexDirection: 'column' }}>
                {
                    productImagesArr.map((img, index) => {
                        return (
                            // <li className='image' key={productImages.id} style={{ listStyle: 'none', }}>
                            <img src={img} alt='Other Images' onClick={e => setSelectedImg(img)} style={{ width: '120px', height: '120px', objectFit: 'contain', border: selectedImg === img ? '1px solid #b6bcbe' : '0.6px solid #EAE4DE', opacity: selectedImg === img ? 1 : 0.5, cursor: 'pointer', transition: 'all 0.5s cubic-bezier(0.25,0.75,0.5,1) 0s' }} />
                            // </li>
                        )
                    })
                }
            </div>

        </div>
    )
}
