import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Counter from './index'

describe('<Counter />', () => {
  test(`should handle increase/decrease/clean buttons`, () => {
    const onIncrease = jest.fn()
    const onDecrease = jest.fn()
    const onClean = jest.fn()
    render(
      <Counter
        value="1"
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onClean={onClean}
      />
    )

    const add = screen.getByRole('button', {
      name: '+',
    })
    const del = screen.getByRole('button', {
      name: '-',
    })
    const clean = screen.getByRole('button', {
      name: 'remover',
    })

    userEvent.click(add)
    userEvent.click(add)
    userEvent.click(add)
    userEvent.click(del)
    userEvent.click(del)
    userEvent.click(clean)

    expect(screen.getByText('1')).toBeVisible()
    expect(onIncrease).toHaveBeenCalledTimes(3)
    expect(onDecrease).toHaveBeenCalledTimes(2)
    expect(onClean).toHaveBeenCalledTimes(1)
  })
})
