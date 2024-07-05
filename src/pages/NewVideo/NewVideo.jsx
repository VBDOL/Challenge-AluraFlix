import React, { useState } from 'react';
import Modal from '../../components/Modal/modal';
import Button from '../../components/Button/button';
import TextInput from '../../components/TextInput/textinput';
import { createVideo } from '../../ultils/api';
import { Link } from 'react-router-dom';
import './NewVideo.css';

const NewVideo = ({ setVideos }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoTitle, setVideoTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [videoCategory, setVideoCategory] = useState('front'); // Estado inicial da categoria
  const [videoImageUrl, setVideoImageUrl] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleVideoTitleChange = (e) => {
    setVideoTitle(e.target.value);
  };

  const handleVideoUrlChange = (e) => {
    setVideoUrl(e.target.value);
  };

  const handleVideoCategoryChange = (e) => {
    setVideoCategory(e.target.value);
  };

  const handleVideoImageChange = (e) => {
    setVideoImageUrl(e.target.value);
  };

  const handleClearForm = () => {
    setVideoTitle('');
    setVideoUrl('');
    setVideoCategory('front'); 
    setVideoImageUrl('');
  };

  const handleSubmit = async () => {
    const newVideo = {
      title: videoTitle,
      url: videoUrl,
      category: videoCategory,
      imageUrl: videoImageUrl,
    };

    const response = await createVideo(newVideo);

    setVideos((prevVideos) => [...prevVideos, response.data]);

    handleCloseModal();
  };

  return (
    <div className="newvideo">
      <Link to="/">
        <Button onClick={handleOpenModal}>Add New Video</Button>
      </Link>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Add New Video</h2>
        <TextInput
          label="Video Title"
          name="videoTitle"
          value={videoTitle}
          onChange={handleVideoTitleChange}
        />
        <TextInput
          label="Video URL"
          name="videoUrl"
          value={videoUrl}
          onChange={handleVideoUrlChange}
        />
        <label htmlFor="videoCategory">Category:</label>
        <select id="videoCategory" value={videoCategory} onChange={handleVideoCategoryChange}>
          <option value="front">Front-end</option>
          <option value="back">Back-end</option>
          <option value="mobile">Mobile</option>
        </select>
        <TextInput
          label="Image URL"
          name="videoImageUrl"
          value={videoImageUrl}
          onChange={handleVideoImageChange}
          type="url"
        />
        <Button onClick={handleClearForm}>Limpar</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </Modal>
    </div>
  );
};

export default NewVideo;