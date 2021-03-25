import React from 'react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import * as U from 'tests/utils'
import Modal from './index'

describe('<Modal />', () => {
  test(`should be hidden if isVisible is false`, () => {
    U.renderWithProviders({
      component: <Modal isVisible={false}>body</Modal>,
    })

    expect(screen.queryByText('body')).toBeNull()
  })

  test(`should handle close click and display a title and content`, () => {
    const handleClose = jest.fn()
    U.renderWithProviders({
      component: (
        <Modal isVisible handleClose={handleClose} title="header">
          body
        </Modal>
      ),
    })

    userEvent.click(screen.getByRole('button'))

    expect(screen.getByText('header')).toBeVisible()
    expect(screen.getByText('body')).toBeVisible()
    expect(handleClose).toHaveBeenCalledTimes(1)
  })
})
