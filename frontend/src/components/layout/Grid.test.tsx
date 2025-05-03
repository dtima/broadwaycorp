import { render, screen } from '@testing-library/react';
import Grid, { GridItem } from './Grid';

describe('Grid', () => {
  it('renders children correctly', () => {
    render(
      <Grid>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Grid>
    );
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });
  
  it('applies default column class', () => {
    render(
      <Grid>
        <div>Item 1</div>
      </Grid>
    );
    
    const gridContainer = screen.getByText('Item 1').parentElement;
    expect(gridContainer).toHaveClass('grid-cols-1');
  });
  
  it('applies specified column classes', () => {
    render(
      <Grid cols={2} smCols={3} mdCols={4} lgCols={6} xlCols={12}>
        <div>Item 1</div>
      </Grid>
    );
    
    const gridContainer = screen.getByText('Item 1').parentElement;
    expect(gridContainer).toHaveClass('grid-cols-2');
    expect(gridContainer).toHaveClass('sm:grid-cols-3');
    expect(gridContainer).toHaveClass('md:grid-cols-4');
    expect(gridContainer).toHaveClass('lg:grid-cols-6');
    expect(gridContainer).toHaveClass('xl:grid-cols-12');
  });
  
  it('applies gap class correctly', () => {
    render(
      <Grid gap="lg">
        <div>Item 1</div>
      </Grid>
    );
    
    const gridContainer = screen.getByText('Item 1').parentElement;
    expect(gridContainer).toHaveClass('gap-6');
  });
  
  it('applies custom className', () => {
    render(
      <Grid className="test-class">
        <div>Item 1</div>
      </Grid>
    );
    
    const gridContainer = screen.getByText('Item 1').parentElement;
    expect(gridContainer).toHaveClass('test-class');
  });
});

describe('GridItem', () => {
  it('renders children correctly', () => {
    render(
      <GridItem>
        <div>Grid Item Content</div>
      </GridItem>
    );
    
    expect(screen.getByText('Grid Item Content')).toBeInTheDocument();
  });
  
  it('applies column span classes', () => {
    render(
      <GridItem span={2} smSpan={3} mdSpan={4} lgSpan={6} xlSpan={12}>
        <div>Spanning Item</div>
      </GridItem>
    );
    
    const itemContainer = screen.getByText('Spanning Item').parentElement;
    expect(itemContainer).toHaveClass('col-span-2');
    expect(itemContainer).toHaveClass('sm:col-span-3');
    expect(itemContainer).toHaveClass('md:col-span-4');
    expect(itemContainer).toHaveClass('lg:col-span-6');
    expect(itemContainer).toHaveClass('xl:col-span-12');
  });
  
  it('applies custom className to grid item', () => {
    render(
      <GridItem className="item-class">
        <div>Styled Item</div>
      </GridItem>
    );
    
    const itemContainer = screen.getByText('Styled Item').parentElement;
    expect(itemContainer).toHaveClass('item-class');
  });
}); 