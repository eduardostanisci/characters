import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import './App.css';
import { characters, ICharacter } from './characters';

function App() {
  const [password, setPassword] = useState('')
  const [encryptedPassword, setEncryptedPassword] = useState('')
  const [encrypt, setEncrypt] = useState('')
  const [decrypt, setDecrypt] = useState('')

  const encryptPassword = useCallback((baseEncrypt: ICharacter[], passwordComparator: string): string => {
    let encrypt = ''
    for (let i = 0; i < password.length; i++) {
      const found = baseEncrypt.find((character: ICharacter) => character.character === passwordComparator.charAt(i))
      if (!found) break
      encrypt += found.crypto
    }
    return encrypt
  }, [password])

  useEffect((): void => {
    if (!password.length) {
      return
    }

    const encrypted = encryptPassword(characters, password)
    setEncrypt(encrypted)
  }, [encryptPassword, password])

  const decryptPassword = useCallback((value: ICharacter[]): string => {
    let auxIndex = 1
    let auxDecrypt = ''
    let index = 0

    while (index < encryptedPassword.length) {
      const word = encryptedPassword.substring(index, auxIndex)
      const found = value.find((character: ICharacter) => character.crypto === word)

      if (auxIndex > encryptedPassword.length) {
        break
      }

      if (!found) {
        auxIndex++
      } else {
        auxDecrypt += found.character
        index = auxIndex
        auxIndex++
      }
    }

    return auxDecrypt
  }, [encryptedPassword])

  useEffect((): void => {
    if (!encryptedPassword.length) {
      return
    }

    const decryptedPassword = decryptPassword(characters)
    setDecrypt(decryptedPassword)
  }, [decryptPassword, encryptedPassword])

  const handlePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value)
  }

  const handleEncryptedPassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setEncryptedPassword(event.target.value)
  }

  return (
    <>
      <div className="container">
        <label>Password</label>
        <input type="text" value={password} onChange={handlePassword} data-testid="input-password" />
        <label>Crypto: {encrypt}</label>
      </div>

      <div className="container">
        <label>Password encrypted</label>
        <input type="text" value={encryptedPassword} onChange={handleEncryptedPassword} data-testid="input-encrypted-password" />
        <label>Decrypto: {decrypt}</label>
      </div>
    </>
  );
}

export default App
