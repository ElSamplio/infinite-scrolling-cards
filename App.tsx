import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import useFetchData from "./src/hooks/useFetchData";
import Feed from "./src/screens/Feed";
import { Amiibo } from "./src/types/amiibo";

const App: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [allAmiibos, setAllAmiibos] = useState<Amiibo[]>([]);
  const LIMIT = 10;
  const { loading, amiiboData, error } = useFetchData(page, LIMIT);

  useEffect(() => {
    const currentAll = [...allAmiibos];
    currentAll.push(...amiiboData);
    setAllAmiibos(currentAll);
  }, [amiiboData]);

  const handleEndReached = () => {
    setPage(page + 1);
  };

  return (
    <View style={styles.container}>
      <Feed
        data={allAmiibos}
        loading={loading}
        error={error}
        onEndReached={handleEndReached}
      />
    </View>
  );
};

const { height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.05,
  },
});

export default App;
