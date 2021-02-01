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
