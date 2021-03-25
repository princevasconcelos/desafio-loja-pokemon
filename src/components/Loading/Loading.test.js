import React from 'react'
import { render, screen } from '@testing-library/react'

import Loading from './index'

describe('<Loading />', () => {
  test(`should render on screen`, () => {
    render(<Loading />)

    expect(screen.getByRole('status')).toBeVisible()
  })
})
