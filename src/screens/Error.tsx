import React, { useEffect } from "react";
import { View, Text, StyleSheet, PixelRatio, Dimensions } from "react-native";

interface Props {
  error: Object;
}

const Error: React.FC<Props> = ({ error }) => {
  useEffect(() => {
    //TODO: Handling specific error message (i.e. send to observability tool)
  }, [error]);
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
      >{`:( Sorry, we are facing some issues, please let us know and we'll take actions ASAP. We appreciate your patience ;)`}</Text>
    </View>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: width * 0.1,
  },
  text: {
    fontSize: PixelRatio.getFontScale() * 16,
  },
});

export default Error;
