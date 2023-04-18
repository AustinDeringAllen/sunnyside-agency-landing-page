const ImageGallery = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4">
      <img
        src="/images/mobile/image-gallery-milkbottles.jpg"
        alt="Milk Bottles"
      />
      <img
        src="/images/mobile/image-gallery-orange.jpg"
        alt="Orange on Plate"
      />
      <img src="/images/mobile/image-gallery-cone.jpg" alt="Ice cream cone" />
      <img
        src="/images/mobile/image-gallery-sugar-cubes.jpg"
        alt="Sugar cubes"
      />
    </div>
  );
};

export default ImageGallery;
