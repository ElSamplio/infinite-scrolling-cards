import { useCallback } from "react";
import { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import useFetchData from "./src/hooks/useFetchData";
import Feed from "./src/screens/Feed";
import { Amiibo } from "./src/types/amiibo";
import { debounce } from "lodash";

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
    // Controlling when there are enough records on screen to call API again
    if ((LIMIT < 5 && allAmiibos.length > 0) || allAmiibos.length > 0) {
      setPage(page + 1);
    }
  };

  const debouncedHandleEndReached = useCallback(
    debounce(handleEndReached,100),
    [allAmiibos]
  );

  return (
    <View style={styles.container}>
      <Feed
        data={allAmiibos}
        loading={loading}
        error={error}
        onEndReached={debouncedHandleEndReached}
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
