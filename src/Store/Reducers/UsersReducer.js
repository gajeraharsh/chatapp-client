const initstate = {
  Contect_Loding: false,
  Contects: [],
  ActiveUserHover: "",
  GroupsToadd: [],
  Groups: [],
  GroupsActive: false,
  currentGroup: {},
  GroupConversation: [],
  currentClickProfile: {},
};

export const UserReducer = (state = initstate, action) => {
  switch (action.type) {
    case "SET_CONTECT_LODING":
      return { ...state, Contect_Loding: true };
    case "CLOSE_CONTECT_LODING":
      return { ...state, Contect_Loding: false };
    case "SET_CONTECTS":
      return { ...state, Contects: action.paylod };

    case "SET_ACTIVE_USER_HOVER":
      return { ...state, ActiveUserHover: action.paylod };
    case "SET_GROUPSTOADD":
      return { ...state, GroupsToadd: action.paylod };
    case "SET_GROUPS":
      return { ...state, Groups: action.paylod };
    case "SET_CURRENTGROUP":
      return { ...state, currentGroup: action.paylod };
    case "REMOVE_CURRENTGROUP":
      return { ...state, currentGroup: {} };
    case "ADD_GROUP":
      return { ...state, Groups: [...state.Groups, action.paylod] };
    case "SET_GROUPCONVERSATION":
      return { ...state, GroupConversation: action.paylod };
    case "ADDMESSAGE_CURRENGROUPCONVERSATION":
      return { ...state, GroupConversation: action.paylod };
    case "SET_CURRENTCLICK_PROFILE":
      return { ...state, currentClickProfile: action.paylod };
    default:
      return state;
  }
};
