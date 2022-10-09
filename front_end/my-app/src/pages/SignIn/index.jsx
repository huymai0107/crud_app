import React from 'react'
import { FormInput ,FormLabel ,Form, FormH1,Container, FormContent, FormWrap, Icon, FormButton, Text } from './SignInElements'
const SignIn = () => {
  return (
<>

    <Container>
    <Icon href='/'>    Khmer    </Icon>
      <FormWrap>
          <FormContent>
            <Form>
              <FormH1>
                  Sign In 
              </FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required></FormInput>

              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required></FormInput>

              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>

      </FormWrap>
    </Container>

</>

  )
}

export default SignIn
