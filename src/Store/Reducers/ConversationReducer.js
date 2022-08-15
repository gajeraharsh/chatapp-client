const initstate = {
  Conversations: [],
  ConversationLoding: false,
  CurrentConversation: {},
  MainConversation: [],
};

export const ConversationReducer = (state = initstate, action) => {
  switch (action.type) {
    case "SET_CONVERSATION":
      const Conversationexist = state.Conversations.find(
        (item) => item._id === action.paylod._id
      );
      if (!Conversationexist) {
        return {
          ...state,
          Conversations: [...state.Conversations, action.paylod],
          ConversationLoding: false,
        };
      }
      return state;
    case "SET_MAINCONVERSATION":
      return { ...state, MainConversation: action.paylod };
    case "SET_CURRENT_CONVERSATION":
      return { ...state, CurrentConversation: action.paylod };
    case "SET_CONVERSATION_LODING":
      return { ...state, ConversationLoding: true };
    case "CLOSE_CONVERSATION_LODING":
      return { ...state, ConversationLoding: false };
    case "UPDATE_CONVERSATION":
      const filterdata = state.Conversations.filter(
        (item) => item._id != action.paylod._id
      );
      return { ...state, Conversations: filterdata };
    default:
      return state;
  }
};
