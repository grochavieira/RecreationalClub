import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PasswordInput = props => {
  return (
    <View style={styles.principalContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-start',
        }}>
        <Text style={styles.inputTextTitle}>{props.inputTextTitle}</Text>
        <TouchableOpacity
          style={{
            marginLeft: 5,
          }}
          onPress={props.mostraSenha}>
          <IconAwesome name={props.mudaOlho} size={17} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={{...styles.inputContainer, ...props.style}}>
        <Icon name={props.nameIcon} size={24} color="#FFF" />
        <TextInput
          {...props}
          style={{...styles.input, ...props.style}}
          placeholder={props.textPlaceHolder}
          placeholderTextColor="rgba(255,255,255,0.7)"
          secureTextEntry={props.security}
          keyboardType={props.keyboard}
          maxLength={props.length}
          value={props.value}
          onChangeText={props.onChange}
        />
      </View>
      <Text style={styles.errorText}>{props.inputErrorText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    color: '#FFF',
    fontSize: 16,
  },
  inputContainer: {
    height: 40,
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    borderBottomColor: '#FFF',
    borderBottomWidth: 1,
  },
  errorText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FF3366',
    marginHorizontal: 10,
  },
  principalContainer: {
    alignItems: 'flex-end',
  },
  inputTextTitle: {
    fontSize: 12,
    color: '#FFF',
    alignSelf: 'flex-start',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default PasswordInput;
