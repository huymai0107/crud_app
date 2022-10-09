import React from 'react'
import { FormInput ,FormLabel ,Form, FormH1,Container, FormContent, FormWrap, Icon, FormButton, Text } from './RegisterElements'
const Register = () => {
  return (
<>

    <Container>
    <Icon href='/'>Khmer</Icon>
      <FormWrap>
          <FormContent>
            <Form>
              <FormH1>
                  Sign In 
              </FormH1>

                        <div>
                            <FormLabel htmlFor='for'>Last Name</FormLabel>
                            <FormLabel htmlFor='for'>First Name </FormLabel>
                            <div>
                            <FormInput  type='fname'  required ></FormInput>
                            <FormInput  type='lname'  required ></FormInput>
                            </div>
                        </div>
                            
              <FormLabel htmlFor='for'>Email </FormLabel>
              <FormInput type='email' required></FormInput>

              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required></FormInput>
              <FormLabel htmlFor='for'>Confirm Password</FormLabel>
              <FormInput type='password' required></FormInput>

              <div>
              </div>

            <FormButton type='submit'>Sign Up</FormButton>

              {/* <Text>Forgot Password</Text> */}
            </Form>

          </FormContent>

      </FormWrap>
    </Container>

</>

  )
}

export default Register
