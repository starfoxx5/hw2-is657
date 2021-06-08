import React from "react";
import { View, StatusBar, Text } from "react-native";
import styles from "./styles";
import Row from "./Row";
import Column from "./Column";
import Box from "./Box";

export default function App() {
  return (
    <View style={(styles.container, styles.box3)}>
      <StatusBar hidden={false} />
      <View style={styles.box1}>
        <Column style={styles.box}>
          <Text style={styles.boxText}>Column</Text>
          <Box>Child</Box>
          <Box>Child</Box>
          <Box>Child</Box>
        </Column>
      </View>
      <View style={(styles.container, styles.box2)}>
        <Row>
          <Column>
            <Text style={(styles.container, styles.boxText)}>Row</Text>
            <Box>Child</Box>
          </Column>
          <Column>
            <Text></Text>
            <Text></Text>
            <Box>Child</Box>
          </Column>
          <Column>
            <Box>Child</Box>
          </Column>
        </Row>
      </View>
    </View>
  );
}
