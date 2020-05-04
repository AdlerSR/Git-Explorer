import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { DebounceInput } from 'react-debounce-input';

import { Title, Form, Repositories, Error } from './styles';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import Repository from '../Repository';

interface Repository {
  id: string;
  html_url: string;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Repos {
  name: string;
  id: string;
}

const Dashboard: React.FC = () => {
  const [newAutor, setNewAutor] = useState('');
  const [newRepo, setNewRepo] = useState('select');
  const [allRepo, setAllRepo] = useState<Repos[]>([]);
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    if (newAutor) {
      api.get(`/users/${newAutor}/repos`).then((res) => {
        const response = res.data;

        setAllRepo(response);
      });
    }
  }, [newAutor]);

  async function handleAddRepository(
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();

    if (!newAutor) {
      setInputError('Digite o usuário e selecione o repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(
        `/repos/${newAutor}/${newRepo}`,
      );

      const repository = response.data;

      setRepositories([...repositories, repository]);

      setNewAutor('');

      setNewRepo('select');

      setAllRepo([]);

      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <DebounceInput
          minLength={2}
          debounceTimeout={500}
          placeholder="Nome do usuário"
          value={newAutor}
          onChange={(e) => setNewAutor(e.target.value)}
        />
        <select onChange={(e) => setNewRepo(e.target.value)} value={newRepo}>
          <option value="select">Nome do repositório</option>
          {allRepo.map((repo) => (
            <option key={repo.id} value={repo.name}>
              {repo.name}
            </option>
          ))}
        </select>
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map((repository) => (
          <a href={repository.html_url} key={repository.id}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>
                {!repository.description
                  ? 'Repository without description'
                  : repository.description}
              </p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
