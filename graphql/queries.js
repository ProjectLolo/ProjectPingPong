import gql from "graphql-tag";

export const GET_LOVEBANKS = gql`
  query loveBanks($kidId: ID) {
    loveBanks(kidId: $kidId) {
      _id
      title
      url
      preview
      description
      type
      category
      kidId
      userId {
        _id
        firstName
      }
      likes {
        userId
      }
    }
  }
`;

export const GET_ALL_KIDS = gql`
  query findAllKids {
    findAllKids {
      _id
      name
      nickName
      birthdate
      profileImageUrl
      userId
    }
  }
`;

export const GET_COMMENTS_AND_LIKES = gql`
  query loveBankById($_id: ID, $kidId: ID) {
    loveBankById(_id: $_id, kidId: $kidId) {
      comments {
        _id
        userId
        comment
        firstName
        createdAt
      }
      likes {
        userId
      }
    }
  }
`;

export const FIND_KID_BY_CODE = gql`
  query findKidByCode($code: String!) {
    findKidByCode(code: $code) {
      _id
      name
      nickName
      birthdate
      profileImageUrl
      userId
    }
  }
`;

export const FIND_KID_BY_ID = gql`
  query findKidById($kidId: String!) {
    findKidById(kidId: $kidId) {
      _id
      name
      nickName
      birthdate
      profileImageUrl
      userId
      code
      familyMembers {
        _id
        userId {
          _id
          firstName
        }
        relation
      }
    }
  }
`;

export const FIND_USER_BY_ID = gql`
  query findUserById($id: String!) {
    findUserById(id: $id) {
      _id
      firstName
      lastName
      email
      profilePic
    }
  }
`;
export const GET_MONKEY_PONGS = gql`
  query monkeyPongs($kidId: ID!) {
    monkeyPongs(kidId: $kidId) {
      animal
    }
  }
`;

export const GET_USER_ASSOCIATED_TO_KID = gql`
  query findKidById($kidId: String!) {
    findKidById(kidId: $kidId) {
      userId
    }
  }
`;
export const GET_CONVERSATION_LIST = gql`
  query findConversationList {
    findConversationList {
      _id
      senderId
      recipientId
      createdAt
      pongId {
        url
        animal
        kidId
      }
    }
  }
`;
