import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import api from '../../services/api';

import RTFEditor from '../../components/RTFEditor';

export default function EditQuestion() {
  let { question } = useLocation().state;
  const { enunciado, alternativas, _id } = question;
  const [newEnunciado, setNewEnunciado] = useState(enunciado);
  const [newAlternativas, setNewAlternativas] = useState(alternativas);

  const history = useHistory();
  const handleSaveButtonClick = async () => {
    question.enunciado = newEnunciado;
    question.alternativas = newAlternativas;

    const result = await api.put(`${_id}`, question);
    if (result.status === 200) {
      history.goBack();
    } else {
      console.log('Erro');
    }
  };

  const handleCorrectAnswerChange = (e) => {
    alternativas.forEach((alternativa) => {
      if (alternativa.letra === e.target.value) {
        alternativa.correta = true;
      } else {
        alternativa.correta = false;
      }
    });
  };

  return (
    <>
      <div className="container-enunciado container  border">
        <h2>Enunciado:</h2>
        <RTFEditor initialValue={enunciado} saveNewValue={setNewEnunciado} />

        <h2 className="text-item-margin">Alternativas:</h2>
        <span className="text-item-margin">(Selecione a correta)</span>

        <div className="container-alternatives">
          {alternativas.map(({ letra, texto, correta }, index) => (
            <div className="container container-alternatives-items" key={index}>
              <div
                onChange={handleCorrectAnswerChange}
                className="form-check form-check-inline"
              >
                <input
                  defaultChecked={correta}
                  className="form-check-input"
                  type="radio"
                  name={_id}
                  id="inlineRadio1"
                  value={letra}
                />
              </div>
              <h5 className="alternative-letter">{letra}:</h5>
              <RTFEditor
                className=""
                initialValue={texto}
                saveNewValue={setNewAlternativas}
                index={index}
              />
            </div>
          ))}
        </div>
        <div className="container row justify-content-around">
          <button
            onClick={handleSaveButtonClick}
            type="button"
            className="col-2  btn btn-success save-button "
          >
            SALVAR
          </button>
          <button
            onClick={() => {
              history.goBack();
            }}
            type="button"
            className=" col-2 btn btn-secondary "
          >
            CANCELAR
          </button>
        </div>
      </div>
    </>
  );
}
