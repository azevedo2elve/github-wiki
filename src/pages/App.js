import { useState } from 'react';
import gitLogo from '../assets/github-mark-white.png';
import Button from '../components/Button';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import {api} from '../services/api';

import { Container } from './styles'
function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearchRepo = async () => {
    try {
      const {data} = await api.get(`repos/${currentRepo}`)

      if(data.id) {
        const isExist = repos.find(repo => repo.id === data.id)

        if(!isExist){
          setRepos(prev => [...prev, data])
          setCurrentRepo('')
          setErrorMessage('');
          return
        }
        setErrorMessage('Repositório já adicionado!');
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage('Repositório não encontrado!');
      } else {
        setErrorMessage('Ocorreu um erro ao buscar o repositório.');
      }
    }
  }

  const handleRemoveRepo = (id) => {
    setRepos(prevRepos => prevRepos.filter((repo) => repo.id !== id)); // prevRepos pega todos os dados dentro do array repos e faz uma function com o prevRepos.filter onde vai retornar o repositorio que é diferente do id passado
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='github logo'/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={ handleSearchRepo } />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo } repo={repo}/>)}
    </Container>
  );
}

export default App;
