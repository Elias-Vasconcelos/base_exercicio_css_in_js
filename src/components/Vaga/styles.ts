import styled from 'styled-components'
import Cores from '../../themes/temacores'

export const VagaS = styled.div`
  border: 1px solid ${Cores.corPrimaria};
  background-color: ${Cores.corSegundaria};
  color: ${Cores.corPrimaria};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${Cores.corPrimaria};
    color: ${Cores.corSegundaria};
  }
`
export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
export const VagaLink = styled.a`
  border-color: ${Cores.corSegundaria};
  background-color: ${Cores.corPrimaria};
  color: ${Cores.corSegundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  &:hover {
    border-color: ${Cores.corPrimaria};
    background-color: ${Cores.corSegundaria};
    color: ${Cores.corPrimaria};
  }

  @media {
    display: block;
  }
`
