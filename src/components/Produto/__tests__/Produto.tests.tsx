import { screen, fireEvent } from '@testing-library/react'

import Produto from '..'
import { renderizaComProvider } from '../../../utils/tests'

const jogo = {
  id: 1,
  categoria: 'RPG',
  imagem: '',
  plataformas: ['Windows'],
  preco: 150.9,
  precoAntigo: 199.9,
  titulo: 'Elder Ring'
}

describe('Testes para o componente produto', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Produto game={jogo} />)
    expect(screen.getByText('Elder Ring')).toBeInTheDocument()
  })

  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Produto game={jogo} />)
    const botao = screen.getByTestId('btn-adicionar-produto')
    fireEvent.click(botao)
    expect(screen.getByText('Elder Ring')).toBeInTheDocument()
  })
})
