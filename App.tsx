import React from 'react';
import { SafeAreaView, StatusBar } from "react-native";
import { CalculadoraScreen } from "./src/screens/CalculadoraScreen";
import { styles } from "./src/themes/AppTheme";

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
      backgroundColor='black'
      />
      <CalculadoraScreen/>
    </SafeAreaView>

  );
};

export default App;
