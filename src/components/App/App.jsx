import { GlobalStyle } from '../GlobalStyle';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Searchbar from 'components/Searchbar';
import Api from '../../Api/Api.js';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

export const App = () => {
  const [query, setQuery] = useState('');
  const [modalImage, setModalImage] = useState('');
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (query && page > 1) {
      fetch();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query]);

  const fetch = async () => {
    try {
      const { hits, totalHits } = await Api(query, page);

      if (!totalHits) {
        toast.error('Sorry, but nothing was found for your request');
      }
      if (hits) {
        const imagesArray = hits.map(
          ({ id, largeImageURL, tags, webformatURL }) => {
            return {
              id,
              largeImageURL,
              tags,
              webformatURL,
            };
          }
        );

        setItems([...imagesArray]);
      }
    } catch (error) {
      toast.error('Oops! Something went wrong! Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: 'smooth',
  //   });
  // });

  const inputValue = query => {
    setQuery(query);
    setPage(1);
    setIsLoading(true);
    setItems([]);
    // console.log(query);
  };

  const incrementPage = () => {
    setPage(prevPage => prevPage + 1);
    setIsLoading(true);
  };

  const openModal = largeImageURL => {
    setShowModal(true);
    setModalImage(largeImageURL);
  };

  // console.log(items);
  return (
    <>
      <Searchbar onSubmit={inputValue} />
      {items.length > 0 && <ImageGallery items={items} onClick={openModal} />}

      {items.length > 11 && !isLoading && (
        <Button incrementPage={incrementPage} />
      )}
      {isLoading && <Loader />}
      {showModal && (
        <Modal onClose={() => setShowModal(!showModal)}>
          <img src={modalImage} alt="largeImage" />
        </Modal>
      )}
      <Toaster position="top-right" />
      <GlobalStyle />
    </>
  );
};
