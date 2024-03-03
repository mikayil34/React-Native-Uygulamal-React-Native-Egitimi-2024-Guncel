import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import AuthContent from '../components/AuthContent'
import { LoginUser } from '../util/auth'
import Loading from '../components/Loading';

export default function LoginScreen() {
  const [isAuthanticating, setIsAuthanticating] = useState(false);
  async function LoginUpHandler({ email, pasword }) {
    setIsAuthanticating(true);
    try {
      await LoginUser(email, pasword);
    } catch (error) {
      Alert.alert('Giriş Yapılamadı!', 'Lütfen bilgilerinizi kontrol ediniz')
    }

    setIsAuthanticating(false);

  }
  if (isAuthanticating) {
    return <Loading message="Kullancı girişi yapılıyor" />
  }
  return (
    <View>
      <AuthContent isLogin onAuthenticate={LoginUpHandler} />
    </View>
  )
}

const styles = StyleSheet.create({})