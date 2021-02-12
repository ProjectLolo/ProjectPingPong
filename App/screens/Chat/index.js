import { useQuery } from "@apollo/client";
import { useIsFocused } from "@react-navigation/native";
import styles from "@styles/styles";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {
  FIND_KID_BY_ID,
  GET_CONVERSATION_LIST,
} from "../../../graphql/queries";
import colors from "../../assets/colors/index";
import { windowWidth } from "../../assets/utils/dimentions";
import NavButtons from "../../components/NavButtons";
import NavHome from "../../components/NavHome";

const stylesNew = StyleSheet.create({
  chatContainer: {
    backgroundColor: colors.pink,
    height: 50,
    width: windowWidth * 0.9,
    margin: 5,
    paddingLeft: 10,
    borderRadius: 12,
    justifyContent: "center",
    alignSelf: "center",
  },
});
const getListOfUserIds = (data, activeUser) => {
  let userIds = [activeUser];
  data.forEach(({ senderId, recipientId }) => {
    if (!userIds.includes(senderId)) {
      userIds.push(senderId);
    }
    if (!userIds.includes(recipientId)) {
      userIds.push(recipientId);
    }
  });
  userIds.shift();
  return userIds;
};
const separateConversationListsByUsers = (data, activeUser) => {
  const listOfUserIds = getListOfUserIds(data, activeUser);

  const conversations = {};
  listOfUserIds.forEach((userId) => {
    conversations[userId] = {
      conversationList: data.filter(({ senderId, recipientId }) => {
        return userId === senderId || userId === recipientId;
      }),
    };
  });

  return conversations;
};
export default function Chats({ route, navigation }) {
  const isFocused = useIsFocused();
  const [conversations, setConversations] = useState("");
  const [conversationsWithRelations, setConversationsWithRelations] = useState(
    ""
  );
  const { kidData, activeKid, activeUser } = route.params;
  const [familyData, setFamilyData] = useState("");
  const { conversationData, refetch } = useQuery(GET_CONVERSATION_LIST, {
    variables: {
      kidId: activeKid,
    },
    onError(error) {
      console.log("error", error.graphQLErrors);
    },
    onCompleted(fetchedData) {
      setConversations(
        separateConversationListsByUsers(
          fetchedData.findConversationList,
          activeUser
        )
      );
    },
  });
  const { data, error, refetch: refetchKidData } = useQuery(FIND_KID_BY_ID, {
    variables: {
      kidId: activeKid,
    },
    onError(error) {
      console.log("error", error.graphQLErrors);
    },
    onCompleted(fetchedData) {
      setFamilyData(
        fetchedData.findKidById.familyMembers.map(({ relation, userId }) => {
          return { relation: relation, userId: userId._id };
        })
      );
    },
  });

  useEffect(() => {
    console.log(
      "refreshing data-----------------------------------------------------------"
    );
    refetch();
    refetchKidData();
  }, [isFocused]);
  useEffect(() => {
    const generateConversationsByFamilyMembers = async () => {
      let localConversations = { ...conversations };
      familyData.forEach(({ relation, userId }) => {
        const familyMembersInConversations = Object.keys(conversations);
        if (familyMembersInConversations.includes(userId)) {
          localConversations[userId].relation = relation;
        }
      });
      setConversationsWithRelations(localConversations);
    };
    if (familyData && conversations) {
      generateConversationsByFamilyMembers();
    }
  }, [familyData, conversations]);

  console.log("conversations", conversations);

  if (!familyData) {
    return <Text style={[styles.title, { marginTop: "5%" }]}>Loading</Text>;
  }
  return (
    <View style={{ flex: 1, justifyContent: "space-evenly" }}>
      <NavHome />
      <Text style={[styles.title, { marginTop: "5%" }]}>
        Welcome to {route.params.kidName}'s chats!
      </Text>
      <View style={{ flex: 1 }}>
        {Object.keys(conversationsWithRelations).map((relationId) => {
          return (
            <TouchableWithoutFeedback
              key={relationId}
              onPress={() =>
                navigation.navigate("Conversation", {
                  conversation:
                    conversationsWithRelations[relationId].conversationList,
                  relation: conversationsWithRelations[relationId].relation,
                  relationId: relationId,
                  kidName: route.params.kidName,
                })
              }
            >
              <View style={stylesNew.chatContainer}>
                <Text style={[styles.loginButtonText, { textAlign: "left" }]}>
                  {`Chat with ${
                    conversationsWithRelations[relationId]?.relation
                      ? conversationsWithRelations[relationId]?.relation
                      : route.params.kidName
                  }`}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
      <NavButtons
        screen="Chats"
        userId={route.params.activeUser}
        kidName={route.params.kidName}
        kidData={kidData}
      />
    </View>
  );
}
