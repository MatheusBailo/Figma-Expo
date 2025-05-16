import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";

interface ItemProps {
  name: string;
  species: string;
  image: string;
  affiliation: string;
  race: string;
  gender: string;
  ki: string;
  maxKi: string;
}

export const Item = ({
  name,
  species,
  image,
  affiliation,
  race,
  gender,
  ki,
  maxKi,
}: ItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.label}>
            {race} - {gender}
          </Text>
          <Text style={styles.label}>
            Base KI: <Text style={styles.value}>{ki}</Text>
          </Text>
          <Text style={styles.label}>
            Total KI: <Text style={styles.value}>{maxKi}</Text>
          </Text>
          <Text style={styles.label}>
            Afiliação: <Text style={styles.value}>{affiliation}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#gray",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#FFA500",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    backgroundColor: "#gray", 
  },
  info: {
    width: "100%",
    padding: 12,
    alignItems: "flex-start",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 2,
  },
  value: {
    fontWeight: "normal",
    color: "#FFA500",
  },
});
