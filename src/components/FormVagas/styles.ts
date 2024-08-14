import styled from 'styled-components'
import Cores from '../../themes/temacores'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${Cores.corSegundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
export const ButtonPesquisar = styled.button`
  background-color: ${Cores.corPrimaria};
  border: 1px solid ${Cores.corPrimaria};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${Cores.corSegundaria};
  margin-left: 8px;
  cursor: pointer;
`

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${Cores.corPrimaria};
`
