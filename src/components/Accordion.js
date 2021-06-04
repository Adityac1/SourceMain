import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  position: relative;
  height: 60vh;
  background: #fff;
`;

const Container = styled.div`
  position: absolute;
  top: 5%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #ffff;
  color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150%;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid #999999;
  border-top: 1px solid #999999;
  h1 {
    padding: .2rem;
    font-size: 1rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #f2f2f2;
  color: #000000;
  width: 150%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  border-bottom: 1px solid #999999;
  border-top: 1px solid #999999;
  p {
    font-size: 1rem;
  }
`;

const Accordion = (data) => {
  const [clicked, setClicked] = useState(false);
  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#000000', size: '15px' }}>
      <AccordionSection>
        <Container>
          {data !== undefined && (Object.entries(data)[0])[1].map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.seq_no}{  }{item.seq_description}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.seq_description}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;