import * as React from 'react';
import { render } from '@testing-library/react';
import { CellComponent } from './cell.component';

describe.only('common/table/CellComponent', () => {
  it('should render as expected passing required properties', () => {
    // Arrange

    // Act
    const tr = document.createElement('tr');
    const { getByText } = render(
      <CellComponent>
        <h1>Test content</h1>
      </CellComponent>,
      {
        container: document.body.appendChild(tr),
      }
    );
    // Assert
    expect(getByText('Test content')).toBeInTheDocument();
  });
});
