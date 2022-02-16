import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Footer from '../src/components/Footer';

test('Footer', () => {
    const {getByText} = render(<Footer />);
    expect(getByText('Contact Us')).toBeInTheDocument();
    expect(getByText('About Us')).toBeInTheDocument();
});
