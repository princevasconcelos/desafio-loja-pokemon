import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Search from './index'

describe('<Search />', () => {
  test(`should call onSubmit fn when user submits the form`, () => {
    const onSubmit = jest.fn()
    const { container } = render(
      <Search placeholder="pesquisar pokemon" onSubmit={onSubmit} />
    )

    userEvent.type(screen.getByPlaceholderText('pesquisar pokemon'), 'pikachu')

    fireEvent.submit(container.querySelector('form'))

    expect(onSubmit).toHaveBeenCalledTimes(1)
  })
})
