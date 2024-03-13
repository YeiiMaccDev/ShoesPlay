import { Button, Grid, ImageList, ImageListItem, styled, } from '@mui/material';
import React, { useState } from 'react';
import { CloudUpload, Save, Send } from '@mui/icons-material';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const ImageUploader = () => {
    const [images, setImages] = useState([]);

    const handleImageChange = (e) => {
        const fileList = e.target.files;
        const imageArray = [];

        Promise.all(
            Array.from(fileList).map((file) => {
                console.log(fileList)

                return new Promise((resolve) => {
                    if (!file.type.match('image.*')) resolve();

                    const reader = new FileReader();
                    reader.onload = () => {
                        imageArray.push({ url: reader.result, file: file });
                        resolve();
                    };
                    reader.readAsDataURL(file);
                });
            })
        ).then(() => {
            setImages(imageArray);
        });
    };

    const imagesSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <form onSubmit={imagesSubmit}>
                <Grid container sx={{ padding: '1rem' }}>
                    <Grid item xs={12}>
                        <Button component="label" color='success' variant="contained" endIcon={<CloudUpload />}>
                            Seleccionar Imágenes
                            <VisuallyHiddenInput type="file" accept='image/*' multiple onChange={handleImageChange} />
                        </Button>
                    </Grid>

                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <Button variant="contained" endIcon={<Send />}>
                            Guardar
                        </Button>
                    </Grid>
                </Grid>


            </form>

            <ImageList sx={{ width: '100%', height: 'auto', minHeight: '300px' }} cols={3} rowHeight={164}>
                {images.map((image, index) => (
                    < ImageListItem key={index} >
                        <img
                            src={image.url}
                            alt={`Imagen ${index}`}
                        />
                    </ImageListItem>
                ))}
                {console.log(images)}
            </ImageList>
        </>
    );
};

export default ImageUploader;
