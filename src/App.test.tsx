import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('These tests are about encryption functionality', () => {

  test('1 - It should validate the cryptography', () => {
    render(<App />)
    const input = screen.getByTestId('input-password')
    fireEvent.change(input, { target: { value: 'acegi!024@ç' } })
    const encrypted = screen.getByText('Crypto: @Ne1eB8yC7494E60y5zKw4$a0ey40$B7Lx7$8')
    const decrypted = screen.getByText('Decrypto: acegi!024@ç')
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

  test('2 - It should validate the cryptography', () => {
    render(<App />)
    const input = screen.getByTestId('input-password')
    fireEvent.change(input, { target: { value: 'bdfhj$135%Ç' } })
    const encrypted = screen.getByText('Crypto: H5t21x*Z62$Vw5K53656r1w4v*p9Px3&830@mV%8')
    const decrypted = screen.getByText('Decrypto: bdfhj$135%Ç')
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

  test('3 - It should validate the cryptography', () => {
    render(<App />)
    const input = screen.getByTestId('input-password')
    fireEvent.change(input, { target: { value: 'kmoqs&680*ç' } })
    const encrypted = screen.getByText('Crypto: 93l1I@K5E5oJ1V87$NyL2n63iy00w4$a5158O7$8')
    const decrypted = screen.getByText('Decrypto: kmoqs&680*ç')
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

  test('4 - It should validate the cryptography', () => {
    render(<App />)
    const input = screen.getByTestId('input-password')
    fireEvent.change(input, { target: { value: 'rtvxz(157)Ç' } })
    const encrypted = screen.getByText('Crypto: aM6694o@4vE15#oCcY65w4vPx3&6Yn$r!2mV%8')
    const decrypted = screen.getByText('Decrypto: rtvxz(157)Ç')
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

  test('5 - It should validate the cryptography', () => {
    render(<App />)
    const input = screen.getByTestId('input-password')
    fireEvent.change(input, { target: { value: 'ACEGI!134&ç' } })
    const encrypted = screen.getByText('Crypto: 12A@hA82x!6fO917Y%5zKw4v*p940$ByL27$8')
    const decrypted = screen.getByText('Decrypto: ACEGI!134&ç')
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

  test('6 - It should validate the cryptography', () => {
    render(<App />)
    const input = screen.getByTestId('input-password')
    fireEvent.change(input, { target: { value: 'BDFHJ@434&Ç' } })
    const encrypted = screen.getByText('Crypto: 1u3Y1Op7s7Pb1#r1K%7Lx40$B*p940$ByL2mV%8')
    const decrypted = screen.getByText('Decrypto: BDFHJ@434&Ç')
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

  test('7 - It should validate the cryptography', () => {
    render(<App />)
    const input = screen.getByTestId('input-password')
    fireEvent.change(input, { target: { value: 'KMOQS#123(ç' } })
    const encrypted = screen.getByText('Crypto: y5$531x17@Bs59*9!2rN8#w4v0ey*p9Y657$8')
    const decrypted = screen.getByText('Decrypto: KMOQS#123(ç')
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

  test('8 - It should validate the cryptography', () => {
    render(<App />)
    const input = screen.getByTestId('input-password')
    fireEvent.change(input, { target: { value: 'LNPRTVXZ$2Ç' } })
    const encrypted = screen.getByText('Crypto: !Ku8Iah7!RkW89r!7P*tCl2892V6r10eymV%8')
    const decrypted = screen.getByText('Decrypto: LNPRTVXZ$2Ç')
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

  test('9 - It should validate the cryptography', () => {
    render(<App />)
    const input = screen.getByTestId('input-password')
    fireEvent.change(input, { target: { value: 'UWYa0@ç' } })
    const encrypted = screen.getByText('Crypto: 1H@b&W84p9$K@New4$a7Lx7$8')
    const decrypted = screen.getByText('Decrypto: UWYa0@ç')
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

  test('10 - It should validate the cryptography', () => {
    render(<App />)
    const input = screen.getByTestId('input-password')
    fireEvent.change(input, { target: { value: '@UaUa4$$Ç' } })
    const encrypted = screen.getByText('Crypto: 7Lx1H@b@Ne1H@b@Ne40$B6r16r1mV%8')
    const decrypted = screen.getByText('Decrypto: @UaUa4$$Ç')
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

  test('11 - It should validate the cryptography', () => {
    render(<App />)
    const input = screen.getByTestId('input-password')
    fireEvent.change(input, { target: { value: '7Lx1H@b@Ne1H@b@Ne40$B6r16r1mV%8' } })
    const encrypted = screen.getByText('Crypto: 6Yn$!KuvE15w4vb1#7LxH5t27Lx8Ia8yC7w4vb1#7LxH5t27Lx8Ia8yC740$Bw4$a6r11u3Yn63aMw4vn63aMw4vI@K57P*t830@iy00')
    const decrypted = screen.getByText('Decrypto: 7Lx1H@b@Ne1H@b@Ne40$B6r16r1mV%8')
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

})