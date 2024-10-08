import React from "react";
import {
  ActivityIndicator,
  FlatList,
  View,
} from "react-native";
import { Amiibo } from "../types/amiibo";
import Card from "../components/Card";
import Error from "./Error";

interface Props {
  loading: boolean;
  data: Amiibo[];
  error: string | undefined;
  onEndReached: () => void;
}

const Feed: React.FC<Props> = ({ loading, data, error, onEndReached }) => {
  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

  return (
    <View>
      {error && <Error error={error} />}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card
            title={item.name}
            description={item.gameSeries}
            image={item.image}
          />
        )}
        keyExtractor={(item) => `${item.id}`}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default React.memo(Feed);
