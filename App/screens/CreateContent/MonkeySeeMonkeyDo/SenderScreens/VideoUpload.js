import React, {useState, useEffect} from "react";
import * as firebase from "firebase";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import Images from "../../../../assets";
import colors from "@assets/colors";
import {Video} from "expo-av";

import {useMutation, useQuery} from "@apollo/client";
import {CREATE_NEW_MONKEYPONG} from "../../../../../graphql/mutations";

import {AuthContext} from "../../../../context/Auth";
import {
  GET_LOVEBANKS,
  GET_USER_ASSOCIATED_TO_KID,
} from "../../../../../graphql/queries";
import {setUserId} from "expo-firebase-analytics";
const style = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40,
  },
  icon: {
    width: 60,
    height: 60,
  },
  image: {
    width: 240,
    height: 240,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  mainContainer: {
    width: 300,
    flexDirection: "column",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40,
  },
  icon: {
    width: 60,
    height: 60,
  },
  image: {
    width: 240,
    height: 240,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  mainContainer: {
    width: 300,
    flexDirection: "column",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default function VideoUpload({route, navigation}) {
  const {videoUri, animal, activeKid, userId, recipientId} = route.params;
  console.log("recipient Id", recipientId);
  const [loading, setLoading] = useState(false);
  const [loadingTime, setLoadingTime] = useState("");
  const [videoFirebaseUrl, setVideoFirebaseUrl] = useState(null);

  const [createNewMonkeyPong, {error}] = useMutation(CREATE_NEW_MONKEYPONG, {
    onError: (error) => {
      console.log(JSON.stringify(error, null, 2));
    },
    onCompleted(data) {
      console.log("completed", data);
      navigation.navigate("ImitationSent", {recipientId: recipientId});
    },
  });

  const {data, refetch} = useQuery(GET_USER_ASSOCIATED_TO_KID, {
    variables: {
      kidId: activeKid,
    },
    onError(error) {
      console.log(JSON.stringify(error, null, 2));
    },
    onCompleted(fetchedData) {
      console.log("works", fetchedData);
    },
  });

  function handleSend() {
    createNewMonkeyPong({
      variables: {
        animal: animal,
        kidId: activeKid,
        url: videoFirebaseUrl,
        recipientId:
          data?.findKidById?.userId === userId
            ? recipientId
            : data?.findKidById?.userId,
      },
    });
  }

  // Upload Video
  useEffect(() => {
    refetch();
    // console.log("kid user Id", data?.findKidById?.userId, userId);
    // setRecipientId(
    //   data?.findKidById?.userId === userId
    //     ? "60181ec6499d0d0004edb18f"
    //     : data?.findKidById?.userId
    // );
    uploadVideo(videoUri);
  }, [videoUri]);

  const uploadVideo = async (uri) => {
    try {
      setLoading(true);
      const response = await fetch(uri);
      const blob = await response.blob();
      const ref = firebase
        .storage()
        .ref()
        .child("videos/" + uri);
      const uploadTask = ref.put(blob);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        function (snapshot) {
          setLoading(true);
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setLoadingTime(Math.round(progress));
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              break;
          }
        },
        function (error) {
          // Handle unsuccessful uploads
          console.log("image upload errors:", error);
        },
        function () {
          // Handle successful uploads on complete
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            setVideoFirebaseUrl(downloadURL);
            setLoading(false);
          });
        }
      );
    } catch (error) {
      console.log("error from the catch block", error);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <View style={style.mainContainer}>
          <Text style={[style.h2, style.center]}>
            Your video is almost ready!
          </Text>
        </View>
        <View style={{marginBottom: "75%", marginTop: "25%"}}>
          <ActivityIndicator size="large" color={colors.purple} />
          <Text style={[style.title, {marginTop: "5%"}]}>
            {loadingTime && loadingTime !== 100 && `${loadingTime} %`}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={[style.h2, style.center]}>
          Your {route.params.type === "video" ? "recording" : "picture"} is
          ready!
        </Text>
        <Text style={style.center}>
          {route.params.type === "video"
            ? "Replay your recording here!"
            : "Checkout the picture you made!"}
        </Text>
        {route.params.type === "video" ? (
          <Video
            source={{uri: route.params.uri}}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            useNativeControls
            style={{width: 300, height: 400}}
          />
        ) : (
          <Image
            style={{width: 400, height: 300}}
            source={{
              uri: route.params.uri,
            }}
          />
        )}
      </View>

      <View>
        {/* Icons for record and upload  */}
        <View style={styles.rowContainer}>
          {/* <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="delete" color="#FF6E5A" size={60} />
              <Text>Start over</Text>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={handleSend}>
            <View style={styles.iconContainer}>
              <Image style={styles.icon} source={Images.paperPlane} />
              <Text>Save and send</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* navigation */}
        {/* <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Recommended")}
        >
          <Text style={{textAlign: "center", marginTop: 50}}>
            Press here to go to Recommended
          </Text>
        </TouchableWithoutFeedback> */}
      </View>
    </View>
  );
}
