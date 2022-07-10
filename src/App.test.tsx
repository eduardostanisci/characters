import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('These tests are about encryption functionality', () => {
  const encryptPassword = (password: string, encryptedPassword: string) => {
    const inputPassword = screen.getByTestId('input-password')
    fireEvent.change(inputPassword, { target: { value: password } })
    return screen.getByText('Crypto: ' + encryptedPassword)
  }

  const decryptPassword = (password: string, encryptedPassword: string) => {
    const inputEncryptedPassword = screen.getByTestId('input-encrypted-password')
    fireEvent.change(inputEncryptedPassword, { target: { value: encryptedPassword } })
    return screen.getByText('Decrypto: ' + password)
  }

  test('1 - It should validate the cryptography', () => {
    render(<App />)
    const password = 'acegi!024@ç'
    const encryptedPassword = '@Ne1eB8yC7494E60y5zKw4$a0ey40$B7Lx7$8'
    const encrypted = encryptPassword(password, encryptedPassword)
    const decrypted = decryptPassword(password, encryptedPassword)
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

  test('2 - It should validate the cryptography', () => {
    render(<App />)
    const password = 'bdfhj$135%Ç'
    const encryptedPassword = 'H5t21x*Z62$Vw5K53656r1w4v*p9Px3&830@mV%8'
    const encrypted = encryptPassword(password, encryptedPassword)
    const decrypted = decryptPassword(password, encryptedPassword)
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

  test('3 - It should validate the cryptography', () => {
    render(<App />)
    const password = 'kmoqs&680*ç'
    const encryptedPassword = '93l1I@K5E5oJ1V87$NyL2n63iy00w4$a5158O7$8'
    const encrypted = encryptPassword(password, encryptedPassword)
    const decrypted = decryptPassword(password, encryptedPassword)
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

  test('4 - It should validate the cryptography', () => {
    render(<App />)
    const password = 'rtvxz(157)Ç'
    const encryptedPassword = 'aM6694o@4vE15#oCcY65w4vPx3&6Yn$r!2mV%8'
    const encrypted = encryptPassword(password, encryptedPassword)
    const decrypted = decryptPassword(password, encryptedPassword)
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

  test('5 - It should validate the cryptography', () => {
    render(<App />)
    const password = 'ACEGI!134&ç'
    const encryptedPassword = '12A@hA82x!6fO917Y%5zKw4v*p940$ByL27$8'
    const encrypted = encryptPassword(password, encryptedPassword)
    const decrypted = decryptPassword(password, encryptedPassword)
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

  test('6 - It should validate the cryptography', () => {
    render(<App />)
    const password = 'BDFHJ@434&Ç'
    const encryptedPassword = '1u3Y1Op7s7Pb1#r1K%7Lx40$B*p940$ByL2mV%8'
    const encrypted = encryptPassword(password, encryptedPassword)
    const decrypted = decryptPassword(password, encryptedPassword)
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

  test('7 - It should validate the cryptography', () => {
    render(<App />)
    const password = 'KMOQS#123(ç'
    const encryptedPassword = 'y5$531x17@Bs59*9!2rN8#w4v0ey*p9Y657$8'
    const encrypted = encryptPassword(password, encryptedPassword)
    const decrypted = decryptPassword(password, encryptedPassword)
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

  test('8 - It should validate the cryptography', () => {
    render(<App />)
    const password = 'LNPRTVXZ$2Ç'
    const encryptedPassword = '!Ku8Iah7!RkW89r!7P*tCl2892V6r10eymV%8'
    const encrypted = encryptPassword(password, encryptedPassword)
    const decrypted = decryptPassword(password, encryptedPassword)
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

  test('9 - It should validate the cryptography', () => {
    render(<App />)
    const password = 'UWYa0@ç'
    const encryptedPassword = '1H@b&W84p9$K@New4$a7Lx7$8'
    const encrypted = encryptPassword(password, encryptedPassword)
    const decrypted = decryptPassword(password, encryptedPassword)
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

  test('10 - It should validate the cryptography', () => {
    render(<App />)
    const password = '@UaUa4$$Ç'
    const encryptedPassword = '7Lx1H@b@Ne1H@b@Ne40$B6r16r1mV%8'
    const encrypted = encryptPassword(password, encryptedPassword)
    const decrypted = decryptPassword(password, encryptedPassword)
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

  test('11 - It should validate the cryptography', () => {
    render(<App />)
    const password = '7Lx1H@b@Ne1H@b@Ne40$B6r16r1mV%8'
    const encryptedPassword = '6Yn$!KuvE15w4vb1#7LxH5t27Lx8Ia8yC7w4vb1#7LxH5t27Lx8Ia8yC740$Bw4$a6r11u3Yn63aMw4vn63aMw4vI@K57P*t830@iy00'
    const encrypted = encryptPassword(password, encryptedPassword)
    const decrypted = decryptPassword(password, encryptedPassword)
    expect(encrypted).toBeDefined()
    expect(decrypted).toBeDefined()
  })

})