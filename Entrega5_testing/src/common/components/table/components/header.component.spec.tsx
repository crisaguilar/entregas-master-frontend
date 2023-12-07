import * as React from 'react';
import { HeaderGroup } from 'react-table';
import { render, screen } from '@testing-library/react';
import { HeaderComponent } from './header.component';
import { container } from 'layouts/app.layout.styles';

describe('common/table/HeaderComponent', () => {
  const table = document.createElement('table');

  it('should be rendered as expected passing required properties', () => {
    // Arrange
    const props = {
      headerGroups: [
        {
          getHeaderGroupProps: jest.fn(),
          headers: [
            {
              getHeaderProps: jest.fn(),
              render: jest.fn().mockReturnValue('Test label'),
            },
          ],
        },
      ] as unknown as HeaderGroup[],
    };

    // Act
    const { getByText } = render(<HeaderComponent {...props} />, {
      container: document.body.appendChild(table),
    });

    // Assert
    expect(getByText('Test label')).toBeInTheDocument();
  });

  it('should render two columns passing two columns', () => {
    // Arrange
    const props = {
      headerGroups: [
        {
          getHeaderGroupProps: jest.fn(),
          headers: [
            {
              getHeaderProps: jest.fn(),
              render: jest.fn().mockReturnValue('Test label 1'),
            },
          ],
        },
        {
          getHeaderGroupProps: jest.fn(),
          headers: [
            {
              getHeaderProps: jest.fn(),
              render: jest.fn().mockReturnValue('Test label 2'),
            },
          ],
        },
      ] as unknown as HeaderGroup[],
    };

    // Act

    const { getByText } = render(<HeaderComponent {...props} />, {
      container: document.body.appendChild(table),
    });

    // Assert
    expect(getByText('Test label 1')).toBeInTheDocument();
    expect(getByText('Test label 2')).toBeInTheDocument();
  });
});
