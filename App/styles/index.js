import colors from "@assets/colors";
import fonts from "@assets/fonts";
import { StyleSheet } from "react-native";
import adjust from "./adjust";

export default StyleSheet.create({
  //login/signup/password -screens
  screenContainer: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontSize: adjust(18),
    fontFamily: fonts.bold,
    color: colors.purple,
    textAlign: "center",
    marginTop: "20%",
    marginBottom: "5%",
    marginHorizontal: "5%",
  },
  titlePassword: {
    fontSize: adjust(22),
    fontFamily: fonts.semiBold,
    color: colors.black,
    textAlign: "left",
    marginTop: "30%",
    marginLeft: "5%",
  },
  text: {
    fontSize: adjust(12),
    fontFamily: fonts.regular,
    color: colors.grey,
    textAlign: "left",
    marginTop: "3%",
    marginBottom: "5%",
    marginLeft: "5%",
  },
  inputBox: {
    fontFamily: fonts.regular,
    color: colors.grey,
    alignSelf: "center",
    width: "90%",
    height: 60,
    fontSize: adjust(16),
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 0.2,
    borderColor: colors.grey,
    borderRadius: 5,
  },
  inputLabel: {
    marginLeft: "5%",
    paddingBottom: 5,
    paddingTop: "5%",
    fontFamily: fonts.regular,
    color: colors.purple,
  },
  passwordButton: {
    backgroundColor: colors.teal,
    marginTop: "10%",
    width: "90%",
    padding: "4.5%",
    alignSelf: "center",
    borderRadius: 5,
  },
  passwordButtonText: {
    fontSize: adjust(12),
    color: colors.black,
    fontFamily: fonts.semiBold,
    textAlign: "center",
  },
  loginButton: {
    backgroundColor: colors.purple,
    marginTop: "10%",
    width: "90%",
    padding: "4.5%",
    alignSelf: "center",
    borderRadius: 5,
  },
  loginButtonText: {
    fontSize: adjust(12),
    color: colors.white,
    fontFamily: fonts.semiBold,
    textAlign: "center",
  },
  bottomText: {
    marginTop: "8%",
    marginBottom: "8%",
    fontSize: adjust(12),
    fontFamily: fonts.semiBold,
    color: colors.grey,
    textAlign: "center",
  },
  showPassword: {
    textAlign: "right",
    fontSize: adjust(12),
    fontFamily: fonts.bold,
    right: "5%",
    marginTop: 5,
    color: colors.ltPurple,
  },

  // Recommended
  titleText: {
    fontSize: adjust(18),
    fontFamily: fonts.bold,
    color: colors.dkGrey,
    textAlign: "center",
    marginBottom: "5%",
    marginLeft: "5%",
    width: "90%",
  },
  cardContainer: {
    marginTop: "5%",
    marginHorizontal: "2.5%",
    width: "45%",
  },
  cardImage: {
    resizeMode: "contain",
    // width: 100,
    // height: 100,
    alignSelf: "center",
  },
  cardTitle: {
    alignSelf: "center",
    color: "white",
    fontFamily: fonts.bold,
    fontSize: adjust(16),
  },
  cardText: {
    textAlign: "center",
    color: "white",
    fontFamily: fonts.regular,
    fontSize: adjust(12),
  },
  linTop: {
    width: 180,
    paddingVertical: "2%",
    justifyContent: "center",
    borderRadius: 20,
  },
  linBottom: { paddingVertical: "5%", borderRadius: 20 },

  //NavButtons
  navBtsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: "10%",
  },
  navActiveBtContainer: {
    resizeMode: "contain",
    borderRadius: 10,
    padding: 5,
    backgroundColor: "white",
    width: "25%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    alignSelf: "center",
  },
  navBtContainer: { padding: 5 },
  navBtImage: {
    width: 60,
    height: 60,
    alignSelf: "center",
    resizeMode: "contain",
  },

  // alignment

  center: {
    textAlign: "center",
  },

  // font

  h2: {
    fontSize: 20,
    fontWeight: "bold",
  },

  regular: {
    fontFamily: fonts.regular,
  },
  bold: {
    fontFamily: fonts.bold,
  },

  //  color palette

  purple: {
    backgroundColor: "#6464E1",
  },
  purpleText: {
    color: "#6464E1",
  },
  ltPurple: {
    backgroundColor: "#AEADFF",
  },
  teal: {
    backgroundColor: "#11E9E0",
  },
  yellow: {
    backgroundColor: "#FFD33D",
  },
  ltPink: {
    backgroundColor: "#F6E6CC",
  },
  pink: {
    backgroundColor: "#F6ABA7",
  },
  dkPink: {
    backgroundColor: "#FF6E5A",
  },

  buttonPadding: {
    alignItems: "center",
  },

  peekabondLogo: {
    resizeMode: "contain",
    width: "30%",
    alignSelf: "center",
    marginBottom: -30,
  },

  //KidCircle
  button: {
    marginTop: "10%",
    width: "90%",
    padding: "4.5%",
    alignSelf: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: adjust(12),
    color: colors.white,
    fontFamily: fonts.semiBold,
    textAlign: "center",
  },
  //Animal selector
  touchableCard: {
    fontSize: adjust(12),
    width: "80%",
    alignSelf: "center",
    height: 150,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#AEADFF",
    alignItems: "center",
    marginBottom: 10,
  },
  animalImage: {
    resizeMode: "contain",
    height: "60%",
    marginBottom: 5,
  },
});
