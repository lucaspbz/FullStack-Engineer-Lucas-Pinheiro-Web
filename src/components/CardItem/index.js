import React, { useState } from 'react';

import api from '../../services/api';

import Modal from '../Modal';
import { Link } from 'react-router-dom';

export default function QuestionCardItem({ question }) {
  const [isOpen, setIsOpen] = useState(false);

  const { vestibular, ano, disponivel, materia, numeroQuestao, _id } = question;

  const handleStatusChange = async (e) => {
    question.disponivel = e.target.value;
    console.log(question);

    console.log(`/${_id}`);
    const response = await api.put(`${_id}`, question);
    console.log(response);
  };
  return (
    <div className="card custom-card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">
          {vestibular} {ano} - {materia}
        </h5>

        <div onChange={handleStatusChange}>
          <p className="card-text">Disponivel:</p>
          <div className="form-check form-check-inline">
            <input
              defaultChecked={disponivel}
              className="form-check-input"
              type="radio"
              name={_id}
              id="inlineRadio1"
              value={true}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Sim
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              defaultChecked={!disponivel}
              className="form-check-input"
              type="radio"
              name={_id}
              id="inlineRadio2"
              value={false}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Não
            </label>
          </div>
        </div>

        <p className="card-text">Numero da questão: {numeroQuestao}</p>

        <button
          href="#"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="btn card-link text-success"
        >
          Visualizar
        </button>

        <Link
          to={{ pathname: '/edit', state: { question } }}
          className="btn card-link text-success"
        >
          Editar
        </Link>

        <Modal data={question} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
