import { render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';

test('render texto testimonio', ()=>{
    render(<SearchForm />);
    const textoTestimonio = screen.getByText(/Buscar/i);
    expect(textoTestimonio).toBeInTheDocument();
})
