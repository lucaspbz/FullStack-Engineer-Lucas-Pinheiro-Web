import React, { useEffect, useState } from 'react';

import CardItem from '../../components/CardItem';

import api from '../../services/api';
import Modal from '../../components/Modal';

export default function MainPage() {
  const [allQuestions, setAllQuestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get();
      setAllQuestions(data);
    }

    fetchData();
  }, []);

  if (allQuestions.length === 0) {
    return <div>Carregando...</div>;
  } else {
    return (
      <div className="container ">
        <div className="row justify-content-center container-list-questions">
          {allQuestions.map((question, index) => (
            <CardItem className="col" key={index} question={question} />
          ))}
        </div>
        <Modal />
      </div>
    );
  }
}
