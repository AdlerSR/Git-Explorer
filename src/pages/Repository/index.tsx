import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';

import LogoImg from '../../assets/logo.svg';
import LoadingGif from '../../assets/loading.gif';

import api from '../../services/api';

interface RepositoryParam {
  repository: string;
}

interface RepositoryRequest {
  id: string;
  name: string;
  html_url: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  title: string;
  id: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParam>();
  const [repository, setRepository] = useState<RepositoryRequest | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    setTimeout(() => {
      api.get(`/repos/${params.repository}`).then((res) => {
        const response = res.data;
        setRepository(response);
      });

      api.get(`/repos/${params.repository}/issues`).then((res) => {
        const response = res.data;
        setIssues(response);
      });
    }, 2000);
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={LogoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>

      {repository ? (
        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt="" />
            <div>
              <strong>{repository.full_name}</strong>
              <p>
                {!repository.description
                  ? 'Repository without description'
                  : repository.description}
              </p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues Abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      ) : (
        <RepositoryInfo>
          <div className="gifLoading">
            <img src={LoadingGif} width="300" height="300" alt="loading" />
          </div>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map((issue) => (
          <span key={issue.id}>
            <div>
              <strong>{issue.user.login}</strong>
              <p>{issue.title}</p>
            </div>
            <a href={issue.html_url} target="__blank">
              <FiChevronRight className="chevronIcon" size={28} type="button" />
            </a>
          </span>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
