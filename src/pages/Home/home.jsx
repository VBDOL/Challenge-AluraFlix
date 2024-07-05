import React from 'react';
import Banner from '../../components/Banner/banner';
import Slider from '../../components/Slider/slider';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Card from '../../components/Card/card';
import Modal from '../../components/Modal/modal';
import TextInput from '../../components/TextInput/textinput';
import { deleteVideo, getVideos, updateVideo } from '../../ultils/api';
import './home.css';

const Home = () => {
  const [videos, setVideos] = React.useState([]);
  const [isModalEditOpen, setIsModalEditOpen] = React.useState(false);
  const [currentVideo, setCurrentVideo] = React.useState({ 
    id: '', 
    title: '', 
    url: '', 
    category: '', 
    imageUrl: '' 
  });

  const fetchVideos = async () => {
    const videosData = await getVideos();
    setVideos(videosData);
  };

  React.useEffect(() => {
    fetchVideos();
  }, []); // Adiciona "videos" como dependência do useEffect

  const deleteCard = async (id) => {
    await deleteVideo(id);
    setVideos(videos => videos.filter(video => video.id !== id));
  };

  const editCard = (video) => {
    setCurrentVideo(video);
    setIsModalEditOpen(true);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentVideo((prevVideo) => ({ ...prevVideo, [name]: value }));
  };

  const handleSaveEdit = async () => {
    await updateVideo(currentVideo.id, currentVideo);
    fetchVideos();
    setIsModalEditOpen(false);
  };

  const handleCardClick = (video) => {
    setCurrentVideo(video);
    setIsModalEditOpen(true);
  };

  const showCards = (category) => {
    if (!videos || !Array.isArray(videos)) return null;

    return videos
      .filter(video => video.category === category)
      .map(video => (
        <Card
          key={video.id}
          image={video.imageUrl} 
          category={video.category}
          onDelete={() => deleteCard(video.id)}
          onEdit={() => editCard(video)}
          onClick={() => handleCardClick(video)} // Adiciona o evento onClick
        />
      ));
  };

  return (
    <>
      <div className="home">
        <Header />
        <Banner />
        <Slider teste="FRONT END" color="#6BD1FF">
          {showCards('front')}
        </Slider>
        <Slider teste="BACK END" color="#00C86F">
          {showCards('back')}
        </Slider>
        <Slider teste="MOBILE" color="#FFBA05">
          {showCards('mobile')}
        </Slider>
      </div>
      <Footer />

      <Modal isOpen={isModalEditOpen} onClose={() => setIsModalEditOpen(false)}>
        <h2>Edit Video</h2>
        <TextInput
          label="Title"
          name="title"
          value={currentVideo.title}
          onChange={handleEditInputChange}
        />
        <TextInput
          label="URL"
          name="url"
          value={currentVideo.url}
          onChange={handleEditInputChange}
        />
        <TextInput
          label="Category"
          name="category"
          value={currentVideo.category}
          onChange={handleEditInputChange}
        />
        <TextInput 
          label="Image URL" 
          name="imageUrl" 
          value={currentVideo.imageUrl} 
          onChange={handleEditInputChange} 
        />
        <button onClick={handleSaveEdit}>Save</button>
      </Modal>
    </>
  );
};

export default Home;