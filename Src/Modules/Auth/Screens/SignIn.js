import React, {useContext, useEffect, useState} from 'react';
import {
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppColors} from '../../Global/Utils/AppColors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  FieldControl,
  FieldGroup,
  FormBuilder,
  Validators,
} from 'react-reactive-form';
import {Button, Icon, Input, Spinner} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {setWidth} from '../../Global/Utils/Functions';
import ErorText from '../../Global/Components/ErorText.component';
import AuthStore from '../Store';
import App, {AuthContext} from '../../../../App';

const form = FormBuilder.group({
  username: [null, Validators.required],
  password: [null, Validators.required],
});

const SignIn = () => {
  const {signIn} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();

  const renderIcon = props => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setSecureTextEntry(!secureTextEntry)}
        style={{
          right: 5,
        }}>
        <Ionicons
          color={'#8F9BB3'}
          name={secureTextEntry ? 'eye-off-outline' : 'eye-outline'}
          size={25}
        />
      </TouchableOpacity>
    );
  };
  const TextInputPassword = ({handler, touched, hasError, meta, value}) => {
    return (
      <View>
        <TextInput
          label={meta.label}
          autoCapitalize="none"
          style={{
            borderColor: AppColors.CGRAY,
            backgroundColor: AppColors.CGRAY,
            borderRadius: 15,
            width: setWidth(83),
            padding: 10,
          }}
          value={value}
          placeholder={meta.placeholder}
          status={touched && hasError('required') ? 'danger' : null}
          keyboardType={meta.keyboardType}
          caption={
            touched &&
            hasError('required') && (
              <ErorText
                color={AppColors.RED}
                eror={`Lütfen ${meta.placeholder} Alanını Doldurunuz.`}
              />
            )
          }
          secureTextEntry={secureTextEntry && meta.secureTextEntry}
          {...handler()}
        />
      </View>
    );
  };
  const TextInputUserName = ({handler, touched, hasError, meta, value}) => {
    return (
      <View>
        <TextInput
          label={meta.label}
          autoCapitalize="none"
          style={{
            borderColor: AppColors.CGRAY,
            backgroundColor: AppColors.CGRAY,
            borderRadius: 15,
            width: setWidth(83),
            padding: 10,
          }}
          value={value}
          placeholder={meta.placeholder}
          status={touched && hasError('required') ? 'danger' : null}
          keyboardType={meta.keyboardType}
          caption={
            touched &&
            hasError('required') && (
              <ErorText
                color={AppColors.RED}
                eror={`Lütfen ${meta.placeholder} Alanını Doldurunuz.`}
              />
            )
          }
          {...handler()}
        />
      </View>
    );
  };
  const postForm = async () => {
    if (form.valid) {
        // setLoading(true);
        await signIn(form.value);
    }
  };
  useEffect(() => {}, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: AppColors.PRIMARY,
      }}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        style={{flex: 1}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons
            name={'cart-outline'}
            size={setWidth(50)}
            color={AppColors.WHITE}
          />
        </View>
        <View
          style={{
            borderColor: AppColors.WHITE,
            backgroundColor: AppColors.WHITE,
            borderRadius: 15,
            shadowColor: AppColors.BLACK,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowRadius: 10,
            shadowOpacity: 0.22,
            elevation: 3,
            margin: 5,
            marginTop: 50,
          }}>
          <FieldGroup
            control={form}
            strict={false}
            render={() => (
              <View
                style={{
                  flex: 1,
                }}>
                <View
                  style={{
                    marginTop: 25,
                  }}>
                  <Text
                    style={{
                      color: AppColors.PRIMARY,
                      fontWeight: '600',
                      fontSize: 16,
                      left: 35,
                    }}>
                    {'E-mail'}
                  </Text>
                </View>

                <View
                  style={{
                    margin: 18,
                    marginTop: 5,
                    alignItems: 'center',
                  }}>
                  <FieldControl
                    name={'username'}
                    strict={false}
                    render={TextInputUserName}
                    meta={{
                      placeholder: 'E-mail',
                    }}
                  />
                </View>

                <Text
                  style={{
                    color: AppColors.PRIMARY,
                    fontWeight: '600',
                    fontSize: 16,
                    left: 35,
                    marginTop: 25,
                  }}>
                  {'Şifre'}
                </Text>
                <View
                  style={{
                    margin: 18,
                    marginTop: 5,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    left:15
                  }}>
                  <FieldControl
                    name={'password'}
                    strict={false}
                    render={TextInputPassword}
                    meta={{
                      placeholder: 'Şifre',
                      secureTextEntry: 'Şifre' ? true : true,
                    }}
                  />
                  <View
                    style={{
                      right: 30,
                    }}>
                    {renderIcon()}
                  </View>
                </View>
              </View>
            )}
          />
          <View
            style={{flex: 1, marginTop: 25, margin: 18, alignItems: 'center'}}>
            <Button
              style={{
                borderWidth: 0,
                backgroundColor: AppColors.PRIMARY,
                width: setWidth(80),
                borderRadius: 15,
              }}
              size="large"
              onPress={postForm.bind(this)}
              accessoryLeft={
                loading ? (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Spinner size="small" status="basic" />
                  </View>
                ) : (
                  ''
                )
              }>
              {'Giriş Yap'}
            </Button>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default SignIn;
