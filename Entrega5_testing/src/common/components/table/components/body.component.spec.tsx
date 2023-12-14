import * as React from 'react';
import { Row } from 'react-table';
import { render, screen } from '@testing-library/react';
import { BodyComponent } from './body.component';
import { RowComponent } from './row.component';
import { CellComponent } from './cell.component';
import { RowRendererProps } from '../table.vm';

describe('common/table/BodyComponent', () => {
  it('should render as expected', () => {
    // Arrange
    const TestRowComponent: React.FunctionComponent<RowRendererProps<any>> = (
      props
    ) => (
      <RowComponent key={props.row.key}>
        <CellComponent>{props.row.testRow}</CellComponent>
      </RowComponent>
    );

    const props = {
      rows: [
        { getRowProps: jest.fn(), original: { testRow: 1, key: 0 } },
        { getRowProps: jest.fn(), original: { testRow: 2, key: 1 } },
        { getRowProps: jest.fn(), original: { testRow: 3, key: 2 } },
      ] as unknown as Row[],
      rowRenderer: TestRowComponent,
      prepareRow: jest.fn(),
    };

    // Act
    const table = document.createElement('table');
    const { getByText } = render(<BodyComponent {...props} />, {
      container: document.body.appendChild(table),
    });

    // Assert
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
  });
});
