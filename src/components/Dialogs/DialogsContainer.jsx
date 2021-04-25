import Dialogs from "./Dialogs";
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from "../../Redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: () => {
      dispatch(updateNewMessageTextCreator());
    },
    sendMessage: (text) => {
      dispatch(sendMessageCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
