import React from 'react'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'

import * as U from 'tests/utils'

import Button from './index'

describe('<Button />', () => {
	test(`should handle click`, () => {
        const onClick = jest.fn()
		U.renderWithTheme(
            <Button onClick={onClick}>Finalizar</Button>
        )

        userEvent.click(screen.getByRole('button'))

        expect(screen.getByText('Finalizar')).toBeVisible()
        expect(onClick).toHaveBeenCalledTimes(1)
	})
})
