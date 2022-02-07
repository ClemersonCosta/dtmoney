import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/Vector.svg';
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'
import { useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit');
    
    return(
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
            
            <button type='button' className='react-modal-close' onClick={onRequestClose}>
                <img src={closeImg} alt="Close modal" />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input placeholder='Título' />
                <input type="number" placeholder='Valor' />

                <TransactionTypeContainer>
                    <RadioBox type='button' onClick={() => {setType('deposit');}} isActive={type === 'deposit'} activeColor="green">
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox type='button' onClick={() => {setType('withdraw');}} isActive={type === 'withdraw'} activeColor="red">
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input placeholder='Categoria' />

                <button type="submit">Cadastrar</button>
            </Container>            
        </Modal>
    );
}