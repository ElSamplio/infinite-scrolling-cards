import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import useFetchData from "./src/hooks/useFetchData";
import Feed from "./src/screens/Feed";

const App: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const LIMIT = 15;
  const { loading, amiiboData, error } = useFetchData(page, LIMIT);

  const handleEndReached = () => {
    setPage(page + 1);
  };

  return (
    <View style={styles.container}>
      <Feed
        data={amiiboData}
        loading={loading}
        error={error}
        onEndReached={handleEndReached}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
