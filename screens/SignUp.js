import React from 'react';
import {
  SafeAreaView,
  TextInput,
  ActivityIndicator,
  Text,
  View,
  Switch,
} from 'react-native';
import { Formik } from 'formik';
import Schema from '../components/Schema';


import Button from '../components/Button';


const FieldWrapper = ({ children, label, formikProps, formikKey }) => (
  <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
    <Text style={{ marginBottom: 3 }}>{label}</Text>
    {children}
    <Text style={{ color: 'red' }}>
      {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
    </Text>
  </View>
);

const StyledInput = ({ label, formikProps, formikKey, ...rest }) => {
  const inputStyles = {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 3,
    borderRadius: 8,
  };

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.borderColor = 'red';
  }

  return (
    <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
      <TextInput
        style={inputStyles}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...rest}
      />
    </FieldWrapper>
  );
};

const StyledSwitch = ({ formikKey, formikProps, label, ...rest }) => (
  <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
    <Switch
      value={formikProps.values[formikKey]}
      onValueChange={(value) => {
        formikProps.setFieldValue(formikKey, value);
      }}
      {...rest}
    />
  </FieldWrapper>
);

const signUp = ({ email }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'a@a.com') {
        reject(new Error("You playin' with that fake email address."));
      }
      resolve(true);
    }, 1000);
  });

const ValidForm = () => {
  const INITIAL_VALUES = {
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  };

  const onSubmit = (values, actions) => {
    signUp({ email: values.email })
      .then(() => {
        alert(JSON.stringify(values));
      })
      .catch((error) => {
        actions.setFieldError('general', error.message);
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  };



  return (
    <View
    style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16 }}>
        Sign Up 
      </Text>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={onSubmit}
        validationSchema={Schema}>
        {(formikProps) => (
          <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
            <StyledInput
              label="Email"
              formikProps={formikProps}
              formikKey="email"
              placeholder="johndoe@example.com"
              autoFocus
            />

            <StyledInput
       
              label="Password"
              formikProps={formikProps}
              formikKey="password"
              placeholder="password"
              secureTextEntry
            />

            <StyledInput
              label="Confirm Password"
              formikProps={formikProps}
              formikKey="confirmPassword"
              placeholder="confirm password"
              secureTextEntry
            />

            <StyledSwitch
              label="Agree to Terms"
              formikKey="agreeToTerms"
              formikProps={formikProps}
            />

            {formikProps.isSubmitting ? (
              <ActivityIndicator color="red" />
            ) : (
              <View>
                <Button label="Submit" onPress={formikProps.handleSubmit} />
              
                <Text style={{ color: 'red' }}>
                  {formikProps.errors.general}
                </Text>
              </View>
            )}
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ValidForm;
