import {Button, TextInput} from "react-native-paper";
import {View} from "react-native";
import {useAuth} from "../context/Auth";
import {styles} from "../styles/basic";

export default function Login() {
    const { user, handleLogin, setUser } = useAuth();

    return (
        <View style={styles.container}>
            <TextInput onChangeText={text => setUser({...user, email: text})} label='E-mail' style={styles.mt20}></TextInput>
            <TextInput onChangeText={text => setUser({...user, password: text})} label='Senha' secureTextEntry={true} style={styles.mt20}></TextInput>
            <Button onPress={handleLogin} mode='contained' style={styles.mt20}>Entrar</Button>
        </View>
    )
}
