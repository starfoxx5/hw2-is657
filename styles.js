import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "ghostwhite",
    alignItems: "flex-start",
    justifyContent: "space-around",
    borderStyle: "dashed",
    borderColor: "blue",
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight },
    }),
  },

  box: {
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "darkslategray",
    backgroundColor: "lightgray",
  },

  box1: {
    backgroundColor: "yellow",
    height: 400,
    width: 200,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-between",
  },

  box2: {
    backgroundColor: "lightblue",
    height: 100,
    width: 400,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    // flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },

  box3: {
    backgroundColor: "lavender",
    height: 400,
    width: 430,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    // flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  boxText: {
    color: "darkslategray",
    fontWeight: "bold",
  },

  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "space-around",
    // alignSelf: "stretch",
    flexWrap: "wrap",
  },

  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "stretch",
  },
});
