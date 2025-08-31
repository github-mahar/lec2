import  { useState } from 'react';

export default function ImgContainer() {
  const [images, setImages] = useState([
    { image: "/nature1.jpg", title: "Forest" },
    { image: "/nature2.jpg", title: "Mountain" },
    { image: "/nature.jpg", title: "Dawn" }
  ]);

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };
  const copyImage = (index) => {
    const imageToCopy = images[index];
    setImages([...images, imageToCopy]);
  };

  return (
    <div className="flex items-center justify-center gap-[3rem] flex-wrap ">
      {images.map((selectedImage, index) => (
        <div className="img1" key={index}>
          <img src={selectedImage.image} alt={selectedImage.title} className='w-[300px] h-[200px] object-cover rounded-lg' />
          <h3>{selectedImage.title}</h3>
          <button onClick={() => removeImage(index)} className=" rounded-lg p-2 m-2 bg-blue-500 text-white hover:bg-blue-700
          ">Remove</button>
          <button onClick={() => copyImage(index)} className=" rounded-lg p-2 m-2 bg-blue-500 text-white hover:bg-blue-700
          ">Copy Image</button>
        </div>
      ))}
    </div>
  );
}
