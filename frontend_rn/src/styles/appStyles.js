import React from "react";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 150,
  },
  container2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 100,
  },
  home: {
    backgroundColor: 'white',
  },
  form: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    marginTop: 100,
    paddingHorizontal:60
  }
  

});

export default styles;