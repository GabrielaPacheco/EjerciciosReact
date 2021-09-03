import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DataResult from "./DataResult";

export default function Result(props) {
  const { capital, interest, months, total, errorMessage } = props;
  return (
    <View style={styles.content}>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>RESUMEN</Text>
          <DataResult
            styles={styles.value}
            label="Cantidad solicitada:"
            value={capital}
          />
          <DataResult
            styles={styles.value}
            label="Interes %:"
            value={interest}
          />
          <DataResult styles={styles.value} label="Plazos:" value={months} />
          <DataResult
            styles={styles.value}
            label="Pago mensual:"
            value={`S/. ${total.monthlyFee} `}
          />
          <DataResult
            styles={styles.value}
            label="Pago total:"
            value={`S/. ${total.totalPayable} `}
          />
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 20,
  },
  content: {
    marginHorizontal: 40,
  },
  boxResult: {
    padding: 30,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
