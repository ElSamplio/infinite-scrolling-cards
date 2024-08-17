import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  PixelRatio,
} from "react-native";

interface Props {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<Props> = ({ image, title, description }) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const { width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  image: {
    width: width * 0.8,
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: PixelRatio.getFontScale() * 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  description: {
    fontSize: PixelRatio.getFontScale() * 14,
    color: "#666",
  },
});

export default React.memo(Card);
