import { screen } from '@testing-library/react'
import Header from '..'
import { renderizaComProvider } from '../../../utils/tests'

describe('Testes para o component header', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Deve renderizar com 2 itens no carrinho', () => {
    renderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
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
            }
          ]
        }
      }
    })

    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
