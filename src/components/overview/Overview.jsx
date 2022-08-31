import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageGallery from './image-gallery/ImageGallery';
import ProductDetails from './product-details/ProductDetails';
import exproduct from './product-details/examples/exampleproduct.json';
import exstyles from './product-details/examples/examplestyles.json';
import ExpandedView from './image-gallery/ExpandedView';
import api from '../shared-components/api';


const Overview = ({ productId}) => {
  const [product, setProduct] = useState(null);
  const [styles, setStyles] = useState(null);
  const [style, setStyle] = useState(null);
  const [styleIndex, setStyleIndex] = useState(0);
  const [photos, setPhotos] = useState(null);
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
    api.get(`products/${productId}`)
    .then(res => {
      setProduct(res.data);
      return api.get(`products/${productId}/styles`)
    })
    .then(res => {
      setStyles(res.data.results);
      setStyle(res.data.results[0])
      setStyleIndex(0);
      setIndex(0);
      setPopover(false);
      setPhotos(res.data.results[0].photos)
    })
    .catch(err => console.error(err))
  },[productId])

  useEffect(() => {
    if (!style) return;
    setPhotos(style.photos);
    if (photoIndex > style.photos.length - 1) {
      //If new index will be out of bounds for array
      setPhotoIndex(0);
    }
  }, [style]);

  useEffect(() => {
    if (!style) return;
    setStyle(styles[styleIndex]);
  }, [styleIndex]);

  const setPhotoIndex = (index) => {
    setLastIndex(photoIndex);
    setIndex(index);
  };

  const thumbnailHandler = (index) => {
    if (index === -1 || index === photos.length) return; //Prevent out of bounds errors
    setPhotoIndex(index);
  };

  const handleStyle = (index) => {
    console.log(styles[index].photos[photoIndex])
    if (!styles[index].photos[photoIndex]) {
      setIndex(0);
    }
    setStyleIndex(index);
  }

  if(!style) return <div>Loading...</div>

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
        setStyle={handleStyle}
        styleIndex={styleIndex}
      />
      {popover ? (
        <ExpandedView
          photo={photos[photoIndex].url}
          setPopover={setPopover}
          index={photoIndex}
          setIndex={setPhotoIndex}
          numPhotos={photos.length}
        />
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
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  position: relative;
`;

export default Overview;
