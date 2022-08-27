import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageGallery from './image-gallery/ImageGallery';
import ProductDetails from './product-details/ProductDetails';
import axios from 'axios';

import exproduct from './product-details/examples/exampleproduct.json';
import exstyles from './product-details/examples/examplestyles.json';
import ExpandedView from './image-gallery/ExpandedView';

const PRODUCT_ID = 37312;

const Overview = () => {
  const [product, setProduct] = useState(exproduct);
  const [styles, setStyles] = useState(exstyles.results);
  const [style, setStyle] = useState(exstyles.results[0]);
  const [styleIndex, setStyleIndex] = useState(0);
  const [photos, setPhotos] = useState(exstyles.results[0].photos);
  const [photoIndex, setIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);
  const [popover, setPopover] = useState(false);

  const setStyleId = (id) => {
    styles.forEach((style) => {
      if (style.style_id === id) {
        setStyle(style);
      }
    });
  };

  useEffect(() => {
    setPhotos(style.photos);
    if (photoIndex > style.photos.length - 1) {
      //If new index will be out of bounds for array
      setPhotoIndex(0);
    }
  }, [style]);

  useEffect(() => {
    setStyle(styles[styleIndex]);
  },[styleIndex])

  const setPhotoIndex = (index) => {
    setLastIndex(photoIndex);
    setIndex(index);
  }


  const thumbnailHandler = (index) => {
    if (index === -1 || index === photos.length) return;
    setPhotoIndex(index);
  };

  return (
    <Container>
      <ImageGallery
        style={style}
        product={product}
        setIndex={thumbnailHandler}
        index={photoIndex}
        setPopover={setPopover}
        lastIndex={lastIndex}
      />
      <ProductDetails
        product={product}
        styles={styles}
        style={style}
        setStyle={setStyleIndex}
      />
      {popover ? (
        <ExpandedView
          photo={photos[photoIndex].url}
          setPopover={setPopover}
          index={photoIndex}
          setIndex={setPhotoIndex}
          numPhotos={photos.length} />
      ) : (
        <></>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5em;
  background-color: #7e7e7e;
  position: relative;
`;

export default Overview;
