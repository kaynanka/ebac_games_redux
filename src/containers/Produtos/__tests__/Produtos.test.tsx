import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { screen, waitFor } from '@testing-library/react'

import Produtos from '..'
import { renderizaComProvider } from '../../../utils/tests'

const mocks = [
  {
    id: 1,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['Windows'],
    preco: 150.9,
    precoAntigo: 199.9,
    titulo: 'Elder Ring'
  },
  {
    id: 2,
    categoria: 'FPS',
    imagem: '',
    plataformas: ['Windows'],
    preco: 199.9,
    precoAntigo: 299.9,
    titulo: 'Fortnite'
  },
  {
    id: 3,
    categoria: 'Ação',
    imagem: '',
    plataformas: ['Windows'],
    preco: 150.9,
    precoAntigo: 199.9,
    titulo: 'Rambo'
  },
  {
    id: 4,
    categoria: 'FPS',
    imagem: '',
    plataformas: ['Windows'],
    preco: 19.9,
    precoAntigo: 99.9,
    titulo: 'PUBG'
  }
]

const server = setupServer(
  rest.get(
    'http://localhost:4000/products',
    (requisicao, resposta, contexto) => {
      return resposta(contexto.json(mocks))
    }
  )
)

describe('Testes para o container produtos', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('Deve renderizar corretamente com o texto de carregando', () => {
    renderizaComProvider(<Produtos />)
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })

  test('Deve renderizar corretamente com a listagem de jogos', async () => {
    renderizaComProvider(<Produtos />)
    waitFor(() => {
      expect(screen.getByText('PUBG')).toBeInTheDocument()
    })
  })
})
